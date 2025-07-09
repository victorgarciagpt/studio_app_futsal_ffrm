// src/ai/flows/chat-assistant.ts
'use server';
/**
 * @fileOverview An AI assistant for referees to answer questions about rules, protocols and manuals.
 *
 * - chatAssistant - A function that handles the chat assistant process.
 * - ChatAssistantInput - The input type for the chatAssistant function.
 * - ChatAssistantOutput - The return type for the chatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatAssistantInputSchema = z.object({
  uid: z.string().describe('The user ID of the referee.'),
  locale: z.string().describe('The locale of the referee.'),
  message: z.string().describe('The message from the referee.'),
});
export type ChatAssistantInput = z.infer<typeof ChatAssistantInputSchema>;

const ChatAssistantOutputSchema = z.object({
  text: z.string().describe('The response text from the AI assistant.'),
  citations: z.array(z.string()).describe('Citations for the response.'),
});
export type ChatAssistantOutput = z.infer<typeof ChatAssistantOutputSchema>;

export async function chatAssistant(input: ChatAssistantInput): Promise<ChatAssistantOutput> {
  return chatAssistantFlow(input);
}

// The prompt is no longer used, we call the webhook directly.
const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatAssistantInputSchema,
    outputSchema: ChatAssistantOutputSchema,
  },
  async (input) => {
    const webhookUrl = 'https://n8n.tobolist.com/webhook-test/ae18a7ab-a533-4799-82ac-b0d7f6822284';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.message }),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      
      // We expect the webhook to return a JSON object with the response text.
      // Common keys could be 'text' or 'reply'.
      // You can configure your n8n "Respond to Webhook" node to return this format.
      const text = responseData.text || responseData.reply;

      if (!text || typeof text !== 'string') {
          console.warn("Unexpected webhook response:", responseData);
          // The n8n test webhook returns `{"message":"Workflow was started"}`.
          // We provide a more helpful response here.
          if (responseData.message === "Workflow was started") {
              return {
                  text: 'He recibido tu mensaje. El agente de n8n está procesándolo. Por favor, asegúrate de que el webhook de n8n esté configurado para devolver una respuesta síncrona.',
                  citations: [],
              }
          }
          throw new Error('Invalid response format from webhook.');
      }

      return {
        text,
        citations: [], // Webhook does not provide citations
      };
    } catch (error) {
      console.error('Error calling webhook:', error);
      return {
        text: 'Lo siento, ha ocurrido un error al contactar con el asistente. Por favor, inténtalo de nuevo más tarde.',
        citations: [],
      };
    }
  }
);

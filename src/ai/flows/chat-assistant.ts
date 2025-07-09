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

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatAssistantInputSchema,
    outputSchema: ChatAssistantOutputSchema,
  },
  async (input) => {
    const webhookUrl = 'https://n8n.tobolist.com/webhook/ae18a7ab-a533-4799-82ac-b0d7f6822284';
    console.log(`[chatAssistantFlow] Calling webhook: ${webhookUrl} with message: "${input.message}"`);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.message }),
      });

      console.log(`[chatAssistantFlow] Webhook response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[chatAssistantFlow] Webhook request failed with status ${response.status}. Response: ${errorText}`);
        throw new Error(`Webhook request failed.`);
      }

      const responseData = await response.json();
      const text = responseData.text || responseData.reply;

      if (text && typeof text === 'string') {
        return { text, citations: [] };
      }

      if (responseData.message === 'Workflow was started') {
        return {
          text: 'He recibido tu mensaje. El agente de n8n está procesándolo. Por favor, asegúrate de que el webhook de n8n esté configurado para esperar la ejecución y devolver el resultado.',
          citations: [],
        };
      }
      
      console.error("[chatAssistantFlow] Invalid response format from webhook:", responseData);
      throw new Error('Invalid response format from webhook.');

    } catch (error: any) {
      console.error('[chatAssistantFlow] An error occurred while calling the webhook:', error.message);
      // Re-throwing the error ensures the client-side catch block is triggered, showing the toast message to the user.
      throw new Error('Failed to contact the AI assistant. This might be due to network restrictions on the server.');
    }
  }
);

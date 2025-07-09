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
    const webhookUrl = 'https://n8n.tobolist.com/webhook-test/ae18a7ab-a533-4799-82ac-b0d7f6822284';
    console.log(`[chatAssistantFlow] Attempting to send POST request to: ${webhookUrl}`);

    try {
      // We use fetch but don't process the response, just send the data.
      // This is a "fire-and-forget" approach for debugging.
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.message }),
      });
      
      // The request was sent. Now we wait for n8n to process it.
      return {
        text: 'He enviado la petición al webhook. Por favor, revisa la consola de ejecuciones de n8n para ver si ha llegado.',
        citations: [],
      };

    } catch (error: any) {
      // This block will catch network errors.
      // The most common cause is the Firebase Spark plan's network restrictions.
      console.error('[chatAssistantFlow] A network error occurred while sending the request to the webhook:', error);
      return {
        text: 'Hubo un error de red al intentar contactar con el webhook. Esto puede deberse a restricciones de red en el servidor (como las del plan Spark de Firebase). Revisa los logs del servidor para más detalles.',
        citations: [],
      };
    }
  }
);

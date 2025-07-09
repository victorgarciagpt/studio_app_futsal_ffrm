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
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.message }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`[chatAssistantFlow] Webhook response not OK. Status: ${response.status}, Body: ${errorBody}`);
        throw new Error(`Webhook returned a non-OK status: ${response.status}.`);
      }
      
      const data = await response.json();
      console.log('[chatAssistantFlow] Received data from webhook:', data);

      // Assuming the webhook returns an object with a "text" property.
      // If not, we provide a fallback.
      const responseText = data.text || JSON.stringify(data);

      return {
        text: responseText,
        citations: data.citations || [],
      };

    } catch (error: any) {
      // This block will catch network errors.
      // The most common cause is the Firebase Spark plan's network restrictions.
      console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.error('[chatAssistantFlow] A CRITICAL NETWORK ERROR OCCURRED.');
      console.error('This is very likely due to Firebase Spark Plan network restrictions, which block calls to non-Google services.');
      console.error('Please upgrade your project to the Blaze plan to fix this.');
      console.error('Full error details:', error);
      console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      
      throw new Error('A network error occurred while contacting the webhook. This is likely due to server network restrictions (like the Firebase Spark plan). Please check the server logs for more details.');
    }
  }
);

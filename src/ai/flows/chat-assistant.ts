'use server';
/**
 * @fileOverview An AI assistant for referees to answer questions about rules, protocols and manuals.
 * This is a standard Next.js Server Action that communicates with an n8n webhook.
 *
 * - chatAssistant - A function that handles the chat assistant process.
 * - ChatAssistantInput - The input type for the chatAssistant function.
 * - ChatAssistantOutput - The return type for the chatAssistant function.
 */

import { z } from 'zod';

const ChatAssistantInputSchema = z.object({
  uid: z.string().describe('The user ID of the referee.'),
  locale: z.string().describe('The locale of the referee.'),
  message: z.string().describe('The message from the referee.'),
  sessionId: z.string().describe('A unique identifier for the current chat session.'),
});
export type ChatAssistantInput = z.infer<typeof ChatAssistantInputSchema>;

const ChatAssistantOutputSchema = z.object({
  text: z.string().describe('The response text from the AI assistant.'),
  citations: z.array(z.string()).describe('Citations for the response.'),
});
export type ChatAssistantOutput = z.infer<typeof ChatAssistantOutputSchema>;

export async function chatAssistant(
  input: ChatAssistantInput
): Promise<ChatAssistantOutput> {
  const webhookUrl =
    'https://n8n.tobolist.com/webhook/43aaf5f7-d4ac-42ab-8873-6fee422a2ac4';
  
  console.log(`[chatAssistant] Attempting to send POST request to: ${webhookUrl}`);
  console.log(`[chatAssistant] Payload:`, JSON.stringify(input, null, 2));


  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Send the entire input object, which now includes sessionId
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[chatAssistant] Webhook response not OK. Status: ${response.status}, Body: ${errorBody}`);
      throw new Error(`Webhook returned a non-OK status: ${response.status}.`);
    }
    
    const responseText = await response.text();
    console.log('[chatAssistant] Received text from webhook:', responseText);

    return {
      text: responseText,
      citations: [], // Citations are not expected in the new format
    };

  } catch (error: any) {
    // This block will catch network errors.
    // The most common cause is the Firebase Spark plan's network restrictions.
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error('[chatAssistant] A CRITICAL NETWORK ERROR OCCURRED.');
    console.error('This is very likely due to Firebase Spark Plan network restrictions, which block calls to non-Google services.');
    console.error('Please upgrade your project to the Blaze plan to fix this.');
    console.error('Full error details:', error);
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    
    throw new Error('A network error occurred while contacting the webhook. This is likely due to server network restrictions (like the Firebase Spark plan). Please check the server logs for more details.');
  }
}

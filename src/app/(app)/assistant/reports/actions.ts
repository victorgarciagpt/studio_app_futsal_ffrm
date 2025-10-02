// src/app/(app)/assistant/reports/actions.ts
'use server';
/**
 * @fileOverview An AI assistant for referees to answer questions about incident report writing.
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

export async function chatReports(
  input: ChatAssistantInput
): Promise<ChatAssistantOutput> {
  const webhookUrl =
    'https://n8n.tobolist.com/webhook/cb61ed8b-59f0-469b-82e2-ad01ccfe905b';
  
  console.log(`[chatReports] Attempting to send POST request to: ${webhookUrl}`);
  console.log(`[chatReports] Payload:`, JSON.stringify(input, null, 2));

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[chatReports] Webhook response not OK. Status: ${response.status}, Body: ${errorBody}`);
      throw new Error(`Webhook returned a non-OK status: ${response.status}.`);
    }
    
    const responseData = await response.json();
    console.log('[chatReports] Received JSON from webhook:', responseData);

    const outputText = responseData.output || "No se ha recibido una respuesta válida.";

    // Clean citation markers from the response text
    const cleanedText = outputText.replace(/\s*【.*?†source】/g, '');

    return {
      text: cleanedText,
      citations: [],
    };

  } catch (error: any) {
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error('[chatReports] A CRITICAL NETWORK ERROR OCCURRED.');
    console.error('This is very likely due to Firebase Spark Plan network restrictions, which block calls to non-Google services.');
    console.error('Please upgrade your project to the Blaze plan to fix this.');
    console.error('Full error details:', error);
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    
    throw new Error('A network error occurred while contacting the webhook. This is likely due to server network restrictions (like the Firebase Spark plan). Please check the server logs for more details.');
  }
}

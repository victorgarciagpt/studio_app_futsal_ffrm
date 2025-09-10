// src/app/(app)/actions.ts
"use server";

import { z } from 'zod';

const FeedbackSchema = z.object({
    rating: z.number().min(0).max(5),
    comment: z.string(),
    email: z.string().email(),
});

type Feedback = z.infer<typeof FeedbackSchema>;

export async function sendFeedback(feedback: Feedback): Promise<void> {
  console.log("Nuevo feedback recibido para enviar a n8n:", feedback);

  const webhookUrl = "https://n8n.tobolist.com/webhook/920ce857-d4d2-4ba6-a694-2ae812529d9e";

  try {
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            rating: feedback.rating,
            comment: feedback.comment,
            email: feedback.email
        })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`[sendFeedback] Webhook response not OK. Status: ${response.status}, Body: ${errorBody}`);
        throw new Error(`El webhook devolvió un estado no válido: ${response.status}.`);
    }

    const responseData = await response.json();
    console.log('[sendFeedback] Respuesta recibida desde el webhook:', responseData);

  } catch (error: any) {
    console.error('[sendFeedback] Ocurrió un error al contactar con el webhook.', error);
    // Este error se propagará al cliente y se mostrará en el toast.
    throw new Error("No se pudo enviar tu feedback. Por favor, inténtalo de nuevo más tarde.");
  }
}

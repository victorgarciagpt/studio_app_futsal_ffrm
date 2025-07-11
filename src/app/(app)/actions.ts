// src/app/(app)/actions.ts
"use server";

type Feedback = {
    rating: number;
    comment: string;
}

export async function sendFeedback(feedback: Feedback): Promise<void> {
  console.log("Nuevo feedback recibido:", feedback);

  // TODO: Implementar la lógica para guardar en Firestore
  // 1. Inicializar el cliente de Firebase Admin (si no está ya inicializado)
  // 2. Conectarse a Firestore
  // 3. Añadir un nuevo documento a la colección "feedback" con los datos
  //    - feedback.rating
  //    - feedback.comment
  //    - submittedAt: new Date()

  // Simulación de una operación de red
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Por ahora, solo simulamos que la operación fue exitosa.
  // En un caso real, si hay un error al guardar en Firestore, se lanzaría una excepción.
  // Por ejemplo:
  // if (error) {
  //   throw new Error("No se pudo guardar el feedback en la base de datos.");
  // }
  
  return Promise.resolve();
}
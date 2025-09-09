import type { Document } from '@/lib/types';

export const amonestacionesTecnicos: Document = {
  id: 'amonestaciones-tecnicos',
  title: 'Manual 4.1: Amonestaciones a Técnicos',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.1 Amonestaciones a Dirigentes/Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.1 Principios Generales</h3>
      <p>Las amonestaciones se reflejan en "Amonestaciones de Dirigentes/Técnicos". Si la infracción ocurre fuera del campo durante el descanso, se informa verbalmente sin mostrar tarjeta.</p>
      <p><strong>Aspectos a Reflejar:</strong> Puesto, nombre completo, minuto y descripción del motivo.</p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo]."</code></pre>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.2 Pautas de Redacción</h3>
      <p><strong>Infracciones Verbales:</strong> ¿Fue una protesta? ¿Dónde? ¿Hubo gestos airados? ¿Palabras exactas? (Insultos implican roja).</p>
      <p><strong>Infracciones Conductuales:</strong> ¿Abandonó el área técnica? ¿Gestos sarcásticos? ¿Obstaculizó el juego?</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.3 Ejemplos de Amonestaciones</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">El segundo entrenador aplaude sarcásticamente.</td><td class="border p-2">"Amonestación al segundo entrenador local en el minuto 63 por aplaudir de forma sarcástica una decisión mía, en actitud de protesta."</td></tr>
        <tr><td class="border p-2">El entrenador protesta airadamente.</td><td class="border p-2">"Amonestación al entrenador visitante D. XX en el minuto 84 por gesticular de forma exaltada levantando los brazos desde su banquillo, protestando una decisión."</td></tr>
        <tr><td class="border p-2">El fisio retrasa su entrada al campo.</td><td class="border p-2">"Amonestación al fisioterapeuta local en el minuto 90 por hacer caso omiso a mi solicitud para ingresar al terreno de juego, con ánimo de perder tiempo."</td></tr>
        <tr><td class="border p-2">El entrenador abandona el área técnica para protestar.</td><td class="border p-2">"Amonestación al entrenador local D. ZZ en el minuto 45 por abandonar el área técnica y protestar una decisión mía en los siguientes términos “¡Eso era penalti!”."</td></tr>
        <tr><td class="border p-2">El entrenador retiene el balón para perder tiempo.</td><td class="border p-2">"Amonestación al entrenador local D.XX en el minuto 60 por retener el balón en su posesión con ánimo de perder tiempo, cuando le tocaba efectuar la reanudación a su equipo."</td></tr>
      </tbody></table></div>
    `
};

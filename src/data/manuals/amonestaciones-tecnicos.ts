
import type { Document } from '@/lib/types';

export const amonestacionesTecnicos: Document = {
  id: 'amonestaciones-tecnicos',
  title: 'Manual 4.1: Amonestaciones a Técnicos',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.1 Amonestaciones a Dirigentes/Técnicos (Tarjetas Amarillas)</h2>
      <p class="text-muted-foreground mb-6">A continuación se detallan los principios, criterios y ejemplos para la correcta redacción de amonestaciones a dirigentes y técnicos en el acta del partido.</p>

      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Principios Generales
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Las amonestaciones a dirigentes y técnicos deben reflejarse en el apartado correspondiente del acta bajo "Amonestaciones de Dirigentes/Técnicos".</p>
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Infracciones Durante el Partido:</strong> Se muestran tarjetas amarillas en el terreno de juego.</li>
                <li><strong>Infracciones Durante el descanso y fuera del Terreno de Juego:</strong> (p. ej., en vestuarios), las sanciones se informan verbalmente, no se muestra tarjeta físicamente.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Aspectos Obligatorios a Reflejar:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Puesto del dirigente o técnico (entrenador, delegado, etc.).</li>
              <li>Nombre completo del sancionado.</li>
              <li>Minuto de la infracción.</li>
              <li>Descripción precisa del motivo.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de Estructura de Redacción:</h4>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo de la amonestación]."</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Pautas de Redacción
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Verbal</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿Fue una protesta verbal?</li>
                <li>¿Dónde ocurrió la protesta? (área técnica, banquillo, terreno de juego).</li>
                <li>¿Incluyó lenguaje inapropiado o gestos airados, provocativos o exaltados?</li>
                <li>¿Cuáles fueron las palabras exactas pronunciadas? (Nota: Insultos, amenazas o faltas de respeto califican como tarjeta roja).</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Conductual</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿El técnico abandonó el área técnica?</li>
                <li>¿Realizó gestos sarcásticos o provocativos?</li>
                <li>¿Obstaculizó el desarrollo normal del partido (por ejemplo, pérdida de tiempo)?</li>
              </ul>
            </div>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Ejemplos de Amonestaciones a Dirigentes/Técnicos
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                  <tr class="text-left font-medium text-muted-foreground bg-muted/50">
                    <th class="p-2 border">Situación</th>
                    <th class="p-2 border">Redacción en el Acta</th>
                  </tr>
                </thead>
                <tbody class="divide-y">
                  <tr class="divide-x"><td class="p-2 border align-top">El segundo entrenador aplaude de forma sarcástica una decisión arbitral.</td><td class="p-2 border align-top">"Amonestación al segundo entrenador local en el minuto 63 por aplaudir de forma sarcástica una decisión mía, en actitud de protesta."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador protesta airadamente desde el banquillo al árbitro asistente nº 2.</td><td class="p-2 border align-top">"Amonestación al entrenador visitante D. XX en el minuto 84 por gesticular de forma exaltada levantando los brazos desde su banquillo, protestando una decisión."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El fisioterapeuta retrasa su entrada al campo para atender a un jugador lesionado.</td><td class="p-2 border align-top">"Amonestación al fisioterapeuta local en el minuto 90 por hacer caso omiso a mi solicitud para ingresar al terreno de juego y valorar a un jugador, con ánimo de perder tiempo."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El delegado de campo protesta enérgicamente desde la banda.</td><td class="p-2 border align-top">"Amonestación al delegado de campo visitante D. YY en el minuto 78 por desaprobar con gestos airados una decisión mía desde la banda."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador abandona el área técnica para protestar una decisión del árbitro.</td><td class="p-2 border align-top">"Amonestación al entrenador local D. ZZ en el minuto 45 por abandonar el área técnica y protestar una decisión mía de forma airada en los siguientes términos “¡Eso era penalti!”."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">Un técnico lanza objetos al suelo en señal de disconformidad.</td><td class="p-2 border align-top">"Amonestación al entrenador visitante en el minuto 40 por arrojar al suelo una botella de agua en señal de disconformidad con una decisión arbitral."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El preparador físico abandona el área técnica sin autorización.</td><td class="p-2 border align-top">"Amonestación al preparador físico visitante en el minuto 15 por abandonar el área técnica sin autorización previa."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador interfiere verbalmente en una decisión arbitral reiteradamente desde la banda.</td><td class="p-2 border align-top">"Amonestación al entrenador visitante D. XXX en el minuto 54 por dirigirse a mí en repetidas ocasiones en señal de protesta desde su posición en el área técnica en los siguientes términos “¡Pítala!¡Pítala!”."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">EL entrenador retiene el balón con ánimo de perder tiempo cuando le tocaba ponerlo en juego a su equipo</td><td class="p-2 border align-top">“Amonestación al entrenador local D.XX en el minuto 60 por retener el balón en su posesión con ánimo de perder tiempo, cuando le tocaba efectuar la reanudación a su equipo.”</td></tr>
                </tbody>
            </table>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Nota Importante
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Detalles Obligatorios:</strong> Incluir minuto, nombre completo y descripción precisa.</li>
                <li><strong>Protestas Verbales vs. Conductuales:</strong> Identificar si la infracción es verbal (palabras exactas) o de comportamiento (gestos, acciones).</li>
                <li><strong>Redacción Objetiva:</strong> Evitar interpretaciones subjetivas o calificativos en el acta.</li>
            </ul>
          </div>
        </details>
      </div>
    `
};

    
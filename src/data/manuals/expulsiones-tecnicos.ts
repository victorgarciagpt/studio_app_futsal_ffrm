
import type { Document } from '@/lib/types';

export const expulsionesTecnicos: Document = {
  id: 'expulsiones-tecnicos',
  title: 'Manual 4.2: Expulsiones a Técnicos',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.2 Expulsiones/Tarjetas Rojas a Dirigentes y Técnicos</h2>
      
      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Principios Generales
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Las expulsiones de dirigentes y técnicos deben reflejarse en el apartado correspondiente del acta bajo "Expulsiones de Dirigentes/Técnicos".</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Infracciones Durante el Partido:</strong> Las tarjetas rojas se muestran en el terreno de juego por infracciones graves.</li>
              <li><strong>Infracciones durante el descanso y Fuera del Terreno de Juego:</strong> (por ejemplo, en el túnel de vestuarios): Las expulsiones se informan verbalmente y se reflejan en el acta.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Aspectos a Reflejar en el Acta:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Puesto del dirigente o técnico (entrenador, delegado, fisioterapeuta, etc.).</li>
              <li>Nombre completo del expulsado.</li>
              <li>Minuto en que ocurrió la infracción.</li>
              <li>Descripción precisa de la acción que motivó la expulsión.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de Estructura de Redacción:</h4>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo de la expulsión]."</code></pre>
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
                <li>¿El técnico empleó lenguaje ofensivo, insultante o humillante?</li>
                <li>¿Cuáles fueron las palabras exactas pronunciadas? (Nota: Este nivel de detalle es crucial para garantizar claridad en el acta).</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Conductual</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿Abandonó el área técnica?</li>
                <li>¿Tuvo un comportamiento violento (golpes, agresiones físicas)?</li>
                <li>¿Interfirió en el desarrollo del partido (lanzamiento de objetos, entrada al campo sin autorización)?</li>
              </ul>
            </div>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Ejemplos de Expulsiones a Dirigentes y Técnicos
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
                  <tr class="divide-x"><td class="p-2 border align-top">Un técnico lanza un balón al campo desde el banquillo, interrumpiendo el juego.</td><td class="p-2 border align-top">"En el minuto 70, expulsé al entrenador local D. XXX por el lanzamiento de un balón desde el banquillo al terreno de juego, interrumpiendo el desarrollo normal del partido."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador abandona el área técnica para protestar airadamente al árbitro asistente.</td><td class="p-2 border align-top">"En el minuto 45, expulsé al entrenador visitante D. XXX por abandonar el área técnica y protestar una decisión mía con los brazos en alto, diciendo: '¡Esto es un robo!'."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">Un fisioterapeuta insulta al árbitro asistente tras un gol del equipo rival.</td><td class="p-2 border align-top">"En el minuto 53, expulsé al fisioterapeuta visitante D. XXX por dirigirse al árbitro asistente nº 1 en los siguientes términos: '¡Eres un hijo de puta!'."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador se pelea con un jugador contrario y ambos deben ser separados por otros miembros del equipo.</td><td class="p-2 border align-top">"En el minuto 78, expulsé al entrenador local D. XXX por enzarzarse en una pelea con un jugador adversario, llegando a golpearse mutuamente con los puños."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">Tras finalizar el partido, el segundo entrenador entra al campo e insulta al árbitro.</td><td class="p-2 border align-top">"Una vez finalizado el partido y estando aún sobre el terreno de juego, el segundo entrenador visitante D. XXX se dirigió al trío arbitral con actitud amenazante, diciendo: '¡Sois unos maricones, os vais a cagar!'."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">El entrenador lanza un objeto al terreno de juego en señal de protesta.</td><td class="p-2 border align-top">"En el minuto 35, expulsé al entrenador visitante D. XXX por arrojar una botella de agua al terreno de juego en clara actitud de disconformidad con una de mis decisiones."</td></tr>
                  <tr class="divide-x"><td class="p-2 border align-top">Un entrenador es expulsado por el lanzamiento de un balón desde el banquillo que interfiere en el juego.</td><td class="p-2 border align-top">"Expulsión al entrenador D.XXX en el minuto 70 por el lanzamiento de un balón desde su banquillo y que interfirió en el juego, sin poder identificar el autor del lanzamiento y siendo él como entrenador el responsable del banquillo."</td></tr>
                </tbody>
            </table>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Casos Prácticos Detallados
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">A) Conductas Violentas</h4>
              <p><strong>El entrenador golpea a un jugador contrario durante una disputa en el banquillo:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 60, expulsé al entrenador local D. XXX por golpear con la mano abierta en el pecho al jugador nº 8 del equipo visitante durante una disputa en el banquillo."</code></pre>
              <p class="mt-2"><strong>El entrenador y un jugador rival protagonizan un enfrentamiento físico:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 78, expulsé al entrenador local D. XXX por propinar un empujón al jugador visitante nº 14 durante una disputa en el terreno de juego, provocando un enfrentamiento colectivo."</code></pre>
            </div>
             <div>
              <h4 class="font-semibold text-foreground mb-2">B) Insultos o Lenguaje Ofensivo</h4>
              <p><strong>El fisioterapeuta insulta al árbitro asistente tras un gol en contra:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 53, expulsé al fisioterapeuta visitante D. XXX por dirigirse al árbitro asistente nº 1 en los siguientes términos: '¡No vales para nada, eres un inútil!'."</code></pre>
              <p class="mt-2"><strong>El segundo entrenador amenaza al árbitro tras finalizar el partido:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"Al finalizar el partido, el segundo entrenador local D. XXX se dirigió a mí en el túnel de vestuarios diciendo: '¡Te vamos a esperar fuera, no sales vivo de aquí!'."</code></pre>
            </div>
             <div>
              <h4 class="font-semibold text-foreground mb-2">C) Conductas Antideportivas</h4>
              <p><strong>El entrenador lanza un balón desde el banquillo e interfiere en el juego:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 70, expulsé al entrenador visitante D. XXX por el lanzamiento de un balón desde el banquillo, interfiriendo con la posesión del equipo local."</code></pre>
              <p class="mt-2"><strong>Un técnico abandona el área técnica repetidamente para protestar decisiones arbitrales:</strong></p>
              <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 45, expulsé al entrenador local D. XXX por abandonar el área técnica de forma reiterada y protestar enérgicamente mis decisiones al árbitro asistente en los siguientes términos “¡Qué cojones pitas!”."</code></pre>
            </div>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Nota Importante
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Detalles Obligatorios:</strong> Indicar siempre el puesto, nombre, minuto y descripción detallada del incidente.</li>
              <li><strong>Redacción Objetiva:</strong> Describir las acciones sin emitir valoraciones subjetivas.</li>
              <li><strong>Separar Amonestaciones de Expulsiones:</strong> Las conductas graves deben ser reflejadas con claridad en este subapartado.</li>
            </ul>
          </div>
        </details>
      </div>
    `
};

    
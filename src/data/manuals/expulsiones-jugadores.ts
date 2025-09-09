
import type { Document } from '@/lib/types';

export const expulsionesJugadores: Document = {
  id: 'expulsiones-jugadores',
  title: 'Manual 3.2: Expulsiones de Jugadores',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.2 Expulsiones de Jugadores (Tarjetas Rojas)</h2>
      <p class="text-muted-foreground mb-6">A continuación se detallan los principios, criterios y ejemplos para la correcta redacción de expulsiones a jugadores en el acta del partido.</p>

      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Principios Generales
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p><strong>Definición:</strong> Las expulsiones a jugadores y suplentes ocurridas durante el partido (1ª parte, 2ª parte, prórroga y tanda de penaltis) deben reflejarse en el apartado Expulsiones de Jugadores.</p>
            <p><strong>Incidentes Especiales:</strong> Durante el descanso y si ocurre a su vez fuera del terreno de juego (como vestuarios), la expulsión se informará verbalmente al jugador y a los oficiales del equipo, sin mostrar tarjeta roja físicamente.</p>
            <h4 class="font-semibold text-foreground pt-2">Aspectos Obligatorios a Reflejar:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Número del jugador.</li>
              <li>Nombre del jugador.</li>
              <li>Minuto de la infracción.</li>
              <li>Descripción precisa de la infracción.</li>
              <li>Posibles consecuencias (asistencia médica, si continuó jugando, etc.).</li>
            </ul>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Criterios para Redacción de Expulsiones
            <svg xmlns="http://wwwhttp://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Físico</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿El balón estaba en juego o detenido?</li>
                <li>¿Fue una acción con brutalidad, uso de fuerza excesiva o agresión?</li>
                <li>¿Con qué parte del cuerpo se realizó la acción? ¿Dónde impacta?</li>
                <li>¿Requiere asistencia médica el adversario?</li>
                <li>¿Derribó al contrario o puso en peligro su integridad física?</li>
                <li>¿Evita una ocasión manifiesta de gol? ¿Se produce fuera o dentro del área?</li>
                <li>Consecuencias extra (si se produjo alguna confrontación o incidente a cause de esta infracción).</li>
              </ul>
              <h5 class="font-semibold text-foreground mt-2">Palabras clave:</h5>
              <p>A la hora de redactar una expulsión, en algunas ocasiones es clave incluir términos cómo:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Expulsión debido a la fuerza de la entrada:</strong> Uso de fuerza excesiva, brutalidad.</li>
                <li><strong>Expulsión debido a evitar un ataque prometedor del rival:</strong> Ocasión manifiesta de gol</li>
              </ul>
            </div>
            <div class="border-t pt-4">
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Verbal:</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿El jugador usó lenguaje ofensivo, insultante o humillante?</li>
                <li>¿A quién se dirigió? (árbitro, asistente, rival, público).</li>
                <li>Palabras exactas que causaron la expulsión (deben registrarse literalmente).</li>
                <li>Consecuencias extra (si se produjo alguna confrontación o incidente a cause de esta infracción).</li>
              </ul>
              <h5 class="font-semibold text-foreground mt-2">Palabras clave:</h5>
              <p>A la hora de redactar una expulsión por infracción de carácter verbal, en algunas ocasiones es clave incluir términos cómo:</p>
              <ul class="list-disc pl-5 space-y-1">
                 <li><strong>Expulsión por protesta:</strong> En señal de protesta (incluir palabras o gestos exactos), de forma airada, saliendo del área técnica, insultos, falta de respeto.</li>
                 <li><strong>Expulsión gestos:</strong> Gestos obscenos, violentos, etc (incluir gestos exactos)</li>
              </ul>
            </div>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Categorías de Expulsión
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 space-y-2">
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">A) Juego Brusco Grave</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Infracciones físicas cometidas en disputa del balón con uso de fuerza excesiva.</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Entrada con fuerza excesiva:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Expulsión al dorsal nº6 D.XXX en el minuto 89 por disputar el balón realizando una entrada con los tacos, impactando en el gemelo del adversario y poniendo en peligro su integridad física. El adversario no requirió asistencia médica.</code></pre></li>
                        <li><strong>Plancha peligrosa:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº4 D.XXX en el minuto 72 por disputar el balón con los pies en forma de plancha, impactando en la cadera del adversario. Dicho jugador requirió asistencia.</code></pre></li>
                    </ul>
                </div>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">B) Conducta Violenta</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Acciones físicas agresivas sin balón en juego o fuera de disputa.</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Puñetazo en una confrontación:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Expulsión al dorsal nº11 D.XXX en el minuto 56 por propinar un puñetazo en la cara de un adversario, sin estar el balón en juego, provocándole una herida sangrante en el labio. El adversario requirió asistencia médica.</code></pre></li>
                        <li><strong>Pisotón por detrás:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº10 D.XXX en el minuto 58 por propinar un pisotón en el gemelo del adversario con uso de fuerza excesiva, cuando el balón no estaba en disputa. El adversario requirió asistencia médica.</code></pre></li>
                        <li><strong>Encararse e amagar agredir a alguien:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº10 D.XXX en el minuto 76 por encararse conmigo (con un compañero, un rival…) haciendo el amago de agredirme con su puño derecho.</code></pre></li>
                    </ul>
                </div>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">C) Confrontaciones Colectivas</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Identificar a infractores en incidentes multitudinarios.</p>
                    <p><strong>Ejemplo:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Expulsión al dorsal nº4 D.XXX en el minuto 28 por propinar un puñetazo al jugador rival nº8 en el pómulo derecho durante una confrontación colectiva. El adversario requirió asistencia médica, pero continuó jugando.</code></pre></p>
                </div>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">D) Ocasión Manifiesta de Gol sin disputa de balón o por mano deliberada</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Infracciones físicas o tácticas que impiden una ocasión clara de gol.</p>
                    <p><strong>Ejemplo:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Mano deliberada para evitar gol:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº1 D.XXX en el minuto 25 por lanzar una espinillera que impactó en el balón, desviando su trayectoria hacia portería y evitando una ocasión manifiesta de gol.</code></pre><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº1 D.XXX en el minuto 25 por tocar el balón deliberadamente con la mano, evitando una ocasión manifiesta de gol rival.</code></pre></li>
                        <li><strong>Derribo sin balón en disputa:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Expulsión al dorsal nº1 D.YYY en el minuto 84 por empujar a un adversario dentro del área sin posibilidad de jugar el balón, evitando una ocasión manifiesta de gol.</code></pre></li>
                    </ul>
                </div>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">E) Lenguaje o Gestos Ofensivos</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Uso de palabras, gestos o lenguaje humillante, obsceno u insultante.</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Insultos al equipo arbitral:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Expulsión al dorsal nº12 D.XXX en el minuto 78 por dirigirse al árbitro en los siguientes términos: "Eres un hijo de puta".</code></pre></li>
                        <li><strong>Gestos obscenos:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº9 D.YYY en el minuto 20 por dirigirse a la grada y realizar un gesto obsceno tocándose los testículos durante la celebración de un gol.</code></pre></li>
                    </ul>
                </div>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">F) Otros motivos de expulsión</summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                    <p><strong>Definición:</strong> Existen algunos motivos no tipificados en un grupo que son motivos de expulsión.</p>
                    <p><strong>Ejemplos:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Doble amonestación:</strong> En este caso de deben escribir las dos tarjetas amarillas en su apartado correspondiente y posteriormente en expulsiones:<br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº4 D. XX en el minuto 55’ por recibir una doble amonestación ".</code></pre></li>
                        <li><strong>Nota:</strong> Las expulsiones por doble amonestación no es necesario describir dentro de la expulsión el motivo de las amonestaciones previas, ya que las amonestaciones deberán reflejarse en su apartado correspondiente.</li>
                        <li><strong>Escupir:</strong><br><pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº9 D.YYY en el minuto 20 por Escupir a un adversario, sin conseguir llegar a impactar en él.</code></pre></li>
                    </ul>
                </div>
            </details>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Casos Prácticos de Expulsiones
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                  <tr class="text-left font-medium text-muted-foreground bg-muted/50">
                    <th class="p-2 border">Situación en el Partido</th>
                    <th class="p-2 border">Redacción en el Acta</th>
                  </tr>
                </thead>
                <tbody class="divide-y">
                    <tr class="divide-x"><td class="p-2 border align-top">Un jugador realiza una entrada con fuerza excesiva sobre un adversario.</td><td class="p-2 border align-top">"Dorsal nº6 D.YYY en el minuto 89 por realizar una entrada con los tacos en forma de plancha, impactando en la pierna del adversario, poniendo en peligro su integridad física."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Un jugador propina un cabezazo a un rival después de una infracción recibida.</td><td class="p-2 border align-top">"Expulsión al dorsal nº18 D.YYY en el minuto 119 por propinar un cabezazo con uso de fuerza excesiva en el pecho al adversario nº9 tras ser objeto de una falta."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Durante una tangana, un jugador golpea con el puño a un adversario en la cara.</td><td class="p-2 border align-top">"Expulsión al dorsal nº4 D.XXX en el minuto 28 por golpear con el puño en el rostro al jugador adversario nº8 durante una confrontación colectiva."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">El portero evita un gol al lanzar un objeto (espinillera) que impacta en el balón.</td><td class="p-2 border align-top">"Expulsión al dorsal nº1 D.YYY en el minuto 25 por lanzar una espinillera que impactó en el balón, desviando su trayectoria y evitando una ocasión de gol."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Un jugador insulta al árbitro asistente después de un gol encajado.</td><td class="p-2 border align-top">"Expulsión al dorsal nº11 D.XXX en el minuto 53 por dirigirse al árbitro asistente en los siguientes términos: 'Eres un hijo de puta'."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Un jugador realiza gestos obscenos hacia la grada rival tras marcar un gol.</td><td class="p-2 border align-top">"Expulsión al dorsal nº9 D.YYY en el minuto 20 por realizar gestos obscenos hacia la grada tocándose con ambas manos los testículos."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Un jugador es expulsado por el lanzamiento de un balón desde el banquillo que interfiere en el juego.</td><td class="p-2 border align-top">"Expulsión al dorsal nº10 D.XXX en el minuto 70 por el lanzar un balón desde su banquillo e interferir en el desarrollo normal del juego."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Al finalizar el partido y estando aun en el campo varios jugadores te insultan y amenazan</td><td class="p-2 border align-top">"Al dorsal nºX D.YY una vez finalizado el partido y mientras nos encontrabamos en el terreno de juego por dirigirse al trio arbitral con actitud amenazante en los siguientes términos 'Sois unos maricones, os vais a cagar a la salida'."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Un rival dentro de su propia área de penal, sin posibilidad de jugar el balón, malogra una oportunidad manifiesta de gol al equipo adversario</td><td class="p-2 border align-top">"Dorsal nº1 D.XXX en el minuto 84’ por: empujar a un contrario sin estar el balón a distancia de ser jugado, derribándolo y evitando con ello una ocasión manifiesta de gol del equipo adversario"</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Jugador evita un gol rival mediante una mano deliberada dentro del área penal</td><td class="p-2 border align-top">"Dorsal nº1 D.XXX en el minuto 84’ por: evitar una ocasión manifiesta de gol rival mediante una mano deliberada dentro del área."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Jugador evita un gol rival mediante una mano no deliberada fuera del área penal</td><td class="p-2 border align-top">"Dorsal nº1 D.XXX en el minuto 84’ por: evitar una ocasión manifiesta de gol rival mediante una mano no deliberada fuera del área."</td></tr>
                </tbody>
            </table>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Nota Importante
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground">
            <p>Las expulsiones deben reflejar hechos objetivos, sin emitir opiniones o valoraciones personales.</p>
            <p>Es imprescindible detallar minuto, dorsal, descripción precisa y consecuencias observadas.</p>
          </div>
        </details>
      </div>
    `
};

    
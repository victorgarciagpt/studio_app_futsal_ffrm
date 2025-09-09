
import type { Document } from '@/lib/types';

export const amonestacionesJugadores: Document = {
  id: 'amonestaciones-jugadores',
  title: 'Manual 3.1: Amonestaciones a Jugadores',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.1 Amonestaciones a Jugadores (Tarjetas Amarillas)</h2>
      <p class="text-muted-foreground mb-6">A continuación se detallan los principios, criterios y ejemplos para la correcta redacción de amonestaciones a jugadores en el acta del partido.</p>

      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            3.1.1 Principios Generales
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p><strong>Definición:</strong> Las amonestaciones a jugadores y suplentes ocurridas durante el partido (1ª parte, 2ª parte, prórroga y tanda de penaltis) deben reflejarse en el apartado Amonestaciones de Jugadores.</p>
            <p><strong>Incidentes Especiales:</strong> Si la infracción ocurre durante el descanso y también fuera del terreno de juego (por ejemplo, en vestuarios), no se muestra la tarjeta físicamente. La amonestación será informada verbalmente al jugador y a los oficiales del equipo.</p>
            <h4 class="font-semibold text-foreground pt-2">Elementos Obligatorios para Redactar una Amonestación:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Número del jugador.</li>
              <li>Nombre del jugador.</li>
              <li>Minuto de la infracción.</li>
              <li>Motivo de la amonestación.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de estructura:</h4>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Dorsal nº[x] D. [Nombre] en el minuto [x] por: [motivo de la amonestación].</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            3.1.2 Criterios para Redacción del Motivo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Físico</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿Estaba el balón en juego?</li>
                <li>¿Fue en disputa del balón?</li>
                <li>¿La acción fue temeraria?</li>
                <li>¿Lo derriba? ¿Mediante qué acción lo derriba? ¿Dónde impacta y con qué parte de su cuerpo?</li>
                <li>¿Evitó un ataque prometedor?</li>
                <li>¿Se señaló penal?</li>
              </ul>
              <h5 class="font-semibold text-foreground mt-2">Palabras clave:</h5>
              <p>A la hora de redactar una amonestación, en algunas ocasiones es clave incluir términos cómo:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Amonestación debido a la fuerza de la entrada:</strong> Temeraria</li>
                <li><strong>Amonestación debido a evitar un ataque prometedor del rival:</strong> Ataque prometedor</li>
              </ul>
              <p class="mt-2"><strong>Importante:</strong> Si la acción se realizó con uso de fuerza excesiva, brutalidad, con actitud agresiva, de forma violenta, o similar, se aplicará tarjeta roja y no tarjeta amarilla. Por lo tanto, no incluir esta terminología en acciones de amonestación.</p>
            </div>
            <div class="border-t pt-4">
              <h4 class="font-semibold text-foreground mb-2">Infracciones de Carácter Verbal</h4>
              <p>Preguntas a Considerar:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>¿Se realizó en actitud de protesta?</li>
                <li>¿Fue un suplente? Si es así, ¿desde dónde lo hizo (área técnica)?</li>
                <li>¿Qué gestos realizó (gestos airados, provocativos, etc.)?</li>
                <li>Palabras exactas que causaron la amonestación.</li>
              </ul>
                <h5 class="font-semibold text-foreground mt-2">Palabras clave:</h5>
              <p>A la hora de redactar una amonestación por infracción de carácter verbal, en algunas ocasiones es clave incluir términos cómo:</p>
              <ul class="list-disc pl-5 space-y-1">
                 <li><strong>Amonestación por protesta:</strong> En señal de protesta (incluir palabras o gestos exactos)</li>
                 <li><strong>Amonestación gestos provocadores:</strong> Gestos provocadores (incluir gestos exactos)</li>
              </ul>
              <p class="mt-2"><strong>Importante:</strong> Si las protestas incluyen insultos, amenazas, faltas de respeto o insinuaciones de robo, se aplicará tarjeta roja y no tarjeta amarilla. Por lo tanto, no incluir esta terminología en acciones de amonestación.</p>
            </div>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            3.1.3 Ejemplos de Motivos de Amonestaciones
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 space-y-2">
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">A) Faltas y Derribos</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Derribar/Zancadillear a un adversario de forma temeraria en la disputa del balón.</li>
                    <li>Derribar a un adversario en la disputa del balón evitando un ataque prometedor.</li>
                    <li>Empujar a un adversario de forma temeraria, derribándolo.</li>
                    <li>Saltar con el brazo extendido y golpear en el rostro de un adversario en disputa del balón, de forma temeraria.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">B) Entradas y Salidas Indebidas</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Abandonar el terreno de juego sin autorización.</li>
                    <li>Reingresar al terreno de juego sin autorización.</li>
                    <li>Negarse a salir del terreno de juego tras una indicación del árbitro.</li>
                    <li>No cumplir de forma correcta con el procedimiento de sustitución, entrando al terreno de juego antes de que su compañero lo abandonase.</li>
                </ul>
            </details>
             <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">C) Manos</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Tocar el balón con la mano evitando un ataque prometedor.</li>
                    <li>Tocar el balón con la mano de forma voluntaria intentando marcar un gol.</li>
                    <li>Tocar el balón con la mano (o el brazo) de forma deliberada, intentando evitar un gol rival sin llegar a conseguirlo.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">D) Celebración de un Gol</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Realizar gestos provocativos o exaltados (incluir los gestos exactos, por ejemplo, llevarse el dedo índice a la boca para mandar a callar a la grada).</li>
                    <li>Quitarse la camiseta (o pasársela por encima de la cabeza) en la celebración de un gol.</li>
                    <li>Generar problemas de seguridad al salir del terreno de juego y subirse a las vallas para celebrar un gol.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">E) Simulación</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Simular haber sido objeto de infracción para engañar al árbitro.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">F) Juego Peligroso</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Disputarle el balón a un contrario con los pies en forma de “plancha”, estimando peligrosidad en la acción.</li>
                    <li>Disputarle el balón a un contrario elevando su pierna por encima de la cintura, estimando peligrosidad en la acción.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">G) Distancia Reglamentaria</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>No respetar la distancia reglamentaria en la ejecución de un tiro libre o saque.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">H) Observaciones de Orden Técnico</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Formular protestas verbales o gestuales (incluir palabras o gestos concretos).</li>
                    <li>Salir del área técnica para realizar observaciones (incluir palabras concretas).</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">I) Agarrones y sujeciones</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Sujetar a un adversario en la disputa del balón impidiendo con ello un ataque prometedor.</li>
                    <li>Sujetar a un adversario sin estar el balón a la distancia de ser jugado por ellos, evitando un ataque prometedor.</li>
                    <li>Sujetar a un adversario de manera ostensible, evitando su avance.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">J) Infracciones particulares que suponen penalti y amonestación</summary>
                 <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Evitar un gol rival mediante una mano involuntaria, provocando un tiro penal.</li>
                    <li>Zancadillear/Derribar a un adversario en la disputa de balón de forma imprudente/temeraria, evitando una ocasión manifiesta de gol rival y provocando un tiro penal.</li>
                    <li>Sujetar a un adversario de manera ostensible, evitando su avance.</li>
                </ul>
            </details>
            <details class="group border-t pt-2">
                <summary class="cursor-pointer font-semibold text-foreground">K) Otras infracciones sancionadas con amonestación</summary>
                <ul class="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>Infringir persistentemente las Reglas de Juego.</li>
                    <li>Poner el balón en juego sin mi permiso, tras haberle indicado que no lo hiciese.</li>
                    <li>Discutir con un contrario sin hacer uso de insultos ni amenazas.</li>
                    <li>Empujar a un adversario de forma temeraria cuando el balón no estaba en juego en señal de desconsideración.</li>
                    <li>Obstaculizar el saque del portero, evitando un ataque prometedor.</li>
                    <li>Obstaculizar el saque del portero, mostrando falta de respeto por el juego.</li>
                    <li>Dar órdenes e instrucciones desde el área técnica a su equipo, siendo un jugador sustituido/suplente y habiendo sido previamente advertido.</li>
                    <li>Provocar deliberadamente un enfrentamiento tocando el balón después de que haber interrumpido el juego.</li>
                    <li>Llevar joyería (pendientes, anillos, cadenas, pulseras…) una vez advertido para que se lo quitase y siendo posteriormente revisado, haciendo caso omiso a mis instrucciones.</li>
                    <li>Cambiarse de puesto con el guardameta durante el juego sin mi permiso.</li>
                    <li>Distraer de forma verbal a un adversario durante el juego o en su reanudación.</li>
                    <li>Efectuar marcas no autorizadas en el terreno de juego.</li>
                    <li>Emplear un truco deliberado mientras el balón está en juego para pasar el balón a su guardameta con la cabeza, el pecho, la rodilla…</li>
                    <li>Hacer caso omiso a una indicación mía consistente en ________ (indicar cuál). Por ejemplo: Negarse a salir del terreno de juego tras haber sido atendido en el mismo.</li>
                </ul>
            </details>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            3.1.4 Casos Prácticos de Amonestaciones
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
                    <tr class="divide-x"><td class="p-2 border align-top">Derribar a un adversario de forma temeraria</td><td class="p-2 border align-top">"Dorsal nº15 D.XXX en el minuto 21' por derribar a un adversario en la disputa del balón mediante una zancadilla, de forma temeraria."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Jugador protesta una decisión del árbitro</td><td class="p-2 border align-top">"Dorsal nº13 D.YYY en el minuto 77' por desaprobar con palabras una decisión mía en los siguientes términos: 'Has fallado y lo sabes, te has equivocado'."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Jugador se quita la camiseta en la celebración de un gol</td><td class="p-2 border align-top">"Dorsal nº16 D.XXX en el minuto 98' por despojarse de su camiseta en la celebración de un gol."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Retrasar la reanudación del juego</td><td class="p-2 border align-top">"Dorsal nº4 D.YYY en el minuto 50' por alejar el balón del lugar de una reanudación, con ánimo de perder tiempo."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Simular una infracción</td><td class="p-2 border align-top">"Dorsal nº3 D.YYY en el minuto 16' por simular haber sido objeto de una falta con el fin de engañarme."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Empujar a un adversario de forma temeraria</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por empujar a un adversario en la disputa del balón, de forma temeraria, derribándolo."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Evita de manera imprudente o temeraria una ocasión manifiesta de gol en una acción en la que intenta disputar el balón y provoca un penalti</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por derribar a un adversario en la disputa de balón, evitando una ocasión manifiesta de gol rival y provocando un tiro penal."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Evita una ocasión manifiesta de gol en una acción de mano NO DELIBERADA y provoca un penalti</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por tocar del balón con la mano de forma no deliberada, evitando una ocasión manifiesta de gol rival y provocando un tiro penal."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Infracción que evita un ataque prometedor rival (fuera del área)</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por derribar mediante una zancadilla a un adversario en la disputa del balón de forma imprudente, evitando un ataque prometedor rival."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Cometer una conducta antideportiva</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por evitar un ataque prometedor rival cortando el balón con la mano."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Dos jugadores discuten entre ellos</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por discutir con un contrario sin llegar al insulto ni la amenaza."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Ir hacía el público en la celebración de un gol y que esto pueda generar problemas de seguridad</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por dirigirse a la grada en la celebración de un gol y abrazarse al público, pudiendo provocar con ello problemas de seguridad."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Infracción a la regla III de las Reglas de Juego</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por entrar al terreno de juego sin mi permiso, estando anteriormente fuera para una asistencia médica."</td></tr>
                    <tr class="divide-x"><td class="p-2 border align-top">Infracción a la regla IV de las Reglas de Juego</td><td class="p-2 border align-top">"Dorsal nº4 D.XXX en el minuto 10' por portar en el cuello una cadena de oro habiéndole comunicado ya anteriormente que se la quitase, haciendo caso omiso."</td></tr>
                </tbody>
            </table>
            <p class="text-sm text-muted-foreground mt-2"><strong>Anotación:</strong> Es imprescindible reflejar los problemas de seguridad, ya que la amonestación realmente es por poner en peligro a él mismo y al público, no por la celebración y subirse a la valla.</p>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Nota Importante
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground">
            <p>Asegúrate de ser preciso con los datos (minuto, dorsal y motivo) al redactar el acta.</p>
            <p>Evita opiniones subjetivas; limita la redacción a los hechos observados.</p>
          </div>
        </details>
      </div>
    `
};

    
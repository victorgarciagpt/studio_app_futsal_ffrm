import type { Document } from '@/lib/types';

export const otrasIncidenciasJugadores: Document = {
  id: 'otras-incidencias-jugadores',
  title: 'Manual 3.3: Otras Incidencias de Jugadores',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.3 Otras Incidencias de Jugadores</h2>
      <p class="text-muted-foreground mb-6">En este apartado se reflejan incidentes relevantes relacionados con jugadores que no encajan en los apartados de amonestaciones o expulsiones.</p>

      <div data-orientation="vertical" class="w-full space-y-4">
        
        <div class="border rounded-lg">
          <div data-orientation="vertical" data-state="closed" class="border-b">
              <h3 class="flex flex-1 items-center justify-between py-4 px-4 font-medium text-lg">
                  3.3.1 Principios Generales
              </h3>
          </div>
          <div class="p-6 pt-2">
            <p>En este apartado se reflejan incidentes relevantes relacionados con jugadores que no encajan en los apartados de amonestaciones o expulsiones. Es importante incluir los hechos observados de forma objetiva y con la máxima precisión posible.</p>
            <p class="mt-2">Si un jugador tras ser expulsado realiza alguna acción relevante que deba ser reflejada en el acta, se deberá incluir en este apartado haciendo mención a que ha ocurrido justamente tras ser expulsado. Dicho apartado recoge además sucesos como: similitud de colores de equipaciones, lesiones de jugadores, exclusión de jugadores y su reemplazo, cambios de dorsales entre jugadores sin aviso al árbitro, falta de licencia federativa de jugadores, acciones relevantes que cometen los jugadores antes del partido sobre el campo o fuera de él o una vez finalizado el partido fuera del terreno de juego.</p>
            <h4 class="font-semibold mt-4 mb-2">Aspectos comunes a reflejar:</h4>
            <ul class="list-disc pl-6 space-y-1 text-sm">
              <li>Número y nombre del jugador.</li>
              <li>Momento en que ocurre (antes, durante o después del partido).</li>
              <li>Descripción detallada del suceso.</li>
              <li>Consecuencias (lesiones, sustituciones, etc.).</li>
            </ul>
          </div>
        </div>

        <div class="border rounded-lg">
          <div data-orientation="vertical" data-state="closed" class="border-b">
              <h3 class="flex flex-1 items-center justify-between py-4 px-4 font-medium text-lg">
                  3.3.2. Tipos de Incidencias
              </h3>
          </div>
          <div class="p-6 pt-2">
            <div data-orientation="vertical" class="w-full">
              
              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    A) Jugador que no aparece en la aplicación web
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Si un jugador no aparece en la plataforma, se debe crear bajo responsabilidad del delegado.</li>
                      <li>Solicitar DNI del jugador para confirmar su identidad.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"El delegado del equipo visitante, D. XXX, me comunica que el jugador con dorsal nº 6, D. YYY, con DNI 12345678X, no aparece en la aplicación. Declara que dispone de licencia federativa validada, asumiendo su responsabilidad."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    B) Reemplazo de un Jugador antes del Partido
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Motivo del reemplazo (lesión, desmayo, etc.).</li>
                      <li>Jugador titular y sustituto.</li>
                      <li>Aclarar que no se contabiliza como sustitución.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Antes del comienzo del partido, el delegado del equipo local, D. XXX, me comunica que el jugador con dorsal nº 10, D. YYY, sufrió una lesión durante el calentamiento, siendo reemplazado por el dorsal nº 14, D. ZZZ. El jugador lesionado queda registrado como suplente."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    C) Lesiones de Jugadores Durante el Partido
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Quién te comunica la lesión.</li>
                      <li>Parte del cuerpo donde ocurre la lesión.</li>
                      <li>Reflejar que fue durante el transcurso del partido.</li>
                      <li>Indicar si hay parte médico y adjuntarlo en caso afirmativo.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Al finalizar el partido, el delegado del C.D. Ejemplo, D. XXX, me comunicó que el jugador con dorsal nº 7, D. YYY, sufrió una lesión en el tobillo izquierdo durante el encuentro. No se adjunta parte médico."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    D) Incidentes tras la Expulsión de un Jugador
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Indicar que el jugador fue previamente expulsado.</li>
                      <li>Descripción detallada de la infracción adicional.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"En el minuto 70, y una vez expulsado el jugador con dorsal nº 8, D. XXX, se dirigió a mí en los siguientes términos: '¡Eres un ladrón, nos estás robando el partido!'."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    E) Incidentes tras la Finalización del Partido estando fuera del terreno de juego
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p>Si ocurriese al finalizar el partido y sobre el terreno de juego se podría sancionar con amonestación o expulsión, en este caso al haber finalizado y salir del terreno de juego simplemente se puede reflejar los hechos, sin tomar medidas disciplinarias.</p>
                    <p class="font-semibold text-foreground mt-4 mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Lugar del suceso (vestuarios, túnel, etc.).</li>
                      <li>Descripción detallada.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Una vez finalizado el partido y en el túnel de vestuarios, el jugador nº 4 del C.D. Ejemplo, D. XXX, se dirigió al equipo arbitral en los siguientes términos: '¡No vais a salir vivos de aquí, cabrones!'."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    F) Peleas o Conflictos Multitudinarios
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Cuándo y dónde ocurre el conflicto.</li>
                      <li>Número aproximado de participantes.</li>
                      <li>Cómo se resolvió el conflicto (policía, delegados, etc.).</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Una vez finalizado el encuentro, estando aún sobre el terreno de juego y tras la acción del jugador con dorsal Nº X del C.D. Ejemplo Local, descrita en el apartado de expulsiones, un grupo de tres jugadores del C.D. Ejemplo Visitante que no pude identificar le propinaron varias patadas y puñetazos al jugador antes mencionado, momento en el que cuatro de sus compañeros del C.D. Ejemplo Local, a los que tampoco fui capaz de identificar, empezaron a participar en una pelea multitudinaria propinándose entre ellos varias patadas, empujones y puñetazos. Tras estos hechos saltaron al terreno de juego los oficiales de ambos equipos y los jugadores suplentes para evitar que los incidentes fueran a más. En ese momento fui acompañado por el Delegado local al vestuario arbitral, sin producirse más incidentes."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    G) Revisión de Fichas Solicitada por el Delegado
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Quién solicita la revisión.</li>
                      <li>Jugador afectado y resultado.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"En el descanso, el delegado del equipo local solicitó la revisión de la ficha del jugador nº 12 visitante. Tras verificar su DNI, confirmo que la identidad corresponde con la licencia presentada."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    H) Mensajes Exhibidos por Jugadores
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Momento (celebración de gol, antes del partido).</li>
                      <li>Contenido del mensaje y medio utilizado.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"En el minuto 65, tras la consecución de un gol, el jugador nº 10 mostró una camiseta con el mensaje: 'Ánimo Álvaro'."</code></pre>
                  </div>
                </details>
              </div>
              
              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    I) Exclusión de Jugadores Antes del Partido
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p>Si antes del inicio del partido el árbitro decide que un jugador no debe comenzarlo debido a una infracción cometida previamente, deberá excluir a dicho jugador. Si la exclusión se realiza de un jugador titular, este podrá ser reemplazado por uno de los suplentes designados sin que esto contabilice como sustitución. El puesto en el banquillo del jugador suplente no puede ser reemplazado. En cambio, si la exclusión es de un jugador suplente, directamente será excluido sin que pueda ser reemplazado por un jugador no convocado previamente.</p>
                    <p class="font-semibold text-foreground mt-4 mb-2">Criterios:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Momento de la exclusión (antes del inicio del partido).</li>
                      <li>Motivo de la exclusión.</li>
                      <li>Si se reemplaza o no al jugador.</li>
                    </ul>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Antes del inicio del partido, excluí al jugador nº 5 del equipo local, D. XXX, por insultar a un adversario durante el calentamiento. Su puesto como titular fue reemplazado por el jugador nº 15, D. YYY."</code></pre>
                  </div>
                </details>
              </div>

              <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    J) Sustituciones adicionales
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <h4 class="font-semibold text-foreground mb-2">A. Sustitución adicional por prórroga</h4>
                    <p>Cuando el reglamento de la competición autorice el empleo durante la prórroga de un suplente más, los dos equipos contarán con una oportunidad de sustitución adicional. Por lo que tendrán una sustitución y una ventana/oportunidad extra.</p>
                    <p class="font-semibold text-foreground mt-2 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>“De acuerdo con las normas del reglamento de competición y durante la disputa de una prórroga, el equipo local realiza la siguiente sustitución adicional: Entra el jugador dorsal nºX y sale el jugador nºY en el minuto Z’”</code></pre>
                    <h4 class="font-semibold text-foreground mt-4 mb-2">B. Sustitución adicional por conmoción cerebral</h4>
                    <p>Las competiciones tienen la opción de permitir que los equipos hagan una sustitución adicional (y una oportunidad/ventana de sustitución adicional, si corresponde) si uno de los jugadores sufre una conmoción o se sospecha que la ha sufrido. Cuando se haga uso de una sustitución por conmoción cerebral, el equipo contrario dispondrá automáticamente de un sustituto adicional y recibirá una oportunidad de sustitución adicional. Esta oportunidad adicional solamente se podrá utilizar para una sustitución adicional, no para sustituciones normales.</p>
                    <p class="font-semibold text-foreground mt-2 mb-2">Ejemplo de redacción:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>“Debido a una conmoción cerebral (o sospecha de esta) el equipo local realiza la siguiente sustitución adicional: Entra el dorsal nºX y sale el dorsal nºY en el minuto Z’.\n\nComo resultado de la sustitución adicional por conmoción cerebral concedida al equipo local, el equipo visitante realiza la siguiente sustitución adicional por su parte: Entra el dorsal nºX y sale el dorsal nºY en el minuto Z’.”</code></pre>
                  </div>
                </details>
              </div>

               <div class="border-b">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary hover:underline">
                    K) Participación jugadores Regla Pasarela
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                  </summary>
                  <div class="pb-4 text-sm text-muted-foreground">
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo en el que hayan participado todos los jugadores:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"Todos los jugadores de ambos equipos cumplieron la normativa de las reglas pasarela, disputando un mínimo de un periodo completo en los tres primeros periodos de cada parte del encuentro."</code></pre>
                    <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo en el que NO hayan participado todos los jugadores:</p>
                    <pre class="bg-muted/50 p-4 rounded-md whitespace-pre-wrap font-code"><code>"El jugador con Dorsal Nº 9 del equipo visitante XX, D. ……………, no participó un periodo completo en la 2ª Parte del encuentro."</code></pre>
                  </div>
                </details>
              </div>

            </div>
          </div>
        </div>

        <div class="border rounded-lg">
          <div data-orientation="vertical" data-state="closed" class="border-b">
              <h3 class="flex flex-1 items-center justify-between py-4 px-4 font-medium text-lg">
                  3.3.3 Casos Prácticos de Otras Incidencias
              </h3>
          </div>
          <div class="p-6 pt-2">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left font-medium text-muted-foreground">
                    <th class="p-2">Situación</th>
                    <th class="p-2">Redacción en el Acta</th>
                  </tr>
                </thead>
                <tbody class="divide-y">
                  <tr class="divide-x"><td class="p-2 align-top">Un jugador no aparece en la aplicación web.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"El delegado visitante me comunica que el jugador nº 6, D. YYY, no aparece en la aplicación, disponiendo de licencia federativa válida y asumiendo su responsabilidad."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Lesión de un jugador durante el calentamiento.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"Antes del inicio del partido, el jugador nº 7 del equipo local sufrió una lesión durante el calentamiento, siendo reemplazado como titular por el dorsal nº 14."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Pelea entre jugadores antes del partido.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"Antes del inicio del partido, el jugador nº 6 local y el nº 14 visitante se agredieron mutuamente con golpes en el rostro. Ambos fueron excluidos. El dorsal n16 local fue reemplazado por el dorsal nº22 local y el dorsal nº14 vistante por el dorsal nº25."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Un jugador expulsado realiza insultos y amenazas tras ser expulsado.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"En el minuto 75, una vez expulsado, el jugador nº 4 D. XXX se dirigió al equipo arbitral en los siguientes términos: '¡Os vais a arrepentir, cabrones!'."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Coincidencia de equipaciones entre equipos. Finalmente debe cambiar su equipación el equipo local. No retraso en el inicio.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"Antes del partido, mientras revisamos las equipaciones con los delegados, observamos que ambas equipaciones eran similares y podían llegar a una confusión. Finalmente, debido a que el equipo visitante no disponía de otra equipación, el equipo local accedió a jugar con su segunda equipación, sin que este incidente suponiera retraso en el inicio del partido."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Coincidencia de equipaciones entre equipos. Finalmente equipo visitante debe ir a por otra equipación y el partido empieza tarde.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"Antes del inicio del partido y mientras revisábamos las equipaciones con ambos delegados de equipo, nos percatamos que ambas camisetas tienen colores tan parecidos que pueden llegar a confusión. Debido a que el equipo local alegó que no tenía otra equipación disponible, el equipo visitante tuvo que ir a sus instalaciones en búsqueda de otra equipación. Finalmente, el equipo visitante jugó con su segunda equipación. Por dicho incidente, el partido comenzó con 5 minutos de retraso."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Un jugador muestra un mensaje en la camiseta tras marcar un gol.</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>"En el minuto 65, el jugador nº 9 del equipo local mostró una camiseta con el lema: 'No a la violencia' tras marcar un gol."</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Sustitución adicional en prórroga</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>“De acuerdo con las normas del reglamento de competición y durante la disputa de una prórroga, el equipo local realiza la siguiente sustitución adicional: Entra el jugador dorsal nºX y sale el jugador nºY en el minuto Z’”</code></pre></td></tr>
                  <tr class="divide-x"><td class="p-2 align-top">Sustitución adicional por conmoción cerebral</td><td class="p-2 align-top"><pre class="whitespace-pre-wrap font-code bg-muted/50 p-2 rounded-md"><code>“Debido a una conmoción cerebral (o sospecha de esta) el equipo local realiza la siguiente sustitución adicional: Entra el dorsal nºX y sale el dorsal nºY en el minuto Z’.\n\nComo resultado de la sustitución adicional por conmoción cerebral concedida al equipo local, el equipo visitante realiza la siguiente sustitución adicional por su parte: Entra el dorsal nºX y sale el dorsal nºY en el minuto Z’.”</code></pre></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="border rounded-lg">
          <div data-orientation="vertical" data-state="closed" class="border-b">
              <h3 class="flex flex-1 items-center justify-between py-4 px-4 font-medium text-lg">
                  3.3.4. Nota Importante
              </h3>
          </div>
          <div class="p-6 pt-2">
            <ul class="list-disc pl-6 space-y-1 text-sm">
                <li>Reflejar únicamente hechos objetivos, evitando valoraciones personales.</li>
                <li>Especificar el momento y lugar de los sucesos.</li>
                <li>Identificar a todos los involucrados con claridad.</li>
            </ul>
          </div>
        </div>

      </div>
    `
};

    

    
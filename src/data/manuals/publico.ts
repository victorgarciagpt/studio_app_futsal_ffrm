
import type { Document } from '@/lib/types';

export const publico: Document = {
  id: 'publico',
  title: 'Manual 5: Público',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">5. Público</h2>
      <div class="space-y-4">

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Introducción
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>El apartado Público recoge todos los incidentes que involucren a los espectadores durante el desarrollo del encuentro, antes, durante o después del mismo. Estos incidentes pueden incluir:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Lanzamiento de objetos hacia el terreno de juego, jugadores, árbitros o hacia otros sectores del público.</li>
              <li>Insultos, amenazas o cánticos ofensivos dirigidos a jugadores, árbitros, técnicos o entre sectores del público.</li>
              <li>Banderas, lemas o pancartas no permitidas, como aquellas con mensajes racistas, xenófobos, homófobos u ofensivos.</li>
              <li>Invasiones al terreno de juego por parte del público.</li>
              <li>Incidentes de salud graves, como desmayos, ataques cardíacos u otras emergencias médicas que requieran asistencia inmediata.</li>
              <li>Cualquier otro incidente que involucre al público y tenga un impacto en el desarrollo del partido, debiendo o no detener el juego.</li>
            </ul>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Principios Generales para la Redacción
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Identificación del Sector:</strong> Siempre que sea posible, identificar el sector del público involucrado y, si corresponde, al equipo al que pertenecen los causantes (por su indumentaria, ubicación, cánticos, etc.).</li>
              <li><strong>Describir con Precisión:</strong>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Qué ocurrió.</li>
                  <li>Dónde ocurrió (zona del estadio).</li>
                  <li>Cuántas personas intervinieron.</li>
                  <li>Cuándo ocurrió (minuto del partido, antes, durante o después del juego).</li>
                  <li>Consecuencias directas y acciones/decisiones tomadas (detención del partido, activación de protocolo, aviso al delegado de campo, intervención de seguridad, etc.).</li>
                </ul>
              </li>
              <li><strong>Evitar Valoraciones Subjetivas:</strong> Limitarse a describir los hechos observados sin emitir juicios de valor.</li>
              <li><strong>Detención del Partido:</strong> Si el incidente requiere detener el juego, indicar el motivo, la duración de la interrupción y las medidas adoptadas para reanudar el partido.</li>
              <li><strong>Contemplar si supuso la suspensión del partido.</strong> Si el incidente finalmente provoca la suspensión del partido, deberá reflejarse en el apartado ‘Otras incidencias’ haciendo referencia a los acontecimientos redactados en este apartado de ‘Público’. Para la redacción de la suspensión se hará uso del documento ‘MANUAL 7 Otras Incidencias’.</li>
            </ul>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Protocolo de Lanzamiento de Objetos
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <p>El protocolo de lanzamiento de objetos establece las medidas que el equipo arbitral debe adoptar frente a incidentes de esta naturaleza. Dependiendo de la gravedad del incidente, el árbitro puede activar una de las tres medidas establecidas en el protocolo:</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Medida 1:</strong> Detención temporal del partido.</li>
              <li><strong>Medida 2:</strong> Suspensión momentánea del partido.</li>
              <li><strong>Medida 3:</strong> Suspensión definitiva del partido.</li>
            </ol>
            <p>En función de la gravedad del incidente, como el tipo de objeto lanzado, sus consecuencias, si ha impactado en alguien y qué ha provocado, el árbitro podrá saltarse alguna de las medidas y proceder directamente a otra posterior. Es decir, podría activarse directamente la medida 2 o 3 según corresponda.</p>
            
            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                Medida 1: Detención del Partido
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>El árbitro detendrá momentáneamente el partido y comunicará al delegado de campo la existencia de un lanzamiento de objetos. Este delegado, mediante megafonía o de forma personal, advertirá a los responsables para que cesen dicha conducta.</p>
                <p class="font-semibold text-foreground">Ejemplo de Redacción:</p>
                <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 34 del partido, tras un gol del equipo local, identifiqué que desde la grada sur, ocupada por aficionados visitantes según su indumentaria y cánticos, se lanzaron al terreno de juego 2 botellas de plástico llenas (500 ml), una piedra de 5 cm de diámetro y un mechero. Ninguno impactó en jugadores ni oficiales. Detuve el partido y comuniqué al delegado de campo que advirtiera por megafonía para que cesara dicha conducta. Tras 6 minutos de interrupción, y al cesar la actitud, se reanudó el partido."</code></pre>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                Medida 2: Suspensión Temporal del Partido
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Si el lanzamiento de objetos persiste tras la advertencia inicial, el árbitro suspenderá temporalmente el partido, invitando a los equipos y cuerpo arbitral a retirarse a los vestuarios.</p>
                <p class="font-semibold text-foreground">Ejemplo de Redacción:</p>
                <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 50 del partido, y tras haber activado previamente la medida 1 del protocolo de lanzamientos de objetos, se repitió el lanzamiento de objetos desde la grada sur, identificada como afición visitante. Esta vez se lanzaron una botella de vidrio (750 ml) y una piedra de 10 cm de diámetro. Ninguno impactó en jugadores ni oficiales. Suspendí temporalmente el encuentro y trasladé a los equipos a vestuarios. Tras coordinarme con el delegado de campo, el coordinador de seguridad y la fuerza pública, quienes garantizaron la seguridad de los participantes, decidí reanudar el partido tras 12 minutos de interrupción. No se produjeron más incidentes."</code></pre>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                Medida 3: Suspensión Definitiva del Partido
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Si la conducta persiste o se producen incidentes de extrema gravedad, como el lanzamiento de objetos peligrosos o lesiones a jugadores/oficiales, se suspenderá definitivamente el partido.</p>
                <p class="font-semibold text-foreground">Ejemplo de Redacción:</p>
                <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Apartado "Público": "En el minuto 76 del partido, tras un gol del equipo visitante, desde la grada norte ocupada por aficionados locales se lanzó una moneda de 50 céntimos que impactó en el árbitro asistente n°1, provocándole una herida sangrante. Activé inmediatamente el protocolo, suspendiendo el partido y trasladándonos a los vestuarios. En el túnel, el árbitro asistente n°1 fue atendido por el médico del equipo local, quien adjunta parte médico. Tras reunirnos con el coordinador de seguridad y la fuerza pública, estos informaron que no podían garantizar la seguridad necesaria para continuar el encuentro. Decidí suspender definitivamente el partido."

Apartado "Otras Incidencias": "Debido a los incidentes reflejados en el apartado Público, suspendí definitivamente el encuentro. El equipo local defendía la portería izquierda desde vestuarios, mientras el visitante defendía la derecha. En ese momento, el equipo local se disponía a sacar de portería. El marcador reflejaba: Equipo Local (1) – Equipo Visitante (2)."</code></pre>
              </div>
            </details>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            En el Caso de Invasión de Campo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Cuando ocurre una invasión de campo, es fundamental detallar el incidente con la mayor precisión posible. Se deben incluir los siguientes puntos clave: momento, cantidad de aficionados, identificación, comportamiento, consecuencias, acciones tomadas, desenlace y estado del partido.</p>
            <p class="font-semibold text-foreground mt-4 mb-2">Ejemplos de Redacción:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Invasión Pacífica:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 72 de partido, y tras la consecución de un gol por parte del equipo local, aproximadamente 20 espectadores identificados como aficionados locales debido a su indumentaria y gritos de ánimo a su equipo ingresaron al terreno de juego para abrazar a los jugadores. No se produjeron daños ni enfrentamientos, y tras ser advertidos por el delegado de campo, abandonaron el terreno de juego por sus propios medios. Este incidente provocó la detención del partido durante 3 minutos."</code></pre></li>
              <li><strong>Invasión con Actitud Agresiva:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 85, mientras el balón se encontraba en posesión del equipo visitante en su zona defensiva, un grupo de unos 15 espectadores saltó al terreno de juego desde la grada sur, identificada como sector de aficionados locales por su ubicación e indumentaria. Los implicados mostraron una actitud agresiva, dirigiéndose hacia el banquillo visitante con insultos y gritos intimidatorios, pero fueron interceptados por empleados del club y la fuerza pública antes de llegar al banquillo. Tras 10 minutos de interrupción y la intervención del delegado de campo y seguridad privada, el incidente fue controlado y el partido se reanudó sin más incidentes."</code></pre></li>
              <li><strong>Invasión Masiva con Suspensión:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Apartado "Público": "En el minuto 78 del partido, y tras una decisión arbitral que sancionaba un penalti en contra del equipo local, aproximadamente 50 espectadores ingresaron al terreno de juego desde la grada este, identificados como aficionados locales por sus cánticos y camisetas. Los implicados mostraron una actitud violenta, dirigiéndose hacia el árbitro asistente n°2, quien logró retirarse con el equipo arbitral al túnel de vestuarios sin sufrir daños. Tras coordinarme con el delegado de campo, el coordinador de seguridad y la fuerza pública, se determinó que no era posible garantizar la seguridad para continuar el encuentro, procediendo a la suspensión definitiva."

Apartado "Otras Incidencias": "Debido a los incidentes reflejados anteriormente, me vi en la obligación de suspender el partido. El equipo local defendía la portería izquierda desde la salida de vestuarios, mientras el visitante defendía la derecha. En el momento de la suspensión, se iba a reanudar el juego con un lanzamiento de penal a favor del equipo visitante. El resultado en ese momento era de Equipo Local (0) – Equipo Visitante (1)."</code></pre></li>
            </ul>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Protocolo de Actuación sobre la Violencia Verbal
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <p>La violencia verbal en el fútbol, manifestada a través de insultos, amenazas y comentarios racistas, xenófobos, sexistas o intolerantes, es una problemática prioritaria para erradicar. El Comité Técnico de Árbitros de la RFEF ha establecido un protocolo detallado para abordar este tipo de incidentes, con el objetivo de garantizar la integridad de todos los participantes y espectadores.</p>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Definición de Violencia Verbal<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Se considera violencia verbal:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Insultos dirigidos a jugadores, entrenadores, árbitros u otras personas.</li>
                    <li>Amenazas graves.</li>
                    <li>Manifestaciones racistas, xenófobas, sexistas o de cualquier índole intolerante proferidas de forma continuada.</li>
                </ul>
                <p>En caso de incidentes racistas, se activa una medida adicional obligatoria:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Gesto Universal:</strong> El árbitro deberá cruzar los antebrazos frente al pecho formando una "X", indicando que el incidente tiene una naturaleza racista y el protocolo se activa específicamente por ello.</li>
                </ul>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Aspectos a Reflejar en el Acta<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Cuando se produce un incidente de violencia verbal, el árbitro deberá incluir los siguientes detalles en el acta:</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Momento del incidente: Minuto exacto y si ocurrió tras un gol, durante una pausa, etc.</li>
                    <li>Descripción literal de los insultos/gritos: Incluir palabras o frases exactas proferidas.</li>
                    <li>Identificación del sector involucrado: Determinar a qué equipo pertenecen los responsables y cómo fueron identificados (indumentaria, cánticos, ubicación en la grada, etc.).</li>
                    <li>Tipo de violencia verbal: Racista, xenófoba, sexista, intolerante, insultos generales, etc.</li>
                    <li>Medidas tomadas: Detallar si se activó el protocolo, incluyendo el gesto universal en casos de racismo, si se detuvo el partido, duración de la detención, advertencias realizadas y medios empleados (megafonía, delegado de campo, etc.).</li>
                    <li>Resolución del incidente: Si se reanudó el partido o si fue suspendido temporal o definitivamente.</li>
                    <li>Estado del partido al momento del incidente: Posesión del balón, posición en el terreno, tiempo restante, resultado, etc.</li>
                </ul>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Medidas de Actuación<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-4">
                <div>
                  <h4 class="font-semibold text-foreground">Medida 1: Detención del Partido</h4>
                  <p>El árbitro detendrá el partido, comunicará el incidente al delegado de campo y ordenará una advertencia a los responsables mediante megafonía o personalmente. En incidentes racistas, se deberá realizar el gesto universal cruzando los antebrazos frente al pecho para que quede constancia visual de la naturaleza del incidente.</p>
                  <p class="font-semibold text-foreground mt-2">Ejemplo de Redacción:</p>
                  <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 34 del partido, activé el protocolo de violencia verbal debido a gritos continuados de un sector del público identificado como aficionados del equipo local por su indumentaria y cánticos. Dichos gritos incluían expresiones como: 'Árbitro, vete a tu país', 'Eres un inútil' y 'No tienes ni idea'.
Por tratarse de un incidente racista, realicé el gesto universal cruzando los antebrazos frente al pecho para informar de la naturaleza del incidente.
Tras ello, me dirigí al delegado de campo, quien procedió a advertir por megafonía que cesaran esta conducta. El partido estuvo detenido durante 5 minutos hasta que cesaron los insultos, momento en el cual se reanudó."</code></pre>
                </div>
                <div>
                  <h4 class="font-semibold text-foreground">Medida 2: Suspensión Temporal del Partido</h4>
                  <p>Si los insultos persisten tras la advertencia, el árbitro suspenderá temporalmente el partido y pedirá a los equipos que se retiren a los vestuarios. En incidentes racistas, el árbitro deberá repetir el gesto universal si los insultos continúan.</p>
                  <p class="font-semibold text-foreground mt-2">Ejemplo de Redacción:</p>
                  <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 45, y tras haber advertido anteriormente sobre los insultos de carácter xenófobo ('Vete a tu país') proferidos desde la grada sur por aficionados locales, estos continuaron con frases como: '¡No te queremos aquí!' y '¡Lárgate, moreno!’.
Por tratarse de un incidente racista, repetí el gesto universal cruzando los antebrazos frente al pecho para reforzar la gravedad del incidente.
Ante la gravedad del incidente y su persistencia, decidí suspender temporalmente el partido, invitando a ambos equipos a retirarse a los vestuarios. El delegado de campo volvió a realizar una advertencia por megafonía. Tras una pausa de 10 minutos y con la intervención de la fuerza pública, quienes garantizaron nuestra seguridad, el partido se reanudó sin más incidentes."</code></pre>
                </div>
                <div>
                  <h4 class="font-semibold text-foreground">Medida 3: Suspensión Definitiva del Partido</h4>
                  <p>Si los insultos no cesan tras aplicar las medidas anteriores o si se produce una reincidencia grave, el árbitro suspenderá definitivamente el partido.</p>
                  <p class="font-semibold text-foreground mt-2">Ejemplo de Redacción:</p>
                    <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 60 del partido, y tras haber aplicado previamente las medidas 1 y 2, los insultos de carácter racista proferidos desde la grada sur continuaron. Algunos de los gritos identificados fueron: 'Mono', 'Eres un negro de mierda' y 'Devuélvete a tu jungla'.
Por tratarse de un incidente racista, realicé nuevamente el gesto universal cruzando los antebrazos frente al pecho.
Ante la imposibilidad de controlar la situación y tras la evaluación de la fuerza pública, quienes comunicaron que no podían garantizar nuestra seguridad, decidí suspender definitivamente el partido.
La Suspensión del partido se debe reflejar en el apartado ‘Otras Incidencias’. Ejemplo:  “Debido a los incidentes reflejados en el apartado público, me vi en la obligación de suspender el partido. En ese momento, el equipo local defendía la portería izquierda según la salida de vestuarios, mientras el equipo visitante defendía la derecha. En ese momento, el equipo local se disponía a realizar un saque de inicio. El equipo que realizó el saque de inicio en la primera parte fue el equipo visitante. El resultado en ese instante era de Equipo Local (1) – Equipo Visitante (0)."</code></pre>
                </div>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Consideraciones Especiales<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
                <div class="mt-2 text-muted-foreground space-y-2">
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Incidentes Racistas:</strong> Es obligatorio realizar el gesto universal cruzando los antebrazos frente al pecho para notificar visualmente la naturaleza del incidente.</li>
                    <li><strong>Llamada a la Fuerza Pública:</strong> Detallar si acudieron, cuál fue su evaluación y qué medidas adoptaron.</li>
                    <li><strong>Identificación de los insultos:</strong> Quién es la persona que escucha e identifica los insultos, puede ser el mismo árbitro o un jugador quien avise al árbitro para que detenga el partido. Si el árbitro no ha sido capaz de escucharlo por sí mismo, deberá hacer mención de ello en el acta.</li>
                    <li><strong>Duración de las Interrupciones:</strong> Especificar con precisión el tiempo que estuvo detenido el partido.</li>
                    <li><strong>Suspensiones Definitivas:</strong> Reflejar en el apartado ‘Otras incidencias’ el estado exacto del partido, incluyendo situación de los equipos en el campo, reanudación, quien realizó el saque de inicio, resultado, etc.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Desvanecimientos o Incidentes Relacionados con la Salud del Público
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
              <p>En caso de incidentes relacionados con la salud del público, es esencial garantizar la atención inmediata de los afectados, la seguridad del resto de asistentes y el correcto desarrollo del partido. El árbitro debe actuar con diligencia, reflejando con detalle los hechos en el acta.</p>
              <details class="group border-t pt-4">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Aspectos a Reflejar en el Acta<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
                  <div class="mt-2 text-muted-foreground space-y-2">
                      <p>Cuando se produce un incidente de este tipo, se deben incluir los siguientes detalles en el acta:</p>
                      <ul class="list-disc pl-5 space-y-1">
                          <li>Momento del incidente: Minuto exacto en que ocurrió el hecho y cuándo se detuvo el partido.</li>
                          <li>Ubicación: Indicar el sector específico de la grada donde ocurrió el incidente.</li>
                          <li>Identificación de la persona afectada: Reflejar si la persona es aficionada de un equipo en particular (identificada por indumentaria o ubicación).</li>
                          <li>Naturaleza del incidente: Describir el tipo de problema de salud (desvanecimiento, ataque epiléptico, etc.).</li>
                          <li>Asistencia médica: Reflejar si se llamó a los servicios sanitarios, si hubo intervención médica en el lugar o si se requirió evacuación.</li>
                          <li>Medidas adoptadas: Detallar las decisiones tomadas, como reanudar el partido tras la atención médica o suspenderlo si fuera necesario.</li>
                          <li>Duración de la interrupción: Especificar cuánto tiempo estuvo detenido el partido.</li>
                          <li>Suspensión del partido: En caso de que el partido no se pueda reanudar, incluir los detalles del estado del partido al momento de la suspensión en el apartado de "Otras Incidencias."</li>
                      </ul>
                  </div>
              </details>
              <details class="group border-t pt-4">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Ejemplo de Redacción<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
                  <div class="mt-2 text-muted-foreground space-y-2">
                      <h4 class="font-semibold text-foreground">Caso de desvanecimiento de un espectador:</h4>
                      <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 86 detuve el partido debido a que una persona ubicada en la grada lateral sur sufrió un ataque epiléptico. Los servicios médicos del estadio acudieron de inmediato para atender a la persona afectada.
Una vez estabilizada, fue evacuada fuera del estadio por las asistencias sanitarias. El partido estuvo detenido durante 3 minutos y se reanudó sin más incidentes."</code></pre>
                      <h4 class="font-semibold text-foreground mt-4">Caso de incidente mayor (derrumbe parcial de una grada):</h4>
                      <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 67 y durante la celebración de un gol del equipo local, parte de la grada ubicada en el fondo norte se derrumbó parcialmente mientras los aficionados saltaban y celebraban el gol conseguido por su equipo.
Este incidente afectó aproximadamente a 20-30 personas, quienes fueron identificadas como aficionados locales por su indumentaria y cánticos de ánimo a su equipo. Los servicios sanitarios y el personal de seguridad acudieron inmediatamente para atender a los afectados, sin que se reportaran heridos graves en el lugar.
Tras garantizar la seguridad de todos los asistentes y reubicar a los espectadores en otra zona del estadio, el partido se reanudó tras una interrupción de 15 minutos."</code></pre>
                      <h4 class="font-semibold text-foreground mt-4">Caso de suspensión del partido por incidente de salud grave:</h4>
                      <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 72:15 detuve el partido debido a que un espectador ubicado en la grada oeste sufrió un paro cardíaco. Los servicios médicos intervinieron inmediatamente en el lugar y procedieron a reanimarlo, trasladándolo posteriormente a un centro hospitalario en ambulancia.
A pesar de la rápida intervención, las autoridades de seguridad comunicaron que no podían garantizar la tranquilidad del resto de espectadores debido al estado de ánimo alterado en la grada. Por este motivo, decidí suspender el partido definitivamente.
Otras Incidencias: Debido al incidente mencionado en el apartado "Público," me vi en la obligación de suspender definitivamente el encuentro. Al momento de la suspensión, el equipo visitante defendía la portería situada a la derecha según la salida de vestuarios, mientras el equipo local defendía la portería izquierda. El resultado del partido en ese momento era: Equipo Local (2) – Equipo Visitante (1). En el instante de la suspensión, el equipo local se disponía a realizar un saque de esquina en el corner más cercano a la cantina. El equipo que realizó el saque inicial en la primera parte fue el equipo local".</code></pre>
                  </div>
              </details>
              <details class="group border-t pt-4">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">Consideraciones Especiales<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
                  <div class="mt-2 text-muted-foreground space-y-2">
                      <ul class="list-disc pl-5 space-y-1">
                          <li>Intervención Médica: Reflejar si la persona afectada fue estabilizada en el lugar o si se requirió traslado a un hospital.</li>
                          <li>Fuerzas de Seguridad: Detallar si intervinieron las fuerzas del orden para garantizar la seguridad de los asistentes.</li>
                          <li>Parte Médico: Si se dispone de un parte médico oficial, reflejarlo en el acta.</li>
                          <li>Impacto en el Partido: Especificar claramente si el partido se reanudó o fue suspendido.</li>
                      </ul>
                  </div>
              </details>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Casos Prácticos de Incidentes de Público
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Insultos racistas hacia un jugador:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto X detuve momentáneamente el partido y activé el ‘Protocolo de actuación sobre Violencia Verbal’ debido a que un sector del público, que pude identificar como aficionados del equipo local por sus cánticos de ánimo, profirió comentarios e insultos racistas hacia el jugador nº11 del equipo visitante, como: “Eres un negro de mierda” y “Vete a tu país”. Realicé el gesto estipulado para este tipo de incidentes, cruzando mis antebrazos frente al pecho para señalar la gravedad de la situación. Posteriormente, informé al delegado de campo y se emitió un mensaje por megafonía advirtiendo que cesaran esta actitud. Tras 10 minutos de interrupción y el compromiso de seguridad del delegado de campo, el partido se reanudó sin nuevos incidentes de esta índole."</code></pre></li>
              <li><strong>Lanzamiento de objetos al equipo arbitral:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"Al finalizar el partido, mientras el trío arbitral nos dirigíamos al túnel de vestuarios, desde la grada donde se encontraban aficionados del equipo local, identificados por sus cánticos durante el partido, se lanzó una piedra de aproximadamente 4cm³ que impactó en la cabeza de mi asistente nº2, causándole una hemorragia. Tras asistirle en el vestuario arbitral, fue necesario llamar a los servicios médicos. No se produjeron más incidentes durante nuestro trayecto."</code></pre></li>
              <li><strong>Invasión de campo por un espectador:</strong> <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 17, mientras el equipo visitante atacaba, un espectador identificado como aficionado local por sus cánticos y bufanda de su equipo ingresó al terreno de juego e interceptó un disparo a portería. El delegado de campo fue avisado de inmediato y la persona fue retirada sin incidentes adicionales. El partido estuvo detenido durante 2 minutos."</code></pre></li>
            </ul>
          </div>
        </details>
      </div>
    `
};

    
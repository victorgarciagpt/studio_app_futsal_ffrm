
import type { Document } from '@/lib/types';

export const publico: Document = {
  id: 'publico',
  title: 'Manual 5: Público',
  category: 'manuals',
  updatedAt: '2024-07-25',
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
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Se considera violencia verbal: insultos, amenazas graves, y manifestaciones racistas, xenófobas, sexistas o intolerantes de forma continuada. En caso de incidentes racistas, el árbitro debe realizar el gesto universal (cruzar los antebrazos frente al pecho).</p>
            <p class="font-semibold text-foreground mt-4 mb-2">Medidas de Actuación:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Medida 1: Detención del Partido.</strong> Aviso al delegado para advertencia por megafonía.</li>
              <li><strong>Medida 2: Suspensión Temporal.</strong> Retirada a vestuarios si persiste la conducta.</li>
              <li><strong>Medida 3: Suspensión Definitiva.</strong> Si no cesa la violencia o es reincidente.</li>
            </ul>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            Desvanecimientos o Incidentes de Salud del Público
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>En caso de incidentes de salud, es crucial garantizar la atención inmediata, la seguridad del resto de asistentes y el correcto desarrollo del partido. Se debe reflejar: momento, ubicación, naturaleza del incidente, asistencia médica, medidas tomadas, duración de la interrupción y si se suspendió el partido.</p>
            <p class="font-semibold text-foreground mt-4 mb-2">Ejemplo de Redacción:</p>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>"En el minuto 86 detuve el partido debido a que una persona ubicada en la grada lateral sur sufrió un ataque epiléptico. Los servicios médicos del estadio acudieron de inmediato para atender a la persona afectada. Una vez estabilizada, fue evacuada fuera del estadio por las asistencias sanitarias. El partido estuvo detenido durante 3 minutos y se reanudó sin más incidentes."</code></pre>
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

    
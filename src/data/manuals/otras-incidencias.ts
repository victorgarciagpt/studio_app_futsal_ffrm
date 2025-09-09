
import type { Document } from '@/lib/types';

export const otrasIncidencias: Document = {
  id: 'otras-incidencias',
  title: 'Manual 7: Otras Incidencias',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">7. Otras Incidencias</h2>
      <p class="text-muted-foreground mb-6">En este apartado se reflejará cualquier incidencia que no tenga cabida en los demás apartados, tales como lesiones o daños a miembros del equipo arbitral, accesos indebidos al vestuario arbitral, retrasos en el comienzo del partido no reflejados en otros apartados, la no utilización del balón oficial, prórrogas, tandas de penalties y suspensión de los partidos, etc. A continuación, se detalla cómo proceder en cada caso.</p>

      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.1 Lesiones o Daños Producidos a Miembros del Equipo Arbitral
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Este apartado incluye situaciones causadas por objetos lanzados, agresiones o acciones fortuitas. Deberemos especificar cómo se solventó, el tiempo que estuvo detenido el partido, si se necesitó asistencia, si se adjunta parte médico y si se requirió la ayuda de las fuerzas públicas.</p>
            <h4 class="font-semibold text-foreground pt-2">Aspectos a incluir:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Causa de la lesión o daño (si fue fortuitamente, si fue por objeto lanzado, agresión, etc.).</li>
              <li>Resolución del incidente.</li>
              <li>Tiempo que estuvo detenido el partido.</li>
              <li>Necesidad de asistencia médica.</li>
              <li>Presentación de parte médico.</li>
              <li>Intervención de las fuerzas públicas.</li>
              <li>Suspensión del partido, si corresponde.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Ejemplos de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>1. En el minuto 50, sufrí un fuerte dolor en el gemelo derecho, lo que me imposibilitó continuar con mis labores arbitrales. Tras detener el partido durante 10 minutos y ser atendido por el fisioterapeuta del equipo local, no experimenté mejoría, por lo que mi asistente Nº X asumió el rol de árbitro principal y me retiré al vestuario arbitral. Se adjunta parte médico correspondiente.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>2. Se adjunta al acta el parte médico del asistente Nº 1 D.XXX tras la herida sufrida, descrita en el apartado "Público".</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.2 Acceso Indebido al Vestuario Arbitral
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Refleja situaciones en las que personas no autorizadas ingresan al vestuario arbitral. Se deben detallar las intenciones de dichas personas y las acciones tomadas.</p>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Una vez finalizado el partido, accedió al vestuario arbitral una persona que se identificó como el Presidente del C.D. Ejemplo para darme la mano y, de forma irónica, dirigirse a mí en los siguientes términos: "¡Árbitro hoy te has lucido! Ha sido vergonzoso".</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.3 Retrasos en el Comienzo del Partido
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Cuando el partido comience con retraso, y no se haya reflejado el motivo en otro apartado, se debe constatar la duración y la causa.</p>
             <h4 class="font-semibold text-foreground pt-2">Aspectos a incluir:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>Duración del retraso.</li>
              <li>Motivo del retraso.</li>
              <li>Si el tiempo de cortesía se aplicó, aumentó o disminuyó.</li>
            </ul>
            <h4 class="font-semibold text-foreground pt-2">Ejemplos de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>1. El partido comenzó con 5 minutos de retraso debido a que el C.D. Ejemplo retrasó su salida de los vestuarios pese a nuestras reiteradas insistencias.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>2. El encuentro comenzó con 10 minutos de retraso debido a un acto de entrega de trofeos, previamente autorizado pero mal coordinado.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>3. El partido comenzó con 30 minutos de retraso debido a que se estaba celebrando otro partido en el mismo terreno de juego.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>4. El partido comenzó con 10 minutos de retraso ya que el delegado del equipo visitante presentó las licencias federativas en el vestuario arbitral tan solo 15 minutos antes de la hora prevista para el inicio del partido, alegando haberse perdido en el camino al estadio.</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.4 No Utilización del Balón Oficial FFRM
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>En caso de que en un encuentro el balón que dispongan los equipos (local y visitante), no corresponda con la marca y modelo específico para esa categoría, se disputará el partido con otro balón, siempre que reúna las medidas reglamentarias y se hará constar en el Acta.</p>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Debido a que no disponían de ellos, el partido se disputó con un balón que no correspondía con la marca y modelo específico para la categoría. Aun así, el partido se jugó con balones que cumplían las medidas reglamentarias.</code></pre>
            <p class="mt-2">En el caso de no tener balones que cumplan con las medidas reglamentarias de la categoría, se deberá suspender el partido.</p>
            <h4 class="font-semibold text-foreground pt-2">Ejemplo de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>“Antes del inicio del partido, al revisar los balones junto a los delegados de equipo local y visitante me comunican que no tienen balones que cumplan las medidas reglamentarias de la categoría. Por este motivo, decido no iniciar el encuentro y dar por suspendido el partido.”</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.5 Resultado del Partido en Partidos con Prórroga y/o Penaltis
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>En caso de que el partido termine en empate y sea necesario recurrir a prórroga o lanzamientos desde el punto de penal, se hará constar en el acta esta incidencia, así como los resultados alcanzados tras el tiempo suplementario y/o los penaltis. Se deberá tener en cuenta que, en la hoja principal del acta, donde indica el resultado final se pondrá el resultado al finalizar la prórroga.</p>
            <h4 class="font-semibold text-foreground pt-2">Ejemplos de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>1. Partido con prórroga:
Otras incidencias – Finalizado el partido tras los X minutos reglamentarios con el resultado de EQUIPO A UNO (1) – EQUIPO B UNO (1), se procedió a continuación con una prórroga de Y minutos, alcanzando el resultado final de EQUIPO A DOS (2) – EQUIPO B UNO (1).</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>2. Partido con prórroga y penaltis:
Otras Incidencias: Finalizado el partido tras los X minutos estipulados con el resultado de EQUIPO A UNO (1) – EQUIPO B UNO (1), se procedió con una prórroga de Y minutos, alcanzando un resultado final de EQUIPO A UNO (1) – EQUIPO B UNO (1). A continuación, se realizaron tiros desde el punto de penal cuyo resultado fue EQUIPO A CUATRO (4) – EQUIPO B TRES (3).</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.6 Cualquier Otra Incidencia que No Tenga Cabida en Otros Apartados
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-2">
            <p>Este subapartado incluye cualquier hecho relevante que no pueda clasificarse en los puntos anteriores. Aquí se reflejan actos protocolares, pausas específicas, o cualquier otra situación relevante que ocurra antes, durante o después del partido.</p>
            <h4 class="font-semibold text-foreground pt-2">Ejemplos de redacción:</h4>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>1. Antes del comienzo del partido se guardó un minuto de silencio por el reciente fallecimiento del padre de uno de los jugadores del C.D. Ejemplo.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>2. Se guardó un minuto de silencio previo al inicio, autorizado por la RFEF con motivo del terremoto ocurrido en Marruecos.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>3. Antes del inicio del partido se realizó un saque de honor previamente aprobado por la federación. Dicho acto no causó repercusión en la hora de inicio, comenzando el partido a la hora establecida.</code></pre>
            <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>4. Antes del inicio del partido se realizó un acto en el que se le entregó la ‘Copa de Campeones’ al equipo local de categoría juvenil, previamente aprobado por la federación. Dicho acto no causó repercusión en la hora de inicio, comenzando el partido a la hora establecida.</code></pre>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.7 Suspensión del Partido
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <p>La suspensión de un partido es uno de los eventos más críticos que deben reflejarse en el acta arbitral. Este evento siempre debe ir registrado en el apartado "Otras Incidencias". Sin embargo, las razones o incidentes que llevaron a la suspensión deberán detallarse en el apartado correspondiente (Jugadores, Público, Instalaciones, etc.). En caso de que el motivo no se haya reflejado previamente, deberá incluirse junto a la descripción de la suspensión en este apartado.</p>
            
            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">7.7.1 Suspensión Antes del Inicio del Partido<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Cuando el partido se suspende antes de comenzar, se deben reflejar los siguientes aspectos:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Registrar los jugadores y oficiales de ambos equipos presentes en el acta.</li>
                  <li>Describir claramente los motivos de la suspensión en el apartado correspondiente.</li>
                  <li>Indicar en "Otras Incidencias" que el partido fue suspendido, haciendo referencia al apartado donde se detalla el motivo.</li>
                </ul>
                <h4 class="font-semibold text-foreground pt-2">Ejemplo de redacción:</h4>
                <p class="font-medium text-foreground">A. Por mal estado del terreno de juego:</p>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Otras Incidencias – Debido a las condiciones del terreno de juego descritas en Instalaciones, donde se especifica que la superficie estaba completamente congelada, el partido fue suspendido antes de su inicio. Ambos Delegados fueron informados, mostrando su conformidad.</code></pre>
                <p class="font-medium text-foreground">B. Por incomparecencia o falta de jugadores:</p>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Otras Incidencias – Tras la espera reglamentaria desde la hora señalada para el inicio del partido, el C.D. Ejemplo no compareció, procediendo a la suspensión del encuentro.</code></pre>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Otras Incidencias - A la hora inicialmente fijada para el comienzo del partido, el C.D. Ejemplo se había presentado en las instalaciones deportivas únicamente con su Delegado y con los 6 jugadores que aparecen reflejados en el acta, número inferior a los 7 reglamentariamente exigidos para dar comienzo al encuentro. Dicho delegado alega que no tienen más jugadores disponibles para este partido, por lo que tras la espera reglamentaria desde la hora señalada para el comienzo del partido decreto la suspensión del mismo.</code></pre>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">7.7.2 Suspensión Durante el Partido<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Si un partido ya comenzado debe suspenderse, se deben reflejar de forma obligatoria todos estos puntos en el acta:</p>
                <ol class="list-decimal pl-5 space-y-1">
                  <li>Datos generales del partido hasta el momento de la suspensión:<ul><li>Jugadores y oficiales inscritos.</li><li>Hora de inicio del primer y segundo tiempo (dejar en blanco si el partido fue suspendido en la primera mitad).</li><li>Goles anotados hasta el momento.</li><li>Sanciones disciplinarias (amonestaciones y expulsiones).</li></ul></li>
                  <li>Aspectos obligatorios en "Otras Incidencias":<ul><li>Minuto en que se suspende el partido.</li><li>Equipo que realizó el saque inicial al comienzo del partido.</li><li>Posición de los equipos en el terreno de juego (hacia dónde atacaban).</li><li>Acción en curso al momento de la suspensión (ejemplo: saque de meta, tiro libre).</li><li>Resultado al momento de la suspensión.</li><li>Motivo detallado de la suspensión (o mención a otro apartado donde esté descrito).</li></ul></li>
                </ol>
                <h4 class="font-semibold text-foreground pt-2">Ejemplo de redacción:</h4>
                <p class="font-medium text-foreground">A. Por incidentes de Público:</p>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Otras Incidencias – En el minuto 55 de partido y debido a los incidentes reflejados en el apartado Público, donde un grupo de espectadores ingresó al terreno de juego con intenciones agresivas, decidí suspender definitivamente el encuentro. El equipo local defendía en el campo situado a la izquierda según se sale de la zona de vestuarios, y en ese momento debía ejecutar un saque de meta. El equipo local realizó el saque inicial en la primera mitad. El resultado en el momento de la suspensión era: Equipo Local (1) – Equipo Visitante (0).</code></pre>
                <p class="font-medium text-foreground">B. Por no cumplir con el número mínimo de futbolistas sobre el terreno de juego:</p>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>El partido fue suspendido en el minuto 57 debido a que el C.D. Ejemplo se quedó con un número de jugadores inferior a los 3 reglamentariamente exigidos debido a las diversas lesiones y expulsiones que se hacen constar en el presente acta. El C.D. Ejemplo defendía en el campo más lejano a la zona de vestuarios. En el momento de la suspensión, dicho club tenía que ejecutar un tiro libre indirecto en el semicírculo de su área de penalti. El equipo que realizó el saque inicial en la primera parte fue el equipo local. En el instante de la suspensión el resultado del partido era de: Equipo Local (1) – Equipo visitante (0).</code></pre>
                 <p class="font-medium text-foreground">C. Por fuertes lluvias:</p>
                 <p>Escribir en primer lugar el motivo en el apartado ‘Instalaciones’ y posteriormente la suspensión en ‘Otras incidencias’, del siguiente modo.</p>
                <pre class="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Apartado Otras incidencias: A raíz de los incidentes reflejados en el apartado de Instalaciones, observando que la lluvia seguía siendo bastante intensa, que cada vez el terreno de juego estaba en peores condiciones y que el Delegado de Campo no tenía los medios suficientes para drenar el agua de la superficie de juego en un tiempo prudencial, tomé la decisión anteriormente mencionada de suspender definitivamente el encuentro, estando los Delegados de ambos equipos conformes. El C.D. Ejemplo defendía en el campo más próximo a la zona de vestuarios, habiendo realizado este equipo el saque inicial. En el momento de la suspensión, dicho club tenía que ejecutar un saque de meta. En el instante de la suspensión el resultado del partido era de: Equipo Local (1) – Equipo visitante (0).</code></pre>
              </div>
            </details>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            7.8 Reanudación de un partido suspendido (otro día)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <p>La redacción para la reanudación de un partido suspendido depende de si el partido fue suspendido antes de iniciar o si ya estaba en juego. A continuación, se detallan las normas, diferencias y ejemplos para cada caso:</p>
            
            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">7.8.1 Reanudación tras suspensión antes del inicio del partido<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Si el partido fue suspendido antes de iniciar, la reanudación se considera un nuevo encuentro, y no se requiere mantener los detalles de jugadores o incidencias anteriores. El acta del nuevo encuentro deberá incluir los jugadores inscritos y habilitados para el día de la nueva celebración.</p>
                <h4 class="font-semibold text-foreground pt-2">Aspectos importantes a reflejar:</h4>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Los jugadores que participen deberán cumplir las normas de inscripción y habilitación correspondientes a la nueva fecha.</li>
                  <li>No se tomará en cuenta la lista de jugadores inicial del día de la suspensión.</li>
                  <li>En el acta se registrará como un partido nuevo, sin tener que escribir nada al respecto el partido suspendido.</li>
                </ul>
              </div>
            </details>

            <details class="group border-t pt-4">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">7.8.2 Reanudación tras suspensión durante el partido<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg></summary>
              <div class="mt-2 text-muted-foreground space-y-2">
                <p>Si el partido ya había comenzado antes de la suspensión, la reanudación debe continuar exactamente desde el momento en el que se interrumpió. Es esencial mantener el registro de las incidencias ocurridas en el tiempo jugado.</p>
                <h4 class="font-semibold text-foreground pt-2">Aspectos importantes a reflejar en la reanudación:</h4>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Solo podrán participar los jugadores habilitados en la fecha original del partido y que no hayan sido expulsados o sancionados desde entonces.</li>
                  <li>Los jugadores amonestados hasta el momento de la suspensión deben respetarse.</li>
                  <li>El tiempo jugado hasta la suspensión se mantiene, y el encuentro reanuda en las mismas condiciones.</li>
                  <li>No es necesario reflejar en el acta nada al respecto el partido anterior suspendido.</li>
                </ul>
                 <h4 class="font-semibold text-foreground pt-2">Normas específicas aplicables a la reanudación:</h4>
                <ol class="list-decimal pl-5 space-y-1">
                  <li>Jugadores habilitados:
                    <ul class="list-disc pl-5">
                      <li>Solo pueden alinearse jugadores habilitados el día de la suspensión, independientemente de si participaron o no en el tiempo jugado.</li>
                      <li>Los jugadores sustituidos, expulsados o sancionados no pueden participar en la reanudación.</li>
                      <li>Cualquiera de estos jugadores habilitados podrá jugar como titular, no es necesario respetar exactamente los mismos jugadores que habían sobre el terreno de juego al momento de la suspensión.</li>
                    </ul>
                  </li>
                  <li>Continuidad del juego:
                    <ul class="list-disc pl-5">
                      <li>La reanudación debe respetar el estado del juego en el momento de la suspensión (posición del balón, quién debía realizar la puesta en juego, posiciones de los equipos en el campo, etc.).</li>
                    </ul>
                  </li>
                   <li>Amonestaciones acumuladas:
                    <ul class="list-disc pl-5">
                      <li>Las amonestaciones recibidas antes de la suspensión se mantendrán vigentes en la reanudación. Si un jugador recibe una segunda amonestación durante el encuentro reanudado, será expulsado y reflejado en el acta.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </details>
          </div>
        </details>
      </div>
    `
};

    
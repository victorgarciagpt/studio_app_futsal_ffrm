import type { Document } from '@/lib/types';

export const clasificacionIncidentes: Document = {
  id: 'clasificacion-incidentes',
  title: 'Manual 2: Clasificación de Incidentes',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">1. Clasificación de incidentes</h2>
      <p class="mb-4">En el caso de que se deba redactar algún hecho o incidente en el acta, siempre se verá limitado a uno de los siguientes apartados:</p>
      <ul class="list-disc pl-6 space-y-1 mb-4">
        <li>Jugadores (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Dirigentes y Técnicos (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Público</li>
        <li>Deficiencias en las Instalaciones</li>
        <li>Otras Incidencias</li>
        <li>Anexo</li>
      </ul>
      <p class="mb-4">Existe una excepción para los incidentes relacionados con la firma del delegado de equipo, que no debe reflejarse en estos apartados.</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.1 Jugadores</h3>
      <p class="mb-2">Si el incidente tiene como protagonista a uno o varios jugadores, se debe diferenciar si es una infracción sancionable (tarjeta) o un incidente informativo (lesión, problema de equipaciones, etc.).</p>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.1.1 Infracción de Jugador</h4>
      <p class="mb-2">La siguiente tabla determina dónde redactar una infracción cometida por un jugador:</p>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Dónde y Cuándo se Comete la Infracción</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody><tr><td class="border p-2">En el túnel de vestuarios antes de salir al terreno de juego.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr><td class="border p-2">En el terreno de juego y antes del pitido inicial (1ª o 2ª parte).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga y tanda de penaltis).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el terreno de juego tras finalizar la 1ª o 2ª parte.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el túnel de vestuarios entre ambas partes del partido.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr><td class="border p-2">En el túnel de vestuarios, tras finalizar el partido.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr><td class="border p-2">Tras ser expulsado</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">-</td></tr></tbody></table></div>

      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.1.2 Hechos informativos sobre jugadores</h4>
      <p>Acontecimientos relevantes no sancionados (lesiones, problemas de equipaciones, jugadores no registrados en la app, etc.) se reflejan en 'Otras incidencias de Jugadores'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.2 Dirigentes/Técnicos</h3>
      <p>Incidentes con entrenadores, delegados, fisios, etc. Se consideran oficiales a: Entrenador principal, segundo entrenador, fisioterapeuta, preparador físico, entrenador de porteros, encargado de material, delegado de equipo, delegado de campo y cualquier otra persona con ficha o contrato.</p>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.2.1 Infracciones de Técnicos</h4>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Dónde y Cuándo</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody><tr><td class="border p-2">En el túnel de vestuarios antes de salir al campo.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el terreno de juego antes del pitido inicial.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga).</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr><td class="border p-2">Tras finalizar la 1ª o 2ª parte, en el campo.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el túnel de vestuarios entre partes.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr><td class="border p-2">En el túnel de vestuarios tras finalizar el partido.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr><td class="border p-2">Tras ser expulsado.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Reflejar infracciones posteriores a la expulsión.</td></tr></tbody></table></div>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.2.2 Hechos informativos sobre técnicos</h4>
      <p>Hechos no sancionables como incumplimiento de funciones, retraso en entrega de licencias, etc., se registran en 'Otras incidencias de Técnicos'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.3 Público</h3>
      <p>Incidentes con aficionados se redactan aquí, detallando: identificador del sector, qué ocurrió, dónde, cuántas personas, cuándo, consecuencias y resolución. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.4 Deficiencias en las instalaciones</h3>
      <p>Incidentes como ausencia de agua caliente, falta de banderines, problemas de iluminación, etc. Se debe indicar: momento de detección, deficiencia, comunicación al responsable y medidas adoptadas. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.5 Otras incidencias</h3>
      <p>Cualquier incidencia sin cabida en otros apartados: lesiones del equipo arbitral, accesos indebidos al vestuario arbitral, retrasos, no uso del balón oficial, prórrogas, tandas de penaltis, y suspensiones de partidos.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.6 Anexo</h3>
      <p>Se usa para reflejar situaciones fuera del marco temporal o espacial del partido (ej. tras entregar el acta o abandonar las instalaciones) o para ampliar información olvidada. Permite detallar incidentes con implicaciones disciplinarias importantes.</p>
    `
};

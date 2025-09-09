
import type { Document } from '@/lib/types';

export const clasificacionIncidentes: Document = {
  id: 'clasificacion-incidentes',
  title: 'Manual 2: Clasificación de Incidentes',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">2. Clasificación de incidentes</h2>
      <p class="text-muted-foreground mb-6">En el caso de que se deba redactar algún hecho o incidente en el acta, siempre se verá limitado a uno de los siguientes apartados:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Jugadores (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Dirigentes y Técnicos (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Público</li>
        <li>Deficiencias en las Instalaciones</li>
        <li>Otras Incidencias</li>
        <li>Anexo</li>
      </ul>
      <p class="text-muted-foreground">Existe una excepción para los incidentes relacionados con la firma del delegado de equipo, que no debe reflejarse en estos apartados.</p>
      
      <div class="space-y-4 mt-6">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.1 Jugadores
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <p>Si el incidente tiene como protagonista a uno o varios jugadores, se debe diferenciar si es una infracción sancionable (tarjeta) o un incidente informativo (lesión, problema de equipaciones, etc.).</p>
            
            <div class="border-t pt-4">
                <h4 class="font-semibold text-foreground mb-2 text-md">2.1.1 Infracción de Jugador</h4>
                <p class="mb-2">La siguiente tabla determina dónde redactar una infracción cometida por un jugador:</p>
                <div class="overflow-x-auto my-4"><table class="w-full text-sm"><thead><tr class="text-left font-medium text-muted-foreground bg-muted/50"><th class="border p-2">Dónde y Cuándo se Comete la Infracción</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody class="divide-y"><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios antes de salir al terreno de juego.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr class="divide-x"><td class="border p-2">En el terreno de juego y antes del pitido inicial (1ª o 2ª parte).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr class="divide-x"><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga y tanda de penaltis).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr class="divide-x"><td class="border p-2">En el terreno de juego tras finalizar la 1ª o 2ª parte.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios entre ambas partes del partido.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios, tras finalizar el partido.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr class="divide-x"><td class="border p-2">Tras ser expulsado</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">-</td></tr></tbody></table></div>
            </div>

            <div class="border-t pt-4">
                 <h4 class="font-semibold text-foreground mb-2 text-md">2.1.2 Hechos informativos sobre jugadores</h4>
                 <p>Acontecimientos relevantes no sancionados (lesiones, problemas de equipaciones, jugadores no registrados en la app, etc.) se reflejan en 'Otras incidencias de Jugadores'.</p>
            </div>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.2 Dirigentes/Técnicos
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
           <div class="mt-4 text-muted-foreground space-y-4">
                <p>Incidentes con entrenadores, delegados, fisios, etc. Se consideran oficiales a: Entrenador principal, segundo entrenador, fisioterapeuta, preparador físico, entrenador de porteros, encargado de material, delegado de equipo, delegado de campo y cualquier otra persona con ficha o contrato.</p>
                
                <div class="border-t pt-4">
                    <h4 class="font-semibold text-foreground mb-2 text-md">2.2.1 Infracciones de Técnicos</h4>
                    <div class="overflow-x-auto my-4"><table class="w-full text-sm"><thead><tr class="text-left font-medium text-muted-foreground bg-muted/50"><th class="border p-2">Dónde y Cuándo</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody class="divide-y"><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios antes de salir al campo.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">-</td></tr><tr class="divide-x"><td class="border p-2">En el terreno de juego antes del pitido inicial.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr class="divide-x"><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga).</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr class="divide-x"><td class="border p-2">Tras finalizar la 1ª o 2ª parte, en el campo.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">-</td></tr><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios entre partes.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr class="divide-x"><td class="border p-2">En el túnel de vestuarios tras finalizar el partido.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr class="divide-x"><td class="border p-2">Tras ser expulsado.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Reflejar infracciones posteriores a la expulsión.</td></tr></tbody></table></div>
                </div>

                <div class="border-t pt-4">
                    <h4 class="font-semibold text-foreground mb-2 text-md">2.2.2 Hechos informativos sobre técnicos</h4>
                    <p>Hechos no sancionables como incumplimiento de funciones, retraso en entrega de licencias, etc., se registran en 'Otras incidencias de Técnicos'.</p>
                </div>
           </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.3 Público
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
           <div class="mt-4 text-muted-foreground space-y-2">
            <p>Incidentes con aficionados se redactan aquí, detallando: identificador del sector, qué ocurrió, dónde, cuántas personas, cuándo, consecuencias y resolución. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.4 Deficiencias en las instalaciones
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
           <div class="mt-4 text-muted-foreground space-y-2">
            <p>Incidentes como ausencia de agua caliente, falta de banderines, problemas de iluminación, etc. Se debe indicar: momento de detección, deficiencia, comunicación al responsable y medidas adoptadas. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.5 Otras incidencias
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
           <div class="mt-4 text-muted-foreground space-y-2">
            <p>Cualquier incidencia sin cabida en otros apartados: lesiones del equipo arbitral, accesos indebidos al vestuario arbitral, retrasos, no uso del balón oficial, prórrogas, tandas de penaltis, y suspensiones de partidos.</p>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            2.6 Anexo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
           <div class="mt-4 text-muted-foreground space-y-2">
            <p>Se usa para reflejar situaciones fuera del marco temporal o espacial del partido (ej. tras entregar el acta o abandonar las instalaciones) o para ampliar información olvidada. Permite detallar incidentes con implicaciones disciplinarias importantes.</p>
          </div>
        </details>
      </div>
    `
};

    
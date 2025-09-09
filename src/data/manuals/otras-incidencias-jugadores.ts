import type { Document } from '@/lib/types';

export const otrasIncidenciasJugadores: Document = {
  id: 'otras-incidencias-jugadores',
  title: 'Manual 3.3: Otras Incidencias de Jugadores',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.3 Otras Incidencias de Jugadores</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.3.1 Principios Generales</h3>
      <p>Refleja incidentes que no son amonestación ni expulsión: acciones tras ser expulsado, similitud de equipaciones, lesiones, exclusión antes del partido, cambios de dorsales, falta de licencia, etc.</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.3.2 Tipos de Incidencias</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>A) Jugador no aparece en la app:</strong> Crear licencia bajo responsabilidad del delegado y solicitar DNI.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado del equipo visitante, D. XXX, me comunica que el jugador con dorsal nº 6, D. YYY, con DNI 12345678X, no aparece en la aplicación. Dicho delegado declara que dispone de licencia federativa validada, asumiendo su responsabilidad."</code></pre>
        </li>
        <li><strong>B) Reemplazo de un Jugador antes del Partido:</strong> Por lesión en calentamiento, no cuenta como sustitución.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Antes del comienzo del partido, el delegado del equipo local, D. XXX, me comunica que el jugador con dorsal nº 10, D. YYY, sufrió una lesión durante el calentamiento, siendo reemplazado por el dorsal nº 14, D. ZZZ."</code></pre>
        </li>
        <li><strong>C) Lesiones de Jugadores Durante el Partido:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al finalizar el partido, el delegado del C.D. Ejemplo, D. XXX, me comunicó que el jugador con dorsal nº 7, D. YYY, sufrió una lesión en el tobillo izquierdo durante el encuentro. No se adjunta parte médico."</code></pre>
        </li>
        <li><strong>D) Incidentes tras la Expulsión de un Jugador:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 70, y una vez expulsado el jugador con dorsal nº 8, D. XXX, se dirigió a mí en los siguientes términos: '¡Eres un ladrón, nos estás robando el partido!'."</code></pre>
        </li>
        <li><strong>E) Incidentes tras Finalizar y fuera del terreno de juego:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez finalizado el partido y en el túnel de vestuarios, el jugador nº 4 del C.D. Ejemplo, D. XXX, se dirigió al equipo arbitral en los siguientes términos: '¡No vais a salir vivos de aquí, cabrones!'."</code></pre>
        </li>
        <li><strong>F) Peleas sin poder identificar a todos:</strong> Describir el conflicto y el número aproximado de participantes.</li>
        <li><strong>G) Revisión de Fichas:</strong> Quién solicita la revisión y el resultado.</li>
        <li><strong>H) Mensajes Exhibidos por Jugadores:</strong> Contenido del mensaje y medio.</li>
        <li><strong>I) Exclusión de Jugadores Antes del Partido:</strong> Si un titular es excluido, puede ser reemplazado por un suplente sin contar como sustitución.</li>
        <li><strong>J) Sustituciones adicionales:</strong> Por prórroga o por conmoción cerebral.</li>
      </ul>
    `
};

import type { Document } from '@/lib/types';

export const otrasIncidenciasTecnicos: Document = {
  id: 'otras-incidencias-tecnicos',
  title: 'Manual 4.3: Otras Incidencias de Técnicos',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.3 Otras Incidencias de Dirigentes/Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.3.1 Principios Generales</h3>
      <p>Este apartado cubre incidentes no sancionables: acciones post-expulsión, incumplimiento de funciones, problemas con licencias, etc.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.3.2 Tipos de Incidencias y Ejemplos</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Incidentes Sucedidos Tras la Expulsión:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 40, y una vez expulsado el entrenador local D. XXX, se dirigió a mí antes de abandonar el área técnica diciendo: '¡Eres un incompetente!'."</code></pre>
        </li>
        <li><strong>Incidentes Tras la Finalización del Partido (fuera del campo):</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez terminado el partido y estando ya en el túnel de vestuarios, el entrenador visitante D. XXX corrió hacia mi posición señalándome con el dedo y diciendo: '¡Te has cargado el partido!'."</code></pre>
        </li>
        <li><strong>Incumplimiento de Funciones:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado de campo del equipo local D. XXX no me acompañó al vestuario arbitral tras finalizar el partido, alegando que estaba ocupado recogiendo el material."</code></pre>
        </li>
        <li><strong>Técnicos No Identificados:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez finalizado el partido, un miembro del cuerpo técnico del club local, identificado por su indumentaria pero sin poder confirmar su identidad, empujó a mi asistente nº1 en el túnel de vestuarios."</code></pre>
        </li>
        <li><strong>Ausencia de Delegado en Fútbol Base:</strong> Si un entrenador ejerce de delegado.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"D. XXX, entrenador del equipo local, realizó funciones de delegado para este partido debido a la ausencia de un delegado con licencia."</code></pre>
        </li>
        <li><strong>Licencia no aparece en la App:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado del equipo visitante, D. XXX, me comunica que el [puesto], D. YYY, con DNI 12345678X, no aparece en la aplicación. Dicho delegado declara que dispone de licencia federativa validada, asumiendo su responsabilidad."</code></pre>
        </li>
      </ul>
    `
};

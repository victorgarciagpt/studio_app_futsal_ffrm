
import type { Document } from '@/lib/types';

export const deficienciasInstalaciones: Document = {
  id: 'deficiencias-instalaciones',
  title: 'Manual 6: Deficiencias en las Instalaciones',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">6. Deficiencias en las Instalaciones</h2>
      <p class="text-muted-foreground mb-6">El apartado de instalaciones se centra en reflejar cualquier incidente o desperfecto relacionado con el estado de las instalaciones donde se celebra el partido. Estos incidentes pueden incluir problemas con los vestuarios, el terreno de juego, iluminación, elementos obligatorios según reglamento (como banderines de esquina), entre otros. La redacción debe ser precisa y detallada, incluyendo las siguientes pautas:</p>
      <ol class="list-decimal pl-6 space-y-1 text-muted-foreground mb-6">
        <li><strong>Momento de la detección:</strong> Antes, durante o después del partido.</li>
        <li><strong>Deficiencia identificada:</strong> Describir con detalle el problema.</li>
        <li><strong>Comunicación al responsable:</strong> Reflejar que fue informado y sus alegaciones (en la mayoría de casos, el responsable de las instalaciones es el delegado de campo).</li>
        <li><strong>Medidas adoptadas:</strong> Soluciones implementadas o consecuencias del problema (retraso, suspensión, etc.).</li>
      </ol>

      <div class="space-y-4">
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            6.1 Incidentes por Climatología
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <h4 class="font-semibold text-foreground">6.1.1 Nieve sobre el terreno de juego</h4>
            <p class="font-semibold mt-2">Ejemplo 1:</p>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - El partido tuvo que comenzar con 15 minutos de retraso debido a que, una hora antes de la hora prevista para el inicio del encuentro, el terreno de juego estaba cubierto por una capa de nieve de unos 3 cm de espesor, imposibilitando la visibilidad de las líneas y el rodamiento del balón. Informado el Delegado de Campo, este comunicó que los operarios del club procederían a la retirada de la nieve. Finalmente, el partido comenzó a las 17:15 tras subsanar el problema.</code></pre>
            <p class="font-semibold mt-2">Ejemplo 2:</p>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - En el minuto 68, detuve momentáneamente el partido debido a la acumulación de nieve sobre las líneas que delimitan el terreno de juego y las áreas. La retirada de la nieve tomó 15 minutos. Posteriormente, en el minuto 75, decidí suspender definitivamente el partido por la intensidad de la nevada, que hacía peligrosa la práctica deportiva.\n\nOtras Incidencias (Suspensión) - Debido a los incidentes reflejados en el apartado ‘Instalaciones’, decidí suspender definitivamente el partido tras comprobar que las condiciones meteorológicas no mejoraban. En el momento de la suspensión, el equipo local defendía la portería izquierda según la salida del túnel de vestuarios, mientras que el equipo visitante defendía la portería derecha. El resultado era ATLÉTICO HERGÉ (2) - MORRIS C.F. (1). En el momento de la suspensión se disponía a sacar de meta el equipo local. El saque de inicio del partido lo realizó el equipo visitante.</code></pre>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            6.2 Problemas con los Vestuarios
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <h4 class="font-semibold text-foreground">6.2.1 Ausencia de agua caliente</h4>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - El vestuario arbitral no disponía de agua caliente, según el Delegado de Campo, debido a una avería registrada en semanas previas.</code></pre>
          </div>
        </details>
        
        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            6.3 Elementos Reglamentarios Faltantes
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <h4 class="font-semibold text-foreground">6.3.1 No reducción de las porterías en categorías aplicables</h4>
            <pre class="bg-muted/50 p-2 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones – Debido al motivo [X] el club local me comunica que no puede reducir las dimensiones de la portería 30cm, siendo de carácter obligatorio. Por este motivo, decido no comenzar el partido.</code></pre>
            <p>Se deberá añadir en ‘Otras Incidencias’ la suspensión oficial del partido. Hacer uso del ‘MANUAL 7 Otras Incidencias’ para redactarlo.</p>
          </div>
        </details>

        <details class="group border rounded-lg p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-lg text-primary">
            6.4 Casos Prácticos de Incidentes Relacionados con las Instalaciones
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
          </summary>
          <div class="mt-4 text-muted-foreground space-y-4">
            <ol class="list-decimal pl-5 space-y-4">
              <li><strong>Desgaste de las líneas por lluvia:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - En el minuto 85, debido a la intensa lluvia, la frontal del área de penal más cercana a la cantina se borró parcialmente. A pesar de ello, el partido pudo continuar con normalidad.</code></pre></li>
              <li><strong>Capa de hielo antes del partido:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - Durante la inspección previa al partido, detectamos una capa de hielo en el terreno de juego debido a las bajas temperaturas y nevadas previas. Informado el Delegado de Campo, este indicó que disponían de un sistema para eliminar el hielo. A pesar de sus esfuerzos, el partido comenzó con un retraso de 15 minutos.</code></pre></li>
              <li><strong>Iluminación baja:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - En el minuto 35, uno de los focos de la torre sur dejó de funcionar, reduciendo significativamente la visibilidad en el área de penal situada en ese extremo del campo. Informado el Delegado de Campo, este intentó solucionar el problema sin éxito, por lo que el partido se reanudó bajo condiciones de visibilidad parcial.</code></pre></li>
              <li><strong>Iluminación insuficiente:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - En el minuto 35, uno de los focos de la torre sur dejó de funcionar, reduciendo significativamente la visibilidad en el área de penal situada en ese extremo del campo. Informado el Delegado de Campo, este intentó solucionar el problema sin éxito, por lo que el partido se suspendió.\n\nOtras Incidencias- En el minuto 35 debido a los motivos reflejados en el apartado ‘Instalaciones’ decido suspender el partido. En el momento de la suspensión, el equipo local defendía la portería izquierda según la salida del túnel de vestuarios, mientras que el equipo visitante defendía la portería derecha. El resultado era ATLÉTICO HERGÉ (2) - MORRIS C.F. (1). En el momento de la suspensión se disponía a sacar de meta el equipo local. El saque de inicio del partido lo realizó el equipo visitante.</code></pre></li>
              <li><strong>Porterías no reglamentarias:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - Durante la revisión previa, comprobé que las dimensiones de las porterías no cumplían con las medidas reglamentarias. Informado el Delegado de Campo, se ajustaron las porterías a los estándares requeridos, comenzando el partido con 10 minutos de retraso.</code></pre></li>
              <li><strong>Estado del terreno de juego:</strong><pre class="bg-muted/50 p-2 mt-1 rounded-md whitespace-pre-wrap font-code text-sm"><code>Instalaciones - El terreno de juego presentaba zonas levantadas en varios puntos, lo que dificulta el rodamiento del balón. Informado el Delegado de Campo, no se pudo solucionar el problema antes del inicio del encuentro. Se permitió jugar tras la conformidad de ambos equipos sin que esto supusiera un peligro en la seguridad de los jugadores.</code></pre></li>
            </ol>
            <h4 class="font-semibold text-foreground pt-4">Consideraciones para los Casos Prácticos:</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Precisión:</strong> Es fundamental incluir detalles como el momento de la incidencia, su ubicación, acciones tomadas y consecuencias.</li>
              <li><strong>Notificación al Delegado de Campo:</strong> Siempre reflejar que se comunicó el problema y sus alegaciones.</li>
              <li><strong>Impacto en el partido:</strong> Describir si hubo retrasos, detenciones o suspensiones, y cómo se resolvió la situación.</li>
            </ul>
          </div>
        </details>
      </div>
    `
};

    
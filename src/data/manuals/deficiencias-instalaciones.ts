import type { Document } from '@/lib/types';

export const deficienciasInstalaciones: Document = {
  id: 'deficiencias-instalaciones',
  title: 'Manual 6: Deficiencias en las Instalaciones',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">6. Deficiencias en las Instalaciones</h2>
      <p>Este apartado cubre desperfectos en vestuarios, terreno de juego, iluminación, etc.</p>
      <p><strong>Pautas de redacción:</strong></p>
      <ol class="list-decimal pl-6 space-y-1">
        <li><strong>Momento de la detección:</strong> Antes, durante o después del partido.</li>
        <li><strong>Deficiencia identificada:</strong> Descripción detallada.</li>
        <li><strong>Comunicación al responsable:</strong> Reflejar que se informó al delegado de campo y sus alegaciones.</li>
        <li><strong>Medidas adoptadas:</strong> Soluciones o consecuencias (retraso, suspensión).</li>
      </ol>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Ejemplos de Casos Prácticos</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">Nieve sobre el terreno de juego.</td><td class="border p-2">"El partido tuvo que comenzar con 15 minutos de retraso debido a que el terreno de juego estaba cubierto por una capa de nieve, imposibilitando la visibilidad de las líneas. Informado el Delegado de Campo, los operarios del club procedieron a su retirada."</td></tr>
        <tr><td class="border p-2">Ausencia de agua caliente en vestuarios.</td><td class="border p-2">"El vestuario arbitral no disponía de agua caliente, según el Delegado de Campo, debido a una avería."</td></tr>
        <tr><td class="border p-2">Falta de banderines de esquina.</td><td class="border p-2">"El terreno de juego no contaba con los banderines de esquina reglamentarios. El Delegado de Campo indicó que habían sido robados. Ambos equipos aceptaron disputar el encuentro sin ellos."</td></tr>
        <tr><td class="border p-2">Iluminación insuficiente que provoca suspensión.</td><td class="border p-2">"Instalaciones - En el minuto 35, uno de los focos de la torre sur dejó de funcionar, reduciendo significativamente la visibilidad. Informado el Delegado de Campo, intentó solucionar el problema sin éxito, por lo que el partido se suspendió.<br/><br/>Otras Incidencias - En el minuto 35, debido a los motivos reflejados en 'Instalaciones', decido suspender el partido..." (Añadir detalles de la suspensión).</td></tr>
      </tbody></table></div>
    `
};

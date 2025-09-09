import type { Document } from '@/lib/types';

export const publico: Document = {
  id: 'publico',
  title: 'Manual 5: Público',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">5. Público</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.1 Introducción</h3>
      <p>Recoge incidentes con espectadores: lanzamiento de objetos, insultos, pancartas no permitidas, invasiones de campo, emergencias médicas, etc.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.2 Principios Generales de Redacción</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Identificar el sector del público.</li>
        <li>Describir qué, dónde, cuándo y cuántas personas.</li>
        <li>Detallar consecuencias y acciones tomadas (detención, aviso, etc.).</li>
        <li>Ser objetivo, sin valoraciones personales.</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.4 Protocolo de Lanzamiento de Objetos</h3>
      <p>El árbitro puede activar 3 medidas según la gravedad:</p>
      <ol class="list-decimal pl-6 space-y-1">
        <li><strong>Medida 1: Detención temporal.</strong> Se avisa al delegado para que advierta por megafonía.</li>
        <li><strong>Medida 2: Suspensión momentánea.</strong> Si persiste, los equipos se retiran a vestuarios.</li>
        <li><strong>Medida 3: Suspensión definitiva.</strong> Si la conducta persiste o es extremadamente grave.</li>
      </ol>
      <p><strong>Ejemplo Medida 1:</strong> "En el minuto 34, desde la grada sur, ocupada por aficionados visitantes, se lanzaron 2 botellas de plástico llenas, una piedra y un mechero. Ninguno impactó. Detuve el partido, comuniqué al delegado que advirtiera por megafonía. Tras 6 minutos, se reanudó."</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.5 En el Caso de Invasión de Campo</h3>
      <p>Reflejar en el acta: minuto, cantidad de aficionados, identificación, comportamiento, consecuencias y acciones tomadas.</p>
      <p><strong>Ejemplo Invasión Pacífica:</strong> "En el minuto 72, tras un gol local, aprox. 20 aficionados locales ingresaron al campo para abrazar a los jugadores. No hubo daños. Abandonaron el campo por sus propios medios tras 3 minutos de detención."</p>
      <p><strong>Ejemplo Invasión con Suspensión Definitiva:</strong> "En el minuto 78, tras un penalti, aprox. 50 aficionados locales ingresaron con actitud violenta hacia el equipo arbitral. Nos retiramos a vestuarios. La fuerza pública no pudo garantizar la seguridad, por lo que suspendí definitivamente el partido." (Añadir detalles en 'Otras Incidencias').</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.6 Protocolo de Actuación sobre la Violencia Verbal</h3>
      <p>Cubre insultos, amenazas y manifestaciones racistas, xenófobas, etc. Es una copia del protocolo ya existente en su sección.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.7 Desvanecimientos o Incidentes de Salud</h3>
      <p>Detallar minuto, ubicación, tipo de incidente, asistencia médica y medidas tomadas (reanudación o suspensión).</p>
      <p><strong>Ejemplo:</strong> "En el minuto 86 detuve el partido porque una persona en la grada sur sufrió un ataque epiléptico. Los servicios médicos del estadio acudieron. Una vez evacuada, el partido se reanudó tras 3 minutos."</p>
    `
};

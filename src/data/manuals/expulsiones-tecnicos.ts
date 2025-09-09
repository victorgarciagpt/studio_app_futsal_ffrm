import type { Document } from '@/lib/types';

export const expulsionesTecnicos: Document = {
  id: 'expulsiones-tecnicos',
  title: 'Manual 4.2: Expulsiones a Técnicos',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.2 Expulsiones a Dirigentes y Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.1 Principios Generales</h3>
      <p>Las expulsiones se reflejan en "Expulsiones de Dirigentes/Técnicos". Si ocurren fuera del campo durante el descanso, se informa verbalmente.</p>
      <p><strong>Aspectos a Reflejar:</strong> Puesto, nombre completo, minuto y descripción precisa.</p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo de la expulsión]."</code></pre>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.2 Pautas de Redacción</h3>
      <p><strong>Infracciones Verbales:</strong> ¿Usó lenguaje ofensivo, insultante o humillante? Anotar palabras exactas.</p>
      <p><strong>Infracciones Conductuales:</strong> ¿Comportamiento violento? ¿Interferencia en el juego? ¿Abandonó el área técnica?</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.3 Ejemplos de Expulsiones</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">Un técnico lanza un balón al campo desde el banquillo.</td><td class="border p-2">"En el minuto 70, expulsé al entrenador local D. XXX por el lanzamiento de un balón desde el banquillo al terreno de juego, interrumpiendo el desarrollo normal del partido."</td></tr>
        <tr><td class="border p-2">Un fisioterapeuta insulta al árbitro asistente.</td><td class="border p-2">"En el minuto 53, expulsé al fisioterapeuta visitante D. XXX por dirigirse al árbitro asistente nº 1 en los siguientes términos: '¡Eres un hijo de puta!'."</td></tr>
        <tr><td class="border p-2">Tras finalizar el partido, un técnico insulta al árbitro.</td><td class="border p-2">"Una vez finalizado el partido y estando aún sobre el terreno de juego, el segundo entrenador visitante D. XXX se dirigió al trío arbitral con actitud amenazante, diciendo: '¡Sois unos maricones, os vais a cagar!'."</td></tr>
        <tr><td class="border p-2">Un entrenador es expulsado por lanzamiento de balón sin identificar autor.</td><td class="border p-2">"Expulsión al entrenador D.XXX en el minuto 70 por el lanzamiento de un balón desde su banquillo y que interfirió en el juego, sin poder identificar el autor del lanzamiento y siendo él como entrenador el responsable del banquillo."</td></tr>
      </tbody></table></div>
    `
};

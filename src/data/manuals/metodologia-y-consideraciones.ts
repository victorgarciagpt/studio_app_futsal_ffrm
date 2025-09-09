
import type { Document } from '@/lib/types';

export const metodologia: Document = {
  id: 'metodologia-y-consideraciones',
  title: 'Manual 1: Metodología y Consideraciones',
  category: 'manuals',
  updatedAt: '2025-07-01',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">1. Metodología para realizar un acta</h2>
      <p class="mb-4">El acta del partido es un documento oficial y público que cumple con las siguientes funciones y características clave para su realización:</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.1 Función del Acta</h3>
      <p><strong>Propósito:</strong> Registrar de forma fiel, objetiva y precisa los datos relativos al partido.</p>
      <p><strong>Contenido Principal:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Lugar y fecha del partido.</li>
        <li>Equipos participantes.</li>
        <li>Incidencias ocurridas antes, durante y al término del partido.</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.2 Responsabilidad del Árbitro</h3>
      <p><strong>Encargado de la Redacción:</strong> El árbitro principal es el responsable de redactar el acta, siendo redactada en primera persona por él mismo.</p>
      <p><strong>Requisitos de la Redacción:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Descripción objetiva y fiel de los sucesos acontecidos.</li>
        <li>Exclusión de juicios de valor, evitar subjetividades ni calificar hechos.</li>
        <li>Uso de un lenguaje claro y técnico.</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.3 Registro de Incidentes</h3>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.3.1 Minutaje en tiempo de descuento</h4>
      <p>Los incidentes ocurridos en tiempo de descuento (añadido) deben reflejarse con el siguiente formato:</p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Primera Parte: 45+X.</li>
        <li>Final del Partido: 90+X.</li>
        <li>Primera Parte de la Prórroga: 105+X.</li>
        <li>Segunda Parte de la Prórroga: 120+X.</li>
      </ul>
      <p><strong>Ejemplos:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Un incidente en el segundo minuto de descuento de la primera parte: 45+2.</li>
        <li>Un incidente en el séptimo minuto de descuento del final del partido: 90+7.</li>
      </ul>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.3.2 Incidentes ocurridos antes de comenzar o al finalizar el partido</h4>
      <p>Los incidentes que ocurran antes de comenzar o tras finalizar el partido no se deben acompañar de ningún minuto, simplemente indicar que suceden antes o después del partido y el lugar en el que ocurren (sobre el terreno de juego, en la zona de vestuarios, etc).</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.4 Conceptos Fundamentales y Terminología en la Redacción de Actas</h3>
      <p class="mb-4">La redacción de un acta arbitral debe ser objetiva, clara y precisa. Para garantizar la comprensión y estandarización de los incidentes reportados, es fundamental utilizar una terminología técnica y uniforme en las descripciones de los hechos.</p>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Términos Técnicos Recomendados</h4>
      <p><strong>1. Acciones de Juego Relacionadas con Sanciones Disciplinarias:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Imprudente:</strong> Acción que muestra falta de atención o cuidado sin precaución hacia el adversario. No sanción disciplinaria. No aplicable en agarrones.</li>
        <li><strong>Temeraria:</strong> Acción que conlleva riesgo físico para el adversario y requiere amonestación. No aplicable en agarrones.</li>
        <li><strong>Uso de fuerza excesiva:</strong> Acción que pone en peligro la integridad física del adversario y requiere expulsión. No aplicable en agarrones.</li>
        <li><strong>Ataque Prometedor:</strong> Una acción ofensiva que tiene potencial para generar una oportunidad de gol.</li>
        <li><strong>Ocasión Manifiesta de Gol (OMG):</strong> Una situación en la que un jugador tiene una oportunidad clara y directa de marcar gol.</li>
      </ul>
      <p class="mt-2"><strong>2. Incidentes Verbales o de Conducta:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Protesta de forma airada:</strong> Gestos o palabras que reflejan disconformidad exagerada hacia una decisión arbitral.</li>
        <li><strong>Lenguaje ofensivo, insultante o humillante:</strong> Uso de expresiones que atentan contra la dignidad de los participantes. Conlleva la expulsión.</li>
        <li><strong>Conducta antideportiva:</strong> Cualquier comportamiento contrario a las normas del juego limpio. Conlleva amonestación.</li>
      </ul>
      <p class="mt-2"><strong>3. Terminología Relacionada con el Público:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Violencia verbal:</strong> Insultos, amenazas o manifestaciones xenófobas, racistas, sexistas o intolerantes.</li>
        <li><strong>Lanzamiento de objetos:</strong> Acciones que impliquen arrojar elementos al terreno de juego o a los participantes.</li>
      </ul>
      <p class="mt-2"><strong>4. Instalaciones y Terreno de Juego:</strong></p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Deficiencias del terreno:</strong> Condiciones que impiden el desarrollo normal del juego (charcos, hielo, nieve, barro, líneas poco visibles).</li>
        <li><strong>Deficiencias en instalaciones:</strong> Problemas en los vestuarios, iluminación, porterías, etc.</li>
      </ul>

      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Equivalencias de Términos Coloquiales</h4>
      <p>A continuación, se detallan algunos términos coloquiales frecuentes que deberán ser transformados en su equivalente técnico:</p>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Término Coloquial</th><th class="border p-2">Terminología Técnica</th></tr></thead><tbody><tr><td class="border p-2">"Contraataque"</td><td class="border p-2">Ataque prometedor</td></tr><tr><td class="border p-2">"OMG"</td><td class="border p-2">Ocasión manifiesta de gol</td></tr><tr><td class="border p-2">"Solo contra el portero"</td><td class="border p-2">Ocasión manifiesta de gol</td></tr><tr><td class="border p-2">"Entrada dura"</td><td class="border p-2">Uso de fuerza excesiva</td></tr><tr><td class="border p-2">"Se queja mucho"</td><td class="border p-2">Protesta de forma airada</td></tr><tr><td class="border p-2">"Insulto"</td><td class="border p-2">Lenguaje ofensivo, insultante o humillante</td></tr><tr><td class="border p-2">"Problema en el césped"</td><td class="border p-2">Deficiencia del terreno</td></tr></tbody></table></div>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Cómo Incorporar los Términos en la Redacción</h4>
      <p>Es obligatorio que todas las acciones que impliquen sanciones disciplinarias estén acompañadas de su descripción técnica correspondiente. La ausencia de estos términos puede dar lugar a interpretaciones erróneas o inconsistentes.</p>
      <p class="mt-2"><strong>Ejemplo de Redacción Incorrecta:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 42, el jugador nº10 fue expulsado por una falta muy dura sobre un adversario."</code></pre>
      <p class="mt-2"><strong>Ejemplo de Redacción Correcta:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 42, el jugador nº10 del equipo local fue expulsado por realizar una entrada con uso de fuerza excesiva sobre el jugador nº8 del equipo visitante, clavando sus tacos en la espinilla del rival, poniendo en peligro la integridad física de su adversario."</code></pre>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Recomendaciones para Árbitros</h4>
      <ol class="list-decimal pl-6 space-y-1">
        <li><strong>Evitar Ambigüedades:</strong> No utilices términos genéricos como "duro", "fuerte", o "peligroso" sin añadir la descripción técnica que corresponde.</li>
        <li><strong>Usar Siempre los Términos Técnicos:</strong> Si tienes dudas sobre cómo calificar una acción, consulta este manual para elegir el término correcto.</li>
        <li><strong>Describir el Contexto:</strong> Complementa la terminología técnica con información relevante como la posición en el campo, el minuto del incidente y las consecuencias de la acción.</li>
      </ol>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.5 Firma del acta</h3>
      <p>Al finalizar el partido la APP utilizada por los árbitros de la Región de Murcia solicitará un código numérico para que el acta quede firmada por los delegados de ambos equipos. Existen varios motivos por los que un delegado puede no firmar el acta:</p>
      <ul class="list-disc pl-6 space-y-1">
        <li>No se sabe o no se acuerda del código</li>
        <li>No se encuentra presente en el campo</li>
        <li>El delegado ha sido previamente expulsado durante el partido</li>
        <li>El delegado se niega a firmar el acta (indicar los motivos)</li>
        <li>Otros motivos</li>
      </ul>
      <p class="mt-2">En estos casos no se debe reflejar nada en el apartado de actas, simplemente cuando se va a finalizar el acta, se indica en el desplegable de la app el motivo por el cual no firma el acta y posteriormente se finaliza el acta.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.6 Nota de Importancia</h3>
      <p>El acta debe garantizar:</p>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Neutralidad:</strong> Enfatizando hechos verificables.</li>
        <li><strong>Claridad:</strong> Facilitando su comprensión por terceras partes.</li>
        <li><strong>Precisión:</strong> Cumpliendo con las normas establecidas para su elaboración.</li>
      </ul>
    `,
};

    
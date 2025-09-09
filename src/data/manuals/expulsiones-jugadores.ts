import type { Document } from '@/lib/types';

export const expulsionesJugadores: Document = {
  id: 'expulsiones-jugadores',
  title: 'Manual 3.2: Expulsiones de Jugadores',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.2 Expulsiones de Jugadores (Tarjetas Rojas)</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.2.1 Principios Generales</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Definición:</strong> Las expulsiones deben reflejarse en el apartado Expulsiones de Jugadores.</li>
        <li><strong>Incidentes Especiales:</strong> Durante el descanso y fuera del terreno de juego (ej. vestuarios), la expulsión se informa verbalmente, sin mostrar tarjeta roja.</li>
        <li><strong>Aspectos Obligatorios:</strong> Número del jugador, nombre, minuto, descripción precisa y posibles consecuencias (asistencia médica, etc.).</li>
      </ul>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.2.2 Criterios para Redacción de Expulsiones</h3>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Infracciones de Carácter Físico</h4>
      <p>Palabras clave: <strong>Uso de fuerza excesiva</strong>, <strong>brutalidad</strong>, <strong>Ocasión manifiesta de gol</strong>.</p>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Infracciones de Carácter Verbal</h4>
      <p>Palabras clave: <strong>Lenguaje ofensivo, insultante o humillante</strong>. Registrar palabras exactas.</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.2.3 Categorías de Expulsión</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>A) Juego Brusco Grave:</strong> Infracciones con uso de fuerza excesiva. Ejemplo: "Entrada con los tacos, impactando en el gemelo del adversario y poniendo en peligro su integridad física."</li>
        <li><strong>B) Conducta Violenta:</strong> Agresiones sin balón en juego. Ejemplo: "Propinar un puñetazo en la cara de un adversario, sin estar el balón en juego."</li>
        <li><strong>C) Confrontaciones Colectivas:</strong> Identificar a los infractores principales.</li>
        <li><strong>D) Ocasión Manifiesta de Gol:</strong> Evitar una OMG sin disputa de balón o con mano deliberada. Ejemplo: "Tocar el balón deliberadamente con la mano, evitando una ocasión manifiesta de gol rival."</li>
        <li><strong>E) Lenguaje o Gestos Ofensivos:</strong> Insultos, gestos obscenos. Ejemplo: "Dirigirse al árbitro en los siguientes términos: 'Eres un hijo de puta'."</li>
        <li><strong>F) Otros motivos:</strong> Doble amonestación; Escupir a un adversario.</li>
      </ul>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.2.4 Casos Prácticos de Expulsiones</h3>
      <p><strong>Juego Brusco Grave:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº6 D.YYY en el minuto 89 por realizar una entrada con los tacos en forma de plancha, impactando en la pierna del adversario, poniendo en peligro su integridad física.</code></pre>
      <p><strong>Insultos al equipo arbitral:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Expulsión al dorsal nº11 D.XXX en el minuto 53 por dirigirse al árbitro asistente en los siguientes términos: "Eres un hijo de puta".</code></pre>
      <p><strong>Evitar OMG con mano deliberada fuera del área:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº1 D.XXX en el minuto 84’ por: evitar una ocasión manifiesta de gol rival mediante una mano deliberada fuera del área.</code></pre>
    `
};

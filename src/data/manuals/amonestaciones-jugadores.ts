import type { Document } from '@/lib/types';

export const amonestacionesJugadores: Document = {
  id: 'amonestaciones-jugadores',
  title: 'Manual 3.1: Amonestaciones a Jugadores',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.1 Amonestaciones a Jugadores (Tarjetas Amarillas)</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.1.1 Principios Generales</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Definición:</strong> Las amonestaciones a jugadores y suplentes ocurridas durante el partido (1ª parte, 2ª parte, prórroga y tanda de penaltis) deben reflejarse en el apartado Amonestaciones de Jugadores.</li>
        <li><strong>Incidentes Especiales:</strong> Si la infracción ocurre durante el descanso y fuera del terreno de juego (ej. vestuarios), no se muestra la tarjeta. La amonestación se informa verbalmente.</li>
        <li><strong>Elementos Obligatorios:</strong> Número del jugador, nombre, minuto y motivo.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº[x] D. [Nombre] en el minuto [x] por: [motivo].</code></pre>
        </li>
      </ul>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.1.2 Criterios para Redacción del Motivo</h3>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Infracciones de Carácter Físico</h4>
      <p>Palabras clave: <strong>Temeraria</strong> (para fuerza de la entrada), <strong>Ataque prometedor</strong> (para evitar ocasión). No usar "fuerza excesiva", que implica roja.</p>
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">Infracciones de Carácter Verbal</h4>
      <p>Palabras clave: <strong>En señal de protesta</strong>, <strong>Gestos provocadores</strong>. No incluir insultos o amenazas, que implican roja.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.1.3 Ejemplos de Motivos de Amonestaciones</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>A) Faltas y Derribos:</strong> Derribar/Zancadillear de forma temeraria; Derribar evitando un ataque prometedor; Empujar de forma temeraria; Golpear en el rostro con el brazo extendido de forma temeraria.</li>
        <li><strong>B) Entradas y Salidas Indebidas:</strong> Abandonar/Reingresar al terreno de juego sin autorización.</li>
        <li><strong>C) Manos:</strong> Tocar el balón con la mano evitando un ataque prometedor; intentando marcar un gol; intentando evitar un gol sin conseguirlo.</li>
        <li><strong>D) Celebración de un Gol:</strong> Realizar gestos provocativos; Quitarse la camiseta; Generar problemas de seguridad (subirse a vallas).</li>
        <li><strong>E) Pérdida de Tiempo:</strong> Alejar el balón; Retrasar un saque; Continuar jugando con el juego detenido; Retrasar una sustitución.</li>
        <li><strong>F) Simulación:</strong> Simular haber sido objeto de infracción para engañar al árbitro.</li>
        <li><strong>G) Juego Peligroso:</strong> Disputar el balón en forma de "plancha"; Elevar la pierna por encima de la cintura.</li>
        <li><strong>H) Distancia Reglamentaria:</strong> No respetar la distancia en un tiro libre o saque.</li>
        <li><strong>I) Observaciones de Orden Técnico:</strong> Formular protestas verbales o gestuales.</li>
        <li><strong>J) Agarrones y sujeciones:</strong> Sujetar a un adversario impidiendo un ataque prometedor; Sujetar de manera ostensible.</li>
        <li><strong>K) Infracciones de penalti y amonestación:</strong> Evitar un gol con mano involuntaria; Derribar de forma imprudente/temeraria evitando una OMG pero intentando jugar el balón; Sujetar a un adversario.</li>
        <li><strong>L) Otras:</strong> Infringir persistentemente las Reglas; Discutir con un contrario; Empujar sin balón en juego; Obstaculizar al portero; Llevar joyería; Cambiarse de puesto con el portero sin permiso.</li>
      </ul>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.1.4 Casos Prácticos de Amonestaciones</h3>
      <p><strong>Derribar a un adversario de forma temeraria:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº15 D.XXX en el minuto 21' por derribar a un adversario en la disputa del balón mediante una zancadilla, de forma temeraria.</code></pre>
      <p><strong>Jugador protesta una decisión del árbitro:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº13 D.YYY en el minuto 77' por desaprobar con palabras una decisión mía en los siguientes términos: "Has fallado y lo sabes, te has equivocado".</code></pre>
      <p><strong>Jugador se quita la camiseta en la celebración de un gol:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>Dorsal nº16 D.XXX en el minuto 98' por despojarse de su camiseta en la celebración de un gol.</code></pre>
    `
};

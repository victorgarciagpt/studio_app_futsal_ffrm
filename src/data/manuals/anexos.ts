import type { Document } from '@/lib/types';

export const anexos: Document = {
  id: 'anexos',
  title: 'Manual 8: Anexos',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">8. Anexo</h2>
      <p>El anexo se utiliza para reflejar situaciones que ocurren fuera del marco temporal o espacial del partido (ej. tras haber entregado el acta o abandonado las instalaciones) o para ampliar información olvidada. Permite detallar incidentes que pueden tener implicaciones disciplinarias importantes.</p>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">8.1 Directrices para el Anexo</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Circunstancias Especiales:</strong> Solo para situaciones relevantes con impacto en la competición (amenazas, agresiones post-partido, etc.).</li>
        <li><strong>Plazos:</strong> Presentarse dentro de las 24 horas siguientes a la finalización del partido.</li>
        <li><strong>Redacción:</strong> Describir con claridad y precisión: hora, lugar, identidades, declaraciones literales y conductas observadas. Ser objetivo.</li>
      </ul>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">8.2 Ejemplos de Redacción para el Anexo</h3>
      <p><strong>Ejemplo 1:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez que me disponía a abandonar las instalaciones deportivas, en la salida de las mismas hacia la calle, me encontré con el Delegado del C.D. Ejemplo, quien se dirigió a mí en los siguientes términos de manera literal: ‘Sí, sí, te estoy esperando para decirte lo malo que eres, árbitro. Vaya la que nos has liado hoy’. Junto con este oficial se encontraban tres aficionados, uno de ellos portando el chándal de este club, quien adoptó una actitud amenazante y agresiva mientras decía textualmente: ‘¡Más te vale no volver por aquí porque no sales vivo, niñato!’."</code></pre>
      <p><strong>Ejemplo 2:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Nuestra salida del vestuario y del recinto deportivo tuvo que ser escoltada en todo momento por la policía. A la salida del vestuario, se encontraban varios directivos del club local, quienes en reiteradas ocasiones nos increparon e insultaron con frases como: ‘Os vamos a matar, putas ratas, os vais a morir’. Durante este incidente, una persona, a quien no fue posible identificar, intentó propinar un puñetazo a uno de mis asistentes, sin llegar a impactarle. Posteriormente, esta persona huyó de las inmediaciones del estadio."</code></pre>
    `
};

import type { Document } from '@/lib/types';

export const otrasIncidencias: Document = {
  id: 'otras-incidencias',
  title: 'Manual 7: Otras Incidencias',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">7. Otras Incidencias</h2>
      <p>Se refleja cualquier incidencia sin cabida en otros apartados: lesiones del equipo arbitral, accesos indebidos al vestuario, retrasos, no uso del balón oficial, prórrogas, penaltis y suspensiones.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.1 Lesiones o Daños a Miembros del Equipo Arbitral</h3>
      <p><strong>Ejemplo:</strong> "En el minuto 80, sufrí un fuerte dolor en el gemelo derecho, imposibilitándome continuar. Tras ser atendido por el fisio local, mi asistente Nº X asumió el rol de árbitro principal. Se adjunta parte médico."</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.2 Acceso Indebido al Vestuario Arbitral</h3>
      <p><strong>Ejemplo:</strong> "Una vez finalizado el partido, accedió al vestuario arbitral una persona que se identificó como el Presidente del C.D. Ejemplo para decirme de forma irónica: '¡Árbitro hoy te has lucido! Ha sido vergonzoso'."</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.3 Retrasos en el Comienzo del Partido</h3>
      <p><strong>Ejemplo:</strong> "El partido comenzó con 5 minutos de retraso debido a que el C.D. Ejemplo retrasó su salida de los vestuarios pese a nuestras reiteradas insistencias."</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.5 Resultado con Prórroga y/o Penaltis</h3>
      <p><strong>Ejemplo:</strong> "Finalizado el partido tras los 90 minutos con resultado de 1-1, se procedió con una prórroga, alcanzando el resultado final de 2-1."</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.7 Suspensión del Partido</h3>
      <p>La suspensión siempre se registra en "Otras Incidencias", pero el motivo se detalla en el apartado correspondiente (Público, Instalaciones, etc.).</p>
      <p><strong>Suspensión ANTES del inicio (Incomparecencia):</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Tras la espera reglamentaria de 30 minutos desde la hora señalada para el inicio, el C.D. Ejemplo no compareció, procediendo a la suspensión del encuentro."</code></pre>
      <p><strong>Suspensión DURANTE el partido:</strong></p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 72 de partido y debido a los incidentes reflejados en el apartado Público, decidí suspender definitivamente el encuentro. El equipo local defendía en el campo situado a la izquierda... y debía ejecutar un saque de meta. El resultado era 1-0."</code></pre>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">7.8 Reanudación de un partido suspendido</h3>
      <p>Si la suspensión fue antes del inicio, se considera un partido nuevo. Si fue durante, se reanuda desde el punto exacto de interrupción, respetando jugadores, sanciones y sustituciones.</p>
    `
};

import type { Document } from './types';

export const competitions: Document[] = [
  {
    id: 'reglamento-general',
    title: 'Reglamento General',
    category: 'competitions',
    updatedAt: '2024-05-15',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Artículo 1: Objeto y Ámbito</h2>
      <p class="mb-4">El presente reglamento tiene por objeto regular la organización y desarrollo de todas las competiciones oficiales de fútbol y fútbol sala en el ámbito de la Federación de Fútbol de la Región de Murcia (FFRM).</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Artículo 2: Licencias</h2>
      <p class="mb-4">Todos los jugadores, entrenadores y árbitros deberán estar en posesión de la licencia federativa correspondiente para la temporada en curso. La no presentación de la licencia antes del inicio del encuentro será sancionada conforme al código disciplinario.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Artículo 3: Terrenos de Juego</h2>
      <p>Los partidos se disputarán en terrenos de juego que cumplan con las dimensiones y características establecidas en las Reglas de Juego de la FIFA y las normativas específicas de la FFRM. El árbitro es la máxima autoridad para decidir sobre la practicabilidad del terreno de juego.</p>
    `,
  },
  {
    id: 'codigo-disciplinario',
    title: 'Código Disciplinario',
    category: 'competitions',
    updatedAt: '2024-06-01',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Capítulo I: Infracciones y Sanciones</h2>
      <p class="mb-4">Se consideran infracciones todas aquellas acciones u omisiones que contravengan las normas de juego o las disposiciones reglamentarias. Las sanciones podrán ser de carácter deportivo y/o económico.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Capítulo II: Tipos de Sanciones</h2>
      <p>Las sanciones se clasifican en leves, graves y muy graves. La reincidencia será un agravante en la imposición de la sanción correspondiente.</p>
    `,
  },
];

export const protocols: Document[] = [
  {
    id: 'protocolo-conmocion-cerebral',
    title: 'Protocolo de Conmoción Cerebral',
    category: 'protocols',
    updatedAt: '2024-04-20',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">1. Reconocimiento de los Síntomas</h2>
      <p class="mb-4">Ante cualquier golpe en la cabeza, el árbitro debe detener el juego y solicitar la asistencia médica. Síntomas a observar: pérdida de conocimiento, confusión, mareos, visión borrosa, cefalea.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">2. Actuación</h2>
      <p>Si se sospecha de una conmoción cerebral, el jugador NO PODRÁ reincorporarse al juego bajo ninguna circunstancia. El árbitro deberá reflejarlo en el acta del partido, detallando el incidente y la retirada del jugador.</p>
    `,
  },
  {
    id: 'protocolo-violencia-verbal',
    title: 'Protocolo contra la Violencia Verbal',
    category: 'protocols',
    updatedAt: '2024-05-10',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Fase 1: Advertencia</h2>
      <p class="mb-4">El árbitro advertirá al delegado de campo sobre los insultos o cánticos ofensivos provenientes de la grada. Se podrá anunciar por megafonía.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Fase 2: Detención Temporal</h2>
      <p class="mb-4">Si la conducta persiste, el árbitro podrá detener el partido temporalmente, enviando a los equipos a vestuarios.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Fase 3: Suspensión</h2>
      <p>Como última medida, si la violencia verbal no cesa, el árbitro suspenderá definitivamente el encuentro, consignando todos los hechos en el acta.</p>
    `,
  },
];

export const manuals: Document[] = [
  {
    id: 'redaccion-actas',
    title: 'Guía de Redacción de Actas',
    category: 'manuals',
    updatedAt: '2024-07-01',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Sección 1: Datos del Encuentro</h2>
      <p class="mb-4">Rellenar de forma clara y sin tachaduras todos los campos relativos a los equipos, fecha, hora, competición y terreno de juego.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Sección 2: Alineaciones e Incidencias</h2>
      <p class="mb-4">Verificar las licencias y dorsales de todos los participantes. Anotar sustituciones, goles y amonestaciones/expulsiones en los apartados correspondientes, especificando el minuto y motivo de forma concisa y reglamentaria.</p>
      <h2 class="font-headline text-2xl font-bold mb-4">Sección 3: Anexo al Acta</h2>
      <p>Utilizar el anexo para describir de forma detallada y objetiva cualquier incidente no reflejado en los apartados estándar, como incidentes con el público, lesiones graves o deficiencias en las instalaciones.</p>
    `,
  },
];

export const allDocuments: Document[] = [...competitions, ...protocols, ...manuals];

export function getDocument(category: string, slug: string): Document | undefined {
  return allDocuments.find(doc => doc.category === category && doc.id === slug);
}

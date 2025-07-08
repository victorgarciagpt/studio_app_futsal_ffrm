import type { Document, FFRMCategory, GeneralNote } from './types';

export const ffrmCategories: FFRMCategory[] = [
  {
    id: 'fem-bj-pb-f5',
    title: 'Femenino BJ/PB F5',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: false,
    goalkeeperPassBack: false,
    rosterSize: '4-12',
    ballSize: 3,
    matchTime: '2 tiempos de 25 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'inf-aut-1',
    title: 'Infantil Autonómica y 1ª Infantil',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 35 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '3-rfef',
    title: '3ª RFEF',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'cad-2',
    title: 'Cadete 2ª',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 40 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'inf-2',
    title: 'Infantil 2ª',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 35 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'fem-inf-al-f8',
    title: 'Femenino Infantil/Al F8',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 35 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'debutantes',
    title: 'Debutantes',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: false,
    goalkeeperPassBack: false,
    rosterSize: '4-12',
    ballSize: 3,
    matchTime: '4 tiempos de 10 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: '3-div-inf-f8',
    title: '3ª Div Infantil F-8',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 35 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: '1-juv',
    title: '1ª Juvenil',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '1-2-aut',
    title: '1ª y 2ª Autonómica',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '2-preben-f5',
    title: '2ª Prebenjamín Fútbol 5',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: false,
    goalkeeperPassBack: false,
    rosterSize: '4-12',
    ballSize: 3,
    matchTime: '4 tiempos de 10 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: '3-div-ben-f8',
    title: '3ª Div Benjamín F-8',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 25 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'inf-superliga',
    title: 'Infantil Superliga',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 35 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'fem-cad-inf-f8',
    title: 'Femenino Cadete/Infantil F8',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 40 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'cad-superliga',
    title: 'Cadete Superliga',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 40 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'terr-pref',
    title: 'Territorial Preferente',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'juv-div-honor',
    title: 'Juvenil División de Honor',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'liga-sub23',
    title: 'Liga Sub23',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'cad-aut-1',
    title: 'Cadete Autonómica y 1ª Cadete',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 40 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'preben-f9',
    title: 'Prebenjamín Fútbol 9',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: false,
    goalkeeperPassBack: false,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 20 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: '3-div-alev-f8',
    title: '3ª Div Alevín F-8',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 30 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'aut-juv',
    title: 'Autonómica Juvenil',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '2-juv',
    title: '2ª Juvenil',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'superliga-ben',
    title: 'Superliga Benjamín',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 25 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'alev-aut-1-2',
    title: 'Alevín Aut. 1ª y 2ª',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 30 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'ben-aut-1-2',
    title: 'Benjamín Aut. 1ª y 2ª',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 25 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'alev-superliga',
    title: 'Alevín Superliga',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '5-18',
    ballSize: 4,
    matchTime: '2 tiempos de 30 minutos',
    directGoalFromKickoff: false,
  },
  {
    id: 'juv-liga-nac',
    title: 'Juvenil Liga Nacional',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'fem-pref-aut',
    title: 'Femenino Pref/Autonómica',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '3-aut',
    title: '3ª Autonómica',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-20',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
    notes: [
      'Únicamente será de aplicación para la categoría de 3ª Autonómica que, los jugadores que no consten en acta entre los 22 inscritos para el partido como jugador, podrán actuar con su misma licencia como delegados de equipo. Se deberá reflejar en el apartado ‘Otras Incidencias-Dirigentes y técnicos’ de la siguiente forma: “No participa como jugador y realizará las funciones de delegado de Equipo D.XXX.”'
    ]
  },
  {
    id: '3-fed-fem',
    title: '3ª Federación Femenina',
    substitutions: '5 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: 'fem-juv-cad-f11',
    title: 'Femenino Juvenil/Cadete F11',
    substitutions: '7 cambios en 3 interrupciones (no cuenta el descanso)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-18',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
  },
  {
    id: '3-aut-liga-amistad',
    title: '3ª Autonómica Liga Amistad',
    substitutions: 'Ilimitadas (con reducción por expulsión)',
    offside: true,
    goalkeeperPassBack: true,
    rosterSize: '7-22',
    ballSize: 5,
    matchTime: '2 tiempos de 45 minutos',
    directGoalFromKickoff: true,
    notes: [
        'Los jugadores menores de 35 años deben portar un brazalete.'
    ]
  },
];

export const ffrmGeneralNotes: GeneralNote[] = [
    {
        title: "Aclaraciones sobre Expulsiones",
        content: "Aplicable a todos los partidos de la FFRM, siempre que se muestre una tarjeta roja o expulsión el equipo reducirá su número de jugadores con los que seguirá disputando el partido. La cantidad mínima de jugadores de cada equipo que debe haber sobre el terreno de juego es igual al número mínimo de licencias, en caso de que el número de jugadores sobre el terreno de juego sea inferior al número de licencias mínimas, se deberá suspender el partido."
    },
    {
        title: "Descanso de los partidos FFRM",
        content: "Por regla general, el descanso del partido entre la primera y segunda parte será de máximo 15 minutos. En el caso que ambos equipos estén de acuerdo y el árbitro lo permita se podrá reducir el tiempo de descanso, no superando en ningún caso los 15 minutos. Si se superan los 15 minutos se deberá redactar en el acta en el apartado ‘Otras Observaciones’ indicando el motivo del retraso."
    },
    {
        title: "Indicaciones sobre Actas",
        content: `● Las actas tendrán que cerrarse en el mismo campo una vez finalizado el partido y se tendrá que comprobar junto con los delegados para evitar fallos y tendrán que meter su código de firma. Si un equipo abandona el campo sin firmar el acta o no se acuerda del código, se hace indicar en el apartado correspondiente de firma del acta.
● Los jugadores y/o cuerpo técnico que no salgan en la aplicación podrán jugar y/o sentarse en el banquillo siempre que presenten documento original dni, pasaporte o carnet de conducir y se hará constar en observaciones bajo responsabilidad de su club. La forma para redactarlo en el acta dicho incidente se encuentra en el documento ‘CONSIDERACIONES_ACTAS_FFRM’. El delegado debe siempre firmar la hoja física de responsabilidad.
● Es obligatorio pasar revisión de licencias tanto a jugadores titulares y suplentes como al cuerpo técnico.
● En ausencia del delegado podrá hacer sus funciones otro entrenador del club, inscribiéndose en acta. La forma para redactarlo en el acta dicho incidente se encuentra en el documento ‘CONSIDERACIONES_ACTAS_FFRM’.
● De carácter general, el descanso de los partidos de fútbol de la FFRM es de máximo 15 minutos, pudiendo acortarse en el caso de estar ambos equipos de acuerdo.`
    }
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

export const allDocuments: Document[] = [...protocols, ...manuals];

export function getDocument(category: string, slug: string): Document | undefined {
  return allDocuments.find(doc => doc.category === category && doc.id === slug);
}

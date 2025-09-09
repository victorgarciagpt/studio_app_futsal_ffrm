import type { FutsalCategory } from '@/lib/types';

export const debutantes: FutsalCategory = {
  id: 'debutantes',
  title: 'Debutantes',
  regulador: 'FFRM',
  balon: 'Kelme 55cm',
  tiempoJuego: '2x20min corrido (4 periodos de 5min) / 2x15 parado con asistente.',
  tiempoMuerto: '1 por equipo en cada parte',
  reglaPasarela: true,
  reglaDiferencia10Goles: true,
  jugadores: 'Hasta 14 por partido',
  minJugadores: '3 para comenzar',
  presenciaArbitral: 'Árbitro.',
  llegadaInstalaciones: '1h antes en localidad',
  porterias: 'Reductoras (30cm). Obligatorio.',
  saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
  cesionPortero: 'Infracción se reanuda con saque de banda.',
  normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
  confirmacionActas: 'Intranet FFRM',
  sustituciones: 'Volantes en el último periodo.',
  identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
};

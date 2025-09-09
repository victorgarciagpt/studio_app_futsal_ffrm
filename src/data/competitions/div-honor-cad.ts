import type { FutsalCategory } from '@/lib/types';

export const divisionHonorCadete: FutsalCategory = {
  id: 'div-honor-cad',
  title: 'División de Honor Cadete',
  regulador: 'RFEF',
  balon: 'Kelme 62cm',
  tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
  tiempoMuerto: '1 por equipo en cada parte',
  reglaPasarela: false,
  reglaDiferencia10Goles: false,
  jugadores: 'Hasta 14 por partido',
  minJugadores: '3 para comenzar',
  presenciaArbitral: 'Árbitro y árbitro asistente. Contacto 48h antes.',
  llegadaInstalaciones: '1h antes en localidad',
  porterias: 'Estándar (sin reducción)',
  saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
  cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
  normativaEspecifica: 'Expulsión (roja directa o doble amarilla) implica 2 min con un jugador menos.',
  confirmacionActas: 'Intranet FFRM',
  sustituciones: 'Volantes por la zona designada.',
  identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.',
  notas: [
    'Licencias Delegados: No aplicable la norma regional.',
  ]
};

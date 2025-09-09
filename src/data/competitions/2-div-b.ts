import type { FutsalCategory } from '@/lib/types';

export const segundaDivisionB: FutsalCategory = {
  id: '2-div-b',
  title: '2ª División "B"',
  regulador: 'RFEF',
  balon: 'Joma',
  tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
  tiempoMuerto: '1 por equipo en cada parte',
  reglaPasarela: false,
  reglaDiferencia10Goles: false,
  jugadores: 'Hasta 14 por partido',
  minJugadores: '3 para comenzar',
  presenciaArbitral: '2 árbitros principales, 1 árbitro asistente. Contacto 48h antes.',
  llegadaInstalaciones: '2h antes en localidad, 1h 30min en pabellón',
  porterias: 'Estándar (sin reducción)',
  saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
  cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
  normativaEspecifica: 'Expulsión (roja directa o doble amarilla) implica 2 min con un jugador menos.',
  confirmacionActas: 'Novanet (RFEF)',
  sustituciones: 'Volantes por la zona designada.',
  identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.',
   notas: [
    'Vestimenta: Camisetas sin publicidad Fibranet. Orden: Negro, Amarillo, Turquesa, Rojo. Medias negras si camiseta es azul/roja. Zapatillas blancas (salvo las del Comité).',
    'Licencias Delegados: No aplicable la norma regional.',
    'Saludo Fair Play: Obligatorio antes del partido.',
    'Control Balón: Custodiado por árbitro asistente.',
    'Entrenador en Prácticas: No puede ejercer de 1er entrenador.'
  ]
};

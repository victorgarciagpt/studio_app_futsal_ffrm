import type { Document, FutsalCategory, GeneralNote, CartagenaCategory } from './types';


export const futsalCategories: FutsalCategory[] = [
  // --- Categorías Nacionales (RFEF) ---
  {
    id: '1-div-masc',
    title: '1ª División Masculina',
    regulador: 'RFEF',
    balon: 'Joma',
    tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: '2 árbitros principales, 1 árbitro asistente. Contacto 48h antes.',
    llegadaInstalaciones: '3h antes en localidad, 1h 30min en pabellón',
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
  },
    {
    id: '2-div-masc',
    title: '2ª División Masculina',
    regulador: 'RFEF',
    balon: 'Joma',
    tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: '2 árbitros principales, 1 árbitro asistente. Contacto 48h antes.',
    llegadaInstalaciones: '3h antes en localidad, 1h 30min en pabellón',
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
  },
  {
    id: '1-div-fem',
    title: '1ª División Femenina',
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
      'Vestimenta: Camisetas sin publicidad Fibranet. Orden: Negro, Amarillo, Turquesa, Rojo. Medias negras si camiseta es turquesa/roja. Zapatillas blancas (salvo las del Comité).',
      'Licencias Delegados: No aplicable la norma regional.',
      'Saludo Fair Play: Obligatorio antes del partido.',
      'Control Balón: Custodiado por árbitro asistente.',
      'Entrenador en Prácticas: No puede ejercer de 1er entrenador.'
    ]
  },
    {
    id: '2-div-fem',
    title: '2ª División Femenina',
    regulador: 'RFEF',
    balon: 'Joma',
    tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: '2 árbitros principales, 1 árbitro asistente. Contacto 48h antes.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión (roja directa o doble amarilla) implica 2 min con un jugador menos.',
    confirmacionActas: 'Novanet (RFEF)',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.',
    notas: [
      'Vestimenta: Camisetas sin publicidad Fibranet. Orden: Negro, Amarillo, Azul, Rojo. Medias negras si camiseta es azul/roja. Zapatillas blancas (salvo las del Comité).',
      'Licencias Delegados: No aplicable la norma regional.',
      'Saludo Fair Play: Obligatorio antes del partido.',
      'Control Balón: Custodiado por árbitro asistente.',
      'Entrenador en Prácticas: No puede ejercer de 1er entrenador.'
    ]
  },
  {
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
  },
  {
    id: '3-div-nac',
    title: '3ª División Nacional',
    regulador: 'RFEF-FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: '2 árbitros. Contacto 48h antes.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión (roja directa o doble amarilla) implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
    {
    id: 'div-honor-juv',
    title: 'División de Honor Juvenil',
    regulador: 'RFEF',
    balon: 'Joma',
    tiempoJuego: '2 tiempos de 20 minutos (reloj parado)',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: '2 árbitros principales, 1 árbitro asistente. Contacto 48h antes.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión (roja directa o doble amarilla) implica 2 min con un jugador menos.',
    confirmacionActas: 'Novanet (RFEF)',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.',
    notas: [
      'Licencias Delegados: No aplicable la norma regional.',
    ]
  },
   {
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
  },
  // --- Categorías Regionales (FFRM) ---
  {
    id: 'pref-aut-masc',
    title: 'Preferente Autonómica Masculino',
    regulador: 'FFRM',
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
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'pref-fem',
    title: 'Preferente Femenina',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '1-autonomica',
    title: '1ª Autonómica',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '3-autonomica',
    title: '3ª Autonómica',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'liga-aut-juv',
    title: 'Liga Autonómica Juvenil',
    regulador: 'FFRM',
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
    normativaEspecifica: 'Expulsión implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '1-2-juvenil',
    title: '1ª y 2ª Juvenil',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
    {
    id: 'juv-cad-fem',
    title: 'Juvenil/Cadete Femenina',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'liga-aut-cad',
    title: 'Liga Autonómica Cadete',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '2-cadete',
    title: '2ª Cadete',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 25 min (reloj corrido) o 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: false,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
    {
    id: 'div-honor-inf',
    title: 'División de Honor Infantil',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'liga-aut-inf',
    title: 'Liga Autonómica Infantil',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 30 min (reloj corrido) o 2x20 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '2-infantil',
    title: '2ª Infantil',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 25 min (reloj corrido) o 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'inf-fem',
    title: 'Infantil Femenina',
    regulador: 'FFRM',
    balon: 'Kelme 62cm',
    tiempoJuego: '2 partes de 25 min (reloj corrido) o 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: false,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes por la zona designada.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
    {
    id: 'alev-honor-liga-1',
    title: 'Div. Honor, L. Autonómica y 1ª Alevín',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x30min corrido (4 periodos: 3x5 + 1x15) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '2-alevin',
    title: '2ª Alevín',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'alev-fem',
    title: 'Alevín Femenina',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Estándar (sin reducción)',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'benj-honor-liga-1',
    title: 'Div. Honor, L. Autonómica y 1ª Benjamín',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x30min corrido (4 periodos: 3x5 + 1x15) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Reductoras (30cm). Obligatorio.',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: '2-benjamin',
    title: '2ª Benjamín',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en localidad',
    porterias: 'Reductoras (30cm). Obligatorio.',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'No permitida para recoger con las manos. Indirecto desde línea del área.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'benj-fem',
    title: 'Benjamín Femenina',
    regulador: 'FFRM',
    balon: 'Kelme 58cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
    tiempoMuerto: '1 por equipo en cada parte',
    reglaPasarela: true,
    reglaDiferencia10Goles: true,
    jugadores: 'Hasta 14 por partido',
    minJugadores: '3 para comenzar',
    presenciaArbitral: 'Árbitro.',
    llegadaInstalaciones: '1h antes en pabellón',
    porterias: 'Reductoras (30cm). Obligatorio.',
    saqueMeta: 'Infracción si el portero pasa de medio campo. Indirecto desde la línea central.',
    cesionPortero: 'Infracción se reanuda con saque de banda.',
    normativaEspecifica: 'Expulsión NO implica 2 min con un jugador menos.',
    confirmacionActas: 'Intranet FFRM',
    sustituciones: 'Volantes en el último periodo.',
    identificacionLicencias: 'Licencia federativa validada. Revisión en vestuario arbitral.'
  },
  {
    id: 'preben-honor-liga',
    title: 'Div. Honor y L. Autonómica Prebenjamín',
    regulador: 'FFRM',
    balon: 'Kelme 55cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
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
  },
  {
    id: 'prebenjamin',
    title: 'Prebenjamín F.S.',
    regulador: 'FFRM',
    balon: 'Kelme 55cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
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
  },
  {
    id: 'preben-murcia-fs',
    title: 'Prebenjamín Murcia Fútbol Sala',
    regulador: 'FFRM',
    balon: 'Kelme 55cm',
    tiempoJuego: '2x25min corrido (4 periodos: 3x5 + 1x10) / 2x15 parado con asistente.',
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
  },
  {
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
  }
];

export const ffrmGeneralNotes: GeneralNote[] = [
    {
        title: "Licencias y Jugadores no Registrados (Categorías Regionales)",
        content: `Si un jugador o técnico no aparece en la app, pero el delegado confirma su licencia validada, se permitirá su participación. El árbitro debe reflejarlo en observaciones del acta (indicando nombre, dorsal y responsabilidad del delegado) y crear la licencia manualmente en la app.`
    },
    {
        title: "Licencias de Delegados (Categorías Regionales)",
        content: "Cualquier delegado con ficha en un club puede ejercer sus funciones en cualquier categoría de ese mismo club. Esta norma no aplica a categorías Nacionales (1ª, 2ª, 3ª Div. Masculina, Div. Honor Juvenil, Div. Honor Cadete, 1ª y 2ª Div. Femenina)."
    },
    {
        title: "Licencias de Entrenadores (Categorías Regionales)",
        content: `Regla General: Entrenadores de categorías superiores NO pueden actuar en inferiores (Ej: un técnico de 3ª División no puede entrenar a un equipo Cadete).\nExcepción: En categorías Alevín, Benjamín, Prebenjamín y Debutantes, los entrenadores de categorías superiores SÍ pueden ejercer.`
    },
    {
        title: "Entrenador en Prácticas (Categorías Regionales)",
        content: "Ejerce como 2º entrenador. No puede haber un 2º entrenador y un entrenador en prácticas a la vez. Si no hay 1er entrenador, el 2º o el de prácticas puede dar instrucciones."
    },
    {
        title: "Vestimenta Arbitral (Categorías Regionales)",
        content: `Obligatorio usar camisetas con publicidad de Fibranet.\nOrden de colores: Negro, Amarillo, Azul, Rojo (los dos últimos solo si hay coincidencia).\nMedias: Negras o amarillas con camiseta negra/amarilla. Negras con camiseta azul/roja.\nZapatillas: Blancas (salvo las entregadas por el Comité Nacional).`
    },
    {
        title: "Protocolo General (Categorías Regionales)",
        content: `Saludo Fair Play: Obligatorio antes del inicio del partido.\nControl del Balón: Custodiado por el árbitro principal (o el asistente si lo hubiera). Si solo hay un árbitro, es responsabilidad del delegado local.\nRedacción del Acta: Es obligatorio reflejar todas las tarjetas (amarillas o rojas), indicando motivo y minuto.`
    }
];

export const cartagenaCategories: CartagenaCategory[] = [];
export const cartagenaGeneralNotes: GeneralNote[] = [];

export const manuals: Document[] = [
  {
    id: 'metodologia-y-consideraciones',
    title: 'Manual 1: Metodología y Consideraciones',
    category: 'manuals',
    updatedAt: '2024-07-25',
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
  },
  {
    id: 'clasificacion-incidentes',
    title: 'Manual 2: Clasificación de Incidentes',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">1. Clasificación de incidentes</h2>
      <p class="mb-4">En el caso de que se deba redactar algún hecho o incidente en el acta, siempre se verá limitado a uno de los siguientes apartados:</p>
      <ul class="list-disc pl-6 space-y-1 mb-4">
        <li>Jugadores (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Dirigentes y Técnicos (Amonestaciones, Expulsiones, Otras Incidencias)</li>
        <li>Público</li>
        <li>Deficiencias en las Instalaciones</li>
        <li>Otras Incidencias</li>
        <li>Anexo</li>
      </ul>
      <p class="mb-4">Existe una excepción para los incidentes relacionados con la firma del delegado de equipo, que no debe reflejarse en estos apartados.</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.1 Jugadores</h3>
      <p class="mb-2">Si el incidente tiene como protagonista a uno o varios jugadores, se debe diferenciar si es una infracción sancionable (tarjeta) o un incidente informativo (lesión, problema de equipaciones, etc.).</p>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.1.1 Infracción de Jugador</h4>
      <p class="mb-2">La siguiente tabla determina dónde redactar una infracción cometida por un jugador:</p>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Dónde y Cuándo se Comete la Infracción</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody><tr><td class="border p-2">En el túnel de vestuarios antes de salir al terreno de juego.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr><td class="border p-2">En el terreno de juego y antes del pitido inicial (1ª o 2ª parte).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Si es expulsión de un titular, puede ser reemplazado (exclusión). Si es suplente, no.</td></tr><tr><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga y tanda de penaltis).</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el terreno de juego tras finalizar la 1ª o 2ª parte.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el túnel de vestuarios entre ambas partes del partido.</td><td class="border p-2">Amonestaciones o expulsiones de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr><td class="border p-2">En el túnel de vestuarios, tras finalizar el partido.</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">Informar al jugador y a los oficiales del equipo.</td></tr><tr><td class="border p-2">Tras ser expulsado</td><td class="border p-2">Otras incidencias de jugadores</td><td class="border p-2">-</td></tr></tbody></table></div>

      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.1.2 Hechos informativos sobre jugadores</h4>
      <p>Acontecimientos relevantes no sancionados (lesiones, problemas de equipaciones, jugadores no registrados en la app, etc.) se reflejan en 'Otras incidencias de Jugadores'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.2 Dirigentes/Técnicos</h3>
      <p>Incidentes con entrenadores, delegados, fisios, etc. Se consideran oficiales a: Entrenador principal, segundo entrenador, fisioterapeuta, preparador físico, entrenador de porteros, encargado de material, delegado de equipo, delegado de campo y cualquier otra persona con ficha o contrato.</p>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.2.1 Infracciones de Técnicos</h4>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Dónde y Cuándo</th><th class="border p-2">Lugar de Redacción en el Acta</th><th class="border p-2">Observaciones</th></tr></thead><tbody><tr><td class="border p-2">En el túnel de vestuarios antes de salir al campo.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el terreno de juego antes del pitido inicial.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr><td class="border p-2">Durante el partido (1ª o 2ª parte, prórroga).</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">No puede ser reemplazado.</td></tr><tr><td class="border p-2">Tras finalizar la 1ª o 2ª parte, en el campo.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">-</td></tr><tr><td class="border p-2">En el túnel de vestuarios entre partes.</td><td class="border p-2">Amonestaciones o expulsiones</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr><td class="border p-2">En el túnel de vestuarios tras finalizar el partido.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Informar a los oficiales del equipo.</td></tr><tr><td class="border p-2">Tras ser expulsado.</td><td class="border p-2">Otras incidencias de dirigentes y técnicos</td><td class="border p-2">Reflejar infracciones posteriores a la expulsión.</td></tr></tbody></table></div>
      
      <h4 class="font-headline text-lg font-medium mt-4 mb-2">1.2.2 Hechos informativos sobre técnicos</h4>
      <p>Hechos no sancionables como incumplimiento de funciones, retraso en entrega de licencias, etc., se registran en 'Otras incidencias de Técnicos'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.3 Público</h3>
      <p>Incidentes con aficionados se redactan aquí, detallando: identificador del sector, qué ocurrió, dónde, cuántas personas, cuándo, consecuencias y resolución. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.4 Deficiencias en las instalaciones</h3>
      <p>Incidentes como ausencia de agua caliente, falta de banderines, problemas de iluminación, etc. Se debe indicar: momento de detección, deficiencia, comunicación al responsable y medidas adoptadas. Si provoca suspensión, se debe añadir redacción en 'Otras Incidencias'.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.5 Otras incidencias</h3>
      <p>Cualquier incidencia sin cabida en otros apartados: lesiones del equipo arbitral, accesos indebidos al vestuario arbitral, retrasos, no uso del balón oficial, prórrogas, tandas de penaltis, y suspensiones de partidos.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">1.6 Anexo</h3>
      <p>Se usa para reflejar situaciones fuera del marco temporal o espacial del partido (ej. tras entregar el acta o abandonar las instalaciones) o para ampliar información olvidada. Permite detallar incidentes con implicaciones disciplinarias importantes.</p>
    `
  },
  {
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
  },
  {
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
  },
  {
    id: 'otras-incidencias-jugadores',
    title: 'Manual 3.3: Otras Incidencias de Jugadores',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.3 Otras Incidencias de Jugadores</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.3.1 Principios Generales</h3>
      <p>Refleja incidentes que no son amonestación ni expulsión: acciones tras ser expulsado, similitud de equipaciones, lesiones, exclusión antes del partido, cambios de dorsales, falta de licencia, etc.</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">3.3.2 Tipos de Incidencias</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>A) Jugador no aparece en la app:</strong> Crear licencia bajo responsabilidad del delegado y solicitar DNI.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado del equipo visitante, D. XXX, me comunica que el jugador con dorsal nº 6, D. YYY, con DNI 12345678X, no aparece en la aplicación. Dicho delegado declara que dispone de licencia federativa validada, asumiendo su responsabilidad."</code></pre>
        </li>
        <li><strong>B) Reemplazo de un Jugador antes del Partido:</strong> Por lesión en calentamiento, no cuenta como sustitución.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Antes del comienzo del partido, el delegado del equipo local, D. XXX, me comunica que el jugador con dorsal nº 10, D. YYY, sufrió una lesión durante el calentamiento, siendo reemplazado por el dorsal nº 14, D. ZZZ."</code></pre>
        </li>
        <li><strong>C) Lesiones de Jugadores Durante el Partido:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al finalizar el partido, el delegado del C.D. Ejemplo, D. XXX, me comunicó que el jugador con dorsal nº 7, D. YYY, sufrió una lesión en el tobillo izquierdo durante el encuentro. No se adjunta parte médico."</code></pre>
        </li>
        <li><strong>D) Incidentes tras la Expulsión de un Jugador:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 70, y una vez expulsado el jugador con dorsal nº 8, D. XXX, se dirigió a mí en los siguientes términos: '¡Eres un ladrón, nos estás robando el partido!'."</code></pre>
        </li>
        <li><strong>E) Incidentes tras Finalizar y fuera del terreno de juego:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez finalizado el partido y en el túnel de vestuarios, el jugador nº 4 del C.D. Ejemplo, D. XXX, se dirigió al equipo arbitral en los siguientes términos: '¡No vais a salir vivos de aquí, cabrones!'."</code></pre>
        </li>
        <li><strong>F) Peleas sin poder identificar a todos:</strong> Describir el conflicto y el número aproximado de participantes.</li>
        <li><strong>G) Revisión de Fichas:</strong> Quién solicita la revisión y el resultado.</li>
        <li><strong>H) Mensajes Exhibidos por Jugadores:</strong> Contenido del mensaje y medio.</li>
        <li><strong>I) Exclusión de Jugadores Antes del Partido:</strong> Si un titular es excluido, puede ser reemplazado por un suplente sin contar como sustitución.</li>
        <li><strong>J) Sustituciones adicionales:</strong> Por prórroga o por conmoción cerebral.</li>
      </ul>
    `
  },
  {
    id: 'amonestaciones-tecnicos',
    title: 'Manual 4.1: Amonestaciones a Técnicos',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.1 Amonestaciones a Dirigentes/Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.1 Principios Generales</h3>
      <p>Las amonestaciones se reflejan en "Amonestaciones de Dirigentes/Técnicos". Si la infracción ocurre fuera del campo durante el descanso, se informa verbalmente sin mostrar tarjeta.</p>
      <p><strong>Aspectos a Reflejar:</strong> Puesto, nombre completo, minuto y descripción del motivo.</p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo]."</code></pre>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.2 Pautas de Redacción</h3>
      <p><strong>Infracciones Verbales:</strong> ¿Fue una protesta? ¿Dónde? ¿Hubo gestos airados? ¿Palabras exactas? (Insultos implican roja).</p>
      <p><strong>Infracciones Conductuales:</strong> ¿Abandonó el área técnica? ¿Gestos sarcásticos? ¿Obstaculizó el juego?</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.1.3 Ejemplos de Amonestaciones</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">El segundo entrenador aplaude sarcásticamente.</td><td class="border p-2">"Amonestación al segundo entrenador local en el minuto 63 por aplaudir de forma sarcástica una decisión mía, en actitud de protesta."</td></tr>
        <tr><td class="border p-2">El entrenador protesta airadamente.</td><td class="border p-2">"Amonestación al entrenador visitante D. XX en el minuto 84 por gesticular de forma exaltada levantando los brazos desde su banquillo, protestando una decisión."</td></tr>
        <tr><td class="border p-2">El fisio retrasa su entrada al campo.</td><td class="border p-2">"Amonestación al fisioterapeuta local en el minuto 90 por hacer caso omiso a mi solicitud para ingresar al terreno de juego, con ánimo de perder tiempo."</td></tr>
        <tr><td class="border p-2">El entrenador abandona el área técnica para protestar.</td><td class="border p-2">"Amonestación al entrenador local D. ZZ en el minuto 45 por abandonar el área técnica y protestar una decisión mía en los siguientes términos “¡Eso era penalti!”."</td></tr>
        <tr><td class="border p-2">El entrenador retiene el balón para perder tiempo.</td><td class="border p-2">"Amonestación al entrenador local D.XX en el minuto 60 por retener el balón en su posesión con ánimo de perder tiempo, cuando le tocaba efectuar la reanudación a su equipo."</td></tr>
      </tbody></table></div>
    `
  },
  {
    id: 'expulsiones-tecnicos',
    title: 'Manual 4.2: Expulsiones a Técnicos',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.2 Expulsiones a Dirigentes y Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.1 Principios Generales</h3>
      <p>Las expulsiones se reflejan en "Expulsiones de Dirigentes/Técnicos". Si ocurren fuera del campo durante el descanso, se informa verbalmente.</p>
      <p><strong>Aspectos a Reflejar:</strong> Puesto, nombre completo, minuto y descripción precisa.</p>
      <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Al entrenador D. [XX] en el minuto [X] por [motivo de la expulsión]."</code></pre>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.2 Pautas de Redacción</h3>
      <p><strong>Infracciones Verbales:</strong> ¿Usó lenguaje ofensivo, insultante o humillante? Anotar palabras exactas.</p>
      <p><strong>Infracciones Conductuales:</strong> ¿Comportamiento violento? ¿Interferencia en el juego? ¿Abandonó el área técnica?</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.2.3 Ejemplos de Expulsiones</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">Un técnico lanza un balón al campo desde el banquillo.</td><td class="border p-2">"En el minuto 70, expulsé al entrenador local D. XXX por el lanzamiento de un balón desde el banquillo al terreno de juego, interrumpiendo el desarrollo normal del partido."</td></tr>
        <tr><td class="border p-2">Un fisioterapeuta insulta al árbitro asistente.</td><td class="border p-2">"En el minuto 53, expulsé al fisioterapeuta visitante D. XXX por dirigirse al árbitro asistente nº 1 en los siguientes términos: '¡Eres un hijo de puta!'."</td></tr>
        <tr><td class="border p-2">Tras finalizar el partido, un técnico insulta al árbitro.</td><td class="border p-2">"Una vez finalizado el partido y estando aún sobre el terreno de juego, el segundo entrenador visitante D. XXX se dirigió al trío arbitral con actitud amenazante, diciendo: '¡Sois unos maricones, os vais a cagar!'."</td></tr>
        <tr><td class="border p-2">Un entrenador es expulsado por lanzamiento de balón sin identificar autor.</td><td class="border p-2">"Expulsión al entrenador D.XXX en el minuto 70 por el lanzamiento de un balón desde su banquillo y que interfirió en el juego, sin poder identificar el autor del lanzamiento y siendo él como entrenador el responsable del banquillo."</td></tr>
      </tbody></table></div>
    `
  },
  {
    id: 'otras-incidencias-tecnicos',
    title: 'Manual 4.3: Otras Incidencias de Técnicos',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">4.3 Otras Incidencias de Dirigentes/Técnicos</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.3.1 Principios Generales</h3>
      <p>Este apartado cubre incidentes no sancionables: acciones post-expulsión, incumplimiento de funciones, problemas con licencias, etc.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">4.3.2 Tipos de Incidencias y Ejemplos</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Incidentes Sucedidos Tras la Expulsión:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"En el minuto 40, y una vez expulsado el entrenador local D. XXX, se dirigió a mí antes de abandonar el área técnica diciendo: '¡Eres un incompetente!'."</code></pre>
        </li>
        <li><strong>Incidentes Tras la Finalización del Partido (fuera del campo):</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez terminado el partido y estando ya en el túnel de vestuarios, el entrenador visitante D. XXX corrió hacia mi posición señalándome con el dedo y diciendo: '¡Te has cargado el partido!'."</code></pre>
        </li>
        <li><strong>Incumplimiento de Funciones:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado de campo del equipo local D. XXX no me acompañó al vestuario arbitral tras finalizar el partido, alegando que estaba ocupado recogiendo el material."</code></pre>
        </li>
        <li><strong>Técnicos No Identificados:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"Una vez finalizado el partido, un miembro del cuerpo técnico del club local, identificado por su indumentaria pero sin poder confirmar su identidad, empujó a mi asistente nº1 en el túnel de vestuarios."</code></pre>
        </li>
        <li><strong>Ausencia de Delegado en Fútbol Base:</strong> Si un entrenador ejerce de delegado.
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"D. XXX, entrenador del equipo local, realizó funciones de delegado para este partido debido a la ausencia de un delegado con licencia."</code></pre>
        </li>
        <li><strong>Licencia no aparece en la App:</strong>
          <pre class="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground my-2"><code>"El delegado del equipo visitante, D. XXX, me comunica que el [puesto], D. YYY, con DNI 12345678X, no aparece en la aplicación. Dicho delegado declara que dispone de licencia federativa validada, asumiendo su responsabilidad."</code></pre>
        </li>
      </ul>
    `
  },
  {
    id: 'publico',
    title: 'Manual 5: Público',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">5. Público</h2>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.1 Introducción</h3>
      <p>Recoge incidentes con espectadores: lanzamiento de objetos, insultos, pancartas no permitidas, invasiones de campo, emergencias médicas, etc.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.2 Principios Generales de Redacción</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Identificar el sector del público.</li>
        <li>Describir qué, dónde, cuándo y cuántas personas.</li>
        <li>Detallar consecuencias y acciones tomadas (detención, aviso, etc.).</li>
        <li>Ser objetivo, sin valoraciones personales.</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.4 Protocolo de Lanzamiento de Objetos</h3>
      <p>El árbitro puede activar 3 medidas según la gravedad:</p>
      <ol class="list-decimal pl-6 space-y-1">
        <li><strong>Medida 1: Detención temporal.</strong> Se avisa al delegado para que advierta por megafonía.</li>
        <li><strong>Medida 2: Suspensión momentánea.</strong> Si persiste, los equipos se retiran a vestuarios.</li>
        <li><strong>Medida 3: Suspensión definitiva.</strong> Si la conducta persiste o es extremadamente grave.</li>
      </ol>
      <p><strong>Ejemplo Medida 1:</strong> "En el minuto 34, desde la grada sur, ocupada por aficionados visitantes, se lanzaron 2 botellas de plástico llenas, una piedra y un mechero. Ninguno impactó. Detuve el partido, comuniqué al delegado que advirtiera por megafonía. Tras 6 minutos, se reanudó."</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.5 En el Caso de Invasión de Campo</h3>
      <p>Reflejar en el acta: minuto, cantidad de aficionados, identificación, comportamiento, consecuencias y acciones tomadas.</p>
      <p><strong>Ejemplo Invasión Pacífica:</strong> "En el minuto 72, tras un gol local, aprox. 20 aficionados locales ingresaron al campo para abrazar a los jugadores. No hubo daños. Abandonaron el campo por sus propios medios tras 3 minutos de detención."</p>
      <p><strong>Ejemplo Invasión con Suspensión Definitiva:</strong> "En el minuto 78, tras un penalti, aprox. 50 aficionados locales ingresaron con actitud violenta hacia el equipo arbitral. Nos retiramos a vestuarios. La fuerza pública no pudo garantizar la seguridad, por lo que suspendí definitivamente el partido." (Añadir detalles en 'Otras Incidencias').</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.6 Protocolo de Actuación sobre la Violencia Verbal</h3>
      <p>Cubre insultos, amenazas y manifestaciones racistas, xenófobas, etc. Es una copia del protocolo ya existente en su sección.</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">5.7 Desvanecimientos o Incidentes de Salud</h3>
      <p>Detallar minuto, ubicación, tipo de incidente, asistencia médica y medidas tomadas (reanudación o suspensión).</p>
      <p><strong>Ejemplo:</strong> "En el minuto 86 detuve el partido porque una persona en la grada sur sufrió un ataque epiléptico. Los servicios médicos del estadio acudieron. Una vez evacuada, el partido se reanudó tras 3 minutos."</p>
    `
  },
  {
    id: 'deficiencias-instalaciones',
    title: 'Manual 6: Deficiencias en las Instalaciones',
    category: 'manuals',
    updatedAt: '2024-07-25',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">6. Deficiencias en las Instalaciones</h2>
      <p>Este apartado cubre desperfectos en vestuarios, terreno de juego, iluminación, etc.</p>
      <p><strong>Pautas de redacción:</strong></p>
      <ol class="list-decimal pl-6 space-y-1">
        <li><strong>Momento de la detección:</strong> Antes, durante o después del partido.</li>
        <li><strong>Deficiencia identificada:</strong> Descripción detallada.</li>
        <li><strong>Comunicación al responsable:</strong> Reflejar que se informó al delegado de campo y sus alegaciones.</li>
        <li><strong>Medidas adoptadas:</strong> Soluciones o consecuencias (retraso, suspensión).</li>
      </ol>
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Ejemplos de Casos Prácticos</h3>
      <div class="overflow-x-auto my-4"><table class="w-full text-left border-collapse"><thead><tr><th class="border p-2">Situación</th><th class="border p-2">Redacción en el Acta</th></tr></thead><tbody>
        <tr><td class="border p-2">Nieve sobre el terreno de juego.</td><td class="border p-2">"El partido tuvo que comenzar con 15 minutos de retraso debido a que el terreno de juego estaba cubierto por una capa de nieve, imposibilitando la visibilidad de las líneas. Informado el Delegado de Campo, los operarios del club procedieron a su retirada."</td></tr>
        <tr><td class="border p-2">Ausencia de agua caliente en vestuarios.</td><td class="border p-2">"El vestuario arbitral no disponía de agua caliente, según el Delegado de Campo, debido a una avería."</td></tr>
        <tr><td class="border p-2">Falta de banderines de esquina.</td><td class="border p-2">"El terreno de juego no contaba con los banderines de esquina reglamentarios. El Delegado de Campo indicó que habían sido robados. Ambos equipos aceptaron disputar el encuentro sin ellos."</td></tr>
        <tr><td class="border p-2">Iluminación insuficiente que provoca suspensión.</td><td class="border p-2">"Instalaciones - En el minuto 35, uno de los focos de la torre sur dejó de funcionar, reduciendo significativamente la visibilidad. Informado el Delegado de Campo, intentó solucionar el problema sin éxito, por lo que el partido se suspendió.<br/><br/>Otras Incidencias - En el minuto 35, debido a los motivos reflejados en 'Instalaciones', decido suspender el partido..." (Añadir detalles de la suspensión).</td></tr>
      </tbody></table></div>
    `
  },
  {
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
  },
  {
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
  }
];

export const allDocuments: Document[] = [...manuals];

export function getDocument(category: string, slug: string): Document | undefined {
  return allDocuments.find(doc => doc.category === category && doc.id === slug);
}

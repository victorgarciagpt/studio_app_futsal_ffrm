export type Document = {
  id: string;
  title: string;
  category: 'competitions' | 'protocols' | 'manuals';
  updatedAt: string;
  content: string;
};

export type FutsalCategory = {
  id: string;
  title: string;
  regulador: string;
  balon: string;
  tiempoJuego: string;
  tiempoMuerto: string;
  reglaPasarela: boolean;
  reglaDiferencia10Goles: boolean;
  jugadores: string;
  minJugadores: string;
  presenciaArbitral: string;
  llegadaInstalaciones: string;
  porterias: string;
  saqueMeta: string;
  cesionPortero: string;
  normativaEspecifica: string;
  confirmacionActas: string;
  sustituciones: string;
  identificacionLicencias: string;
  notas?: string[];
}

export type CartagenaCategory = {
  id: string;
  title: string;
  matchTime: string;
  substitutions: string;
  shinguards: 'Obligatorias' | 'Optativas';
  rosterSize: string;
  ballSize: number;
  directGoalFromKickoff: boolean;
  freeKickOnGoalKick: string;
  temporaryExclusion: boolean;
  offside: boolean;
  goalkeeperPassBack: boolean;
  scoreboard: string;
};

export type GeneralNote = {
  title: string;
  content: string;
};

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type Conversation = {
  id: string;
  messages: Message[];
  timestamp?: Date;
};

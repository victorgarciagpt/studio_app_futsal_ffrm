export type Document = {
  id: string;
  title: string;
  category: 'competitions' | 'protocols' | 'manuals';
  updatedAt: string;
  content: string;
};

export type FFRMCategory = {
  id: string;
  title: string;
  substitutions: string;
  offside: boolean;
  goalkeeperPassBack: boolean; // true if it's an infraction
  rosterSize: string;
  ballSize: number;
  matchTime: string;
  directGoalFromKickoff: boolean;
  notes?: string[];
};

export type GeneralNote = {
  title: string;
  content: string;
};

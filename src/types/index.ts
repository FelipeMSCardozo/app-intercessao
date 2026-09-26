export type PrayerCategory =
  | 'Todos'
  | 'Família'
  | 'Filhos'
  | 'Casamento'
  | 'Trabalho'
  | 'Finanças'
  | 'Sabedoria'
  | 'Direção'
  | 'Ansiedade/angústia'
  | 'Proteção'
  | 'Igreja'
  | 'Nação'
  | 'Gratidão'
  | 'Arrependimento'
  | 'Momentos difíceis'
  | 'Manhã'
  | 'Noite'
  | 'Saúde e Cura';

export type PromiseCategory =
  | 'Todas'
  | 'Fé'
  | 'Paz'
  | 'Sabedoria'
  | 'Proteção'
  | 'Família'
  | 'Esperança'
  | 'Provisão'
  | 'Perseverança'
  | 'Coragem'
  | 'Direção'
  | 'Consolo'
  | 'Relacionamento com Deus';

export type RequestStatus = 'Em oração' | 'Respondido' | 'Aguardando' | 'Agradecimento';

export interface ModuleSection {
  title: string;
  paragraphs: string[];
  callout?: {
    type: 'scripture' | 'insight' | 'warning' | 'exercise';
    title: string;
    text: string;
  };
}

export interface TrainingModule {
  id: number;
  number: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  badge: string;
  learnings: string[];
  keyVerse: {
    verse: string;
    reference: string;
  };
  sections: ModuleSection[];
  reflectionExercise: {
    question: string;
    actionPrompt: string;
  };
  finalPrayer: {
    title: string;
    text: string;
  };
}

export interface PrayerItem {
  id: string;
  title: string;
  category: PrayerCategory;
  objective: string;
  prayerText: string;
  biblicalReferences: string[];
  tags: string[];
}

export interface PromiseItem {
  id: string;
  number: number;
  reference: string;
  title: string;
  text: string;
  category: PromiseCategory;
  application: string;
}

export interface JournalUpdate {
  id: string;
  date: string;
  note: string;
}

export interface PrayerRequest {
  id: string;
  personOrSituation: string;
  category: string;
  request: string;
  date: string;
  status: RequestStatus;
  updates: JournalUpdate[];
  answeredDate?: string;
  testimony?: string;
}

export interface PlanDay {
  day: number;
  title: string;
  theme: string;
  scriptureReference: string;
  scriptureText: string;
  devotional: string;
  direction: string;
  prayer: string;
  reflectionPrompt: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  badge?: string;
  isSuper?: boolean;
  coverImage?: string;
  actionText: string;
  contentView: string;
  summaryPoints: string[];
}

export interface LastOpened {
  type: 'module' | 'prayer' | 'promise' | 'day' | 'bonus';
  id: string | number;
  title: string;
  subtitle?: string;
  date: string;
}

export interface UserProgress {
  name: string;
  isFirstVisit: boolean;
  completedModules: number[];
  completedDays: number[];
  dayNotes: Record<number, string>;
  favoritePrayers: string[];
  favoritePromises: string[];
  favoriteModules: number[];
  prayersUsedCount: Record<string, number>;
  prayerRequests: PrayerRequest[];
  lastOpened?: LastOpened;
}

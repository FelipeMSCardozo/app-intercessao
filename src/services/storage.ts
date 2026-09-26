import { UserProgress, PrayerRequest, LastOpened } from '../types';

const STORAGE_KEY = 'treinamento_intercessao_v1';

const DEFAULT_STATE: UserProgress = {
  name: '',
  isFirstVisit: true,
  completedModules: [],
  completedDays: [],
  dayNotes: {},
  favoritePrayers: [],
  favoritePromises: [],
  favoriteModules: [],
  prayersUsedCount: {},
  prayerRequests: [
    {
      id: 'ex-1',
      personOrSituation: 'Restauração da minha família',
      category: 'Família',
      request: 'Orar por mais paz, união e sabedoria nas conversas diárias.',
      date: new Date().toISOString().split('T')[0],
      status: 'Em oração',
      updates: [
        {
          id: 'up-1',
          date: new Date().toISOString().split('T')[0],
          note: 'Iniciando intercessão diária todas as manhãs com base no Salmo 91.'
        }
      ]
    },
    {
      id: 'ex-2',
      personOrSituation: 'Nova oportunidade de trabalho',
      category: 'Trabalho',
      request: 'Direção clara e sabedoria para os novos projetos e portas abertas.',
      date: new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0],
      status: 'Respondido',
      answeredDate: new Date().toISOString().split('T')[0],
      testimony: 'Deus abriu a porta exata com muito mais paz do que eu imaginava! Até aqui nos ajudou o Senhor.',
      updates: [
        {
          id: 'up-2',
          date: new Date().toISOString().split('T')[0],
          note: 'Resposta recebida! Glória a Deus.'
        }
      ]
    }
  ],
  lastOpened: {
    type: 'module',
    id: 1,
    title: 'Módulo 01 — O Chamado e o Poder do Intercessor',
    subtitle: 'Compreenda o propósito e o coração de quem se coloca na brecha',
    date: new Date().toISOString()
  }
};

export const getStoredProgress = (): UserProgress => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_STATE;
    const parsed = JSON.parse(data);
    return { ...DEFAULT_STATE, ...parsed };
  } catch (e) {
    console.error('Erro ao ler do localStorage:', e);
    return DEFAULT_STATE;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Erro ao salvar no localStorage:', e);
  }
};

export const setUserName = (name: string): UserProgress => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    name: name.trim(),
    isFirstVisit: false
  };
  saveProgress(updated);
  return updated;
};

export const toggleModuleCompleted = (moduleId: number): UserProgress => {
  const current = getStoredProgress();
  const exists = current.completedModules.includes(moduleId);
  const updatedModules = exists
    ? current.completedModules.filter((id) => id !== moduleId)
    : [...current.completedModules, moduleId];

  const updated: UserProgress = {
    ...current,
    completedModules: updatedModules
  };
  saveProgress(updated);
  return updated;
};

export const toggleDayCompleted = (day: number): UserProgress => {
  const current = getStoredProgress();
  const exists = current.completedDays.includes(day);
  const updatedDays = exists
    ? current.completedDays.filter((d) => d !== day)
    : [...current.completedDays, day];

  const updated: UserProgress = {
    ...current,
    completedDays: updatedDays
  };
  saveProgress(updated);
  return updated;
};

export const saveDayNote = (day: number, note: string): UserProgress => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    dayNotes: {
      ...current.dayNotes,
      [day]: note
    }
  };
  saveProgress(updated);
  return updated;
};

export const toggleFavoritePrayer = (prayerId: string): UserProgress => {
  const current = getStoredProgress();
  const exists = current.favoritePrayers.includes(prayerId);
  const updatedFavorites = exists
    ? current.favoritePrayers.filter((id) => id !== prayerId)
    : [...current.favoritePrayers, prayerId];

  const updated: UserProgress = {
    ...current,
    favoritePrayers: updatedFavorites
  };
  saveProgress(updated);
  return updated;
};

export const toggleFavoritePromise = (promiseId: string): UserProgress => {
  const current = getStoredProgress();
  const exists = current.favoritePromises.includes(promiseId);
  const updatedPromises = exists
    ? current.favoritePromises.filter((id) => id !== promiseId)
    : [...current.favoritePromises, promiseId];

  const updated: UserProgress = {
    ...current,
    favoritePromises: updatedPromises
  };
  saveProgress(updated);
  return updated;
};

export const recordPrayerUsed = (prayerId: string): UserProgress => {
  const current = getStoredProgress();
  const currentCount = current.prayersUsedCount[prayerId] || 0;
  const updated: UserProgress = {
    ...current,
    prayersUsedCount: {
      ...current.prayersUsedCount,
      [prayerId]: currentCount + 1
    }
  };
  saveProgress(updated);
  return updated;
};

export const setLastOpened = (item: LastOpened): UserProgress => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    lastOpened: item
  };
  saveProgress(updated);
  return updated;
};

export const addPrayerRequest = (
  req: Omit<PrayerRequest, 'id' | 'updates'>
): UserProgress => {
  const current = getStoredProgress();
  const newRequest: PrayerRequest = {
    ...req,
    id: 'req_' + Date.now(),
    updates: []
  };
  const updated: UserProgress = {
    ...current,
    prayerRequests: [newRequest, ...current.prayerRequests]
  };
  saveProgress(updated);
  return updated;
};

export const updatePrayerRequestStatus = (
  id: string,
  status: PrayerRequest['status'],
  testimony?: string
): UserProgress => {
  const current = getStoredProgress();
  const today = new Date().toISOString().split('T')[0];

  const updatedRequests = current.prayerRequests.map((req) => {
    if (req.id !== id) return req;
    return {
      ...req,
      status,
      answeredDate: status === 'Respondido' ? (req.answeredDate || today) : req.answeredDate,
      testimony: testimony !== undefined ? testimony : req.testimony
    };
  });

  const updated: UserProgress = {
    ...current,
    prayerRequests: updatedRequests
  };
  saveProgress(updated);
  return updated;
};

export const addRequestUpdate = (
  requestId: string,
  noteText: string
): UserProgress => {
  const current = getStoredProgress();
  const today = new Date().toISOString().split('T')[0];

  const updatedRequests = current.prayerRequests.map((req) => {
    if (req.id !== requestId) return req;
    const newUpdate = {
      id: 'up_' + Date.now(),
      date: today,
      note: noteText.trim()
    };
    return {
      ...req,
      updates: [...req.updates, newUpdate]
    };
  });

  const updated: UserProgress = {
    ...current,
    prayerRequests: updatedRequests
  };
  saveProgress(updated);
  return updated;
};

export const deletePrayerRequest = (id: string): UserProgress => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    prayerRequests: current.prayerRequests.filter((r) => r.id !== id)
  };
  saveProgress(updated);
  return updated;
};

export const exportUserDataJSON = (): string => {
  const data = getStoredProgress();
  return JSON.stringify(data, null, 2);
};

export const importUserDataJSON = (jsonString: string): boolean => {
  try {
    const parsed = JSON.parse(jsonString);
    if (typeof parsed === 'object' && parsed !== null) {
      saveProgress({ ...DEFAULT_STATE, ...parsed });
      return true;
    }
    return false;
  } catch (e) {
    console.error('Falha ao importar dados:', e);
    return false;
  }
};

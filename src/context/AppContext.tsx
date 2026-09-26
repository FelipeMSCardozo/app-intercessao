import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProgress,
  PrayerItem,
  PromiseItem,
  LastOpened,
  PrayerRequest,
  RequestStatus
} from '../types';
import * as storage from '../services/storage';
import confetti from 'canvas-confetti';

export type AppTab =
  | 'home'
  | 'training'
  | 'module_reader'
  | 'prayers'
  | 'promises'
  | 'journal'
  | 'memorial'
  | 'plan30'
  | 'bonuses'
  | 'favorites'
  | 'profile'
  | 'warfare_manual'
  | 'crisis_prayers'
  | 'fasting_guide'
  | 'super_bonus';

interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'gold' | 'info';
}

interface AppContextType {
  currentTab: AppTab;
  setCurrentTab: (tab: AppTab) => void;
  selectedModuleId: number;
  setSelectedModuleId: (id: number) => void;
  selectedPrayer: PrayerItem | null;
  setSelectedPrayer: (prayer: PrayerItem | null) => void;
  selectedPromise: PromiseItem | null;
  setSelectedPromise: (promise: PromiseItem | null) => void;
  userProgress: UserProgress;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  toasts: ToastMessage[];
  showToast: (text: string, type?: 'success' | 'gold' | 'info') => void;
  triggerCelebration: () => void;

  // Actions
  setName: (name: string) => void;
  toggleModuleComplete: (moduleId: number) => void;
  toggleDayComplete: (day: number) => void;
  saveDayReflection: (day: number, note: string) => void;
  togglePrayerFavorite: (prayerId: string) => void;
  togglePromiseFavorite: (promiseId: string) => void;
  markPrayerUsed: (prayerId: string) => void;
  openModule: (moduleId: number) => void;
  openPrayer: (prayer: PrayerItem) => void;
  openPromise: (promise: PromiseItem) => void;
  addNewPrayerRequest: (data: Omit<PrayerRequest, 'id' | 'updates'>) => void;
  changeRequestStatus: (id: string, status: RequestStatus, testimony?: string) => void;
  addUpdateRequest: (id: string, note: string) => void;
  removeRequest: (id: string) => void;
  setLastVisited: (item: LastOpened) => void;
  importData: (jsonStr: string) => boolean;
  exportData: () => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>(storage.getStoredProgress);
  const [currentTab, setCurrentTab] = useState<AppTab>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [selectedPrayer, setSelectedPrayer] = useState<PrayerItem | null>(null);
  const [selectedPromise, setSelectedPromise] = useState<PromiseItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    // Sync if updated externally
    const handleStorageChange = () => {
      setUserProgress(storage.getStoredProgress());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const showToast = (text: string, type: 'success' | 'gold' | 'info' = 'gold') => {
    const id = 'toast_' + Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#E8C66A', '#F4D98C', '#FFFFFF', '#D4AF37']
      });
    } catch {
      // fallback if canvas not available
    }
  };

  const setName = (name: string) => {
    const updated = storage.setUserName(name);
    setUserProgress(updated);
    showToast(`Bem-vindo, ${name}! Sua jornada começou.`, 'gold');
  };

  const toggleModuleComplete = (moduleId: number) => {
    const isCompleted = userProgress.completedModules.includes(moduleId);
    const updated = storage.toggleModuleCompleted(moduleId);
    setUserProgress(updated);
    if (!isCompleted) {
      triggerCelebration();
      showToast(`Módulo ${moduleId < 10 ? '0' + moduleId : moduleId} concluído! Parabéns.`, 'gold');
    } else {
      showToast(`Módulo ${moduleId < 10 ? '0' + moduleId : moduleId} desmarcado.`, 'info');
    }
  };

  const toggleDayComplete = (day: number) => {
    const isCompleted = userProgress.completedDays.includes(day);
    const updated = storage.toggleDayCompleted(day);
    setUserProgress(updated);
    if (!isCompleted) {
      triggerCelebration();
      showToast(`Dia ${day} concluído com sucesso!`, 'gold');
    }
  };

  const saveDayReflection = (day: number, note: string) => {
    const updated = storage.saveDayNote(day, note);
    setUserProgress(updated);
    showToast(`Reflexão do Dia ${day} salva.`, 'success');
  };

  const togglePrayerFavorite = (prayerId: string) => {
    const isFav = userProgress.favoritePrayers.includes(prayerId);
    const updated = storage.toggleFavoritePrayer(prayerId);
    setUserProgress(updated);
    showToast(isFav ? 'Removido dos favoritos' : 'Adicionado aos favoritos ♡', 'gold');
  };

  const togglePromiseFavorite = (promiseId: string) => {
    const isFav = userProgress.favoritePromises.includes(promiseId);
    const updated = storage.toggleFavoritePromise(promiseId);
    setUserProgress(updated);
    showToast(isFav ? 'Removido dos favoritos' : 'Promessa favoritada ♡', 'gold');
  };

  const markPrayerUsed = (prayerId: string) => {
    const updated = storage.recordPrayerUsed(prayerId);
    setUserProgress(updated);
    triggerCelebration();
    showToast('Oração marcada como realizada hoje! 🙏', 'gold');
  };

  const openModule = (moduleId: number) => {
    setSelectedModuleId(moduleId);
    setCurrentTab('module_reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const updated = storage.setLastOpened({
      type: 'module',
      id: moduleId,
      title: `Módulo ${moduleId < 10 ? '0' + moduleId : moduleId}`,
      date: new Date().toISOString()
    });
    setUserProgress(updated);
  };

  const openPrayer = (prayer: PrayerItem) => {
    setSelectedPrayer(prayer);
    const updated = storage.setLastOpened({
      type: 'prayer',
      id: prayer.id,
      title: prayer.title,
      subtitle: prayer.category,
      date: new Date().toISOString()
    });
    setUserProgress(updated);
  };

  const openPromise = (promise: PromiseItem) => {
    setSelectedPromise(promise);
    const updated = storage.setLastOpened({
      type: 'promise',
      id: promise.id,
      title: promise.reference,
      subtitle: promise.title,
      date: new Date().toISOString()
    });
    setUserProgress(updated);
  };

  const addNewPrayerRequest = (data: Omit<PrayerRequest, 'id' | 'updates'>) => {
    const updated = storage.addPrayerRequest(data);
    setUserProgress(updated);
    showToast('Pedido de oração registrado no diário!', 'gold');
  };

  const changeRequestStatus = (id: string, status: RequestStatus, testimony?: string) => {
    const updated = storage.updatePrayerRequestStatus(id, status, testimony);
    setUserProgress(updated);
    if (status === 'Respondido') {
      triggerCelebration();
      showToast('Glória a Deus! "Até aqui o Senhor nos ajudou."', 'gold');
    } else {
      showToast(`Status atualizado para: ${status}`, 'info');
    }
  };

  const addUpdateRequest = (id: string, note: string) => {
    const updated = storage.addRequestUpdate(id, note);
    setUserProgress(updated);
    showToast('Atualização registrada com sucesso!', 'success');
  };

  const removeRequest = (id: string) => {
    const updated = storage.deletePrayerRequest(id);
    setUserProgress(updated);
    showToast('Pedido removido do diário.', 'info');
  };

  const setLastVisited = (item: LastOpened) => {
    const updated = storage.setLastOpened(item);
    setUserProgress(updated);
  };

  const importData = (jsonStr: string): boolean => {
    const ok = storage.importUserDataJSON(jsonStr);
    if (ok) {
      setUserProgress(storage.getStoredProgress());
      showToast('Dados restaurados com sucesso!', 'gold');
      return true;
    }
    showToast('Erro ao importar arquivo de dados.', 'info');
    return false;
  };

  const exportData = (): string => {
    return storage.exportUserDataJSON();
  };

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        selectedModuleId,
        setSelectedModuleId,
        selectedPrayer,
        setSelectedPrayer,
        selectedPromise,
        setSelectedPromise,
        userProgress,
        isSearchOpen,
        setIsSearchOpen,
        fontSize,
        setFontSize,
        toasts,
        showToast,
        triggerCelebration,
        setName,
        toggleModuleComplete,
        toggleDayComplete,
        saveDayReflection,
        togglePrayerFavorite,
        togglePromiseFavorite,
        markPrayerUsed,
        openModule,
        openPrayer,
        openPromise,
        addNewPrayerRequest,
        changeRequestStatus,
        addUpdateRequest,
        removeRequest,
        setLastVisited,
        importData,
        exportData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

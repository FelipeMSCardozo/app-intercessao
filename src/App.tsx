import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';

// Pages
import { Dashboard } from './pages/Dashboard';
import { TrainingPage } from './pages/TrainingPage';
import { ModuleReaderPage } from './pages/ModuleReaderPage';
import { PrayersPage } from './pages/PrayersPage';
import { PromisesPage } from './pages/PromisesPage';
import { JournalPage } from './pages/JournalPage';
import { MemorialPage } from './pages/MemorialPage';
import { Plan30DaysPage } from './pages/Plan30DaysPage';
import { BonusesPage } from './pages/BonusesPage';
import { WarfareManualPage } from './pages/WarfareManualPage';
import { CrisisPrayersPage } from './pages/CrisisPrayersPage';
import { FastingGuidePage } from './pages/FastingGuidePage';
import { SuperBonusPage } from './pages/SuperBonusPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';

// Modals
import { WelcomeModal } from './components/common/WelcomeModal';
import { SearchModal } from './components/common/SearchModal';
import { PrayerReaderModal } from './components/common/PrayerReaderModal';
import { PromiseReaderModal } from './components/common/PromiseReaderModal';
import { ToastContainer } from './components/common/ToastContainer';

export const MainContent: React.FC = () => {
  const { currentTab } = useApp();

  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return <Dashboard />;
      case 'training':
        return <TrainingPage />;
      case 'module_reader':
        return <ModuleReaderPage />;
      case 'prayers':
        return <PrayersPage />;
      case 'promises':
        return <PromisesPage />;
      case 'journal':
        return <JournalPage />;
      case 'memorial':
        return <MemorialPage />;
      case 'plan30':
        return <Plan30DaysPage />;
      case 'bonuses':
        return <BonusesPage />;
      case 'warfare_manual':
        return <WarfareManualPage />;
      case 'crisis_prayers':
        return <CrisisPrayersPage />;
      case 'fasting_guide':
        return <FastingGuidePage />;
      case 'super_bonus':
        return <SuperBonusPage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-prayer-bg text-prayer-text selection:bg-gold/25 selection:text-gold-light">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header />

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 md:py-8 max-w-6xl w-full mx-auto pb-24 md:pb-12">
          {renderPage()}
          <Footer />
        </main>
      </div>

      {/* Mobile Bottom Navigation (hidden on desktop) */}
      <MobileNav />

      {/* Floating Global Modals */}
      <WelcomeModal />
      <SearchModal />
      <PrayerReaderModal />
      <PromiseReaderModal />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return <MainContent />;
};

export default App;

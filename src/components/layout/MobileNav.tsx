import React, { useState } from 'react';
import { useApp, AppTab } from '../../context/AppContext';
import {
  Home,
  BookOpen,
  HeartHandshake,
  PenTool,
  Menu,
  X,
  Scroll,
  Calendar,
  Gift,
  Heart,
  Award,
  Shield,
  Sparkles
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentTab, setCurrentTab, userProgress } = useApp();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleSelectTab = (tab: AppTab) => {
    setCurrentTab(tab);
    setIsMoreOpen(false);
  };

  const isMoreActive = [
    'promises',
    'plan30',
    'bonuses',
    'favorites',
    'profile',
    'warfare_manual',
    'crisis_prayers',
    'fasting_guide',
    'super_bonus'
  ].includes(currentTab);

  return (
    <>
      {/* "Mais" Modal / Bottom Sheet */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMoreOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative bg-prayer-sub border-t border-prayer-border rounded-t-3xl p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-prayer-border mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-lg text-prayer-text">Mais Recursos</h3>
              </div>
              <button
                onClick={() => setIsMoreOpen(false)}
                className="p-1 rounded-lg text-prayer-muted hover:text-prayer-text bg-prayer-card"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => handleSelectTab('promises')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  currentTab === 'promises'
                    ? 'bg-prayer-card border-gold text-gold'
                    : 'bg-prayer-card border-prayer-border text-prayer-text hover:border-gold/30'
                }`}
              >
                <Scroll className="w-6 h-6 text-gold mb-2" />
                <div>
                  <span className="font-medium text-sm block">100 Promessas</span>
                  <span className="text-[11px] text-prayer-muted">Bíblicas por temas</span>
                </div>
              </button>

              <button
                onClick={() => handleSelectTab('plan30')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  currentTab === 'plan30'
                    ? 'bg-prayer-card border-gold text-gold'
                    : 'bg-prayer-card border-prayer-border text-prayer-text hover:border-gold/30'
                }`}
              >
                <Calendar className="w-6 h-6 text-gold mb-2" />
                <div>
                  <span className="font-medium text-sm block">Plano 30 Dias</span>
                  <span className="text-[11px] text-prayer-muted">Jornada diária</span>
                </div>
              </button>

              <button
                onClick={() => handleSelectTab('bonuses')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  currentTab === 'bonuses'
                    ? 'bg-prayer-card border-gold text-gold'
                    : 'bg-prayer-card border-prayer-border text-prayer-text hover:border-gold/30'
                }`}
              >
                <Gift className="w-6 h-6 text-gold mb-2" />
                <div>
                  <span className="font-medium text-sm block">Seus Bônus</span>
                  <span className="text-[11px] text-prayer-muted">6 bônus + Super</span>
                </div>
              </button>

              <button
                onClick={() => handleSelectTab('favorites')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  currentTab === 'favorites'
                    ? 'bg-prayer-card border-gold text-gold'
                    : 'bg-prayer-card border-prayer-border text-prayer-text hover:border-gold/30'
                }`}
              >
                <Heart className="w-6 h-6 text-gold mb-2" />
                <div>
                  <span className="font-medium text-sm block">Meus Favoritos</span>
                  <span className="text-[11px] text-prayer-muted">
                    {userProgress.favoritePrayers.length + userProgress.favoritePromises.length} salvos
                  </span>
                </div>
              </button>
            </div>

            {/* Quick links to special bonuses */}
            <div className="space-y-2 pt-2 border-t border-prayer-border">
              <span className="text-[11px] uppercase tracking-wider text-prayer-muted font-semibold block px-1">
                Acesso Direto aos Guias Especiais
              </span>

              <button
                onClick={() => handleSelectTab('warfare_manual')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-prayer-card/60 hover:bg-prayer-card border border-prayer-border text-left"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-gold" />
                  <span className="text-xs font-medium text-prayer-text">Manual de Guerra Espiritual</span>
                </div>
                <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">Ler</span>
              </button>

              <button
                onClick={() => handleSelectTab('crisis_prayers')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-prayer-card/60 hover:bg-prayer-card border border-prayer-border text-left"
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-medium text-prayer-text">Orações para Momentos de Crise</span>
                </div>
                <span className="text-[10px] text-rose-400 uppercase tracking-wider font-semibold">11 Casos</span>
              </button>

              <button
                onClick={() => handleSelectTab('profile')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-prayer-card/60 hover:bg-prayer-card border border-prayer-border text-left"
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-xs font-medium text-prayer-text">Meu Progresso & Dados</span>
                </div>
                <span className="text-[10px] text-prayer-muted">Ver estatísticas</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-prayer-sub/95 backdrop-blur-lg border-t border-prayer-border px-2 py-1.5 flex items-center justify-around md:hidden pb-safe">
        <button
          onClick={() => handleSelectTab('home')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentTab === 'home'
              ? 'text-gold'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium">Início</span>
        </button>

        <button
          onClick={() => handleSelectTab('training')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentTab === 'training' || currentTab === 'module_reader'
              ? 'text-gold'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium">Treinamento</span>
        </button>

        <button
          onClick={() => handleSelectTab('prayers')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentTab === 'prayers'
              ? 'text-gold'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          <HeartHandshake className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium">Orações</span>
        </button>

        <button
          onClick={() => handleSelectTab('journal')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentTab === 'journal' || currentTab === 'memorial'
              ? 'text-gold'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          <PenTool className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium">Diário</span>
        </button>

        <button
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
            isMoreActive || isMoreOpen
              ? 'text-gold'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          <Menu className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium">Mais</span>
          {isMoreActive && (
            <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-gold" />
          )}
        </button>
      </nav>
    </>
  );
};

import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Heart, Flame } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    userProgress,
    setIsSearchOpen,
    setCurrentTab,
    currentTab
  } = useApp();

  const totalFavs =
    userProgress.favoritePrayers.length +
    userProgress.favoritePromises.length;

  return (
    <header className="sticky top-0 z-30 bg-prayer-bg/90 backdrop-blur-md border-b border-prayer-border px-4 lg:px-8 py-3.5 flex items-center justify-between transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold/20 via-prayer-card to-prayer-sub border border-gold/40 flex items-center justify-center shadow-gold-glow">
          <Flame className="w-5 h-5 text-gold" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-gold font-medium block">
            Plataforma Digital
          </span>
          <h1 className="font-serif text-base lg:text-lg text-prayer-text font-normal tracking-wide">
            Treinamento de Intercessão e Oração
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsSearchOpen(true)}
          aria-label="Pesquisar no treinamento"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-prayer-card border border-prayer-border hover:border-gold/50 text-prayer-muted hover:text-prayer-text transition-all text-xs lg:text-sm"
        >
          <Search className="w-4 h-4 text-gold" />
          <span className="hidden sm:inline">Buscar temas, orações...</span>
          <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-prayer-sub rounded border border-prayer-border text-prayer-muted">
            /
          </kbd>
        </button>

        <button
          onClick={() => setCurrentTab('favorites')}
          aria-label="Ver favoritos"
          className={`p-2 rounded-lg border transition-all relative ${
            currentTab === 'favorites'
              ? 'bg-gold/15 border-gold text-gold'
              : 'bg-prayer-card border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text'
          }`}
          title="Favoritos"
        >
          <Heart className="w-4 h-4" />
          {totalFavs > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-prayer-bg text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              {totalFavs}
            </span>
          )}
        </button>

        {userProgress.name && (
          <button
            onClick={() => setCurrentTab('profile')}
            className="hidden md:flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-lg bg-prayer-sub border border-prayer-border hover:border-gold/40 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-semibold">
              {userProgress.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs text-prayer-text max-w-[120px] truncate">
              {userProgress.name}
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

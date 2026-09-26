import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRAYERS_DATA } from '../data/prayers';
import { PROMISES_DATA } from '../data/promises';
import {
  Heart,
  HeartHandshake,
  Scroll,
  ArrowRight,
  Trash2
} from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const {
    userProgress,
    openPrayer,
    openPromise,
    togglePrayerFavorite,
    togglePromiseFavorite,
    setCurrentTab
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'prayers' | 'promises'>('all');

  const favoritePrayers = PRAYERS_DATA.filter((p) =>
    userProgress.favoritePrayers.includes(p.id)
  );

  const favoritePromises = PROMISES_DATA.filter((pr) =>
    userProgress.favoritePromises.includes(pr.id)
  );

  const totalCount = favoritePrayers.length + favoritePromises.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span>Sua Coleção Pessoal</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Meus Favoritos
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Acesse rapidamente as orações e promessas bíblicas que mais tocaram seu coração durante seus momentos com Deus.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-prayer-border pb-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-gold text-prayer-bg'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          Todos ({totalCount})
        </button>

        <button
          onClick={() => setActiveTab('prayers')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'prayers'
              ? 'bg-gold text-prayer-bg'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          Orações ({favoritePrayers.length})
        </button>

        <button
          onClick={() => setActiveTab('promises')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'promises'
              ? 'bg-gold text-prayer-bg'
              : 'text-prayer-muted hover:text-prayer-text'
          }`}
        >
          Promessas ({favoritePromises.length})
        </button>
      </div>

      {/* Empty State */}
      {totalCount === 0 ? (
        <div className="rounded-3xl bg-prayer-card border border-prayer-border p-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 mx-auto flex items-center justify-center text-rose-400">
            <Heart className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-prayer-text">
              Nenhum conteúdo favoritado ainda.
            </h3>
            <p className="text-xs text-prayer-muted max-w-sm mx-auto">
              Ao navegar pela Biblioteca de Orações ou pelas 100 Promessas, clique no ícone de coração ♡ para salvar aqui seus textos preferidos.
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setCurrentTab('prayers')}
              className="px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold text-xs text-gold"
            >
              Explorar Orações
            </button>
            <button
              onClick={() => setCurrentTab('promises')}
              className="px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold text-xs text-gold"
            >
              Explorar Promessas
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Favorite Prayers Section */}
          {(activeTab === 'all' || activeTab === 'prayers') && favoritePrayers.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5 px-1">
                <HeartHandshake className="w-4 h-4" />
                <span>Orações Favoritas ({favoritePrayers.length})</span>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoritePrayers.map((prayer) => (
                  <div
                    key={prayer.id}
                    className="p-5 rounded-2xl bg-prayer-card border border-prayer-border hover:border-gold/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-semibold">
                          {prayer.category}
                        </span>
                        <button
                          onClick={() => togglePrayerFavorite(prayer.id)}
                          className="text-rose-400 hover:opacity-75 p-1"
                          title="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-serif text-lg text-prayer-text leading-snug">
                        {prayer.title}
                      </h4>
                      <p className="text-xs text-prayer-muted line-clamp-2 italic">
                        "{prayer.prayerText}"
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-prayer-border flex items-center justify-end">
                      <button
                        onClick={() => openPrayer(prayer)}
                        className="py-1 px-3 rounded-lg bg-prayer-sub border border-prayer-border hover:border-gold text-xs text-gold flex items-center space-x-1"
                      >
                        <span>Abrir oração</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Favorite Promises Section */}
          {(activeTab === 'all' || activeTab === 'promises') && favoritePromises.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5 px-1">
                <Scroll className="w-4 h-4" />
                <span>Promessas Favoritas ({favoritePromises.length})</span>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoritePromises.map((prom) => (
                  <div
                    key={prom.id}
                    className="p-5 rounded-2xl bg-prayer-card border border-prayer-border hover:border-gold/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gold">
                          {prom.reference}
                        </span>
                        <button
                          onClick={() => togglePromiseFavorite(prom.id)}
                          className="text-rose-400 hover:opacity-75 p-1"
                          title="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-serif text-lg text-prayer-text leading-snug">
                        {prom.title}
                      </h4>
                      <blockquote className="text-xs text-prayer-text/80 italic line-clamp-2 border-l-2 border-gold/40 pl-2">
                        "{prom.text}"
                      </blockquote>
                    </div>

                    <div className="pt-3 mt-3 border-t border-prayer-border flex items-center justify-end">
                      <button
                        onClick={() => openPromise(prom)}
                        className="py-1 px-3 rounded-lg bg-prayer-sub border border-prayer-border hover:border-gold text-xs text-gold flex items-center space-x-1"
                      >
                        <span>Ver promessa</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

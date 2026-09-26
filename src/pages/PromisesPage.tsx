import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PROMISES_DATA } from '../data/promises';
import { PromiseCategory, PromiseItem } from '../types';
import {
  Scroll,
  Search,
  Heart,
  ArrowRight,
  BookOpen
} from 'lucide-react';

const CATEGORIES: PromiseCategory[] = [
  'Todas',
  'Fé',
  'Paz',
  'Sabedoria',
  'Proteção',
  'Família',
  'Esperança',
  'Provisão',
  'Perseverança',
  'Coragem',
  'Direção',
  'Consolo',
  'Relacionamento com Deus'
];

export const PromisesPage: React.FC = () => {
  const {
    openPromise,
    userProgress,
    togglePromiseFavorite,
    addNewPrayerRequest,
    setCurrentTab
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<PromiseCategory>('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPromises = useMemo(() => {
    return PROMISES_DATA.filter((promise) => {
      const matchCat =
        selectedCategory === 'Todas' || promise.category === selectedCategory;

      const q = searchTerm.trim().toLowerCase();
      const matchSearch =
        !q ||
        promise.title.toLowerCase().includes(q) ||
        promise.reference.toLowerCase().includes(q) ||
        promise.text.toLowerCase().includes(q) ||
        promise.application.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleQuickPray = (promise: PromiseItem) => {
    addNewPrayerRequest({
      personOrSituation: `Orando com ${promise.reference}`,
      category: promise.category === 'Todas' ? 'Espiritual' : promise.category,
      request: `Declaro com fé: "${promise.text}" (${promise.reference}). ${promise.application}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Em oração'
    });
    setCurrentTab('journal');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
          <Scroll className="w-3.5 h-3.5" />
          <span>Coleção de Fé • 100 Promessas</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          100 Promessas Bíblicas
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Versículos autênticos da Palavra de Deus organizados por áreas vitais, com aplicações práticas para orar e declarar com fé.
        </p>
      </div>

      {/* Search & Category Pills */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-gold absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por referência (ex: Jeremias 33:3), tema ou palavras..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text placeholder:text-prayer-muted text-xs md:text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-prayer-muted hover:text-prayer-text absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5"
            >
              Limpar
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gold text-prayer-bg font-semibold shadow-gold-glow'
                    : 'bg-prayer-card text-prayer-muted hover:text-prayer-text border border-prayer-border hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs text-prayer-muted px-1">
        <span>
          Mostrando <strong>{filteredPromises.length}</strong> de <strong>{PROMISES_DATA.length}</strong> promessas
        </span>
        {selectedCategory !== 'Todas' && (
          <button
            onClick={() => setSelectedCategory('Todas')}
            className="text-gold hover:underline"
          >
            Ver todas as promessas
          </button>
        )}
      </div>

      {/* Grid of Promises */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPromises.map((promise) => {
          const isFav = userProgress.favoritePromises.includes(promise.id);

          return (
            <div
              key={promise.id}
              className="rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-all p-5 flex flex-col justify-between shadow-card-subtle group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-prayer-sub text-gold border border-gold/30">
                      #{promise.number}
                    </span>
                    <span className="text-xs font-bold text-gold-light">
                      {promise.reference}
                    </span>
                  </div>

                  <button
                    onClick={() => togglePromiseFavorite(promise.id)}
                    className="text-prayer-muted hover:text-rose-400 p-1"
                    title={isFav ? 'Remover dos favoritos' : 'Favoritar'}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'text-rose-400 fill-rose-400' : ''
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-serif text-base text-prayer-text group-hover:text-gold transition-colors leading-snug">
                  {promise.title}
                </h3>

                <blockquote className="text-xs text-prayer-text/85 italic line-clamp-3 border-l-2 border-gold/50 pl-2.5 my-1">
                  "{promise.text}"
                </blockquote>

                <div className="bg-prayer-sub/80 p-2.5 rounded-xl border border-prayer-border/60">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-0.5">
                    Como aplicar em oração:
                  </span>
                  <p className="text-[11px] text-prayer-muted leading-relaxed line-clamp-2">
                    {promise.application}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-3 border-t border-prayer-border/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => openPromise(promise)}
                  className="text-xs text-prayer-muted hover:text-prayer-text transition-colors flex items-center space-x-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver completa</span>
                </button>

                <button
                  onClick={() => handleQuickPray(promise)}
                  className="py-1.5 px-3 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-prayer-bg border border-gold/30 text-xs font-semibold transition-all flex items-center space-x-1.5"
                >
                  <span>Orar com esta promessa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

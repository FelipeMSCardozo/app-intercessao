import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRAYERS_DATA } from '../data/prayers';
import { PrayerCategory } from '../types';
import {
  HeartHandshake,
  Search,
  Heart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const CATEGORIES: PrayerCategory[] = [
  'Todos',
  'Família',
  'Filhos',
  'Casamento',
  'Trabalho',
  'Finanças',
  'Sabedoria',
  'Direção',
  'Ansiedade/angústia',
  'Proteção',
  'Saúde e Cura',
  'Igreja',
  'Nação',
  'Gratidão',
  'Arrependimento',
  'Momentos difíceis',
  'Manhã',
  'Noite'
];

export const PrayersPage: React.FC = () => {
  const {
    openPrayer,
    userProgress,
    togglePrayerFavorite
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<PrayerCategory>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrayers = useMemo(() => {
    return PRAYERS_DATA.filter((prayer) => {
      const matchCat =
        selectedCategory === 'Todos' || prayer.category === selectedCategory;

      const q = searchTerm.trim().toLowerCase();
      const matchSearch =
        !q ||
        prayer.title.toLowerCase().includes(q) ||
        prayer.objective.toLowerCase().includes(q) ||
        prayer.prayerText.toLowerCase().includes(q) ||
        prayer.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Biblioteca Completa • 70+ Orações</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Biblioteca de Orações
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Encontre uma oração para o momento que você está vivendo. Textos bíblicos e reverentes para inflamar sua fé.
        </p>
      </div>

      {/* Search & Filters Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-gold absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por título, palavra-chave, tema ou situação..."
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

        {/* Category Pills (horizontal scrollable) */}
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

      {/* Prayers Results Count */}
      <div className="flex items-center justify-between text-xs text-prayer-muted px-1">
        <span>
          Mostrando <strong>{filteredPrayers.length}</strong> de <strong>{PRAYERS_DATA.length}</strong> orações
        </span>
        {selectedCategory !== 'Todos' && (
          <button
            onClick={() => setSelectedCategory('Todos')}
            className="text-gold hover:underline"
          >
            Limpar filtro de categoria
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredPrayers.length === 0 ? (
        <div className="rounded-3xl bg-prayer-card border border-prayer-border p-12 text-center space-y-3">
          <p className="font-serif text-xl text-prayer-text">Nenhuma oração encontrada</p>
          <p className="text-xs text-prayer-muted max-w-sm mx-auto">
            Não encontramos orações correspondentes à sua pesquisa. Tente usar termos mais amplos ou navegue pelas categorias.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todos');
            }}
            className="mt-2 px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border text-xs text-gold hover:border-gold"
          >
            Ver todas as orações
          </button>
        </div>
      ) : (
        /* Prayers Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrayers.map((prayer) => {
            const isFav = userProgress.favoritePrayers.includes(prayer.id);
            const timesPrayed = userProgress.prayersUsedCount[prayer.id] || 0;

            return (
              <div
                key={prayer.id}
                className="rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-all p-5 flex flex-col justify-between shadow-card-subtle group"
              >
                <div className="space-y-3">
                  {/* Top Bar with category and favorite */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-prayer-sub text-gold border border-gold/25 font-semibold uppercase tracking-wider">
                      {prayer.category}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePrayerFavorite(prayer.id);
                      }}
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

                  {/* Title & Objective */}
                  <div>
                    <h3 className="font-serif text-lg text-prayer-text group-hover:text-gold transition-colors leading-snug mb-1">
                      {prayer.title}
                    </h3>
                    <p className="text-xs text-prayer-muted line-clamp-2 leading-relaxed">
                      {prayer.objective}
                    </p>
                  </div>

                  {/* Snippet of prayer */}
                  <p className="text-xs text-prayer-text/75 italic line-clamp-2 border-l-2 border-prayer-border pl-2.5">
                    "{prayer.prayerText}"
                  </p>
                </div>

                {/* Footer action button */}
                <div className="pt-4 mt-3 border-t border-prayer-border/60 flex items-center justify-between">
                  <div className="text-[11px] text-prayer-muted">
                    {timesPrayed > 0 ? (
                      <span className="text-emerald-400 flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Orada {timesPrayed}x</span>
                      </span>
                    ) : (
                      <span>📖 {prayer.biblicalReferences[0] || 'Escrituras'}</span>
                    )}
                  </div>

                  <button
                    onClick={() => openPrayer(prayer)}
                    className="py-1.5 px-3.5 rounded-xl bg-prayer-sub border border-prayer-border group-hover:border-gold/40 text-prayer-text group-hover:text-gold text-xs font-medium transition-colors flex items-center space-x-1.5"
                  >
                    <span>Ler oração</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

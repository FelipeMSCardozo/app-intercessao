import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TRAINING_MODULES } from '../../data/modules';
import { PRAYERS_DATA } from '../../data/prayers';
import { PROMISES_DATA } from '../../data/promises';
import { PLAN_30_DAYS } from '../../data/plan30days';
import { BONUSES_DATA } from '../../data/bonuses';
import {
  Search,
  X,
  BookOpen,
  HeartHandshake,
  Scroll,
  Calendar,
  Gift,
  ArrowRight
} from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    openModule,
    openPrayer,
    openPromise,
    setCurrentTab
  } = useApp();

  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !isSearchOpen)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Multi-index search
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedModules = TRAINING_MODULES.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.learnings.some((l) => l.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedPrayers = PRAYERS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.objective.toLowerCase().includes(q) ||
        p.prayerText.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 6);

    const matchedPromises = PROMISES_DATA.filter(
      (pr) =>
        pr.title.toLowerCase().includes(q) ||
        pr.category.toLowerCase().includes(q) ||
        pr.reference.toLowerCase().includes(q) ||
        pr.text.toLowerCase().includes(q) ||
        pr.application.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedDays = PLAN_30_DAYS.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.theme.toLowerCase().includes(q) ||
        d.devotional.toLowerCase().includes(q) ||
        d.prayer.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedBonuses = BONUSES_DATA.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    ).slice(0, 3);

    return {
      modules: matchedModules,
      prayers: matchedPrayers,
      promises: matchedPromises,
      days: matchedDays,
      bonuses: matchedBonuses,
      total:
        matchedModules.length +
        matchedPrayers.length +
        matchedPromises.length +
        matchedDays.length +
        matchedBonuses.length
    };
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 md:pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-prayer-sub border border-gold/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-prayer-border flex items-center space-x-3 bg-prayer-card">
          <Search className="w-5 h-5 text-gold shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite para buscar em módulos, orações, promessas, plano de 30 dias..."
            className="flex-1 bg-transparent border-none outline-none text-prayer-text placeholder:text-prayer-muted text-sm md:text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-prayer-muted hover:text-prayer-text p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs px-2.5 py-1 rounded bg-prayer-sub border border-prayer-border text-prayer-muted hover:text-prayer-text"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="text-center py-10 space-y-2 text-prayer-muted">
              <p className="text-sm">Sugestões de busca:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Família', 'Ansiedade', 'Provisão', 'Sabedoria', 'Filhos', 'Guerra Espiritual', 'Jejum'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 rounded-full bg-prayer-card border border-prayer-border hover:border-gold/50 text-prayer-text transition-all"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results && results.total === 0 ? (
            <div className="text-center py-12 text-prayer-muted">
              <p className="text-base text-prayer-text font-serif">Nenhum resultado encontrado para "{query}"</p>
              <p className="text-xs mt-1">Tente buscar por termos mais simples, como "paz", "filhos" ou "cura".</p>
            </div>
          ) : (
            results && (
              <>
                {/* Orações */}
                {results.prayers.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5 mb-2.5">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span>Orações Encontradas ({results.prayers.length})</span>
                    </span>
                    <div className="space-y-2">
                      {results.prayers.map((prayer) => (
                        <button
                          key={prayer.id}
                          onClick={() => {
                            openPrayer(prayer);
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="text-xs font-semibold text-gold-light block">
                              {prayer.title}
                            </span>
                            <span className="text-[11px] text-prayer-muted line-clamp-1">
                              {prayer.objective}
                            </span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-prayer-sub border border-prayer-border text-prayer-muted group-hover:text-gold shrink-0 ml-3">
                            {prayer.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Promessas */}
                {results.promises.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5 mb-2.5">
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Promessas Bíblicas ({results.promises.length})</span>
                    </span>
                    <div className="space-y-2">
                      {results.promises.map((prom) => (
                        <button
                          key={prom.id}
                          onClick={() => {
                            openPromise(prom);
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-gold">{prom.reference}</span>
                              <span className="text-xs text-prayer-text font-medium">{prom.title}</span>
                            </div>
                            <span className="text-[11px] text-prayer-muted line-clamp-1 italic">
                              "{prom.text}"
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-prayer-muted group-hover:text-gold shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Módulos do Treinamento */}
                {results.modules.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5 mb-2.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Módulos de Estudo ({results.modules.length})</span>
                    </span>
                    <div className="space-y-2">
                      {results.modules.map((mod) => (
                        <button
                          key={mod.id}
                          onClick={() => {
                            openModule(mod.id);
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="text-xs font-semibold text-prayer-text block">
                              Módulo {mod.number} — {mod.title}
                            </span>
                            <span className="text-[11px] text-prayer-muted line-clamp-1">
                              {mod.description}
                            </span>
                          </div>
                          <span className="text-[10px] text-gold font-medium px-2 py-0.5 rounded bg-gold/10 shrink-0 ml-2">
                            Estudar
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Plano de 30 Dias */}
                {results.days.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5 mb-2.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Plano de 30 Dias ({results.days.length})</span>
                    </span>
                    <div className="space-y-2">
                      {results.days.map((d) => (
                        <button
                          key={d.day}
                          onClick={() => {
                            setCurrentTab('plan30');
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-semibold text-gold-light block">
                              Dia {d.day}: {d.title}
                            </span>
                            <span className="text-[11px] text-prayer-muted line-clamp-1">
                              Tema: {d.theme} • {d.scriptureReference}
                            </span>
                          </div>
                          <span className="text-xs text-prayer-muted">Ver Dia</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bônus */}
                {results.bonuses.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5 mb-2.5">
                      <Gift className="w-3.5 h-3.5" />
                      <span>Bônus Relacionados ({results.bonuses.length})</span>
                    </span>
                    <div className="space-y-2">
                      {results.bonuses.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            setCurrentTab(b.contentView as any);
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-3 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-semibold text-prayer-text block">
                              {b.title}
                            </span>
                            <span className="text-[11px] text-prayer-muted line-clamp-1">
                              {b.subtitle}
                            </span>
                          </div>
                          <span className="text-xs text-gold">Acessar</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useApp } from '../context/AppContext';
import { BONUSES_DATA } from '../data/bonuses';
import {
  Gift,
  Sparkles,
  ArrowRight,
  Shield,
  Heart,
  Scroll,
  PenTool,
  Calendar,
  Utensils
} from 'lucide-react';

export const BonusesPage: React.FC = () => {
  const { setCurrentTab } = useApp();

  const normalBonuses = BONUSES_DATA.filter((b) => !b.isSuper);
  const superBonus = BONUSES_DATA.find((b) => b.isSuper);

  const getBonusIcon = (id: string) => {
    switch (id) {
      case 'bonus-1':
        return <PenTool className="w-5 h-5 text-gold" />;
      case 'bonus-2':
        return <Scroll className="w-5 h-5 text-gold" />;
      case 'bonus-3':
        return <Shield className="w-5 h-5 text-gold" />;
      case 'bonus-4':
        return <Calendar className="w-5 h-5 text-gold" />;
      case 'bonus-5':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'bonus-6':
        return <Utensils className="w-5 h-5 text-gold" />;
      default:
        return <Gift className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300 pb-12">
      {/* Top Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
          <Gift className="w-3.5 h-3.5" />
          <span>Materiais Inclusos no Treinamento</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Seus Bônus Exclusivos
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Você tem acesso integral a todos os 6 materiais complementares e ao Super Bônus especial para acelerar seu amadurecimento espiritual.
        </p>
      </div>

      {/* SUPER BÔNUS (Visual Premium com destaque dourado e gradiente especial) */}
      {superBonus && (
        <div className="rounded-3xl bg-gradient-to-br from-prayer-card via-[#1c1a14] to-prayer-bg border-2 border-gold/60 p-6 md:p-10 shadow-gold-glow-lg relative overflow-hidden">
          {/* Subtle gold ambient rays */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-gold to-gold-light text-prayer-bg text-xs font-bold uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PREMIUM SUPER BÔNUS</span>
                </span>
                <span className="text-xs text-gold/90 font-medium">Avaliado em R$ 97,00 (Gratuito)</span>
              </div>

              <h2 className="font-serif text-2xl md:text-4xl text-gold-light leading-snug">
                ⭐ {superBonus.title}
              </h2>

              <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed font-light">
                {superBonus.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {superBonus.summaryPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-prayer-text/90">
                    <span className="text-gold font-bold">★</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentTab('super_bonus')}
                  className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-bold text-sm md:text-base hover:opacity-95 shadow-gold-glow flex items-center space-x-2 transition-all active:scale-[0.98]"
                >
                  <span>{superBonus.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Cover representation */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => setCurrentTab('super_bonus')}>
                <img
                  src="/assets/superbonus-oracao-que-move-o-ceu.png"
                  alt="Super Bônus A Oração que Move o Céu"
                  className="w-48 md:w-56 rounded-2xl shadow-2xl border border-gold/40 transform group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-xs font-semibold text-gold bg-prayer-bg/90 px-3 py-1 rounded-full border border-gold/40">
                    Abrir Guia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6 Bônus Regulares em Grid de Cards */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl md:text-2xl text-prayer-text">
          Coleção Completa de Bônus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {normalBonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/40 transition-all p-6 flex flex-col justify-between shadow-card-subtle group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-prayer-sub border border-prayer-border flex items-center justify-center">
                    {getBonusIcon(bonus.id)}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/25 font-semibold">
                    {bonus.badge || bonus.number}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-prayer-muted font-bold block mb-1">
                    {bonus.number}
                  </span>
                  <h4 className="font-serif text-lg text-prayer-text group-hover:text-gold transition-colors leading-snug">
                    {bonus.title}
                  </h4>
                  <p className="text-xs text-prayer-muted line-clamp-3 mt-1.5 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                {/* Key features bullets */}
                <div className="space-y-1.5 pt-1 border-t border-prayer-border/60">
                  {bonus.summaryPoints.slice(0, 2).map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-prayer-text/80 line-clamp-1">
                      <span className="text-gold">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-prayer-border/60 flex items-center justify-between">
                <span className="text-xs text-prayer-muted">
                  Valor: <del className="opacity-70">{bonus.value}</del>{' '}
                  <strong className="text-gold font-bold">Grátis</strong>
                </span>

                <button
                  onClick={() => setCurrentTab(bonus.contentView as any)}
                  className="py-1.5 px-3.5 rounded-xl bg-prayer-sub hover:bg-gold hover:text-prayer-bg text-prayer-text text-xs font-semibold border border-prayer-border group-hover:border-gold/40 transition-all flex items-center space-x-1.5"
                >
                  <span>{bonus.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

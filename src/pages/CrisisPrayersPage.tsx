import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CRISIS_PRAYERS_DATA, CrisisItem } from '../data/bonuses';
import {
  Heart,
  ArrowLeft,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

export const CrisisPrayersPage: React.FC = () => {
  const { setCurrentTab, showToast } = useApp();
  const [selectedCrisis, setSelectedCrisis] = useState<CrisisItem>(CRISIS_PRAYERS_DATA[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${selectedCrisis.prayerTitle}\n\n"${selectedCrisis.prayerText}"\n\n${selectedCrisis.bibleVerse.reference}: "${selectedCrisis.bibleVerse.verse}"`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast('Oração copiada com sucesso!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-12">
      {/* Back button */}
      <button
        onClick={() => setCurrentTab('bonuses')}
        className="flex items-center space-x-2 text-xs md:text-sm text-prayer-muted hover:text-prayer-text transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar aos Bônus</span>
      </button>

      {/* Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-bold flex items-center space-x-1.5">
          <Heart className="w-3.5 h-3.5" />
          <span>BÔNUS 05 • PRONTO-SOCORRO DA ALMA</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Orações para Momentos de Crise
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Palavras acolhedoras e fundamentadas na Palavra de Deus para os dias em que a dor aperta e as forças parecem se esgotar.
        </p>
      </div>

      {/* 11 Crisis Buttons Filter */}
      <div className="space-y-2">
        <span className="text-xs text-prayer-muted uppercase tracking-wider font-semibold block px-1">
          Escolha a situação que você está enfrentando hoje:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CRISIS_PRAYERS_DATA.map((item) => {
            const isSelected = selectedCrisis.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCrisis(item)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'bg-prayer-card text-prayer-muted hover:text-prayer-text border border-prayer-border hover:border-gold/30'
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Crisis View Box */}
      <div className="rounded-3xl bg-prayer-card border border-prayer-border p-6 md:p-9 space-y-6 shadow-card-subtle relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />

        {/* Top Header of Crisis item */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-prayer-border">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
              Situação: {selectedCrisis.category}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-prayer-text">
              {selectedCrisis.prayerTitle}
            </h2>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text text-xs flex items-center space-x-1.5 transition-colors self-start sm:self-center"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar oração</span>
              </>
            )}
          </button>
        </div>

        {/* Pastoral Guidance */}
        <div className="bg-prayer-sub/80 border border-prayer-border/80 p-5 rounded-2xl space-y-2">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Orientação Pastoral Acolhedora</span>
          </span>
          <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
            {selectedCrisis.pastoralGuidance}
          </p>
        </div>

        {/* Scripture Anchor */}
        <div className="rounded-2xl bg-prayer-sub border-l-4 border-gold p-5 space-y-1">
          <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block">
            Promessa Bíblica de Sustento
          </span>
          <p className="font-serif text-base md:text-lg text-prayer-text italic leading-relaxed">
            "{selectedCrisis.bibleVerse.verse}"
          </p>
          <span className="text-xs text-gold-light font-bold block pt-1">
            — {selectedCrisis.bibleVerse.reference}
          </span>
        </div>

        {/* The Prayer Itself */}
        <div className="rounded-2xl bg-gradient-to-br from-prayer-sub via-prayer-card to-prayer-sub border border-gold/40 p-6 md:p-8 space-y-3">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-2">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Oração de Entrega</span>
          </span>
          <p className="font-serif text-lg md:text-xl text-prayer-text italic leading-relaxed">
            "{selectedCrisis.prayerText}"
          </p>
        </div>

        <div className="text-[11px] text-prayer-muted/70 text-center italic pt-2">
          Deus acolhe seu desabafo com ternura. Respire fundo, descanse seu coração e saiba que você não está desamparado.
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Heart,
  Copy,
  Check,
  CheckCircle2,
  BookOpen,
  Sparkles
} from 'lucide-react';

export const PrayerReaderModal: React.FC = () => {
  const {
    selectedPrayer,
    setSelectedPrayer,
    userProgress,
    togglePrayerFavorite,
    markPrayerUsed,
    showToast
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  if (!selectedPrayer) return null;

  const isFavorite = userProgress.favoritePrayers.includes(selectedPrayer.id);
  const prayedCount = userProgress.prayersUsedCount[selectedPrayer.id] || 0;

  const handleCopy = () => {
    const textToCopy = `${selectedPrayer.title}\n\n${selectedPrayer.objective}\n\n"${selectedPrayer.prayerText}"\n\nReferências: ${selectedPrayer.biblicalReferences.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast('Oração copiada para a área de transferência!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const fontClasses = {
    normal: 'text-base md:text-lg leading-relaxed',
    large: 'text-lg md:text-xl leading-loose',
    xlarge: 'text-xl md:text-2xl leading-loose font-serif'
  }[fontSize];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-prayer-sub border border-gold/40 rounded-3xl shadow-gold-glow flex flex-col max-h-[92vh] overflow-hidden relative">
        {/* Top Header */}
        <div className="p-4 md:p-6 border-b border-prayer-border flex items-center justify-between bg-prayer-card/50">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-semibold uppercase tracking-wider">
              {selectedPrayer.category}
            </span>
            {prayedCount > 0 && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-prayer-sub text-prayer-muted border border-prayer-border flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-gold" />
                <span>Orada {prayedCount}x</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1.5">
            {/* Font size toggle */}
            <div className="hidden sm:flex items-center bg-prayer-sub rounded-lg border border-prayer-border p-0.5 text-xs mr-2">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded ${fontSize === 'normal' ? 'bg-prayer-card text-gold font-bold' : 'text-prayer-muted'}`}
                title="Tamanho padrão"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded ${fontSize === 'large' ? 'bg-prayer-card text-gold font-bold' : 'text-prayer-muted'}`}
                title="Tamanho médio"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded ${fontSize === 'xlarge' ? 'bg-prayer-card text-gold font-bold' : 'text-prayer-muted'}`}
                title="Tamanho grande"
              >
                A++
              </button>
            </div>

            <button
              onClick={() => togglePrayerFavorite(selectedPrayer.id)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-rose-500/15 border-rose-500 text-rose-400'
                  : 'bg-prayer-card border-prayer-border text-prayer-muted hover:text-prayer-text'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-400' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-prayer-card border border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text transition-all"
              title="Copiar oração"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setSelectedPrayer(null)}
              className="p-2 rounded-xl bg-prayer-card border border-prayer-border text-prayer-muted hover:text-prayer-text transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-prayer-text tracking-wide mb-2">
              {selectedPrayer.title}
            </h2>
            <p className="text-prayer-muted text-xs md:text-sm leading-relaxed border-l-2 border-gold/50 pl-3">
              {selectedPrayer.objective}
            </p>
          </div>

          {/* Prayer Core Box */}
          <div className="p-5 md:p-7 rounded-2xl bg-prayer-card/80 border border-gold/25 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles className="w-20 h-20 text-gold" />
            </div>

            <p className={`text-prayer-text font-normal italic ${fontClasses} whitespace-pre-line relative z-10`}>
              "{selectedPrayer.prayerText}"
            </p>
          </div>

          {/* Biblical References */}
          {selectedPrayer.biblicalReferences.length > 0 && (
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5 mb-2.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Fundamento Bíblico Relacionado</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedPrayer.biblicalReferences.map((ref, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-prayer-card border border-prayer-border text-prayer-text/90 font-medium"
                  >
                    📖 {ref}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 md:p-6 border-t border-prayer-border bg-prayer-card/60 flex items-center justify-between gap-3">
          <button
            onClick={() => togglePrayerFavorite(selectedPrayer.id)}
            className="hidden sm:flex items-center space-x-2 text-xs text-prayer-muted hover:text-prayer-text"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'text-rose-400 fill-rose-400' : ''}`} />
            <span>{isFavorite ? 'Favoritada' : 'Salvar nos favoritos'}</span>
          </button>

          <button
            onClick={() => markPrayerUsed(selectedPrayer.id)}
            className="flex-1 sm:flex-initial py-3 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-xs md:text-sm hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
          >
            <CheckCircle2 className="w-4 h-4 text-prayer-bg" />
            <span>Marcar como orada hoje</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Heart, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';

export const PromiseReaderModal: React.FC = () => {
  const {
    selectedPromise,
    setSelectedPromise,
    userProgress,
    togglePromiseFavorite,
    setCurrentTab,
    addNewPrayerRequest,
    showToast
  } = useApp();

  const [copied, setCopied] = useState(false);

  if (!selectedPromise) return null;

  const isFavorite = userProgress.favoritePromises.includes(selectedPromise.id);

  const handleCopy = () => {
    const textToCopy = `Promessa Bíblica: ${selectedPromise.reference} - ${selectedPromise.title}\n\n"${selectedPromise.text}"\n\nComo aplicar: ${selectedPromise.application}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast('Promessa copiada para a área de transferência!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrayWithPromise = () => {
    // Adds a prayer motive automatically into the journal with this promise
    addNewPrayerRequest({
      personOrSituation: `Orando com ${selectedPromise.reference}`,
      category: selectedPromise.category === 'Todas' ? 'Espiritual' : selectedPromise.category,
      request: `Declaro com fé em oração: "${selectedPromise.text}" (${selectedPromise.reference}). ${selectedPromise.application}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Em oração'
    });
    setSelectedPromise(null);
    setCurrentTab('journal');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-prayer-sub border border-gold/40 rounded-3xl shadow-gold-glow flex flex-col max-h-[90vh] overflow-hidden">
        {/* Top Header */}
        <div className="p-4 md:p-6 border-b border-prayer-border flex items-center justify-between bg-prayer-card/50">
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-semibold">
              Promessa #{selectedPromise.number}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-prayer-sub text-prayer-muted border border-prayer-border">
              {selectedPromise.category}
            </span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => togglePromiseFavorite(selectedPromise.id)}
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
              className="p-2 rounded-xl bg-prayer-card border border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text"
              title="Copiar promessa"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setSelectedPromise(null)}
              className="p-2 rounded-xl bg-prayer-card border border-prayer-border text-prayer-muted hover:text-prayer-text"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
              {selectedPromise.reference}
            </span>
            <h2 className="font-serif text-2xl text-prayer-text">
              {selectedPromise.title}
            </h2>
          </div>

          {/* Scripture Box */}
          <div className="p-6 rounded-2xl bg-prayer-card border border-gold/30 relative">
            <p className="font-serif text-lg md:text-xl text-prayer-text italic leading-relaxed">
              "{selectedPromise.text}"
            </p>
          </div>

          {/* Application */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Como Aplicar em Oração</span>
            </span>
            <p className="text-sm text-prayer-muted leading-relaxed bg-prayer-sub p-4 rounded-xl border border-prayer-border">
              {selectedPromise.application}
            </p>
          </div>
        </div>

        {/* Action Bottom */}
        <div className="p-4 md:p-6 border-t border-prayer-border bg-prayer-card/50 flex justify-end">
          <button
            onClick={handlePrayWithPromise}
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-xs md:text-sm hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
          >
            <span>Orar com esta promessa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

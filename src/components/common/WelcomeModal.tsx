import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, ArrowRight, Sparkles, Check } from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const { userProgress, setName } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [inputName, setInputName] = useState('');

  if (!userProgress.isFirstVisit && userProgress.name) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim()) return;
    setName(inputName.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-prayer-sub border border-gold/40 rounded-3xl p-6 md:p-8 shadow-gold-glow relative overflow-hidden">
        {/* Glow ambient background circle */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        {step === 1 ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/25 to-prayer-card border border-gold/50 mx-auto flex items-center justify-center shadow-gold-glow">
              <Flame className="w-8 h-8 text-gold" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                Shalom
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-prayer-text leading-snug">
                Bem-vindo ao seu espaço de oração.
              </h2>
            </div>

            <p className="text-prayer-muted text-sm md:text-base leading-relaxed">
              Este aplicativo foi criado para ajudar você a estudar, orar, registrar seus pedidos e construir uma rotina mais constante de oração.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-sm md:text-base hover:opacity-95 shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
              >
                <span>Começar minha jornada</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-prayer-text">
                Como podemos chamar você?
              </h3>
              <p className="text-prayer-muted text-xs md:text-sm">
                Seu nome será usado para personalizar seu diário e sua jornada de oração.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="user-name" className="text-xs text-prayer-muted block font-medium">
                Seu primeiro nome
              </label>
              <input
                id="user-name"
                type="text"
                required
                autoFocus
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Ex: Maria, João, Sarah..."
                className="w-full px-4 py-3 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text placeholder:text-prayer-muted/50 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={!inputName.trim()}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-sm md:text-base hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Entrar no aplicativo</span>
              <Check className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

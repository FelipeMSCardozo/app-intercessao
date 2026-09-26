import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getTodayVerse } from '../data/dailyVerses';
import { TRAINING_MODULES } from '../data/modules';
import {
  HeartHandshake,
  Scroll,
  PenTool,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    userProgress,
    setCurrentTab,
    openModule,
    showToast
  } = useApp();

  const [copiedVerse, setCopiedVerse] = useState(false);
  const todayVerse = getTodayVerse();

  // Progress metrics
  const totalModules = 12;
  const completedModulesCount = userProgress.completedModules.length;
  const modulesPercent = Math.round((completedModulesCount / totalModules) * 100);

  // Active requests & answered requests
  const activeRequestsCount = userProgress.prayerRequests.filter(
    (r) => r.status === 'Em oração' || r.status === 'Aguardando'
  ).length;
  const answeredRequestsCount = userProgress.prayerRequests.filter(
    (r) => r.status === 'Respondido'
  ).length;

  const completedDaysCount = userProgress.completedDays.length;

  // Determine last opened module or next uncompleted module
  const nextModuleId =
    TRAINING_MODULES.find((m) => !userProgress.completedModules.includes(m.id))?.id || 1;
  const currentModule =
    TRAINING_MODULES.find((m) => m.id === nextModuleId) || TRAINING_MODULES[0];

  const handleCopyVerse = () => {
    navigator.clipboard.writeText(`"${todayVerse.text}" — ${todayVerse.reference}`);
    setCopiedVerse(true);
    showToast('Versículo copiado com sucesso!', 'success');
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header Greeting */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Shalom 🙏
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text font-normal tracking-wide">
          Olá, {userProgress.name || 'Intercessor'} 🙏
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Que este seja um lugar para você parar, orar e buscar a Deus com propósito.
        </p>
      </div>

      {/* 2. Card Principal: Continue sua jornada */}
      <div className="rounded-3xl bg-gradient-to-br from-prayer-card via-prayer-sub to-prayer-bg border border-gold/40 p-6 md:p-8 shadow-card-subtle relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Progress Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Continue sua jornada</span>
              </span>
              <span className="text-xs text-prayer-muted">
                {completedModulesCount} de {totalModules} módulos concluídos
              </span>
            </div>

            <div>
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="font-serif text-4xl md:text-5xl text-gold font-normal">
                  {modulesPercent}%
                </span>
                <span className="text-xs text-prayer-muted">do treinamento concluído</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-prayer-sub rounded-full overflow-hidden border border-prayer-border">
                <div
                  className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full transition-all duration-700 shadow-gold-glow"
                  style={{ width: `${modulesPercent}%` }}
                />
              </div>
            </div>

            {/* Next module card snippet */}
            <div className="pt-2">
              <span className="text-xs text-prayer-muted block mb-1">Continue de onde parou:</span>
              <p className="font-serif text-lg md:text-xl text-prayer-text">
                Módulo {currentModule.number} — {currentModule.title}
              </p>
              <p className="text-xs text-prayer-muted line-clamp-1 mt-0.5">
                {currentModule.description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col justify-center lg:items-end">
            <button
              onClick={() => openModule(currentModule.id)}
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-sm md:text-base hover:opacity-95 shadow-gold-glow flex items-center justify-center space-x-2 transition-all active:scale-[0.98] w-full lg:w-auto"
            >
              <span>Continuar estudando</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-prayer-muted mt-2 text-center lg:text-right">
              Tempo estimado: ~{currentModule.estimatedMinutes} min de leitura
            </span>
          </div>
        </div>
      </div>

      {/* 3. Ações Rápidas (4 atalhos grandes) */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-wider text-prayer-muted font-semibold block px-1">
          Acesso Rápido
        </span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <button
            onClick={() => setCurrentTab('prayers')}
            className="p-5 rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/50 transition-all text-left group shadow-card-subtle flex flex-col justify-between min-h-[120px]"
          >
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="font-medium text-sm md:text-base text-prayer-text block group-hover:text-gold transition-colors">
                🙏 Fazer uma oração
              </span>
              <span className="text-[11px] text-prayer-muted">
                70+ orações bíblicas
              </span>
            </div>
          </button>

          <button
            onClick={() => setCurrentTab('promises')}
            className="p-5 rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/50 transition-all text-left group shadow-card-subtle flex flex-col justify-between min-h-[120px]"
          >
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <span className="font-medium text-sm md:text-base text-prayer-text block group-hover:text-gold transition-colors">
                📖 Ler uma promessa
              </span>
              <span className="text-[11px] text-prayer-muted">
                100 promessas organizadas
              </span>
            </div>
          </button>

          <button
            onClick={() => setCurrentTab('journal')}
            className="p-5 rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/50 transition-all text-left group shadow-card-subtle flex flex-col justify-between min-h-[120px]"
          >
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <span className="font-medium text-sm md:text-base text-prayer-text block group-hover:text-gold transition-colors">
                📝 Registrar um pedido
              </span>
              <span className="text-[11px] text-prayer-muted">
                Diário & atualizações
              </span>
            </div>
          </button>

          <button
            onClick={() => setCurrentTab('plan30')}
            className="p-5 rounded-2xl bg-prayer-card hover:bg-prayer-cardHover border border-prayer-border hover:border-gold/50 transition-all text-left group shadow-card-subtle flex flex-col justify-between min-h-[120px]"
          >
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-medium text-sm md:text-base text-prayer-text block group-hover:text-gold transition-colors">
                📅 Plano de 30 dias
              </span>
              <span className="text-[11px] text-prayer-muted">
                Dia {completedDaysCount + 1} de 30
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 4. Versículo do Dia (Bíblico Real e Referenciado) */}
      <div className="rounded-3xl bg-prayer-card border border-prayer-border p-6 md:p-8 space-y-4 shadow-card-subtle relative">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Versículo para hoje • {todayVerse.theme}</span>
          </span>

          <button
            onClick={handleCopyVerse}
            className="text-xs px-3 py-1.5 rounded-lg bg-prayer-sub border border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text flex items-center space-x-1.5 transition-colors"
          >
            {copiedVerse ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        <blockquote className="font-serif text-xl md:text-2xl text-prayer-text italic leading-relaxed border-l-2 border-gold pl-4 my-2">
          "{todayVerse.text}"
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 pt-1">
          <span className="font-bold text-gold-light text-sm">{todayVerse.reference}</span>
          <span className="text-prayer-muted">{todayVerse.application}</span>
        </div>
      </div>

      {/* 5. Resumo da Sua Jornada Pessoal */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-wider text-prayer-muted font-semibold block px-1">
          Sua Jornada Pessoal
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pedidos em oração */}
          <div
            onClick={() => setCurrentTab('journal')}
            className="p-5 rounded-2xl bg-prayer-card border border-prayer-border hover:border-gold/30 transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs text-prayer-muted block">Pedidos no Diário</span>
              <span className="font-serif text-2xl md:text-3xl text-prayer-text">
                {activeRequestsCount}
              </span>
              <span className="text-[11px] text-prayer-muted block mt-0.5">
                motivos ativos em oração
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-prayer-sub border border-prayer-border flex items-center justify-center text-gold">
              <PenTool className="w-5 h-5" />
            </div>
          </div>

          {/* Respostas registradas */}
          <div
            onClick={() => setCurrentTab('memorial')}
            className="p-5 rounded-2xl bg-prayer-card border border-prayer-border hover:border-gold/30 transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs text-prayer-muted block">Respostas de Oração</span>
              <span className="font-serif text-2xl md:text-3xl text-emerald-400">
                {answeredRequestsCount}
              </span>
              <span className="text-[11px] text-prayer-muted block mt-0.5">
                vitórias no Memorial 🙏
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          {/* Dias concluídos */}
          <div
            onClick={() => setCurrentTab('plan30')}
            className="p-5 rounded-2xl bg-prayer-card border border-prayer-border hover:border-gold/30 transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs text-prayer-muted block">Plano Guiado</span>
              <span className="font-serif text-2xl md:text-3xl text-gold">
                {completedDaysCount}/30
              </span>
              <span className="text-[11px] text-prayer-muted block mt-0.5">
                dias devocionais cumpridos
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { TRAINING_MODULES } from '../data/modules';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Heart
} from 'lucide-react';

export const ModuleReaderPage: React.FC = () => {
  const {
    selectedModuleId,
    openModule,
    setCurrentTab,
    userProgress,
    toggleModuleComplete,
    fontSize,
    setFontSize
  } = useApp();

  const currentModule =
    TRAINING_MODULES.find((m) => m.id === selectedModuleId) || TRAINING_MODULES[0];

  const isCompleted = userProgress.completedModules.includes(currentModule.id);
  const nextModule = TRAINING_MODULES.find((m) => m.id === currentModule.id + 1);
  const prevModule = TRAINING_MODULES.find((m) => m.id === currentModule.id - 1);

  // Scroll to top on module change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentModule.id]);

  const paragraphFontClass = {
    normal: 'text-base md:text-lg leading-relaxed text-prayer-text/90',
    large: 'text-lg md:text-xl leading-loose text-prayer-text/90',
    xlarge: 'text-xl md:text-2xl leading-loose text-prayer-text/90 font-serif'
  }[fontSize];

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300 pb-12">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between border-b border-prayer-border pb-4">
        <button
          onClick={() => setCurrentTab('training')}
          className="flex items-center space-x-2 text-xs md:text-sm text-prayer-muted hover:text-prayer-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar aos 12 módulos</span>
        </button>

        {/* Reader controls */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-prayer-card rounded-lg border border-prayer-border p-0.5 text-xs">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 rounded ${fontSize === 'normal' ? 'bg-prayer-sub text-gold font-bold' : 'text-prayer-muted'}`}
              title="Tamanho padrão"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded ${fontSize === 'large' ? 'bg-prayer-sub text-gold font-bold' : 'text-prayer-muted'}`}
              title="Tamanho médio"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-1 rounded ${fontSize === 'xlarge' ? 'bg-prayer-sub text-gold font-bold' : 'text-prayer-muted'}`}
              title="Tamanho grande"
            >
              A++
            </button>
          </div>

          <button
            onClick={() => toggleModuleComplete(currentModule.id)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              isCompleted
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                : 'bg-prayer-card border-prayer-border text-prayer-muted hover:text-gold'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isCompleted ? 'Módulo Concluído' : 'Marcar Concluído'}
            </span>
          </button>
        </div>
      </div>

      {/* Module Title & Header Hero */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">
            Módulo {currentModule.number}
          </span>
          <span className="text-prayer-muted text-xs">•</span>
          <span className="text-xs text-prayer-muted">{currentModule.badge}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-prayer-text leading-tight">
          {currentModule.title}
        </h1>

        <p className="text-base md:text-xl text-prayer-muted leading-relaxed font-light">
          {currentModule.description}
        </p>

        <div className="flex items-center space-x-4 text-xs text-prayer-muted pt-1">
          <span className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-gold" />
            <span>Tempo estimado: ~{currentModule.estimatedMinutes} minutos</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-gold" />
            <span>{currentModule.sections.length} seções de estudo</span>
          </span>
        </div>
      </div>

      {/* "Neste módulo você vai aprender" Box */}
      <div className="rounded-2xl bg-prayer-card border border-gold/30 p-6 md:p-8 space-y-4 shadow-card-subtle">
        <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span>Neste módulo você vai aprender:</span>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentModule.learnings.map((learning, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs md:text-sm text-prayer-text/90">
              <span className="text-gold font-bold shrink-0">✓</span>
              <span>{learning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Verse Highlight */}
      <div className="rounded-2xl bg-gradient-to-r from-prayer-card via-prayer-sub to-prayer-card border-l-4 border-gold p-6 md:p-8 relative">
        <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block mb-2">
          Versículo Chave deste Módulo
        </span>
        <blockquote className="font-serif text-xl md:text-2xl text-prayer-text italic leading-relaxed">
          "{currentModule.keyVerse.verse}"
        </blockquote>
        <span className="text-xs font-semibold text-gold-light mt-2 block">
          — {currentModule.keyVerse.reference}
        </span>
      </div>

      {/* Module Content Sections (Digital Book style) */}
      <div className="space-y-12 pt-4">
        {currentModule.sections.map((section, idx) => (
          <article key={idx} className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-prayer-text border-b border-prayer-border/60 pb-3">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={paragraphFontClass}>
                  {p}
                </p>
              ))}
            </div>

            {/* Callout box if present */}
            {section.callout && (
              <div
                className={`rounded-2xl p-6 border space-y-2 my-6 ${
                  section.callout.type === 'warning'
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                    : section.callout.type === 'scripture'
                    ? 'bg-prayer-card border-gold/40 text-prayer-text'
                    : 'bg-prayer-card border-prayer-border text-prayer-text'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {section.callout.type === 'warning' && (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                  {section.callout.type === 'scripture' && (
                    <BookOpen className="w-4 h-4 text-gold" />
                  )}
                  {section.callout.type === 'insight' && (
                    <Lightbulb className="w-4 h-4 text-gold" />
                  )}
                  <h4 className="font-serif text-base text-gold font-medium">
                    {section.callout.title}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Reflection Exercise */}
      <div className="rounded-2xl bg-prayer-card border border-prayer-border p-6 md:p-8 space-y-4 mt-8">
        <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-2">
          <Lightbulb className="w-4 h-4" />
          <span>Exercício de Reflexão & Aplicação</span>
        </span>
        <h3 className="font-serif text-lg md:text-xl text-prayer-text">
          {currentModule.reflectionExercise.question}
        </h3>
        <p className="text-xs md:text-sm text-prayer-muted bg-prayer-sub p-4 rounded-xl border border-prayer-border">
          👉 <strong>Ação recomendada:</strong> {currentModule.reflectionExercise.actionPrompt}
        </p>
      </div>

      {/* Final Prayer of Module */}
      <div className="rounded-2xl bg-gradient-to-br from-prayer-card via-prayer-sub to-prayer-bg border border-gold/40 p-6 md:p-8 space-y-4">
        <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-2">
          <Heart className="w-4 h-4" />
          <span>{currentModule.finalPrayer.title}</span>
        </span>
        <p className="font-serif text-base md:text-lg text-prayer-text italic leading-relaxed">
          "{currentModule.finalPrayer.text}"
        </p>
      </div>

      {/* Completion Section */}
      <div className="rounded-3xl bg-prayer-card border border-prayer-border p-8 text-center space-y-5 mt-10">
        <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 mx-auto flex items-center justify-center text-gold">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-prayer-text">
            {isCompleted ? 'Você concluiu este módulo!' : 'Você concluiu este módulo?'}
          </h3>
          <p className="text-xs md:text-sm text-prayer-muted">
            {isCompleted
              ? 'Seu progresso foi registrado no seu perfil.'
              : 'Clique abaixo para salvar sua conclusão e avançar na sua jornada de intercessão.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => toggleModuleComplete(currentModule.id)}
            className={`py-3.5 px-8 rounded-xl font-semibold text-xs md:text-sm transition-all flex items-center space-x-2 ${
              isCompleted
                ? 'bg-prayer-sub border border-gold/40 text-gold hover:bg-gold/10'
                : 'bg-gradient-to-r from-gold to-gold-light text-prayer-bg hover:opacity-95 shadow-gold-glow'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {isCompleted ? 'Módulo marcado como concluído ✓' : 'Marcar módulo como concluído'}
            </span>
          </button>

          {nextModule && (
            <button
              onClick={() => openModule(nextModule.id)}
              className="py-3.5 px-6 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold/40 text-prayer-text hover:text-gold text-xs md:text-sm font-semibold transition-colors flex items-center space-x-2"
            >
              <span>Próximo módulo: {nextModule.number}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-prayer-border">
        {prevModule ? (
          <button
            onClick={() => openModule(prevModule.id)}
            className="flex items-center space-x-2 text-xs md:text-sm text-prayer-muted hover:text-prayer-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Módulo {prevModule.number}: {prevModule.title}</span>
          </button>
        ) : (
          <div />
        )}

        {nextModule && (
          <button
            onClick={() => openModule(nextModule.id)}
            className="flex items-center space-x-2 text-xs md:text-sm text-gold hover:text-gold-light transition-colors ml-auto"
          >
            <span>Módulo {nextModule.number}: {nextModule.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

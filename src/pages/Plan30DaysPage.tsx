import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PLAN_30_DAYS } from '../data/plan30days';
import {
  Calendar,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  PenLine,
  Sparkles,
  Heart,
  Save
} from 'lucide-react';

export const Plan30DaysPage: React.FC = () => {
  const {
    userProgress,
    toggleDayComplete,
    saveDayReflection
  } = useApp();

  // Find next uncompleted day or default to day 1
  const firstUnfinishedDay =
    PLAN_30_DAYS.find((d) => !userProgress.completedDays.includes(d.day))?.day || 1;

  const [activeDayNumber, setActiveDayNumber] = useState<number>(firstUnfinishedDay);
  const [currentNote, setCurrentNote] = useState<string>('');

  const activeDay =
    PLAN_30_DAYS.find((d) => d.day === activeDayNumber) || PLAN_30_DAYS[0];
  const isCompleted = userProgress.completedDays.includes(activeDay.day);

  // Sync note when active day changes
  useEffect(() => {
    setCurrentNote(userProgress.dayNotes[activeDay.day] || '');
  }, [activeDay.day, userProgress.dayNotes]);

  const completedCount = userProgress.completedDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  const handleSaveNote = () => {
    saveDayReflection(activeDay.day, currentNote);
  };

  const handleNextDay = () => {
    if (activeDayNumber < 30) {
      setActiveDayNumber(activeDayNumber + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevDay = () => {
    if (activeDayNumber > 1) {
      setActiveDayNumber(activeDayNumber - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-12">
      {/* Top Header */}
      <div className="space-y-2 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>Jornada Devocional Guiada</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Plano Guiado de Oração — 30 Dias
        </h1>
        <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
          Um dia de cada vez. Uma oração de cada vez. Construa o hábito inabalável que sustentará toda a sua caminhada com Deus.
        </p>
      </div>

      {/* Progress Bar Header */}
      <div className="rounded-3xl bg-prayer-card border border-prayer-border p-6 space-y-4 shadow-card-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-xs text-prayer-muted">Seu progresso no plano</span>
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-3xl text-gold font-bold">
                Dia {completedCount} de 30
              </span>
              <span className="text-xs text-prayer-muted">({progressPercent}% concluído)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="text-emerald-400 font-semibold flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>{completedCount} dias concluídos</span>
            </span>
          </div>
        </div>

        {/* Bar */}
        <div className="w-full h-2.5 bg-prayer-sub rounded-full overflow-hidden border border-prayer-border">
          <div
            className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full transition-all duration-500 shadow-gold-glow"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Day selector pills */}
        <div className="pt-2">
          <span className="text-[11px] uppercase tracking-wider text-prayer-muted font-semibold block mb-2">
            Navegue pelos 30 dias:
          </span>
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
            {PLAN_30_DAYS.map((d) => {
              const done = userProgress.completedDays.includes(d.day);
              const isActive = d.day === activeDayNumber;

              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDayNumber(d.day)}
                  className={`w-9 h-9 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center justify-center relative ${
                    isActive
                      ? 'bg-gold text-prayer-bg shadow-gold-glow scale-105'
                      : done
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-prayer-sub text-prayer-muted hover:text-prayer-text border border-prayer-border'
                  }`}
                  title={`Dia ${d.day}: ${d.title}`}
                >
                  {d.day}
                  {done && !isActive && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Day Content Card */}
      <div className="rounded-3xl bg-prayer-card border border-gold/40 p-6 md:p-9 space-y-8 shadow-card-subtle relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        {/* Day Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-prayer-border">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Dia {activeDay.day < 10 ? '0' + activeDay.day : activeDay.day} de 30
              </span>
              <span className="text-prayer-muted">•</span>
              <span className="text-xs text-prayer-muted font-medium">Tema: {activeDay.theme}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-prayer-text">
              {activeDay.title}
            </h2>
          </div>

          <button
            onClick={() => toggleDayComplete(activeDay.day)}
            className={`py-2.5 px-5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all shrink-0 ${
              isCompleted
                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                : 'bg-prayer-sub border border-gold/40 text-gold hover:bg-gold/10'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Dia Concluído ✓' : 'Marcar Dia como Concluído'}</span>
          </button>
        </div>

        {/* Scripture Box */}
        <div className="rounded-2xl bg-prayer-sub border-l-4 border-gold p-6 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-gold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Palavra de Deus • {activeDay.scriptureReference}</span>
          </div>
          <p className="font-serif text-lg md:text-xl text-prayer-text italic leading-relaxed">
            "{activeDay.scriptureText}"
          </p>
        </div>

        {/* Devotional Reflection */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
            Reflexão Devocional
          </span>
          <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
            {activeDay.devotional}
          </p>
        </div>

        {/* Direction for Today */}
        <div className="bg-prayer-sub/80 border border-prayer-border p-5 rounded-2xl space-y-2">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direcionamento Prático para Hoje</span>
          </span>
          <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
            {activeDay.direction}
          </p>
        </div>

        {/* Directed Prayer */}
        <div className="rounded-2xl bg-gradient-to-br from-prayer-sub to-prayer-card border border-gold/30 p-6 space-y-3">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
            <Heart className="w-3.5 h-3.5" />
            <span>Oração Dirigida do Dia {activeDay.day}</span>
          </span>
          <p className="font-serif text-base md:text-lg text-prayer-text italic leading-relaxed">
            "{activeDay.prayer}"
          </p>
        </div>

        {/* Personal Note Area ("Espaço para Escrever") */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center space-x-1.5">
              <PenLine className="w-3.5 h-3.5" />
              <span>Seu Espaço de Anotação & Reflexão</span>
            </span>
            <span className="text-[11px] text-prayer-muted">Salvo no seu dispositivo</span>
          </div>

          <p className="text-xs text-prayer-muted italic">
            Pergunta reflexiva: {activeDay.reflectionPrompt}
          </p>

          <textarea
            rows={4}
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            onBlur={handleSaveNote}
            placeholder="Escreva aqui o que Deus falou ao seu coração hoje, suas decisões e impressões espirituais..."
            className="w-full p-4 rounded-xl bg-prayer-sub border border-prayer-border focus:border-gold focus:outline-none text-xs md:text-sm text-prayer-text placeholder:text-prayer-muted/40"
          />

          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold text-xs text-gold flex items-center space-x-1.5 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Salvar anotação</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation between days */}
        <div className="pt-6 border-t border-prayer-border flex items-center justify-between">
          <button
            onClick={handlePrevDay}
            disabled={activeDayNumber === 1}
            className="px-4 py-2.5 rounded-xl border border-prayer-border hover:border-gold/40 text-prayer-muted hover:text-prayer-text disabled:opacity-30 text-xs font-semibold flex items-center space-x-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dia anterior</span>
          </button>

          <button
            onClick={() => toggleDayComplete(activeDay.day)}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-gold text-prayer-bg hover:opacity-95 shadow-gold-glow'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Concluído ✓' : 'Concluir Dia'}</span>
          </button>

          <button
            onClick={handleNextDay}
            disabled={activeDayNumber === 30}
            className="px-4 py-2.5 rounded-xl border border-prayer-border hover:border-gold/40 text-gold hover:text-gold-light disabled:opacity-30 text-xs font-semibold flex items-center space-x-2 transition-colors"
          >
            <span>Próximo dia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

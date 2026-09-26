import React from 'react';
import { useApp } from '../context/AppContext';
import { TRAINING_MODULES } from '../data/modules';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export const TrainingPage: React.FC = () => {
  const { userProgress, openModule } = useApp();

  const completedCount = userProgress.completedModules.length;
  const progressPercent = Math.round((completedCount / TRAINING_MODULES.length) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-prayer-border pb-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Treinamento Completo</span>
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
            12 Módulos do Intercessor
          </h1>
          <p className="text-prayer-muted text-sm md:text-base max-w-2xl leading-relaxed">
            12 módulos para aprofundar sua vida de oração e intercessão com alicerce bíblico, prático e transformador.
          </p>
        </div>

        {/* Global Progress pill */}
        <div className="bg-prayer-card border border-prayer-border rounded-2xl p-4 min-w-[200px] flex items-center justify-between">
          <div>
            <span className="text-[11px] text-prayer-muted block">Progresso Geral</span>
            <span className="font-serif text-xl text-gold font-semibold">
              {completedCount} de {TRAINING_MODULES.length}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-serif font-bold text-sm">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Grid of 12 Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TRAINING_MODULES.map((module) => {
          const isCompleted = userProgress.completedModules.includes(module.id);

          return (
            <div
              key={module.id}
              className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden shadow-card-subtle ${
                isCompleted
                  ? 'bg-prayer-card/90 border-gold/40'
                  : 'bg-prayer-card hover:bg-prayer-cardHover border-prayer-border hover:border-gold/40'
              }`}
            >
              <div className="p-6 space-y-4">
                {/* Header with module number and badge */}
                <div className="flex items-center justify-between pb-3 border-b border-prayer-border/70">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-2xl text-gold font-normal">
                      {module.number}
                    </span>
                    {isCompleted && (
                      <span className="flex items-center space-x-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Concluído</span>
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-prayer-muted px-2 py-0.5 rounded bg-prayer-sub border border-prayer-border">
                    {module.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-serif text-xl text-prayer-text group-hover:text-gold transition-colors leading-snug mb-2">
                    {module.title}
                  </h3>
                  <p className="text-xs text-prayer-muted line-clamp-2 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Topics / Learnings summary */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] uppercase tracking-wider text-prayer-muted/80 font-semibold block">
                    Neste módulo:
                  </span>
                  <ul className="space-y-1 text-xs text-prayer-muted">
                    {module.learnings.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 line-clamp-1">
                        <span className="text-gold shrink-0">▪</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {module.learnings.length > 3 && (
                      <li className="text-[11px] text-gold/80 italic pl-3">
                        + {module.learnings.length - 3} tópicos adicionais
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom footer button */}
              <div className="p-4 bg-prayer-sub/60 border-t border-prayer-border/60 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[11px] text-prayer-muted">
                  <Clock className="w-3.5 h-3.5" />
                  <span>~{module.estimatedMinutes} min</span>
                </div>

                <button
                  onClick={() => openModule(module.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    isCompleted
                      ? 'bg-prayer-card border border-gold/40 text-gold hover:bg-gold hover:text-prayer-bg'
                      : 'bg-gradient-to-r from-gold to-gold-light text-prayer-bg hover:opacity-95'
                  }`}
                >
                  <span>{isCompleted ? 'Revisar módulo' : 'Estudar módulo'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

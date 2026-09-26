import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowLeft,
  PenTool
} from 'lucide-react';

export const MemorialPage: React.FC = () => {
  const { userProgress, setCurrentTab } = useApp();

  const answeredRequests = userProgress.prayerRequests.filter(
    (r) => r.status === 'Respondido'
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-prayer-border pb-6">
        <div className="space-y-2">
          <button
            onClick={() => setCurrentTab('journal')}
            className="flex items-center space-x-1.5 text-xs text-prayer-muted hover:text-prayer-text mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Diário</span>
          </button>

          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Memorial de Fé • 1 Samuel 7:12</span>
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
            Memorial de Respostas
          </h1>
          <p className="text-prayer-muted text-sm md:text-base max-w-xl leading-relaxed">
            "Até aqui o Senhor nos ajudou." Um registro vivo das orações que Deus ouviu e das vitórias concedidas à sua fé.
          </p>
        </div>

        <div className="rounded-2xl bg-prayer-card border border-emerald-500/30 p-4 min-w-[180px] flex items-center justify-between">
          <div>
            <span className="text-[11px] text-prayer-muted block">Respostas Registradas</span>
            <span className="font-serif text-2xl text-emerald-400 font-semibold">
              {answeredRequests.length} vitórias
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Banner Ebenézer */}
      <div className="rounded-3xl bg-gradient-to-r from-prayer-card via-prayer-sub to-prayer-card border border-gold/40 p-6 md:p-8 relative overflow-hidden shadow-card-subtle">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-gold uppercase tracking-wider">
            A Rocha de Ajuda
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-prayer-text">
            Por que guardar um memorial de orações respondidas?
          </h3>
          <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
            No Antigo Testamento, os servos de Deus erguiam pedras memoriais para que as futuras gerações nunca se esquecessem das maravilhas do Senhor. Cada resposta anotada aqui serve de combustível para sua fé nos dias em que a tempestade tentar trazer dúvidas.
          </p>
        </div>
      </div>

      {/* Answered List */}
      {answeredRequests.length === 0 ? (
        <div className="rounded-3xl bg-prayer-card border border-prayer-border p-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-prayer-text">
              Nenhuma resposta marcada no Memorial ainda.
            </h3>
            <p className="text-xs text-prayer-muted max-w-sm mx-auto">
              Quando Deus responder a um pedido do seu Diário de Oração, marque-o com o status "Respondido" para eternizar o testemunho aqui.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('journal')}
            className="px-5 py-2.5 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold/40 text-gold text-xs transition-colors inline-flex items-center space-x-1.5"
          >
            <PenTool className="w-4 h-4" />
            <span>Ir para o Diário de Oração</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {answeredRequests.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl bg-prayer-card border border-emerald-500/30 p-6 space-y-4 shadow-card-subtle relative overflow-hidden"
            >
              {/* Top tag */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Oração Respondida</span>
                </span>
                <span className="text-xs text-prayer-muted flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{req.answeredDate || req.date}</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-prayer-text mb-1">
                  {req.personOrSituation}
                </h3>
                <span className="text-[11px] text-prayer-muted uppercase tracking-wider block">
                  Categoria: {req.category}
                </span>
              </div>

              {/* Original Request */}
              <div className="bg-prayer-sub/80 p-3 rounded-xl border border-prayer-border text-xs text-prayer-muted space-y-1">
                <span className="text-[10px] font-semibold text-gold uppercase tracking-wider block">
                  Pedido Original:
                </span>
                <p className="italic">"{req.request}"</p>
              </div>

              {/* Testimony Box */}
              {req.testimony && (
                <div className="bg-emerald-950/25 p-4 rounded-xl border border-emerald-500/40 text-xs md:text-sm text-emerald-200 space-y-1">
                  <span className="font-semibold text-emerald-400 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Como Deus operou:</span>
                  </span>
                  <p className="leading-relaxed font-serif text-sm">
                    "{req.testimony}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

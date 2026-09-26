import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { RequestStatus } from '../types';
import {
  PenTool,
  Plus,
  X,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Trash2,
  ChevronDown,
  ChevronUp,
  Calendar
} from 'lucide-react';

const STATUS_OPTIONS: RequestStatus[] = [
  'Em oração',
  'Respondido',
  'Aguardando',
  'Agradecimento'
];

const CATEGORY_OPTIONS = [
  'Família',
  'Filhos',
  'Casamento',
  'Saúde',
  'Trabalho',
  'Finanças',
  'Espiritual',
  'Igreja',
  'Amigos',
  'Outro'
];

export const JournalPage: React.FC = () => {
  const {
    userProgress,
    addNewPrayerRequest,
    changeRequestStatus,
    addUpdateRequest,
    removeRequest,
    setCurrentTab
  } = useApp();

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('Todos');
  const [expandedRequestId, setExpandedRequestId] = useState<string | null>(null);
  const [newUpdateText, setNewUpdateText] = useState<{ [key: string]: string }>({});

  // Form State for new prayer request
  const [formPerson, setFormPerson] = useState('');
  const [formCategory, setFormCategory] = useState('Família');
  const [formRequest, setFormRequest] = useState('');
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
  const [formStatus, setFormStatus] = useState<RequestStatus>('Em oração');

  // Answer testimony modal state
  const [answeringRequestId, setAnsweringRequestId] = useState<string | null>(null);
  const [testimonyText, setTestimonyText] = useState('');

  const answeredCount = userProgress.prayerRequests.filter(
    (r) => r.status === 'Respondido'
  ).length;

  const filteredRequests = useMemo(() => {
    return userProgress.prayerRequests.filter((req) => {
      if (selectedStatusFilter === 'Todos') return true;
      return req.status === selectedStatusFilter;
    });
  }, [userProgress.prayerRequests, selectedStatusFilter]);

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPerson.trim() || !formRequest.trim()) return;

    addNewPrayerRequest({
      personOrSituation: formPerson.trim(),
      category: formCategory,
      request: formRequest.trim(),
      date: formDate,
      status: formStatus
    });

    // Reset form
    setFormPerson('');
    setFormRequest('');
    setIsNewModalOpen(false);
  };

  const handleAddUpdate = (requestId: string) => {
    const text = newUpdateText[requestId]?.trim();
    if (!text) return;
    addUpdateRequest(requestId, text);
    setNewUpdateText((prev) => ({ ...prev, [requestId]: '' }));
  };

  const handleMarkAsAnsweredSubmit = () => {
    if (!answeringRequestId) return;
    changeRequestStatus(answeringRequestId, 'Respondido', testimonyText.trim() || undefined);
    setAnsweringRequestId(null);
    setTestimonyText('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-prayer-border pb-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center space-x-1.5">
            <PenTool className="w-3.5 h-3.5" />
            <span>Registro Espiritual Pessoal</span>
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
            Diário de Oração
          </h1>
          <p className="text-prayer-muted text-sm md:text-base max-w-xl leading-relaxed">
            Apresente seus pedidos a Deus, acompanhe a evolução de cada motivo e celebre as respostas do Senhor ao longo do tempo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setCurrentTab('memorial')}
            className="px-4 py-2.5 rounded-xl bg-prayer-card hover:bg-prayer-cardHover border border-gold/40 text-gold text-xs font-semibold flex items-center space-x-2 transition-colors shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Memorial de Respostas ({answeredCount})</span>
          </button>

          <button
            onClick={() => setIsNewModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg text-xs font-semibold flex items-center space-x-1.5 hover:opacity-95 shadow-gold-glow transition-all active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" />
            <span>+ Novo Pedido</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs by Status */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {['Todos', 'Em oração', 'Respondido', 'Aguardando', 'Agradecimento'].map((status) => {
          const isSelected = selectedStatusFilter === status;
          return (
            <button
              key={status}
              onClick={() => setSelectedStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-gold text-prayer-bg font-semibold shadow-gold-glow'
                  : 'bg-prayer-card text-prayer-muted hover:text-prayer-text border border-prayer-border'
              }`}
            >
              {status}
            </button>
          );
        })}
      </div>

      {/* List of Requests */}
      {filteredRequests.length === 0 ? (
        <div className="rounded-3xl bg-prayer-card border border-prayer-border p-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 mx-auto flex items-center justify-center text-gold">
            <PenTool className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-prayer-text">
              Nenhum pedido de oração registrado ainda.
            </h3>
            <p className="text-xs text-prayer-muted max-w-sm mx-auto">
              Comece escrevendo algo que está no seu coração. Deus Se agrada da sinceridade do seu clamor.
            </p>
          </div>
          <button
            onClick={() => setIsNewModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-xs transition-all shadow-md inline-flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar primeiro pedido</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRequests.map((req) => {
            const isExpanded = expandedRequestId === req.id;
            const isAnswered = req.status === 'Respondido';

            return (
              <div
                key={req.id}
                className={`rounded-2xl border transition-all p-5 md:p-6 shadow-card-subtle ${
                  isAnswered
                    ? 'bg-prayer-card/90 border-emerald-500/40'
                    : 'bg-prayer-card border-prayer-border hover:border-gold/30'
                }`}
              >
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-prayer-border/60">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                        req.status === 'Respondido'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : req.status === 'Em oração'
                          ? 'bg-gold/15 text-gold border border-gold/30'
                          : req.status === 'Agradecimento'
                          ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                          : 'bg-prayer-sub text-prayer-muted border border-prayer-border'
                      }`}
                    >
                      {req.status}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-prayer-sub border border-prayer-border text-prayer-muted">
                      {req.category}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-prayer-muted">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{req.date}</span>
                    </span>
                    <button
                      onClick={() => removeRequest(req.id)}
                      className="text-prayer-muted hover:text-rose-400 transition-colors p-1"
                      title="Excluir pedido"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="py-3 space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-prayer-text">
                    {req.personOrSituation}
                  </h3>
                  <p className="text-xs md:text-sm text-prayer-muted leading-relaxed whitespace-pre-line">
                    {req.request}
                  </p>

                  {/* Testimony if answered */}
                  {req.testimony && (
                    <div className="mt-3 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs md:text-sm space-y-1">
                      <span className="font-semibold text-emerald-400 flex items-center space-x-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Testemunho da Resposta (1 Samuel 7:12):</span>
                      </span>
                      <p className="italic">"{req.testimony}"</p>
                    </div>
                  )}
                </div>

                {/* Bottom Row Actions */}
                <div className="pt-3 border-t border-prayer-border/60 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    {req.status !== 'Respondido' && (
                      <button
                        onClick={() => {
                          setAnsweringRequestId(req.id);
                          setTestimonyText('');
                        }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-medium transition-colors flex items-center space-x-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Marcar como Respondido</span>
                      </button>
                    )}

                    <select
                      value={req.status}
                      onChange={(e) => changeRequestStatus(req.id, e.target.value as RequestStatus)}
                      className="text-xs bg-prayer-sub border border-prayer-border rounded-lg px-2.5 py-1.5 text-prayer-muted focus:outline-none focus:border-gold"
                    >
                      {STATUS_OPTIONS.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Toggle updates timeline button */}
                  <button
                    onClick={() =>
                      setExpandedRequestId(isExpanded ? null : req.id)
                    }
                    className="text-xs text-prayer-muted hover:text-gold flex items-center space-x-1 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>
                      {req.updates.length > 0
                        ? `${req.updates.length} atualizações`
                        : 'Registrar atualização'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Expanded Updates Timeline */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-prayer-border/60 space-y-4 animate-in fade-in duration-200">
                    <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                      Linha do Tempo de Intercessão
                    </span>

                    {req.updates.length > 0 ? (
                      <div className="space-y-2 border-l-2 border-prayer-border pl-3">
                        {req.updates.map((up) => (
                          <div key={up.id} className="text-xs space-y-0.5">
                            <span className="text-[10px] text-prayer-muted font-mono block">
                              {up.date}
                            </span>
                            <p className="text-prayer-text/90 leading-relaxed bg-prayer-sub/60 p-2.5 rounded-lg border border-prayer-border/40">
                              {up.note}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-prayer-muted italic">
                        Nenhuma atualização anotada ainda. Escreva abaixo como Deus tem agido nessa situação.
                      </p>
                    )}

                    {/* New update input */}
                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="text"
                        value={newUpdateText[req.id] || ''}
                        onChange={(e) =>
                          setNewUpdateText((prev) => ({
                            ...prev,
                            [req.id]: e.target.value
                          }))
                        }
                        placeholder="Escrever nova observação ou resposta parcial..."
                        className="flex-1 px-3 py-2 rounded-xl bg-prayer-sub border border-prayer-border text-xs text-prayer-text focus:outline-none focus:border-gold"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddUpdate(req.id);
                        }}
                      />
                      <button
                        onClick={() => handleAddUpdate(req.id)}
                        disabled={!newUpdateText[req.id]?.trim()}
                        className="px-3.5 py-2 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-prayer-bg disabled:opacity-40 text-xs font-semibold transition-all"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: + Novo Pedido */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-prayer-sub border border-gold/40 rounded-3xl p-6 md:p-8 shadow-gold-glow flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-prayer-border mb-6">
              <div className="flex items-center space-x-2">
                <PenTool className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-prayer-text">Novo Pedido de Oração</h3>
              </div>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="text-prayer-muted hover:text-prayer-text p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateRequest} className="space-y-4">
              <div>
                <label className="text-xs text-prayer-muted block font-medium mb-1">
                  Pessoa ou situação:
                </label>
                <input
                  type="text"
                  required
                  value={formPerson}
                  onChange={(e) => setFormPerson(e.target.value)}
                  placeholder="Ex: Minha mãe (saúde), Decisão de carreira, Conversão de..."
                  className="w-full px-4 py-2.5 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-prayer-muted block font-medium mb-1">
                    Categoria:
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text text-sm"
                  >
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-prayer-muted block font-medium mb-1">
                    Data:
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text text-sm"
                  >
                  </input>
                </div>
              </div>

              <div>
                <label className="text-xs text-prayer-muted block font-medium mb-1">
                  Pedido e detalhes:
                </label>
                <textarea
                  required
                  rows={4}
                  value={formRequest}
                  onChange={(e) => setFormRequest(e.target.value)}
                  placeholder="Escreva como você deseja interceder por esta causa e versículos que usará..."
                  className="w-full px-4 py-3 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-prayer-muted block font-medium mb-2">
                  Status inicial:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {STATUS_OPTIONS.map((st) => (
                    <button
                      type="button"
                      key={st}
                      onClick={() => setFormStatus(st)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-left flex items-center space-x-2 transition-all ${
                        formStatus === st
                          ? 'bg-gold/15 border-gold text-gold'
                          : 'bg-prayer-card border-prayer-border text-prayer-muted'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${formStatus === st ? 'bg-gold' : 'bg-prayer-muted'}`} />
                      <span>{st}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-prayer-border text-prayer-muted hover:text-prayer-text text-xs"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-xs hover:opacity-95 shadow-md"
                >
                  Salvar Pedido no Diário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Marcar como Respondido com Testemunho */}
      {answeringRequestId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-prayer-sub border border-gold/40 rounded-3xl p-6 md:p-8 shadow-gold-glow space-y-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Glória a Deus!
              </span>
              <h3 className="font-serif text-2xl text-prayer-text">
                "Até aqui o Senhor nos ajudou."
              </h3>
              <p className="text-xs text-prayer-muted">
                1 Samuel 7:12 • Registre um pequeno testemunho de como Deus respondeu à sua oração para enriquecer seu memorial.
              </p>
            </div>

            <div>
              <label className="text-xs text-prayer-muted block font-medium mb-1">
                Como Deus respondeu? (Opcional):
              </label>
              <textarea
                rows={3}
                value={testimonyText}
                onChange={(e) => setTestimonyText(e.target.value)}
                placeholder="Ex: Deus concedeu o livramento, abriu a porta de trabalho, trouxe cura e paz..."
                className="w-full px-4 py-2.5 rounded-xl bg-prayer-card border border-prayer-border focus:border-gold focus:outline-none text-prayer-text text-xs"
              />
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setAnsweringRequestId(null)}
                className="px-4 py-2 rounded-xl text-xs text-prayer-muted hover:text-prayer-text"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleMarkAsAnsweredSubmit}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-prayer-bg font-semibold text-xs shadow-md hover:opacity-95"
              >
                Confirmar Resposta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

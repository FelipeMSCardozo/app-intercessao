import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  BookOpen,
  Calendar,
  Heart,
  CheckCircle2,
  Download,
  Upload
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const {
    userProgress,
    setName,
    exportData,
    importData,
    showToast
  } = useApp();

  const [editName, setEditName] = useState(userProgress.name || '');
  const [isEditing, setIsEditing] = useState(false);
  const [importText, setImportText] = useState('');
  const [showImportBox, setShowImportBox] = useState(false);

  const completedModules = userProgress.completedModules.length;
  const completedDays = userProgress.completedDays.length;
  const favoriteCount =
    userProgress.favoritePrayers.length + userProgress.favoritePromises.length;
  const answeredCount = userProgress.prayerRequests.filter(
    (r) => r.status === 'Respondido'
  ).length;

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;
    setName(editName.trim());
    setIsEditing(false);
    showToast('Nome atualizado com sucesso!', 'success');
  };

  const handleDownloadBackup = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_intercessao_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Arquivo de backup exportado!', 'success');
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;
    const ok = importData(importText.trim());
    if (ok) {
      setShowImportBox(false);
      setImportText('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300 pb-12">
      {/* Header Profile */}
      <div className="rounded-3xl bg-prayer-card border border-prayer-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card-subtle">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/30 via-prayer-sub to-prayer-bg border border-gold/40 flex items-center justify-center text-gold font-serif text-2xl font-bold shadow-gold-glow">
            {userProgress.name ? userProgress.name.charAt(0).toUpperCase() : '🙏'}
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
              Perfil do Intercessor
            </span>
            {isEditing ? (
              <form onSubmit={handleSaveName} className="flex items-center space-x-2 mt-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="px-3 py-1 rounded-lg bg-prayer-sub border border-gold text-prayer-text text-sm focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded-lg bg-gold text-prayer-bg text-xs font-bold"
                >
                  Salvar
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2">
                <h1 className="font-serif text-2xl text-prayer-text">
                  {userProgress.name || 'Seu Nome'}
                </h1>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-xs text-prayer-muted hover:text-gold transition-colors ml-2"
                >
                  (Editar)
                </button>
              </div>
            )}
            <p className="text-xs text-prayer-muted mt-0.5">
              Dados sincronizados e protegidos localmente no seu navegador.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadBackup}
            className="px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold/40 text-xs text-prayer-text hover:text-gold flex items-center space-x-1.5 transition-colors"
            title="Exportar backup em arquivo"
          >
            <Download className="w-4 h-4" />
            <span>Fazer Backup</span>
          </button>

          <button
            onClick={() => setShowImportBox(!showImportBox)}
            className="px-4 py-2 rounded-xl bg-prayer-sub border border-prayer-border hover:border-gold/40 text-xs text-prayer-muted hover:text-prayer-text flex items-center space-x-1.5 transition-colors"
            title="Importar dados de outro dispositivo"
          >
            <Upload className="w-4 h-4" />
            <span>Restaurar</span>
          </button>
        </div>
      </div>

      {/* Import Backup Box if toggled */}
      {showImportBox && (
        <div className="p-6 rounded-2xl bg-prayer-sub border border-gold/40 space-y-3 animate-in fade-in duration-200">
          <span className="text-xs font-bold text-gold uppercase tracking-wider block">
            Restaurar Backup de Dados
          </span>
          <p className="text-xs text-prayer-muted">
            Cole abaixo o conteúdo do arquivo JSON que você exportou anteriormente para restaurar seus pedidos, anotações e progresso.
          </p>
          <textarea
            rows={4}
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Cole o código JSON do seu backup aqui..."
            className="w-full p-3 rounded-xl bg-prayer-card border border-prayer-border text-xs text-prayer-text font-mono focus:outline-none focus:border-gold"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowImportBox(false)}
              className="px-3 py-1.5 rounded-lg text-xs text-prayer-muted hover:text-prayer-text"
            >
              Cancelar
            </button>
            <button
              onClick={handleImportSubmit}
              disabled={!importText.trim()}
              className="px-4 py-1.5 rounded-lg bg-gold text-prayer-bg text-xs font-bold disabled:opacity-40"
            >
              Importar Dados
            </button>
          </div>
        </div>
      )}

      {/* Estatísticas da Jornada (Minha Jornada) */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text flex items-center space-x-2">
          <Award className="w-5 h-5 text-gold" />
          <span>Minha Jornada</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-1">
            <div className="flex items-center justify-between text-prayer-muted">
              <span className="text-xs">Módulos</span>
              <BookOpen className="w-4 h-4 text-gold" />
            </div>
            <span className="font-serif text-2xl text-prayer-text block">
              {completedModules}/12
            </span>
            <span className="text-[11px] text-prayer-muted">concluídos</span>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-1">
            <div className="flex items-center justify-between text-prayer-muted">
              <span className="text-xs">Plano 30 Dias</span>
              <Calendar className="w-4 h-4 text-gold" />
            </div>
            <span className="font-serif text-2xl text-prayer-text block">
              {completedDays}/30
            </span>
            <span className="text-[11px] text-prayer-muted">dias realizados</span>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-1">
            <div className="flex items-center justify-between text-prayer-muted">
              <span className="text-xs">Favoritos</span>
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
            <span className="font-serif text-2xl text-prayer-text block">
              {favoriteCount}
            </span>
            <span className="text-[11px] text-prayer-muted">orações e promessas</span>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-1">
            <div className="flex items-center justify-between text-prayer-muted">
              <span className="text-xs">Respostas</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="font-serif text-2xl text-emerald-400 block">
              {answeredCount}
            </span>
            <span className="text-[11px] text-prayer-muted">vitórias alcançadas</span>
          </div>
        </div>
      </div>

      {/* Persistence Note */}
      <div className="p-6 rounded-2xl bg-prayer-sub border border-prayer-border text-xs text-prayer-muted space-y-2">
        <strong className="text-prayer-text block">Nota sobre privacidade e armazenamento:</strong>
        <p className="leading-relaxed">
          Todos os seus pedidos de oração, anotações do plano de 30 dias e favoritos ficam salvos com segurança diretamente na memória do seu navegador (localStorage). Nenhum dado pessoal é transmitido ou vendido a terceiros. Você pode fazer backup em arquivo JSON a qualquer momento para garantir a continuidade da sua história de oração.
        </p>
      </div>
    </div>
  );
};

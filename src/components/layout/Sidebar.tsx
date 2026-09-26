import React from 'react';
import { useApp, AppTab } from '../../context/AppContext';
import {
  Home,
  BookOpen,
  HeartHandshake,
  Scroll,
  PenTool,
  Calendar,
  Gift,
  Heart,
  Flame,
  Award
} from 'lucide-react';

interface NavItem {
  id: AppTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'training', label: 'Treinamento', icon: BookOpen },
  { id: 'prayers', label: 'Orações (70+)', icon: HeartHandshake },
  { id: 'promises', label: 'Promessas Bíblicas', icon: Scroll },
  { id: 'journal', label: 'Diário de Oração', icon: PenTool },
  { id: 'plan30', label: 'Plano de 30 Dias', icon: Calendar },
  { id: 'bonuses', label: 'Seus Bônus', icon: Gift, badge: '6 + Super' },
  { id: 'favorites', label: 'Favoritos', icon: Heart }
];

export const Sidebar: React.FC = () => {
  const { currentTab, setCurrentTab, userProgress } = useApp();

  // Calculate training completion %
  const totalModules = 12;
  const completedCount = userProgress.completedModules.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);

  return (
    <aside className="w-64 bg-prayer-sub border-r border-prayer-border flex flex-col h-screen sticky top-0 select-none">
      {/* Brand Logo & Title */}
      <div className="p-6 border-b border-prayer-border flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 via-prayer-card to-prayer-bg border border-gold/40 flex items-center justify-center shadow-gold-glow">
          <Flame className="w-6 h-6 text-gold" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
            Guia do Intercessor
          </span>
          <span className="font-serif text-sm font-normal text-prayer-text leading-tight block">
            Intercessão & Oração
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            currentTab === item.id ||
            (item.id === 'training' && currentTab === 'module_reader') ||
            (item.id === 'journal' && currentTab === 'memorial');

          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-prayer-card text-gold border border-gold/30 shadow-card-subtle'
                  : 'text-prayer-muted hover:text-prayer-text hover:bg-prayer-card/50 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-gold' : 'text-prayer-muted'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Progress Footer Card */}
      <div className="p-4 border-t border-prayer-border bg-prayer-bg/40">
        <button
          onClick={() => setCurrentTab('profile')}
          className="w-full text-left p-3 rounded-xl bg-prayer-card border border-prayer-border hover:border-gold/40 transition-colors group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-prayer-muted group-hover:text-gold transition-colors flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span>Meu Progresso</span>
            </span>
            <span className="text-xs font-semibold text-gold">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-prayer-sub rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-prayer-muted mt-2 block">
            {completedCount} de {totalModules} módulos concluídos
          </span>
        </button>
      </div>
    </aside>
  );
};

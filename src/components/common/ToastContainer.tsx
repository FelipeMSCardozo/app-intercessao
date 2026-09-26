import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, CheckCircle2, Info } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center space-x-3 px-4 py-3 rounded-2xl bg-prayer-sub border border-gold/40 text-prayer-text shadow-gold-glow animate-in slide-in-from-bottom-2 fade-in duration-300"
        >
          {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
          {toast.type === 'gold' && <Sparkles className="w-4 h-4 text-gold shrink-0" />}
          {toast.type === 'info' && <Info className="w-4 h-4 text-sky-400 shrink-0" />}
          <span className="text-xs md:text-sm font-medium">{toast.text}</span>
        </div>
      ))}
    </div>
  );
};

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-prayer-border/60 text-center px-4">
      <p className="font-serif italic text-xs md:text-sm text-prayer-muted/80 tracking-wide">
        “Um passo de cada vez. Um dia de cada vez. Uma oração de cada vez.”
      </p>
      <div className="mt-2 flex items-center justify-center space-x-2 text-[11px] text-prayer-muted/50">
        <span>Treinamento de Intercessão e Oração</span>
        <span>•</span>
        <span>Plataforma Digital Pessoal</span>
      </div>
    </footer>
  );
};

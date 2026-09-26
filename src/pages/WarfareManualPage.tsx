import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Shield,
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';

export const WarfareManualPage: React.FC = () => {
  const { setCurrentTab } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300 pb-12">
      {/* Top Navigation */}
      <button
        onClick={() => setCurrentTab('bonuses')}
        className="flex items-center space-x-2 text-xs md:text-sm text-prayer-muted hover:text-prayer-text transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar aos Bônus</span>
      </button>

      {/* Header */}
      <div className="space-y-3 border-b border-prayer-border pb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5" />
            <span>BÔNUS 03 • GUIA EXCLUSIVO</span>
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Manual Prático de Guerra Espiritual
        </h1>
        <p className="text-prayer-muted text-sm md:text-base leading-relaxed">
          Fundamentos bíblicos, discernimento responsável, a armadura do cristão e como permanecer inabalável em tempos de batalha sem superstição.
        </p>
      </div>

      {/* Sensible Balanced Warning Alert */}
      <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5 md:p-6 space-y-2 text-amber-200">
        <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Diretriz Bíblica de Sobriedade Cristã</span>
        </div>
        <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
          Este manual adota estrita fidelidade às Escrituras. Rejeitamos práticas supersticiosas, misticismos e rituais sem amparo bíblico. Nem toda dificuldade física, financeira ou relacional possui causa demoníaca; muitas decorrem da negligência humana, de escolhas naturais ou do mundo caído em que vivemos. A verdadeira guerra espiritual cristã é viver em santidade, integridade e fé inabalável em Jesus Cristo.
        </p>
      </div>

      {/* Section 1: A Vitória Consumada na Cruz */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          1. A Vitória Já Foi Consumada na Cruz
        </h2>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          O ponto de partida de qualquer intercessor é compreender que nós não lutamos para conquistar uma vitória incerta. Nós lutamos a partir da vitória que Jesus Cristo já selou definitivamente no Calvário.
        </p>
        <div className="rounded-2xl bg-prayer-card border-l-4 border-gold p-5 space-y-1">
          <p className="font-serif text-base text-prayer-text italic">
            "E, despojando os principados e potestades, os expôs publicamente ao desprezo, triunfando deles na mesma cruz."
          </p>
          <span className="text-xs text-gold font-bold block">— Colossenses 2:15</span>
        </div>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          O adversário não possui soberania comparável à de Deus. Ele é uma criatura derrotada que opera através de mentiras, enganos, acusações e intimidação moral. O escudo mais seguro do cristão é a verdade do Evangelho gravada na mente e no coração.
        </p>
      </section>

      {/* Section 2: As 6 Peças da Armadura de Deus */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          2. A Armadura de Deus no Dia a Dia (Efésios 6:10-18)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              1. Cinturão da Verdade
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Viver sem hipocrisia, sem fingimentos e alicerçado na sã doutrina da Palavra. A verdade liberta das amarras da culpa e da mentira.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              2. Couraça da Justiça
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              A justiça imputada de Cristo que nos declara inocentes diante de Deus. Quando o acusador lembrar seus erros, lembre-o do sangue de Jesus.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              3. Calçado do Evangelho da Paz
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Firmeza de passos e disposição constante para promover a paz e anunciar a graça restauradora de Deus em todos os ambientes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              4. Escudo da Fé
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              A convicção firme nas promessas divinas que apaga imediatamente os dardos inflamados do medo, da desesperança e da dúvida.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              5. Capacete da Salvação
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              A proteção absoluta da mente pela certeza da redenção eterna. Guarda os pensamentos contra o desespero e o abatimento existencial.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border space-y-1">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              6. A Espada do Espírito
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              A Palavra de Deus proclamada em oração audível. Assim como Jesus venceu no deserto declarando "Está escrito", nós vencemos declarando a verdade bíblica.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Como Orar em Tempos de Oposição e Provação */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          3. Oração de Blindagem e Proteção Espiritual
        </h2>
        <div className="rounded-2xl bg-prayer-card border border-gold/30 p-6 space-y-3">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
            Oração Recomendada do Guerreiro Intercessor
          </span>
          <p className="font-serif text-base text-prayer-text italic leading-relaxed">
            "Senhor Deus Todo-Poderoso, revisto-me hoje com toda a Tua santa armadura. Declaro que pertenço a Cristo e que nenhuma força das trevas tem poder para revogar as bênçãos da cruz sobre a minha casa. Guarda minha mente em paz, cerca meus filhos com Teus anjos ministradores e dá-me discernimento e sobriedade para andar em fidelidade. Não temerei mal algum, pois Tu estás comigo. Em nome de Jesus Cristo, amém."
          </p>
        </div>
      </section>
    </div>
  );
};

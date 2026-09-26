import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowLeft,
  Flame
} from 'lucide-react';

export const SuperBonusPage: React.FC = () => {
  const { setCurrentTab } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300 pb-12">
      <button
        onClick={() => setCurrentTab('bonuses')}
        className="flex items-center space-x-2 text-xs md:text-sm text-prayer-muted hover:text-prayer-text transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar aos Bônus</span>
      </button>

      {/* Hero Super Bonus Card with special dark gold theme */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1F1C14] via-prayer-card to-prayer-bg border-2 border-gold/60 p-6 md:p-10 shadow-gold-glow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-3 flex-1">
            <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>PREMIUM SUPER BÔNUS EXCLUSIVO</span>
            </span>

            <h1 className="font-serif text-3xl md:text-5xl text-gold-light leading-tight">
              A Oração que Move o Céu
            </h1>

            <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed font-light">
              O segredo bíblico da intercessão eficaz: como alinhar seus clamores com o trono de Deus, perseverar sem desfalecer e experimentar respostas que transformam histórias.
            </p>
          </div>

          <div className="shrink-0">
            <img
              src="/assets/superbonus-oracao-que-move-o-ceu.png"
              alt="Capa do Super Bônus"
              className="w-44 md:w-52 rounded-2xl shadow-2xl border border-gold/50"
            />
          </div>
        </div>
      </div>

      {/* Capitulo 1: O Princípio do Alinhamento Celeste */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-gold font-serif text-xl md:text-2xl border-b border-prayer-border pb-2">
          <span>Capítulo 1</span>
          <span>•</span>
          <span>O Princípio do Alinhamento Celeste</span>
        </div>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          A oração que move o Céu não começa na terra para convencer um Deus hesitante; ela começa no Céu, é revelada pelo Espírito Santo ao coração do crente, e retorna ao Pai em forma de clamor obediente.
        </p>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          Em 1 João 5:14 lemos: "E esta é a confiança que temos para com ele: que, se pedirmos alguma coisa segundo a sua vontade, ele nos ouve". Quando oramos a vontade de Deus expressa nas Escrituras, todo o poder do Reino opera a favor daquela súplica.
        </p>
        <div className="p-5 rounded-2xl bg-prayer-card border border-gold/30 space-y-1">
          <span className="text-xs font-bold text-gold uppercase tracking-wider block">
            A Chave da Intercessão Eficaz:
          </span>
          <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
            Interceder não é dobrar a vontade de Deus à nossa, mas dobrar nossa vontade à dEle até que nossas petições sejam o espelho exato do coração do Pai.
          </p>
        </div>
      </section>

      {/* Capitulo 2: Lições dos Grandes Intercessores da História */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-gold font-serif text-xl md:text-2xl border-b border-prayer-border pb-2">
          <span>Capítulo 2</span>
          <span>•</span>
          <span>Lições dos Grandes Homens de Oração</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Daniel: Oração com Jejum e a Palavra
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Daniel entendeu pelas Escrituras (profecia de Jeremias) que o cativeiro de 70 anos havia chegado ao fim. Ele não cruzou os braços; ajoelhou-se e orou até a resposta do anjo chegar (Daniel 9 e 10).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Neemias: O Intercessor que Edifica
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Ao saber dos muros destruídos de Jerusalém, Neemias chorou, jejuou e orou com confissão sacerdotal antes de pedir autorização ao rei persa. A oração preparou a ação histórica (Neemias 1).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              George Müller: Sustentado pela Fé
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Müller cuidou de mais de 10.000 órfãos na Inglaterra sem jamais pedir um único centavo a homens. Apenas orava em secreto, e Deus supriu milhões de libras ao longo de décadas com exatidão milagrosa.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              John Hyde: "Hyde, o Que Ora"
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Missionário na Índia que passava noites inteiras gemendo em oração por almas perdidas. Onde passava, avivamentos profundos eclodiam porque seu coração ardia com o fardo sacerdotal da intercessão.
            </p>
          </div>
        </div>
      </section>

      {/* Capitulo 3: Roteiro para Avivamento Pessoal */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-gold font-serif text-xl md:text-2xl border-b border-prayer-border pb-2">
          <span>Capítulo 3</span>
          <span>•</span>
          <span>Roteiro de Avivamento Pessoal no Secreto</span>
        </div>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          Se você deseja ver o Céu se mover ao redor da sua casa, comece acendendo o fogo do seu próprio altar com este roteiro de 4 passos:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-xs text-gold-light block">Esvaziamento e Quebrantamento:</strong>
              <p className="text-xs text-prayer-muted mt-0.5">
                Confesse cada pecado conhecido, renuncie à apatia espiritual e peça um coração sensível à dor do próximo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-xs text-gold-light block">Imersão nas Promessas:</strong>
              <p className="text-xs text-prayer-muted mt-0.5">
                Não ore sem a Bíblia aberta. Aproprie-se das promessas e declare-as em voz audível diante do trono de Deus.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-xs text-gold-light block">Persistência Inegociável:</strong>
              <p className="text-xs text-prayer-muted mt-0.5">
                Decida não desistir quando as circunstâncias parecerem piorar. O silêncio de Deus muitas vezes antecede o rompimento da vitória.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-prayer-card border border-prayer-border flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong className="text-xs text-gold-light block">Vigiar com Ações de Graças:</strong>
              <p className="text-xs text-prayer-muted mt-0.5">
                Agradeça antecipadamente e viva de forma coerente com o milagre que você pediu em oração.
              </p>
            </div>
          </div>
        </div>

        {/* Consagração Solene */}
        <div className="rounded-3xl bg-gradient-to-br from-prayer-card to-prayer-sub border-2 border-gold/40 p-6 md:p-8 space-y-3 mt-8">
          <span className="text-xs uppercase tracking-wider text-gold font-bold flex items-center space-x-2">
            <Flame className="w-4 h-4 text-gold" />
            <span>Oração de Avivamento do Intercessor</span>
          </span>
          <p className="font-serif text-base md:text-lg text-prayer-text italic leading-relaxed">
            "Senhor Deus de Elias e de Paulo, batiza o meu espírito com o fogo santo da intercessão pura. Retira todo torpor e mornidão dos meus dias. Faze de mim uma sentinela vigilante nas muralhas do Teu Reino. Que as minhas orações ecoem no Céu e tragam restauração para minha família, para minha igreja e para as vidas que me cercam. Em nome do Teu Filho amado, Jesus Cristo, amém e amém!"
          </p>
        </div>
      </section>
    </div>
  );
};

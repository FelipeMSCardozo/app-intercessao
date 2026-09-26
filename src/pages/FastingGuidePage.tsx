import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Utensils,
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';

export const FastingGuidePage: React.FC = () => {
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

      {/* Header */}
      <div className="space-y-3 border-b border-prayer-border pb-6">
        <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center space-x-1.5">
          <Utensils className="w-3.5 h-3.5" />
          <span>BÔNUS 06 • DISCIPLINA ESPIRITUAL</span>
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-prayer-text">
          Guia Bíblico de Jejum Cristão
        </h1>
        <p className="text-prayer-muted text-sm md:text-base leading-relaxed">
          Instrução prática e fundamentada nas Escrituras para consagrar o corpo, quebrar a tirania dos apetites e buscar a face do Senhor com propósito.
        </p>
      </div>

      {/* Medical Caution Alert */}
      <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5 md:p-6 space-y-2 text-amber-200">
        <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Aviso Médico e de Saúde Preventiva</span>
        </div>
        <p className="text-xs md:text-sm text-prayer-muted leading-relaxed">
          Este conteúdo é de natureza exclusivamente espiritual e educacional. Pessoas com condições médicas pré-existentes (como diabetes, hipoglicemia, anemia severa, distúrbios digestivos), gestantes, lactantes ou idosos devem obrigatoriamente buscar orientação médica e nutricional profissional antes de realizar qualquer período prolongado de abstinência alimentar. Deus valoriza a obediência e o bom senso.
        </p>
      </div>

      {/* Section 1: O que é Jejum Bíblico */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          1. O que é Jejum Bíblico e o que Não É
        </h2>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          O jejum bíblico é a abstinência voluntária de alimentos com o único objetivo de focar a mente e o espírito na busca ao Criador. Ele não é uma greve de fome para coagir Deus a realizar caprichos pessoais, tampouco uma dieta estética para emagrecimento.
        </p>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          Quando jejuamos, estamos dizendo a nós mesmos: "A minha alma tem mais sede de Deus do que meu estômago tem fome de pão terreno". É subjugar os impulsos da carne para sintonizar a sensibilidade espiritual com o Espírito Santo.
        </p>
      </section>

      {/* Section 2: Tipos de Jejum na Bíblia */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          2. Tipos de Jejum Revelados nas Escrituras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Jejum Total de Alimentos
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Abstenção de alimentos sólidos mantendo ingestão abundante de água pura. É o modelo padrão praticado por Jesus durante Seus 40 dias no deserto (Lucas 4:2).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Jejum Parcial (Daniel)
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Restrição de alimentos finos, carnes e doces, alimentando-se de refeições muito simples e legumes, conforme descrito em Daniel 10:3. Ideal para quem tem rotinas de trabalho pesado.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-prayer-card border border-prayer-border space-y-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Jejum Comunitário
            </span>
            <p className="text-xs text-prayer-muted leading-relaxed">
              Convocação solene de toda a congregação diante de crises severas, como Josafá em 2 Crônicas 20 e a rainha Ester diante da ameaça ao povo judeu.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Como Combinar Jejum e Oração */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-prayer-text border-b border-prayer-border pb-2">
          3. Como Combinar Jejum e Oração na Prática
        </h2>
        <p className="text-sm md:text-base text-prayer-text/90 leading-relaxed">
          Se você apenas deixar de comer sem orar e sem ler a Palavra, você estará apenas passando fome. O poder do jejum reside no tempo que você redireciona:
        </p>
        <ul className="space-y-2 text-xs md:text-sm text-prayer-muted pl-4">
          <li className="flex items-start space-x-2">
            <span className="text-gold font-bold">▪</span>
            <span>Substitua o horário da refeição por minutos a sós de joelhos e leitura bíblica.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-gold font-bold">▪</span>
            <span>Mantenha atitude alegre e serena: Jesus instruiu a lavar o rosto e perfumar a cabeça para não parecer aos homens que jejuamos (Mateus 6:17).</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-gold font-bold">▪</span>
            <span>Finalize o jejum com alimentos leves e nutritivos, sem excessos vorazes.</span>
          </li>
        </ul>

        <div className="rounded-2xl bg-prayer-card border border-gold/40 p-6 space-y-2 mt-6">
          <span className="text-xs font-bold text-gold uppercase tracking-wider block">
            Oração ao Consagrar um Jejum
          </span>
          <p className="font-serif text-base text-prayer-text italic leading-relaxed">
            "Pai Celeste, consagro este período de jejum e oração a Ti. Não busco glória para mim nem merecimento próprio. Reconheço minha total dependência da Tua graça. Que o meu espírito se aquiete, que meus pensamentos se alinhem à Tua Palavra e que o Teu Santo Espírito reine com liberdade em minha vida. Em nome de Jesus Cristo, amém."
          </p>
        </div>
      </section>
    </div>
  );
};

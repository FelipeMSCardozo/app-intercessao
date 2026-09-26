export interface DailyVerse {
  text: string;
  reference: string;
  theme: string;
  application: string;
}

export const DAILY_VERSES: DailyVerse[] = [
  {
    text: 'Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e ocultas, que não sabes.',
    reference: 'Jeremias 33:3',
    theme: 'Ouvindo a Deus',
    application: 'Apresente suas dúvidas hoje esperando com fé a revelação da sabedoria do alto.'
  },
  {
    text: 'Acheguemo-nos, portanto, confiadamente, junto ao trono da graça, a fim de recebermos misericórdia e acharmos graça para socorro em ocasião oportuna.',
    reference: 'Hebreus 4:16',
    theme: 'Acesso Livre',
    application: 'Entre na presença do Pai sem medo ou culpa, acolhido pelo sacrifício de Jesus.'
  },
  {
    text: 'Perto está o SENHOR de todos os que o invocam, de todos os que o invocam em verdade.',
    reference: 'Salmo 145:18',
    theme: 'Proximidade Divina',
    application: 'Fale com Deus com o coração aberto e sincero, sabendo que Ele Se agrada da verdade no íntimo.'
  },
  {
    text: 'Confia no SENHOR de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.',
    reference: 'Provérbios 3:5-6',
    theme: 'Direção Segura',
    application: 'Abra mão de controlar tudo hoje e peça a Deus para endireitar suas decisões.'
  },
  {
    text: 'Tu, SENHOR, conservarás em perfeita paz aquele cujo propósito é firme; porque ele confia em ti.',
    reference: 'Isaías 26:3',
    theme: 'Paz Perfeita',
    application: 'Mantenha o foco de seus pensamentos no Senhor e experimente serenidade em meio à rotina.'
  },
  {
    text: 'O que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente diz ao SENHOR: Meu refúgio e meu baluarte, Deus meu, em quem confio.',
    reference: 'Salmo 91:1-2',
    theme: 'Proteção Sobrenatural',
    application: 'Declare que sua casa e sua vida estão guardadas sob a sombra protetora do Onipotente.'
  },
  {
    text: 'Se, porém, algum de vós necessita de sabedoria, peça-a a Deus, que a todos dá com generosidade e nada lhes impropera; e ser-lhe-á concedida.',
    reference: 'Tiago 1:5',
    theme: 'Sabedoria Generosa',
    application: 'Peça discernimento para lidar com as tarefas e conversas desafiadoras deste dia.'
  },
  {
    text: 'E a paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus.',
    reference: 'Filipenses 4:7',
    theme: 'Sentinela da Paz',
    application: 'Entregue as ansiedades que tentam acelerar seu coração e descanse na guarda de Cristo.'
  },
  {
    text: 'Os que esperam no SENHOR renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.',
    reference: 'Isaías 40:31',
    theme: 'Renovo Espiritual',
    application: 'Quando a exaustão bater, pare alguns instantes e receba o vigor que vem do Santo Espírito.'
  },
  {
    text: 'De fato, sem fé é impossível agradar a Deus, porquanto é necessário que aquele que se aproxima de Deus creia que ele existe e que se torna galardoador dos que o buscam.',
    reference: 'Hebreus 11:6',
    theme: 'Recompensa da Fé',
    application: 'Lembre-se de que cada oração sincera feita no oculto será recompensada pelo Pai.'
  },
  {
    text: 'O SENHOR é a minha luz e a minha salvação; de quem terei medo? O SENHOR é a fortaleza da minha vida; a quem temerei?',
    reference: 'Salmo 27:1',
    theme: 'Coragem Santa',
    application: 'Rejeite toda intimidação externa: o Deus Todo-Poderoso é a fortaleza da sua vida.'
  },
  {
    text: 'Em paz me deito e logo pego no sono, porque, SENHOR, só tu me fazes repousar seguro.',
    reference: 'Salmo 4:8',
    theme: 'Descanso Noturno',
    application: 'Medite na fidelidade do Senhor antes de dormir para desfrutar de sono doce e reparador.'
  },
  {
    text: 'Bendize, ó minha alma, ao SENHOR, e tudo o que há em mim bendiga o seu santo nome. Bendize, ó minha alma, ao SENHOR, e não te esqueças de nem um só de seus benefícios.',
    reference: 'Salmo 103:1-2',
    theme: 'Memória da Gratidão',
    application: 'Faça uma pausa para listar três bênçãos pelas quais você é grato a Deus hoje.'
  },
  {
    text: 'Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o SENHOR, teu Deus, é contigo por onde quer que andares.',
    reference: 'Josué 1:9',
    theme: 'Companhia Divina',
    application: 'Dê os passos que você precisa dar com a certeza de que Deus caminha ao seu lado.'
  },
  {
    text: 'Muito pode, por sua eficácia, a súplica do justo.',
    reference: 'Tiago 5:16b',
    theme: 'Poder da Oração',
    application: 'Nunca subestime o impacto espiritual do seu clamor por sua família e amigos.'
  }
];

export const getTodayVerse = (): DailyVerse => {
  const dayOfMonth = new Date().getDate();
  const index = (dayOfMonth - 1) % DAILY_VERSES.length;
  return DAILY_VERSES[index];
};

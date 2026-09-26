import { BonusItem } from '../types';

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'BÔNUS 01',
    title: 'Diário de Oração do Intercessor',
    subtitle: 'Caderno digital interativo integrado para registrar pedidos, atualizações e vitórias.',
    description: 'Um sistema completo para acompanhar sua caminhada de oração: registre motivos por categorias, adicione atualizações periódicas e celebre quando a resposta chegar no Memorial de Respostas.',
    value: 'R$ 47,00',
    badge: 'Mais Acessado',
    actionText: 'Acessar Diário de Oração',
    contentView: 'journal',
    summaryPoints: [
      'Registro ilimitado de motivos e pessoas',
      'Linha do tempo com atualizações de cada pedido',
      'Classificação por status: Em oração, Respondido, Aguardando, Agradecimento',
      'Memorial de Respostas com testemunhos da fidelidade divina'
    ]
  },
  {
    id: 'bonus-2',
    number: 'BÔNUS 02',
    title: '100 Promessas Bíblicas para Decretar',
    subtitle: 'Coletânea temática de 100 versículos com orientações práticas para orar.',
    description: 'Organizadas em 12 áreas fundamentais da vida humana: fé, paz, sabedoria, proteção, família, esperança, provisão, perseverança, coragem, direção, consolo e relacionamento com Deus.',
    value: 'R$ 39,00',
    badge: 'Essencial',
    actionText: 'Consultar 100 Promessas',
    contentView: 'promises',
    summaryPoints: [
      '100 passagens bíblicas autênticas e referenciadas',
      'Guia prático de aplicação em oração para cada versículo',
      'Busca e filtragem instantânea por tema',
      'Botão direto "Orar com esta promessa"'
    ]
  },
  {
    id: 'bonus-3',
    number: 'BÔNUS 03',
    title: 'Manual Prático de Guerra Espiritual',
    subtitle: 'Guia bíblico sóbrio sobre autoridade em Cristo, vigilância e discernimento.',
    description: 'Instrução equilibrada, livre de superstições ou misticismos infundados, focada na armadura de Deus descrita em Efésios 6, sobriedade na fé e autoridade baseada na vitória consumada na Cruz.',
    value: 'R$ 67,00',
    badge: 'Exclusivo',
    actionText: 'Ler Manual de Guerra',
    contentView: 'warfare_manual',
    summaryPoints: [
      'Fundamentos teológicos: a Cruz como vitória consumada',
      'A Armadura de Deus na prática do cotidiano',
      'Discernimento bíblico sem exageros ou superstições',
      'Orações de cobertura e proteção para a família'
    ]
  },
  {
    id: 'bonus-4',
    number: 'BÔNUS 04',
    title: 'Plano Guiado de Oração de 30 Dias',
    subtitle: 'Um itinerário diário completo para transformar sua vida devocional.',
    description: 'Um passo de cada vez, uma oração de cada vez. Cada dia oferece um tema específico, reflexão pastoral profunda, referência bíblica, direcionamento e espaço para suas próprias notas.',
    value: 'R$ 49,00',
    badge: 'Transformador',
    actionText: 'Continuar Plano de 30 Dias',
    contentView: 'plan30',
    summaryPoints: [
      '30 dias de orações dirigidas e reflexões profundas',
      'Bloco de notas pessoal salvo automaticamente para cada dia',
      'Barra de progresso diária e streak de consistência',
      'Construção de hábitos sustentáveis para a vida inteira'
    ]
  },
  {
    id: 'bonus-5',
    number: 'BÔNUS 05',
    title: 'Orações para Momentos de Crise',
    subtitle: 'Pronto-socorro espiritual com orientações e orações para as horas mais difíceis.',
    description: 'Um refúgio acolhedor com orações para 11 situações de dor aguda: angústia, medo, luto, conflito familiar, crise financeira, doença, solidão, decisões difíceis, crise conjugal, desânimo e incerteza.',
    value: 'R$ 47,00',
    badge: 'Acolhimento',
    actionText: 'Acessar Orações de Crise',
    contentView: 'crisis_prayers',
    summaryPoints: [
      '11 situações críticas com acolhimento bíblico responsável',
      'Linguagem humana, empática e reverente',
      'Sem promessas mágicas ou fórmulas ilusórias',
      'Consolo imediato alicerçado nas Escrituras'
    ]
  },
  {
    id: 'bonus-6',
    number: 'BÔNUS 06',
    title: 'Guia Bíblico de Jejum Cristão',
    subtitle: 'Como consagrar o corpo e afinar a sensibilidade espiritual com equilíbrio.',
    description: 'Aprenda o propósito espiritual genuíno do jejum segundo o ensino de Jesus em Mateus 6. Tipos bíblicos de jejum, preparação prudente, quebra de apetites carnais e cuidados médicos essenciais.',
    value: 'R$ 39,00',
    badge: 'Profundidade',
    actionText: 'Ler Guia de Jejum',
    contentView: 'fasting_guide',
    summaryPoints: [
      'O propósito bíblico do jejum: busca a Deus, não barganha',
      'Tipos de jejuns presentes nas Escrituras (Daniel, Jesus, Ester)',
      'Como planejar períodos viáveis de consagração e oração',
      'Aviso de saúde e responsabilidade médica preventiva'
    ]
  },
  {
    id: 'super-bonus',
    number: 'SUPER BÔNUS',
    title: 'A Oração que Move o Céu',
    subtitle: 'O segredo bíblico da intercessão que alinha o coração humano à vontade de Deus.',
    description: 'Um estudo magistral e inspirador sobre os princípios que caracterizaram as orações mais impactantes da história bíblica: a persistência de Daniel, a paixão sacerdotal de Neemias, a fé prática de George Müller e o fervor de John Hyde. Descubra como orar em perfeita harmonia com o Espírito Santo.',
    value: 'R$ 97,00',
    badge: 'Super Bônus Exclusivo',
    isSuper: true,
    coverImage: '/assets/superbonus-oracao-que-move-o-ceu.png',
    actionText: 'Acessar Super Bônus Completo',
    contentView: 'super_bonus',
    summaryPoints: [
      'Princípio do Alinhamento Celeste: como orar a vontade soberana do Pai',
      'Lições práticas dos grandes intercessores da Bíblia e da história',
      'O mistério da persistência sem desespero carnal',
      'Roteiro prático para um tempo de avivamento pessoal no secreto'
    ]
  }
];

export interface CrisisItem {
  id: string;
  category: string;
  situation: string;
  pastoralGuidance: string;
  prayerTitle: string;
  prayerText: string;
  bibleVerse: {
    verse: string;
    reference: string;
  };
}

export const CRISIS_PRAYERS_DATA: CrisisItem[] = [
  {
    id: 'crise-angustia',
    category: 'Angústia',
    situation: 'Sensação de aperto no peito, sufocamento emocional e tristeza profunda.',
    pastoralGuidance: 'A angústia é uma reação humana a perdas, sobrecargas ou dores acumuladas. Não se culpe por sentir tristeza. Jesus mesmo no Getsêmani declarou que Sua alma estava profundamente angustiada. Permita-se chorar diante de Deus; Ele acolhe suas lágrimas.',
    prayerTitle: 'Oração no Meio da Angústia Sufocante',
    prayerText: 'Senhor meu Deus, meu coração está oprimido e a angústia tomou conta do meu peito. As forças para explicar o que sinto se esgotaram. Mas Tu conheces cada batimento acelerado e cada lágrima oculta. Sê o meu refúgio agora. Despeja a Tua paz sobre minha alma inquieta e sustenta-me com Teu braço de misericórdia. Não me deixes afundar neste abismo; traz-me de volta à Tua luz. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'Na minha angústia, invoquei o SENHOR, gritei por socorro ao meu Deus. Ele do seu templo ouviu a minha voz, e o meu clamor penetrou-lhe os ouvidos.',
      reference: 'Salmo 18:6'
    }
  },
  {
    id: 'crise-medo',
    category: 'Medo',
    situation: 'Pavor paralisante diante do desconhecido, notícias ruins ou sensação de perigo.',
    pastoralGuidance: 'O medo tenta sequestrar a imaginação e pintar os piores cenários possíveis. O antídoto bíblico para o medo não é a negação da realidade, mas a lembrança ativa de que Deus está com você em cada segundo.',
    prayerTitle: 'Oração Contra o Terror e Pavor Noturno',
    prayerText: 'Pai Santo, sinto que o medo tenta me paralisar e me roubar a paz. Mas Tua Palavra me garante que Tu não me deste espírito de covardia, mas de poder, amor e equilíbrio mental. Rejeito as previsões catastróficas da minha mente e coloco minha segurança no Teu amor eterno. Tu estás comigo neste quarto e nada pode me arrancar das Tuas mãos. Eu escolho confiar em Ti. Amém.',
    bibleVerse: {
      verse: 'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.',
      reference: 'Isaías 41:10'
    }
  },
  {
    id: 'crise-luto',
    category: 'Luto',
    situation: 'A dor dilacerante da partida de alguém amado e o vazio da ausência.',
    pastoralGuidance: 'O luto é um processo que leva tempo. O amor não morre com a despedida, e a saudade dói. Viva o seu luto com paciência, respeitando o seu ritmo e buscando a companhia de irmãos na fé e profissionais de saúde caso a dor seja avassaladora.',
    prayerTitle: 'Oração Pelo Consolo na Perda Dolorosa',
    prayerText: 'Deus de toda consolação, a saudade rasga meu peito e a ausência física daquela pessoa querida parece insuportável. Sei que Tu recolhes cada lágrima em Teu odre. Conforta o meu íntimo com a bendita esperança da ressurreição em Cristo Jesus. Ajuda-me a celebrar o tempo e o amor que compartilhamos nesta terra, e concede-me forças para continuar respirando e vivendo um dia de cada vez. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'Perto está o SENHOR dos que têm o coração quebrantado e salva os de espírito oprimido.',
      reference: 'Salmo 34:18'
    }
  },
  {
    id: 'crise-conflito-familiar',
    category: 'Conflito familiar',
    situation: 'Gritos, brigas severas, ressentimentos e clima insustentável dentro de casa.',
    pastoralGuidance: 'Conflitos familiares revelam feridas antigas. Evite responder a agressões com mais violência verbal. O silêncio sábio e o recuo temporário para orar impedem que o fogo da discórdia aumente.',
    prayerTitle: 'Oração por Calmaria na Tempestade Familiar',
    prayerText: 'Senhor Jesus, entra na nossa casa neste momento de perturbação. Cala os ânimos exaltados, repreende as palavras de ofensa e acalma a raiva dos corações. Dá-me graça para ser instrumento de paz, não de contenda. Onde houver mágoa, que entre o Teu perdão; onde houver incompreensão, que reine a Tua sabedoria. Salva e protege a nossa família da destruição. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.',
      reference: 'Provérbios 15:1'
    }
  },
  {
    id: 'crise-financas',
    category: 'Problemas financeiros',
    situation: 'Cobranças implacáveis, desemprego, dívidas acumuladas e falta de recursos básicos.',
    pastoralGuidance: 'O aperto financeiro traz vergonha e noites mal dormidas. Lembre-se de que o seu valor como ser humano não é determinado pelo saldo bancário. Deus cuida dos Seus filhos e é capaz de abrir portas onde parece haver apenas muros.',
    prayerTitle: 'Oração por Socorro e Provisão Urgente',
    prayerText: 'Jeová Jireh, Senhor da Provisão, encontro-me sem recursos e as dívidas me cercam. Clamo pela Tua intervenção honesta e digna. Abre portas de trabalho, concede-me ideias práticas, traz condições para honrar cada compromisso financeiro e concede sabedoria para cortar excessos. Livra-me do desespero e que eu veja a Tua mão sustentando minha casa dia após dia. Em nome de Jesus Cristo, amém.',
    bibleVerse: {
      verse: 'E o meu Deus, segundo a sua riqueza em glória, há de suprir, em Cristo Jesus, cada uma de vossas necessidades.',
      reference: 'Filipenses 4:19'
    }
  },
  {
    id: 'crise-doenca',
    category: 'Doença',
    situation: 'Diagnóstico grave, dores físicas contínuas ou tratamento médico desgastante.',
    pastoralGuidance: 'A enfermidade enfraquece o corpo e desafia as emoções. Siga com fidelidade as orientações médicas que Deus providenciou através da ciência e, simultaneamente, coloque sua saúde nas mãos do Médico dos médicos em oração constante.',
    prayerTitle: 'Oração de Entrega e Cura no Tratamento',
    prayerText: 'Senhor Jesus, que pelas Tuas feridas nos trouxeste a paz e a esperança, coloco meu corpo fragilizado sob os Teus cuidados. Fortalece o meu organismo para suportar o tratamento, dá precisão aos médicos e alivia as dores agudas. Se for da Tua soberana vontade restaurar completamente a minha saúde agora, opera essa cura para Tua glória. Mas acima de tudo, enche meu espírito de serenidade e fé. Amém.',
    bibleVerse: {
      verse: 'Cura-me, SENHOR, e serei curado, salva-me, e serei salvo; porque tu és o meu louvor.',
      reference: 'Jeremias 17:14'
    }
  },
  {
    id: 'crise-solidao',
    category: 'Solidão',
    situation: 'Sensação dolorosa de estar abandonado pelo mundo, sem amigos e sem apoio.',
    pastoralGuidance: 'Sentir-se solitário em meio a uma multidão é uma das dores mais agudas dos nossos tempos. Deus nunca Se afasta de você. Faça da solidão um quarto secreto de confidências com Jesus e procure se engajar em uma comunidade cristã saudável.',
    prayerTitle: 'Oração Contra o Vazio e o Desamparo',
    prayerText: 'Pai Celeste, sinto-me sozinho e parece que ninguém repara na minha existência ou nas minhas dores. Mas a Tua Palavra afirma que Tu nunca me deixarás nem me desampararás. Enche o vazio do meu quarto com a Tua doce comunhão. Traz pessoas verdadeiras e leais ao meu caminho e capacita-me a ser amigo daqueles que também sofrem de solidão. Tu és o meu companheiro eterno. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'Deus faz que o solitário more em família; tira os cativos para a prosperidade.',
      reference: 'Salmo 68:6'
    }
  },
  {
    id: 'crise-decisoes',
    category: 'Decisões difíceis',
    situation: 'Encruzilhada com consequências sérias, paralisia por dúvida e pressão do tempo.',
    pastoralGuidance: 'Quando todas as opções parecem arriscadas, não tome decisões impulsionadas pelo pânico. Pare, respire, ore e consulte mentores experientes e fiéis. A paz de Cristo deve ser o árbitro do seu coração.',
    prayerTitle: 'Oração por Iluminação e Clareza na Escolha',
    prayerText: 'Senhor Todo-Poderoso, estou diante de caminhos que não sei como escolher e o peso das consequências me apavora. Peço Tua sabedoria pura do alto. Fecha as portas que me levariam à ruína espiritual ou emocional e abre com clareza o caminho onde poderei Te glorificar. Se eu estiver enganado, corrige meus passos a tempo. Eu confio na Tua bússola sagrada. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'Instruir-te-ei e te ensinarei o caminho que deves seguir; e, sob as minhas vistas, te darei conselho.',
      reference: 'Salmo 32:8'
    }
  },
  {
    id: 'crise-relacionamento',
    category: 'Crise no relacionamento',
    situation: 'Casamento à beira do divórcio, quebra de confiança ou namoro em ruínas.',
    pastoralGuidance: 'A dor da quebra de confiança requer cura interior profunda. O perdão é um mandamento e uma decisão, enquanto a reconciliação e a confiança precisam de tempo e de atitudes consistentes de arrependimento. Entregue o processo nas mãos do Senhor.',
    prayerTitle: 'Oração Pela Redenção do Relacionamento Ferido',
    prayerText: 'Senhor Deus da Aliança, olha para os destroços deste relacionamento que outrora era repleto de sonhos. Remove o ressentimento amargo que endurece os corações. Se for para a Tua glória e para a restauração da paz, faz brotar perdão genuíno e renove a aliança. Dá-me forças para agir com dignidade, humildade e integridade em cada passo desse processo doloroso. Em nome de Jesus Cristo, amém.',
    bibleVerse: {
      verse: 'Acima de tudo, porém, tende amor intenso uns para com os outros, porque o amor cobre multidão de pecados.',
      reference: '1 Pedro 4:8'
    }
  },
  {
    id: 'crise-desanimo',
    category: 'Desânimo',
    situation: 'Vontade de largar tudo, sensação de cansaço extremo e perda de sentido.',
    pastoralGuidance: 'O profeta Elias também pediu para morrer debaixo de uma árvore no deserto por causa da exaustão física e espiritual. Deus não o repreendeu; enviou um anjo para alimentá-lo e o mandou descansar antes de dar novas instruções. Cuide do seu corpo e recupere o fôlego no Senhor.',
    prayerTitle: 'Oração de Renovo para o Espírito Esgotado',
    prayerText: 'Pai Celeste, sinto que cheguei ao meu limite. A vontade de desistir dos meus projetos e dos meus compromissos bate à porta. Mas Tu és o Deus que dá força ao cansado e multiplica o vigor ao que não tem forças. Recebo hoje o pão do céu e a água da vida para o meu espírito abatido. Faz-me descansar em Ti e renova a minha esperança de que dias melhores estão por vir. Em nome de Jesus, amém.',
    bibleVerse: {
      verse: 'Os que esperam no SENHOR renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.',
      reference: 'Isaías 40:31'
    }
  },
  {
    id: 'crise-incerteza',
    category: 'Incerteza',
    situation: 'Perda de estabilidade, insegurança sobre o sustento futuro e medo do amanhã.',
    pastoralGuidance: 'A ilusão humana de controle é derrubada nos momentos de incerteza. Isso não significa abandono; é a oportunidade de transferir sua âncora de seguranças frágeis deste mundo para a rocha inabalável do Deus Eterno.',
    prayerTitle: 'Oração de Segurança na Tempestade da Incerteza',
    prayerText: 'Senhor Deus dos tempos e das estações, o chão sob meus pés parece ter sumido e não sei como será o dia de amanhã. Mas Tu és o mesmo ontem, hoje e para todo o sempre. Não mudo contigo. Firmo minha âncora na Tua fidelidade inquestionável. Que a Tua destra me guie com segurança por entre os ventos da mudança. Eu não temerei, pois Tu és o meu Pai. Amém.',
    bibleVerse: {
      verse: 'Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.',
      reference: 'Hebreus 13:8'
    }
  }
];

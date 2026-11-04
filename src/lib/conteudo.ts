export const NAV = {
  itens: [
    { rotulo: "Como funciona", href: "#como-funciona" },
    { rotulo: "Benefícios", href: "#beneficios" },
    { rotulo: "Segurança", href: "#seguranca" },
    { rotulo: "Para profissionais", href: "#profissionais" },
  ],
  entrar: "Entrar",
  cta: "Agendar faxina",
} as const;

export const HERO = {
  selo: "Mais de 5.000 casas transformadas este mês",
  tituloLinha1: "Faxina fácil.",
  tituloLinha2: "Paz garantida.",
  subtitulo:
    "A ponte definitiva entre você e profissionais verificadas. Tempo de qualidade e ordem saindo do caos — com um toque no celular.",
  ctaPrimario: "Agendar faxina agora",
  ctaSecundario: "Ver como funciona",
  atributos: ["Profissionais verificadas", "Pagamento seguro", "Garantia de refazer"],
  nota: { valor: "4,9", total: "3.200 avaliações" },
} as const;

export const COMO_FUNCIONA = {
  sobrancelha: "Como funciona",
  titulo: "Do caos à paz em 4 toques.",
  subtitulo: "Processo sem atrito, pensado para quem não tem tempo a perder.",
  passos: [
    {
      numero: "01",
      titulo: "Escolha o serviço",
      descricao: "Diária, semanal, mensal ou faxina pesada. Você decide a frequência.",
    },
    {
      numero: "02",
      titulo: "A IA faz o match",
      descricao: "Conectamos com a profissional ideal para o seu perfil e localização em segundos.",
    },
    {
      numero: "03",
      titulo: "Profissional verificada chega",
      descricao: "Uniformizada, com kit de limpeza e no horário combinado. Sem surpresas.",
    },
    {
      numero: "04",
      titulo: "Relaxe e avalie",
      descricao: "O pagamento via Escrow só libera após a sua aprovação. Zero risco.",
    },
  ],
  cta: "Agendar minha primeira faxina",
} as const;

export const PILARES = {
  sobrancelha: "Por que funciona",
  titulo: "Mais de 5 mil famílias já confiam.",
  subtitulo: "Três pilares que redesenham o cuidado doméstico no Brasil.",
  cartoes: [
    {
      icone: "Smartphone",
      titulo: "Tecnologia.",
      descricao:
        "Conectamos você a profissionais verificadas com um toque. Algoritmos de IA fazem o match perfeito em segundos — considerando localização, histórico e preferências.",
    },
    {
      icone: "HeartHandshake",
      titulo: "Paz de espírito.",
      descricao:
        "Não vendemos limpeza — vendemos tempo de qualidade, sono tranquilo e ordem saindo do caos. Sua casa volta a ser refúgio.",
    },
    {
      icone: "Smile",
      titulo: "Garantia de felicidade.",
      descricao:
        "Se não ficar perfeito, a gente refaz sem custo. Satisfação é a nossa métrica — não a faxina em si. 98% de recorrência comprova.",
    },
  ],
} as const;

export const COMPARACAO = {
  sobrancelha: "O novo padrão",
  titulo: "Um lado do mercado opera no passado.",
  subtitulo: "O outro opera no futuro.",
  informal: {
    titulo: "O mercado informal",
    itens: [
      "Boca a boca — você aceita qualquer indicação",
      "Desconhecidos no seu lar, sem CPF verificado",
      "Dinheiro vivo, sem nota, sem rastro",
      "Invisível, fragmentada, sem padronização",
    ],
  },
  easy: {
    titulo: "O ecossistema Easy Faxina",
    itens: [
      "Inteligência artificial + algoritmos de match",
      "Background check com CPF + antecedentes",
      "Pagamento via Escrow + formalização via MEI",
      "Marca coesa, padronizada e nacional",
    ],
  },
} as const;

export const SEGURANCA = {
  sobrancelha: "Segurança",
  titulo: "A arquitetura da confiança.",
  subtitulo: "Camadas de proteção invisíveis trabalhando por você 24/7.",
  itens: [
    {
      icone: "FileCheck",
      titulo: "Background check completo",
      descricao: "CPF, antecedentes criminais e referências verificadas antes de qualquer atendimento.",
    },
    {
      icone: "Lock",
      titulo: "Pagamento Escrow",
      descricao: "Seu dinheiro fica retido até você confirmar que a faxina ficou impecável.",
    },
    {
      icone: "Shield",
      titulo: "Seguro residencial incluso",
      descricao: "Cobertura de até R$ 5.000 para qualquer dano acidental.",
    },
    {
      icone: "MapPin",
      titulo: "Rastreamento ao vivo",
      descricao: "Saiba exatamente quando a sua profissional está a caminho.",
    },
    {
      icone: "Headphones",
      titulo: "Suporte 24/7 humano",
      descricao: "Time dedicado para resolver qualquer imprevisto — em tempo real.",
    },
  ],
} as const;

export const DEPOIMENTOS = {
  sobrancelha: "Quem já usa",
  titulo: "Histórias reais de paz de espírito.",
  subtitulo: "4,9/5 em 3.200 avaliações · 98% de recorrência · 15 min de resposta média.",
  itens: [
    {
      texto:
        "Economizei 8 horas por semana. Literalmente ganhei minha vida de volta. A Camila é nossa nova família.",
      autor: "Ana Paula M.",
      papel: "Mãe e advogada · Pinheiros, SP",
    },
    {
      texto:
        "A diferença entre uma diarista aleatória do zap e uma profissional Easy Faxina é abismal. Profissionalismo é outro nível.",
      autor: "Lucas R.",
      papel: "Empreendedor · Vila Madalena, SP",
    },
    {
      texto:
        "O app é tão fácil que minha sogra, de 72 anos, agenda sozinha. Isso diz tudo sobre o UX.",
      autor: "Mariana T.",
      papel: "Designer · Moema, SP",
    },
  ],
} as const;

export const PROFISSIONAIS = {
  sobrancelha: "Para quem faz acontecer",
  titulo: "É faxineira? Sua nova era começa aqui.",
  texto:
    "Formalização sem burocracia, renda maior, agenda sob seu controle e uma marca nacional do seu lado.",
  itens: [
    "Formalização via MEI sem burocracia",
    "Renda 40% maior que diárias informais",
    "Agenda sob seu controle total",
    "Treinamento e certificação gratuitos",
  ],
  numeros: [
    { valor: "R$ 4.200", rotulo: "Renda média mensal" },
    { valor: "98%", rotulo: "Pagamentos em dia" },
    { valor: "4,8", rotulo: "Satisfação das profissionais" },
  ],
  cta: "Quero ser parceira Easy Faxina",
} as const;

export const FAQ = {
  sobrancelha: "Dúvidas",
  titulo: "Perguntas frequentes.",
  itens: [
    {
      pergunta: "O que está incluso na faxina padrão?",
      resposta:
        "Limpeza completa de todos os cômodos, banheiros, cozinha, aspirar e passar pano, tirar pó e organizar superfícies. Produtos de limpeza inclusos.",
    },
    {
      pergunta: "E se eu não ficar satisfeito com o resultado?",
      resposta:
        "Nós refazemos a faxina sem custo. Se mesmo assim não rolar, 100% do valor é devolvido. Satisfação é a nossa métrica.",
    },
    {
      pergunta: "Como funciona o background check das profissionais?",
      resposta:
        "Verificamos CPF, antecedentes criminais, referências de atendimentos anteriores e fazemos entrevista presencial. Só entra quem passa por todas as etapas.",
    },
    {
      pergunta: "Posso remarcar ou cancelar uma faxina?",
      resposta:
        "Pode, sim — até 24h antes, sem taxa. Entre 24h e 2h antes, taxa de 30%. Nas 2h finais, o valor é integral, para proteger a profissional.",
    },
    {
      pergunta: "Há pacotes de recorrência com desconto?",
      resposta:
        "Sim. Semanal tem 10% de desconto; quinzenal tem 5%. Você pode pausar ou cancelar quando quiser, sem fidelidade.",
    },
  ],
} as const;

export const CTA_FINAL = {
  titulo: "Vamos transformar o mercado juntos?",
  subtitulo:
    "Easy Faxina: a ponte definitiva que transforma o informal em profissional. Sua casa merece essa nova era.",
  cta: "Agendar o futuro",
  microcopy: "Sem fidelidade · Sem pegadinha · Cancele quando quiser",
} as const;

export const RODAPE = {
  tagline: "Faxina fácil. Paz garantida.",
  colunas: [
    {
      titulo: "Produto",
      links: [
        { rotulo: "Como funciona", href: "#como-funciona" },
        { rotulo: "Segurança", href: "#seguranca" },
        { rotulo: "Para profissionais", href: "#profissionais" },
        { rotulo: "Dúvidas", href: "#faq" },
      ],
    },
    {
      titulo: "Empresa",
      links: [
        { rotulo: "Sobre", href: "#sobre" },
        { rotulo: "Carreiras", href: "#carreiras" },
        { rotulo: "Imprensa", href: "#imprensa" },
        { rotulo: "Blog", href: "#blog" },
      ],
    },
    {
      titulo: "Legal",
      links: [
        { rotulo: "Termos de uso", href: "#termos" },
        { rotulo: "Privacidade", href: "#privacidade" },
        { rotulo: "LGPD", href: "#lgpd" },
        { rotulo: "Contato", href: "#contato" },
      ],
    },
  ],
  copyright: "© 2026 Easy Faxina · CNPJ 00.000.000/0001-00",
  feitoEm: "Feito com ♥ em São Paulo",
} as const;

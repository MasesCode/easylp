export const ANUNCIO = {
  texto: "Agora em todo o Brasil",
  destaque: "Veja quanto custa a sua faxina em segundos",
  cta: "Simular preço",
  href: "#precos",
} as const;

export const NAV = {
  itens: [
    { rotulo: "Como funciona", href: "#como-funciona" },
    { rotulo: "Serviços", href: "#servicos" },
    { rotulo: "Preços", href: "#precos" },
    { rotulo: "Segurança", href: "#seguranca" },
    { rotulo: "Para profissionais", href: "#profissionais" },
    { rotulo: "Dúvidas", href: "#faq" },
  ],
  entrar: "Entrar",
  cta: "Agendar faxina",
  ctaHref: "#precos",
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
  imagem: { src: "/fotos/hero.webp", alt: "Sala de estar clara e arrumada, com sofá branco e plantas" },
  avatares: [
    { nome: "Ana Paula M.", foto: "/fotos/pessoa-ana.webp" },
    { nome: "Lucas R.", foto: "/fotos/pessoa-lucas.webp" },
    { nome: "Mariana T.", foto: "/fotos/pessoa-mariana.webp" },
    { nome: "Rafael C.", foto: "/fotos/pessoa-rafael.webp" },
  ],
  agendamento: {
    titulo: "Nova faxina",
    servicos: [
      { id: "residencial", rotulo: "Residencial" },
      { id: "pesada", rotulo: "Pesada" },
      { id: "pos-obra", rotulo: "Pós-obra" },
    ],
    imovel: "Apto · 2 quartos · 1 banheiro",
    data: "Sáb, 14 de nov · 09:00",
    endereco: "Rua Harmonia, 120 · Vila Madalena",
    profissional: { nome: "Camila S.", foto: "/fotos/pessoa-camila.webp", nota: "4,98", atendimentos: "312 faxinas" },
    taxaInclusa: "com taxa de 5%",
    cta: "Confirmar agendamento",
  },
  chips: {
    caminho: { titulo: "Camila está a caminho", detalhe: "Chega em 8 min" },
    protegido: { titulo: "Pagamento protegido", detalhe: "Liberado após sua aprovação" },
  },
} as const;

export const LETREIRO = [
  "Faxina residencial",
  "Faxina pesada",
  "Easy Premium",
  "Limpeza pós-obra",
  "Pré e pós-mudança",
  "Limpeza express",
  "Lavar e passar roupa",
  "Interior da geladeira",
] as const;

export const NUMEROS = [
  { valor: 5000, sufixo: "+", casas: 0, rotulo: "Casas atendidas por mês" },
  { valor: 4.9, sufixo: "/5", casas: 1, rotulo: "Nota média das clientes" },
  { valor: 98, sufixo: "%", casas: 0, rotulo: "Voltam a agendar" },
  { valor: 15, sufixo: " min", casas: 0, rotulo: "Tempo médio de resposta" },
] as const;

export const COMO_FUNCIONA = {
  sobrancelha: "Como funciona",
  titulo: "Do caos à paz em 4 toques.",
  subtitulo: "Processo sem atrito, pensado para quem não tem tempo a perder.",
  passos: [
    {
      numero: "01",
      icone: "Sparkles",
      titulo: "Escolha o serviço",
      descricao: "São 6 serviços. Conte os cômodos, marque os extras e veja o preço na hora.",
    },
    {
      numero: "02",
      icone: "Zap",
      titulo: "A IA faz o match",
      descricao: "Conectamos com a profissional ideal para o seu perfil e localização em segundos.",
    },
    {
      numero: "03",
      icone: "BadgeCheck",
      titulo: "Profissional verificada chega",
      descricao: "Uniformizada, com kit de limpeza e no horário combinado. Sem surpresas.",
    },
    {
      numero: "04",
      icone: "Smile",
      titulo: "Relaxe e avalie",
      descricao: "O pagamento via Escrow só libera após a sua aprovação. Zero risco.",
    },
  ],
  cta: "Agendar minha primeira faxina",
} as const;

export const SERVICOS = {
  sobrancelha: "Serviços",
  titulo: "Uma profissional para cada momento da casa.",
  subtitulo:
    "Do dia a dia à faxina depois da reforma: escolha o serviço e a gente encontra quem entende do assunto.",
  itens: [
    {
      id: "express",
      icone: "KeyRound",
      titulo: "Limpeza express",
      imagem: { src: "/fotos/servico-airbnb.webp", alt: "Cama arrumada com enxoval branco e toalhas dobradas para o hóspede" },
      descricao: "Limpeza rápida e padronizada para Airbnb e temporada, com agilidade entre uma reserva e outra.",
      base: 90,
      horas: 3,
    },
    {
      id: "residencial",
      icone: "House",
      titulo: "Faxina residencial",
      imagem: { src: "/fotos/servico-residencial.webp", alt: "Mãos limpando a pia da cozinha com pano e borrifador" },
      descricao: "Limpeza completa para a manutenção da casa: quartos, banheiros, sala e cozinha, do pó ao chão.",
      base: 150,
      horas: 6,
    },
    {
      id: "pesada",
      icone: "Droplets",
      titulo: "Faxina pesada",
      imagem: { src: "/fotos/servico-pesada.webp", alt: "Limpeza a vapor dos azulejos do banheiro" },
      descricao: "Limpeza profunda para sujeira acumulada, indicada para imóveis há muito tempo sem uma faxina completa.",
      base: 200,
      horas: 8,
    },
    {
      id: "premium",
      icone: "Crown",
      titulo: "Easy Premium",
      imagem: { src: "/fotos/servico-premium.webp", alt: "Cozinha impecável com bancadas de madeira clara e luz natural" },
      descricao: "Feita pelas profissionais mais bem avaliadas e certificadas da Easy Faxina, para quem busca alto padrão.",
      base: 280,
      horas: 8,
    },
    {
      id: "mudanca",
      icone: "Truck",
      titulo: "Pré ou pós-mudança",
      imagem: { src: "/fotos/servico-mudanca.webp", alt: "Caixas de mudança empilhadas num cômodo vazio, perto da janela" },
      descricao: "Imóvel vazio pronto para receber os novos moradores ou para a entrega das chaves.",
      base: 260,
      horas: 8,
    },
    {
      id: "pos-obra",
      icone: "HardHat",
      titulo: "Limpeza pós-obra",
      imagem: { src: "/fotos/servico-pos-obra.webp", alt: "Profissional com roupa de proteção aspirando o pó de uma reforma" },
      descricao: "Remoção de poeira pesada, respingos e resíduos de obra ou reforma, deixando o imóvel pronto para uso.",
      base: 300,
      horas: 8,
    },
  ],
} as const;

export type IdServico = (typeof SERVICOS.itens)[number]["id"];

export const PILARES = {
  sobrancelha: "Por que funciona",
  titulo: "Mais de 5 mil famílias já confiam.",
  subtitulo: "Três pilares que redesenham o cuidado doméstico no Brasil.",
  imagem: { src: "/fotos/pilares.webp", alt: "Sala de estar aconchegante e arrumada, com sofá, tapete e luz quente" },
  destaqueImagem: { valor: "8 horas", rotulo: "devolvidas à sua semana, em média" },
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

export const PRECOS = {
  sobrancelha: "Preços",
  titulo: "Monte sua faxina e veja o preço na hora.",
  subtitulo:
    "O mesmo cálculo do app: o serviço, o tamanho da casa e os extras que você quiser. Sem plano e sem mensalidade.",
  garantias: [
    "Profissional verificada",
    "Pagamento protegido",
    "Refazemos se não ficar perfeito",
  ],
  taxas: { plataforma: 5, empresa: 5 },
  etapas: {
    servico: "1. Escolha o serviço",
    modalidade: "2. Quem vai cuidar da sua casa",
    imovel: "3. Conte sobre o imóvel",
    adicionais: "4. Inclua extras, se quiser",
  },
  modalidades: [
    {
      id: "autonoma",
      icone: "UserCheck",
      rotulo: "Profissional verificada",
      detalhe: "Diarista autônoma, com identidade e antecedentes checados",
    },
    {
      id: "equipe",
      icone: "Users",
      rotulo: "Equipe certificada",
      detalhe: "Empresa parceira, com equipe treinada e supervisão",
    },
  ],
  tiposImovel: [
    { id: "apartamento", icone: "Building2", rotulo: "Apartamento", preco: 0 },
    { id: "casa", icone: "House", rotulo: "Casa", preco: 30 },
    { id: "comercial", icone: "Briefcase", rotulo: "Comercial", preco: 50 },
  ],
  comodos: [
    { id: "quartos", icone: "BedDouble", rotulo: "Quartos", preco: 15, inicial: 2, maximo: 10 },
    { id: "banheiros", icone: "Bath", rotulo: "Banheiros", preco: 12, inicial: 1, maximo: 5 },
    { id: "salas", icone: "Sofa", rotulo: "Salas", preco: 10, inicial: 1, maximo: 5 },
    { id: "cozinhas", icone: "CookingPot", rotulo: "Cozinhas", preco: 23, inicial: 1, maximo: 3 },
  ],
  materiais: {
    rotulo: "Material de limpeza",
    opcoes: [
      { id: "cliente", rotulo: "Eu forneço", preco: 0 },
      { id: "profissional", rotulo: "A profissional leva", preco: 45 },
    ],
  },
  adicionais: {
    subtitulo: "Toque para incluir. O total é atualizado na hora.",
    itens: [
      { id: "pet", icone: "PawPrint", rotulo: "Tenho pet em casa", preco: 20 },
      { id: "escadas", icone: "ChevronsUp", rotulo: "Imóvel com escadas", preco: 15 },
      { id: "geladeira", icone: "Refrigerator", rotulo: "Interior da geladeira", preco: 29 },
      { id: "armarios", icone: "Archive", rotulo: "Interior de armário de cozinha", preco: 39 },
      { id: "janelas", icone: "AppWindow", rotulo: "Interior de janelas", preco: 35 },
      { id: "estofado", icone: "Sofa", rotulo: "Aspirar tapete ou estofado", preco: 32 },
      { id: "externa", icone: "Trees", rotulo: "Área externa (até 20 m²)", preco: 45 },
      { id: "passar", icone: "Shirt", rotulo: "Passar roupa (até 20 peças)", preco: 35 },
      { id: "lavar", icone: "WashingMachine", rotulo: "Lavar roupa (até 20 peças)", preco: 29 },
      { id: "organicos", icone: "Leaf", rotulo: "Materiais orgânicos", preco: 49 },
    ],
  },
  resumo: {
    titulo: "Sua faxina",
    imovel: "Imóvel e cômodos",
    material: "Material de limpeza",
    adicionais: "Extras",
    subtotal: "Subtotal",
    taxaPlataforma: "Taxa da plataforma",
    taxaEmpresa: "Taxa da empresa parceira",
    total: "Total estimado",
    horas: "Duração sugerida",
    cta: "Agendar por",
    nota: "Valores de referência. O app mostra o preço final antes do pagamento.",
  },
} as const;

export type IdModalidade = (typeof PRECOS.modalidades)[number]["id"];
export type IdTipoImovel = (typeof PRECOS.tiposImovel)[number]["id"];
export type IdComodo = (typeof PRECOS.comodos)[number]["id"];
export type IdMaterial = (typeof PRECOS.materiais.opcoes)[number]["id"];
export type IdAdicional = (typeof PRECOS.adicionais.itens)[number]["id"];

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
  cta: "Quero o novo padrão",
} as const;

export const SEGURANCA = {
  sobrancelha: "Segurança",
  titulo: "A arquitetura da confiança.",
  subtitulo: "Camadas de proteção invisíveis trabalhando por você 24/7.",
  verificacao: {
    titulo: "Toda profissional passa por 5 etapas antes do primeiro atendimento",
    etapas: [
      "Validação de CPF e documento com foto",
      "Antecedentes criminais estaduais e federais",
      "Checagem de referências anteriores",
      "Entrevista presencial e prova prática",
      "Treinamento de padrão Easy Faxina",
    ],
    aprovacao: "Só 1 em cada 7 candidatas é aprovada",
  },
  itens: [
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

export const APP = {
  sobrancelha: "No seu bolso",
  titulo: "Acompanhe cada minuto, do agendamento à avaliação.",
  texto:
    "Notificações em tempo real, chat direto com a profissional, histórico de faxinas e pagamento em um toque. Tudo num app que até a vovó usa.",
  recursos: [
    { icone: "Bell", titulo: "Avisos em tempo real", descricao: "Saiba quando ela sai, chega e termina." },
    { icone: "MessageCircle", titulo: "Chat com a profissional", descricao: "Combine detalhes sem passar seu número." },
    { icone: "CalendarCheck", titulo: "Contratar de novo", descricao: "Repita o último serviço com a mesma profissional." },
    { icone: "Wallet", titulo: "Pagamento em um toque", descricao: "Pix ou cartão, com nota fiscal automática." },
  ],
  lojas: ["Baixar na App Store", "Disponível no Google Play"],
  imagem: { src: "/fotos/app.webp", alt: "Mulher rindo no sofá com o celular na mão e um café na mesa" },
  linhaDoTempo: [
    { icone: "CalendarCheck", titulo: "Faxina confirmada", detalhe: "Sáb · 09:00 com Camila S." },
    { icone: "Navigation", titulo: "Camila está a caminho", detalhe: "Chega em 8 minutos" },
    { icone: "Sparkles", titulo: "Faxina em andamento", detalhe: "Início às 09:02" },
    { icone: "CircleCheck", titulo: "Tudo pronto!", detalhe: "Avalie e libere o pagamento" },
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
      foto: "/fotos/pessoa-ana.webp",
      papel: "Mãe e advogada · São Paulo, SP",
    },
    {
      texto:
        "A diferença entre uma diarista aleatória do zap e uma profissional Easy Faxina é abismal. Profissionalismo é outro nível.",
      autor: "Lucas R.",
      foto: "/fotos/pessoa-lucas.webp",
      papel: "Empreendedor · Belo Horizonte, MG",
    },
    {
      texto:
        "O app é tão fácil que minha sogra, de 72 anos, agenda sozinha. Isso diz tudo sobre o UX.",
      autor: "Mariana T.",
      foto: "/fotos/pessoa-mariana.webp",
      papel: "Designer · Recife, PE",
    },
    {
      texto:
        "Fiz a pós-obra do apartamento novo e parecia que ninguém tinha mexido em nada. Entreguei a chave para a vistoria tranquilo.",
      autor: "Rafael C.",
      foto: "/fotos/pessoa-rafael.webp",
      papel: "Engenheiro · Goiânia, GO",
    },
    {
      texto:
        "Tenho dois apartamentos no Airbnb e a limpeza express entre hóspedes virou assunto resolvido. Minhas notas de limpeza só sobem.",
      autor: "Juliana S.",
      foto: "/fotos/pessoa-juliana.webp",
      papel: "Anfitriã · Florianópolis, SC",
    },
    {
      texto:
        "Saber que ela passou por background check e que o pagamento só libera depois me deixa viajar sem preocupação.",
      autor: "Beatriz L.",
      foto: "/fotos/pessoa-beatriz.webp",
      papel: "Médica · Salvador, BA",
    },
    {
      texto:
        "Teve um vaso quebrado sem querer e o seguro resolveu em dois dias. Nunca vi uma empresa de faxina fazer isso.",
      autor: "Fernando A.",
      foto: "/fotos/pessoa-fernando.webp",
      papel: "Professor · Curitiba, PR",
    },
    {
      texto:
        "Vi o preço exato antes de pagar, sem surpresa no fim. Agora é só tocar em contratar de novo e a Camila volta.",
      autor: "Carolina V.",
      foto: "/fotos/pessoa-carolina.webp",
      papel: "Gerente de produto · Rio de Janeiro, RJ",
    },
  ],
} as const;

export const PROFISSIONAIS = {
  sobrancelha: "Para quem faz acontecer",
  titulo: "É faxineira? Sua nova era começa aqui.",
  texto:
    "Formalização sem burocracia, renda maior, agenda sob seu controle e uma marca nacional do seu lado.",
  selo: "+1.200 profissionais ativas",
  imagem: { src: "/fotos/profissional.webp", alt: "Mãos de luvas azuis limpando uma bancada branca com borrifador" },
  itens: [
    "Formalização via MEI sem burocracia",
    "Renda 40% maior que diárias informais",
    "Agenda sob seu controle total",
    "Treinamento e certificação gratuitos",
  ],
  numeros: [
    { valor: 4200, prefixo: "R$ ", sufixo: "", casas: 0, rotulo: "Renda média mensal" },
    { valor: 98, prefixo: "", sufixo: "%", casas: 0, rotulo: "Pagamentos em dia" },
    { valor: 4.8, prefixo: "", sufixo: "", casas: 1, rotulo: "Satisfação das profissionais" },
  ],
  simulador: {
    titulo: "Simule sua renda",
    rotulo: "Diárias por semana",
    valorDiaria: 225,
    semanasPorMes: 4.33,
    resultado: "Estimativa mensal",
    nota: "Base: faxina residencial de R$ 225 num apartamento de 2 quartos. Você recebe o valor inteiro do serviço, porque a taxa da plataforma é paga pela cliente.",
  },
  cta: "Quero ser parceira Easy Faxina",
} as const;

export const COBERTURA = {
  sobrancelha: "Onde estamos",
  titulo: "Em todo o Brasil.",
  subtitulo:
    "Do Oiapoque ao Chuí: a Easy Faxina atende nas 27 capitais e no interior, com profissionais verificadas perto de você.",
  ativas: [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Brasília",
    "Goiânia",
    "Salvador",
    "Recife",
    "Fortaleza",
    "Curitiba",
    "Porto Alegre",
    "Florianópolis",
    "Vitória",
    "Manaus",
    "Belém",
    "Campo Grande",
    "Cuiabá",
    "Natal",
    "João Pessoa",
    "Maceió",
    "Aracaju",
    "Teresina",
    "São Luís",
    "Palmas",
    "Porto Velho",
    "Rio Branco",
    "Macapá",
    "Boa Vista",
  ],
  interior: "E no interior de todos os estados",
} as const;

export const DICAS = {
  sobrancelha: "Blog Easy",
  titulo: "Dicas para a casa ficar em ordem por mais tempo.",
  itens: [
    {
      categoria: "Banheiro",
      imagem: { src: "/fotos/dica-banheiro.webp", alt: "Banheiro claro com bancada de mármore e planta" },
      titulo: "O truque de 3 minutos que deixa o box sem manchas",
      leitura: "4 min de leitura",
    },
    {
      categoria: "Cozinha",
      imagem: { src: "/fotos/dica-geladeira.webp", alt: "Geladeira organizada com potes coloridos e frutas frescas" },
      titulo: "Como organizar a geladeira para a comida durar o dobro",
      leitura: "6 min de leitura",
    },
    {
      categoria: "Rotina",
      imagem: { src: "/fotos/dica-rotina.webp", alt: "Quarto com cama feita e criados-mudos simétricos" },
      titulo: "Checklist semanal: o mínimo para nunca mais acumular",
      leitura: "5 min de leitura",
    },
  ],
  cta: "Ler artigo",
} as const;

export const FAQ = {
  sobrancelha: "Dúvidas",
  titulo: "Perguntas frequentes.",
  subtitulo: "Não achou o que procurava? Nosso time humano responde em até 15 minutos.",
  contato: { titulo: "Fale com a gente", email: "contato@easyfaxina.com.br", horario: "Todos os dias, das 7h às 22h" },
  itens: [
    {
      pergunta: "Como o preço é calculado?",
      resposta:
        "Você escolhe o serviço e conta quantos quartos, banheiros, salas e cozinhas a casa tem. Extras como geladeira, janelas ou passar roupa somam ao valor. Por cima entra a taxa da plataforma, de 5%, e mais 5% se você escolher uma equipe de empresa parceira. O total aparece antes de você pagar.",
    },
    {
      pergunta: "O que está incluso na faxina residencial?",
      resposta:
        "Limpeza completa de quartos, banheiros, sala e cozinha: aspirar e passar pano, tirar pó e limpar superfícies. Os produtos podem ser seus ou a profissional leva, por R$ 45.",
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
      pergunta: "Qual a diferença entre profissional verificada e equipe certificada?",
      resposta:
        "A profissional verificada é uma diarista autônoma, com identidade e antecedentes checados pela Easy Faxina. A equipe certificada vem de uma empresa parceira, com equipe treinada, supervisão e substituição garantida, e tem uma taxa extra de 5%.",
    },
    {
      pergunta: "Preciso estar em casa durante a faxina?",
      resposta:
        "Não. Muitas clientes deixam a chave na portaria ou usam fechadura digital. Você acompanha tudo pelo app e recebe fotos ao final.",
    },
    {
      pergunta: "Posso pedir sempre a mesma profissional?",
      resposta:
        "Pode. Em Contratar de novo você repete o último serviço e escolhe a mesma profissional. Se ela tiver um imprevisto, avisamos e indicamos alguém com avaliação equivalente.",
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta:
        "Pix ou cartão de crédito. O valor fica retido via Escrow e só é liberado para a profissional depois da sua aprovação, com nota fiscal automática.",
    },
    {
      pergunta: "E se algo for danificado durante a faxina?",
      resposta:
        "Toda faxina tem seguro residencial incluso, com cobertura de até R$ 5.000 para danos acidentais. Basta abrir o chamado pelo app.",
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

export const NEWSLETTER = {
  titulo: "Receba dicas e ofertas exclusivas",
  rotulo: "Seu e-mail",
  placeholder: "voce@email.com",
  cta: "Inscrever",
  sucesso: "Pronto! Você vai receber nossas novidades.",
  erro: "Digite um e-mail válido.",
} as const;

export const RODAPE = {
  tagline: "Faxina fácil. Paz garantida.",
  colunas: [
    {
      titulo: "Produto",
      links: [
        { rotulo: "Como funciona", href: "#como-funciona" },
        { rotulo: "Serviços", href: "#servicos" },
        { rotulo: "Preços", href: "#precos" },
        { rotulo: "Segurança", href: "#seguranca" },
        { rotulo: "Dúvidas", href: "#faq" },
      ],
    },
    {
      titulo: "Empresa",
      links: [
        { rotulo: "Sobre", href: "#sobre" },
        { rotulo: "Para profissionais", href: "#profissionais" },
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
  contato: {
    titulo: "Atendimento",
    email: "contato@easyfaxina.com.br",
    horarios: [
      { dias: "Seg a sex", horas: "7h às 22h" },
      { dias: "Sábado", horas: "8h às 20h" },
      { dias: "Domingo", horas: "9h às 18h" },
    ],
  },
  redes: [
    { rotulo: "Instagram", href: "#instagram" },
    { rotulo: "TikTok", href: "#tiktok" },
    { rotulo: "LinkedIn", href: "#linkedin" },
  ],
  copyright: "© 2026 Easy Faxina · CNPJ 00.000.000/0001-00",
  feitoEm: "Feito com ♥ em São Paulo",
  voltarTopo: "Voltar ao topo",
} as const;

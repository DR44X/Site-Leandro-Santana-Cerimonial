export interface EventFAQ {
  question: string;
  answer: string;
}

export interface EventCategory {
  slug: string;
  title: string;
  pageTitle: string;
  metaDescription: string;
  shortDescription: string;
  heroImageId: string;
  bannerSubtitle: string;
  commercialText: string[];
  topics?: string[];
  faqs: EventFAQ[];
  hasGallery: boolean;
  galleryImageIds?: string[];
  relatedServices?: string[];
  ctaLabel: string;
}

export const eventCategories: EventCategory[] = [
  {
    slug: "casamentos",
    title: "Casamentos",
    pageTitle: "Cerimonial de Casamento em Salvador | Leandro Santana",
    metaDescription: "Assessoria e cerimonial de casamento em Salvador. Planejamento do cortejo à recepção, buffet e ambientação para você viver seu dia com calma.",
    shortDescription: "Cerimônias pontuais e recepções completas com planejamento dedicado do primeiro café até a última música.",
    heroImageId: "evento-casamentos",
    bannerSubtitle: "A celebração da sua união conduzida com tranquilidade, acolhimento e método em Salvador.",
    commercialText: [
      "Organizar o seu casamento exige decisões claras, segurança nas escolhas e um cronograma realista. Na Leandro Santana Cerimonial, nossa missão é transformar meses de preparativos em um processo leve para você e seu parceiro. Desde a primeira reunião de alinhamento, ouvimos a história de vocês, mapeamos o perfil dos convidados e alinhamos as expectativas de formato — seja uma cerimônia intimista à beira-mar no Litoral Norte da Bahia ou uma grande recepção tradicional em salão nobre de Salvador.",
      "Nosso trabalho vai muito além de conferir padrinhos na porta da igreja ou na entrada da passarela. Acompanhamos reuniões técnicas com decoradores, iluminadores, músicos e chefs de cozinha, assegurando que o projeto cenográfico respeite o orçamento estipulado e a funcionalidade prática do espaço. Orientamos você sobre quantidades exatas de bebidas, cálculo de consumo de espumante e cerveja, disposição harmoniosa de mesas para facilitar a circulação de garçons e convidados, e tempos adequados para fotos protocolares sem cansar os noivos.",
      "No dia do casamento, nossa equipe assume integralmente a operação de bastidores. Chegamos horas antes para fiscalizar a montagem do mobiliário, testar sistemas de som, conferir a refrigeração das bebidas e coordenar o ensaio final dos pajens e daminhas. Durante o evento, conduzimos o cortejo com tranquilidade e mantemos o ritmo da recepção aquecido, para que você aproveite cada brinde, dance com seus amigos e saboreie o cardápio sem nenhuma preocupação logística.",
      "Com a experiência de quem realiza eventos na capital baiana há mais de uma década, sabemos lidar com imprevistos climáticos, vento em cerimônias abertas, ajustes rápidos de horários e atendimento carinhoso a familiares idosos e crianças. O cerimonial atua com discrição e postura solícita em todos os instantes, garantindo que o fotógrafo capture os momentos espontâneos e a banda inicie no instante exato do brinde principal.",
      "Ao final da festa, nossa coordenação realiza a contagem e devolução de sobras de bebidas consignadas, guarda dos presentes entregues na recepção e conferência dos pertences dos noivos. Entregamos a você a certeza de viver um dia marcante com presença de espírito, tranquilidade e serenidade absoluta do começo ao fim.",
    ],
    topics: [
      "Assessoria completa ou final para o cortejo e recepção",
      "Cronograma minucioso compartilhado com todos os fornecedores",
      "Coordenação de montagem de decoração, iluminação e buffet",
      "Acompanhamento e ensaio com noivos, padrinhos e daminhas",
      "Gestão de corte de bolo, fotos oficiais e abertura de pista",
      "Controle de sobra de bebidas e conferência final ao término da festa",
    ],
    faqs: [
      {
        question: "Quando devemos contratar a assessoria para o casamento em Salvador?",
        answer: "O recomendado é iniciar de 8 a 12 meses antes da data. Isso garante a reserva dos melhores espaços e fornecedores na capital baiana, além de permitir um fluxo de pagamentos parcelado com mais tranquilidade.",
      },
      {
        question: "Vocês atendem casamentos na praia ou no Litoral Norte da Bahia?",
        answer: "Sim. Produzimos casamentos em Salvador, Lauro de Freitas e em destinos de praia como Guarajuba, Praia do Forte e Itacimirim, com logística preparada para áreas abertas.",
      },
      {
        question: "Como funciona o suporte aos noivos no dia da celebração?",
        answer: "Nossa equipe acompanha desde a montagem pela manhã até o encerramento da recepção. Uma coordenadora fica dedicada aos noivos para alimentação, retoque e alinhamento de horários.",
      },
      {
        question: "Podemos montar um cardápio personalizado para o buffet?",
        answer: "Sim. Nossos cardápios são adaptados ao perfil do casal, incluindo ilhas gastronômicas quentes, opções vegetarianas, finger foods volantes e mesa de sobremesas finas.",
      },
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-casamento-01", "galeria-casamento-02", "galeria-casamento-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
      "Foto e Filmagem",
    ],
    ctaLabel: "Solicite seu orçamento de casamento",
  },
  {
    slug: "15-anos",
    title: "15 Anos",
    pageTitle: "Festa de 15 Anos em Salvador | Leandro Santana Cerimonial",
    metaDescription: "Cerimonial para festa de 15 anos em Salvador. Valsa, protocolo, pista de LED e buffet para uma comemoração com o seu estilo.",
    shortDescription: "Comemorações dinâmicas que unem momentos de homenagem à energia contagiante da pista de dança.",
    heroImageId: "evento-15-anos",
    bannerSubtitle: "A celebração da juventude planejada com o estilo da debutante e tranquilidade para os pais.",
    commercialText: [
      "A festa de 15 anos é um rito de passagem singular na vida de uma jovem e de sua família. O maior desafio desse evento é equilibrar o afeto das homenagens familiares com o ritmo vibrante que os amigos esperam na pista de dança. Na Leandro Santana Cerimonial, construímos projetos sob medida para que a debutante se sinta autêntica e os pais fiquem tranquilos sabendo que cada detalhe de segurança, serviço e acolhimento está resguardado em Salvador.",
      "Começamos pelo planejamento do conceito visual: paleta de cores, ambientação fotogênica para redes sociais, painéis iluminados e lounges confortáveis para os convidados de todas as idades. Desenvolvemos um roteiro dinâmico, sem pausas longas ou protocolos engessados, garantindo que as trocas de vestido, a valsa e os vídeos comemorativos aconteçam no tempo certo, liberando a pista de dança sem atrasos indesejados.",
      "Para a gastronomia, elaboramos cardápios que agradam tanto aos jovens quanto aos adultos. Ilhas de hambúrguer artesanal, mini pizzas gourmet, bar de drinks sem álcool (mocktails) com apresentação artística e finger foods circulam com agilidade entre os adolescentes, enquanto os familiares adultos desfrutam de jantar completo, entradas quentes e bar refinado com coquetelaria contemporânea.",
      "Nossa presença em Salvador garante a coordenação de atrações especiais como DJs renomados, robôs de LED, cabines de fotos instantâneas, plataformas giratórias 360 e efeitos especiais de palco. Gerenciamos a portaria com controle nominal de convidados e pulseiras invioláveis, impedindo entradas não autorizadas e assegurando um ambiente totalmente protegido.",
      "Durante a recepção, acompanhamos a aniversariante em cada troca de figurino, retocando a maquiagem e oferecendo água e alimentação nos bastidores. Fornecemos suporte contínuo para convites interativos com confirmação de presença (RSVP), além de orientar a montagem de mesas familiares com conforto acústico para que avós e amigos aproveitem a comemoração com carinho e alegria.",
      "Você aproveita a festa junto com sua filha com a certeza de que a coordenação geral está em mãos atentas, gentis e responsáveis do primeiro ao último instante da celebração.",
    ],
    topics: [
      "Roteiro de cerimonial ágil para valsa, homenagens e brinde",
      "Coordenação de trocas de roupa e entrada solene da debutante",
      "Projeto cenográfico com lounges jovens e mesas para a família",
      "Bar de coquetéis sem álcool e cardápio interativo para adolescentes",
      "Controle rigoroso de portaria e pulseiras de acesso aos convidados",
      "Pista de dança equipada com piso de LED e iluminação sincronizada",
    ],
    faqs: [
      {
        question: "Com quanto tempo de antecedência devemos planejar a festa de 15 anos?",
        answer: "Recomendamos de 4 a 8 meses de antecedência para contratar salão, cerimonial e buffet com tranquilidade e conseguir alinhar ensaios de valsa sem pressa.",
      },
      {
        question: "Como funciona a organização dos protocolos e da valsa?",
        answer: "Orientamos previamente o roteiro com a aniversariante e a família. No dia do evento, coordenamos os passos e as homenagens em menos de 30 minutos para não cansar os jovens.",
      },
      {
        question: "Como é feita a segurança dos jovens durante a festa?",
        answer: "Trabalhamos com controle nominal de lista na recepção, uso de pulseiras de identificação e equipe atenta para garantir um ambiente seguro e acolhedor durante toda a noite.",
      },
      {
        question: "O cardápio pode ter opções específicas para os amigos da debutante?",
        answer: "Sim. Montamos ilhas de lanches gourmet, churros, milk-shakes e coquetéis de frutas sem álcool, além do serviço tradicional volante para os familiares.",
      },
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-15-anos-01", "galeria-15-anos-02", "galeria-15-anos-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de 15 anos",
  },
  {
    slug: "formaturas",
    title: "Formaturas",
    pageTitle: "Bailes de Formatura em Salvador | Leandro Santana",
    metaDescription: "Cerimonial e produção de formaturas e bailes de gala em Salvador. Estrutura de som, iluminação, buffet e protocolo com pontualidade.",
    shortDescription: "Solenidades acadêmicas e bailes de gala estruturados com pontualidade, som de alta potência e buffet farto.",
    heroImageId: "evento-formaturas",
    bannerSubtitle: "A vitória da graduação celebrada com respeito à sua turma e produção completa em Salvador.",
    commercialText: [
      "Conquistar o diploma superior representa a superação de anos de estudo, noites em claro e dedicação compartilhada com a família. Um baile de formatura ou sessão solene precisa honrar essa caminhada com organização impecável, pontualidade no cerimonial e uma recepção grandiosa para os convidados que apoiaram cada formando. Na capital baiana, onde as festas de formatura reúnem centenas de pessoas, o planejamento técnico é indispensável.",
      "A Leandro Santana Cerimonial atua junto à comissão de formatura para definir prioridades, gerenciar o orçamento coletivo e contratar os fornecedores mais capacitados de Salvador. Cuidamos da locação de espaços com capacidade adequada, desenho de plantas com mesas demarcadas por aluno para evitar disputas de lugares, montagem de palco institucional e telas de transmissão ao vivo de alta resolução com imagens dos formandos.",
      "Na parte do baile de gala, oferecemos buffet farto do coquetel de abertura até o lanche da madrugada. O bar de drinks opera com múltiplas estações distribuídas estrategicamente pelo salão para evitar filas longas e manter os convidados atendidos com rapidez. Estruturamos som linear e iluminação de grande porte para receber bandas e DJs sem cortes de energia ou oscilações técnicas.",
      "Nossa equipe de cerimonialistas cuida da chamada dos formandos, entrega de canudos ou placas comemorativas, discursos dos oradores e o tradicional brinde com champanhe. Mantemos o cronograma alinhado minuto a minuto para que a parte protocolar não se torne cansativa e a pista de dança abra no momento em que a turma está mais animada.",
      "Auxiliamos os formandos na definição de cotas financeiras acessíveis e gestão transparente junto à comissão, garantindo estabilidade contratual com todos os prestadores. Durante a colação de grau ou culto ecumênico, nossa equipe organiza as filas de entrada por ordem alfabética, assegurando que cada formando viva seu instante de consagração sob os aplausos emocionados de seus convidados.",
      "Oferecemos ainda suporte completo para os ensaios gerais, contratação de seguranças treinados, brigadistas e posto médico quando exigido pela capacidade do local. Você comemora sua vitória com seus colegas sabendo que cada segundo da noite foi ensaiado e executado com seriedade, respeito e compromisso coletivo.",
    ],
    topics: [
      "Assessoria direta com reuniões de alinhamento para a comissão",
      "Cerimonial protocolar com chamada organizada e entrega de placas",
      "Mapeamento de mesas personalizadas por formando para evitar conflitos",
      "Open bar com múltiplos pontos de atendimento e bebidas originais",
      "Buffet com serviço volante contínuo, jantar e ilha da madrugada",
      "Sonorização profissional para bandas e iluminação cenográfica de salão",
    ],
    faqs: [
      {
        question: "Vocês atendem comissões de formatura de qualquer faculdade em Salvador?",
        answer: "Sim. Produzimos formaturas para turmas de Medicina, Direito, Engenharia e demais cursos de instituições públicas e privadas em Salvador e região metropolitana.",
      },
      {
        question: "Como é evitada a formação de filas no bar e buffet em eventos grandes?",
        answer: "Dimensionamos as estações de bar e garçons pela proporção exata de convidados, instalando pontos descentralizados e serviço volante contínuo.",
      },
      {
        question: "Qual o suporte oferecido na escolha de bandas e atrações musicais?",
        answer: "Auxiliamos na triagem técnica de riders, conferência de equipamentos de som e coordenação de horários de passagem de som para os shows do baile.",
      },
      {
        question: "Como funciona a forma de pagamento para turmas de formatura?",
        answer: "Criamos cronogramas mensais de pagamento individualizados por boleto ou Pix até o mês anterior ao evento, facilitando a adesão dos alunos.",
      },
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-formatura-01", "galeria-formatura-02"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Buffet Completo",
      "Música e Estrutura Técnica",
      "Bar de Drinks",
      "Espaço para Eventos",
    ],
    ctaLabel: "Solicite seu orçamento de formatura",
  },
  {
    slug: "corporativos",
    title: "Corporativos",
    pageTitle: "Eventos Corporativos em Salvador | Leandro Santana",
    metaDescription: "Planejamento de eventos corporativos em Salvador. Coquetéis, jantares e convenções com suporte audiovisual e gastronomia sob medida.",
    shortDescription: "Encontros de negócios, convenções e jantares corporativos com rigor de horário e atendimento executivo.",
    heroImageId: "evento-corporativos",
    bannerSubtitle: "A reputação e a mensagem da sua empresa transmitidas com clareza em Salvador.",
    commercialText: [
      "No ambiente corporativo, seu evento é um investimento direto na imagem da sua marca, na motivação do time e no relacionamento com clientes e parceiros estratégicos. Falhas técnicas em microfones, atrasos de cronograma, salas mal climatizadas ou buffet insuficiente causam desgaste imediato à reputação da instituição. Por isso, a Leandro Santana Cerimonial aplica processos objetivos de gestão e métodos pontuais em encontros empresariais em Salvador.",
      "Produzimos convenções de vendas, lançamentos imobiliários, jantares de fim de ano, palestras com autoridades, simpósios e workshops técnicos na Bahia. Realizamos visitas técnicas prévias aos locais indicados, validamos infraestrutura de internet de alta velocidade, disponibilidade de geradores de energia e acústica de auditórios, eliminando riscos operacionais antes do início da montagem.",
      "Para coffee breaks e almoços de negócios, desenhamos cardápios rápidos, elegantes e nutritivos, que respeitam os intervalos da sua programação sem gerar dispersão de participantes. Nosso serviço volante de coquetéis oferece atendimento discreto e cordial para facilitar o networking entre os convidados, com opções gastronômicas inclusivas para pessoas com restrições alimentares.",
      "Coordenamos a recepção executiva, credenciamento informatizado por QR Code, entrega de crachás, púlpitos e sinalização do evento. Nossos técnicos de áudio e vídeo permanecem em prontidão contínua na sala para realizar trocas de slides de apresentações e equalização de áudio sem sobressaltos durante os discursos da presidência.",
      "Trabalhamos com formatos adaptáveis para empresas de tecnologia, escritórios de advocacia, redes de varejo, indústrias e instituições médicas em Salvador e Lauro de Freitas. Oferecemos opções de cenografia com painéis para registros profissionais e totens de recarga para dispositivos móveis dos participantes.",
      "Oferecemos suporte administrativo completo, com emissão de nota fiscal de serviços, alinhamento com compliance e prestação de contas transparente conforme as exigências do departamento de compras da sua empresa. Sua diretoria e equipe podem focar no conteúdo e nas conexões comerciais com a tranquilidade de que a operação está totalmente resguardada.",
    ],
    topics: [
      "Planejamento de cronograma com controle rigoroso de minutos",
      "Recepção executiva e credenciamento ágil de convidados",
      "Coffee breaks nobres, almoços empratados e jantares de relacionamento",
      "Suporte audiovisual com projeção de dados, microfones e iluminação",
      "Mobiliário corporativo, púlpitos e sinalização visual para o espaço",
      "Nota fiscal, contratos formais e conformidade com compras corporativas",
    ],
    faqs: [
      {
        question: "Quais formatos de eventos corporativos vocês realizam em Salvador?",
        answer: "Atendemos convenções, congressos, jantares comemorativos, confraternizações corporativas, lançamentos imobiliários, cafés da manhã e feiras de negócios.",
      },
      {
        question: "A empresa emite nota fiscal e aceita faturamento corporativo?",
        answer: "Sim. A Leandro Santana Cerimonial é pessoa jurídica com CNPJ regularizado, emitindo nota fiscal eletrônica e cumprindo os requisitos de cadastro de fornecedores.",
      },
      {
        question: "Vocês cuidam de equipamentos de som, microfones e projeção?",
        answer: "Sim. Coordenamos toda a estrutura técnica audiovisual, com operadores dedicados durante as palestras e apresentações de dados.",
      },
      {
        question: "Qual o prazo mínimo para organizar um evento empresarial?",
        answer: "Para reuniões e coquetéis, conseguimos montar a operação em 15 a 30 dias. Para convenções de grande porte, sugerimos de 60 a 90 dias de antecedência.",
      },
    ],
    hasGallery: false,
    relatedServices: [
      "Cerimonial e Assessoria",
      "Buffet Completo",
      "Espaço para Eventos",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento corporativo",
  },
  {
    slug: "aniversarios",
    title: "Aniversários",
    pageTitle: "Festas de Aniversário em Salvador | Leandro Santana",
    metaDescription: "Cerimonial e buffet para festas de aniversário em Salvador. Cardápio refinado, decoração e coordenação para você curtir seus convidados.",
    shortDescription: "Celebrações de vida pensadas para você abraçar amigos e familiares sem se preocupar com a cozinha ou com o relógio.",
    heroImageId: "evento-aniversarios",
    bannerSubtitle: "Comemore seu novo ciclo cercado de boas conversas, pratos saborosos e pessoas queridas.",
    commercialText: [
      "Comemorar um aniversário marcante — seja aos 30, 40, 50, 60 anos ou mais — é uma oportunidade rara de reunir familiares e amigos de diferentes fases da vida. Quem organiza a própria festa muitas vezes passa a noite inteira repondo gelo no freezer, orientando garçons ou preocupado com o volume da música, deixando de aproveitar a própria celebração com quem realmente importa.",
      "Com a Leandro Santana Cerimonial, você passa a ser o convidado principal do seu evento em Salvador. Auxiliamos você a escolher o formato que melhor reflete seu estilo: um almoço demorado em casa de praia no Litoral Norte, um sunset com bar de drinks autorais e música acústica, ou uma festa noturna com pista animada e jantar volante completo.",
      "Cuidamos da montagem de lounges acolhedores com iluminação quente e confortável para conversas, além de mesa de doces e bolo cenográfico pensados para fotos com a família. Nossos chefs preparam petiscos quentes servidos no ponto exato, risotos volantes e sobremesas que agradam a todos os paladares, utilizando ingredientes frescos e apresentação elegante.",
      "Montamos a infraestrutura necessária mesmo em locais residenciais, salões de condomínio ou sítios particulares. Cuidamos do gelo, vidraria correta para cada tipo de bebida, reposição de copos limpos e suporte de limpeza contínua durante a festa para manter o ambiente sempre agradável e perfumado.",
      "Para celebrações surpresa ou almoços de fim de semana, coordenamos o layout de mesas bistrô, ombrelones e áreas com sombra agradável, ideais para o clima ensolarado da capital baiana. Cuidamos da logística de bebidas e coordenação de fotos em família na mesa do bolo antes do primeiro brinde com os convidados.",
      "Nossa equipe coordena os detalhes práticos com discrição: conferência das entregas de fornecedores externos, serviço contínuo de bebidas na temperatura certa e a condução natural do brinde e do corte do bolo, sem forçar momentos desconfortáveis. Você aproveita a alegria do reencontro com tranquilidade do começo ao fim.",
    ],
    topics: [
      "Definição do perfil da festa e indicação do local mais adequado",
      "Decoração com mobiliário confortável e iluminação intimista",
      "Buffet flexível com entradas volantes, jantar leve e mesa de doces",
      "Bar de caipirinhas gourmet, gin tônica e bebidas não alcoólicas",
      "Coordenação de equipe de serviço e limpeza durante o evento",
      "Música ao vivo ou DJ alinhado com as músicas favoritas do aniversariante",
    ],
    faqs: [
      {
        question: "Vocês realizam aniversários em residências ou condomínios em Salvador?",
        answer: "Sim. Adaptamos nossa equipe e logística para salões de festas de prédios, casas particulares e condomínios em Salvador e Litoral Norte.",
      },
      {
        question: "É possível contratar apenas buffet e cerimonial para a festa?",
        answer: "Sim. Nossos pacotes são modulares. Você pode contratar apenas os serviços de que precisa ou o pacote completo com decoração e som inclusos.",
      },
      {
        question: "Como funciona o serviço de bebidas alcoólicas?",
        answer: "Você pode fornecer suas próprias garrafas (sem cobrança de taxa de rolha) ou contratar nossa carta completa de bar de drinks com insumos e barmen.",
      },
      {
        question: "Qual é a antecedência recomendada para agendar?",
        answer: "Recomendamos entrar em contato de 1 a 3 meses antes da data comemorativa para garantir a reserva de equipe e fornecedores.",
      },
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-momentos-01", "galeria-decoracao-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de aniversário",
  },
  {
    slug: "confraternizacoes",
    title: "Confraternizações",
    pageTitle: "Confraternizações em Salvador | Leandro Santana Cerimonial",
    metaDescription: "Produção de confraternizações e festas de fim de ano em Salvador. Espaço, buffet, bar de drinks e estrutura completa para sua equipe.",
    shortDescription: "Comemorações corporativas e de grupos de amigos organizadas para celebrar conquistas com alegria e descontração.",
    heroImageId: "evento-confraternizacoes",
    bannerSubtitle: "Momentos de celebração coletiva com boa gastronomia e estrutura completa em Salvador.",
    commercialText: [
      "O encerramento de um ciclo de trabalho ou a comemoração de metas batidas merece um encontro onde colegas possam conviver fora da rotina de reuniões, metas e prazos. Produzir uma confraternização agradável requer estrutura confortável, bebidas geladas com abundância, boa música e opções culinárias que agradem a grupos diversos de colaboradores e familiares.",
      "A Leandro Santana Cerimonial organiza confraternizações de fim de ano, encontros de associações profissionais e festas de grupos corporativos em Salvador e cidades da Região Metropolitana. Selecionamos espaços com áreas verdes, piscinas, lounges ventilados ou salões climatizados, desenhando uma planta onde todos encontrem seu espaço para relaxar, conversar e se divertir.",
      "Oferecemos cardápios descontraídos e saborosos, desde churrasco com cortes selecionados servidos na brasa, feijoada gourmet completa, até estações de comida baiana tradicional com acarajé frito na hora e mesas de antepastos nobres. Nosso bar de chope e drinks mantém o fluxo contínuo de atendimento para que ninguém perca tempo em filas para ser servido.",
      "Estruturamos toda a parte técnica com palco para apresentações, sistema de sonorização para bandas de samba, axé ou pop rock, e microfones sem fio para os momentos de homenagem e premiação interna. Caso o evento receba familiares dos colaboradores, integramos recreadores profissionais e oficinas infantis em áreas reservadas.",
      "Planejamos a circulação de pessoas para que as áreas de buffet, chopeiras e pista de dança funcionem simultaneamente sem gargalos de trânsito. Coordenamos a entrega de brindes de fim de ano, realização de sorteios e exibição de vídeos retrospectivos no telão com sonorização impecável. Oferecemos também suporte para transporte compartilhado em vans executivas quando o espaço de eventos for em sítios afastados ou no Litoral Norte.",
      "Cuidamos da montagem prévia, limpeza intermediária dos espaços e desmontagem ágil ao término. Sua diretoria participa da confraternização como convidada de honra, sabendo que a segurança, a fartura de comida e bebida e o bem-estar de todos estão garantidos com método e dedicação profissional.",
    ],
    topics: [
      "Seleção de sítios, clubes, casas de praia e salões em Salvador",
      "Buffets temáticos: churrasco nobre, feijoada baiana ou coquetel",
      "Bar de chope artesanal, caipirinhas de frutas tropicais e refrigerantes",
      "Estrutura com toldos, mesas bistrots e climatização de ambientes",
      "Sonorização completa para shows musicais e microfones para discursos",
      "Equipe treinada para reposição ágil e recolhimento constante de copos",
    ],
    faqs: [
      {
        question: "Qual o período ideal para planejar a confraternização de fim de ano?",
        answer: "Devido à alta procura nos meses de novembro e dezembro em Salvador, recomendamos fechar a data e o espaço entre agosto e outubro.",
      },
      {
        question: "Vocês atendem grupos de quantos participantes?",
        answer: "Produzimos confraternizações desde pequenos grupos de 30 pessoas até grandes eventos corporativos para mais de 500 colaboradores.",
      },
      {
        question: "Como funciona a estrutura de segurança e atendimento no local?",
        answer: "Disponibilizamos controle de entrada na portaria, brigadistas e equipe de apoio para garantir a ordem e o bem-estar durante todo o período do evento.",
      },
      {
        question: "Podemos incluir atrações infantis se o evento for aberto a famílias?",
        answer: "Sim. Podemos incorporar recreação infantil monitorada, brinquedos infláveis e cantinho de lanches para as crianças aproveitarem com segurança.",
      },
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-momentos-02", "galeria-momentos-03"],
    relatedServices: [
      "Buffet Completo",
      "Espaço para Eventos",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de confraternização",
  },
];

export function getEventBySlug(slug: string): EventCategory | undefined {
  return eventCategories.find((cat) => cat.slug === slug);
}

export interface LocalizedProject {
  id: string;
  codename: string;
  sectorScale: string; // e.g. "Global packaging & food-processing leader • 150+ markets"
  title: string;
  category: string;
  categoryKey: 'hmi-control' | 'hmi-redesign' | 'design-systems' | 'benchmarks' | 'field-research' | 'retail-tech';
  timeframe: string;
  
  // High-level concise narrative (~150 words total)
  context: string;
  role: string;
  outcome: string;

  // Vaguer metrics
  metrics: {
    value: string;
    label: string;
    note?: string;
  }[];

  // Key methods / deliverables represented as pills with icons
  pillTags: {
    icon: string;
    text: string;
  }[];

  defaultIllustration: 'control-room' | 'workstreams' | 'design-tokens' | 'benchmarks' | 'field-research' | 'retail-mobile';
  colorTheme: 'rose' | 'violet' | 'blue' | 'orange';
}

export interface AlsoDeliveredItem {
  id: string;
  codename: string;
  sectorScale: string;
  title: string;
  role: string;
  summary: string;
  impact: string;
  tags: string[];
}

export interface LeadershipPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: 'rose' | 'violet' | 'blue' | 'orange';
  description: string;
  points?: {
    label: string;
    desc: string;
  }[];
  metricBadge?: string;
}

export interface ContentTranslation {
  // Navigation
  nav: {
    work: string;
    leadership: string;
    alsoDelivered: string;
    contact: string;
    ctaContact: string;
    confidentiality: string;
    tweaks: string;
    hideMetrics: string;
    showMetrics: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
  };

  // Hero
  hero: {
    badge: string;
    greeting: string;
    title: string;
    subtitle: string;
    targetNote?: string;
    ctaWork: string;
    ctaLeadership: string;
    quickStats: {
      value: string;
      label: string;
      color: 'rose' | 'violet' | 'blue' | 'orange';
    }[];
  };

  // NDA Note
  ndaNote: {
    badge: string;
    title: string;
    text: string;
    confidentialBadge: string;
  };

  // Work section
  workSection: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    dropTip?: string;
    contextLabel: string;
    roleLabel: string;
    outcomeLabel: string;
    viewDetails: string;
    dropUploadText: string;
    dropReplaceText: string;
    removeImageText: string;
  };

  // 6 Featured Case Studies
  featuredProjects: LocalizedProject[];

  // Also Delivered
  alsoDelivered: {
    badge: string;
    title: string;
    subtitle: string;
    items: AlsoDeliveredItem[];
  };

  // Leadership Section
  leadership: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    pillars: LeadershipPillar[];
  };

  // Contact
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    reachOut: string;
    emailLabel: string;
    phoneLabel: string;
    calendarLabel: string;
    calendarAction: string;
    calendarDesc: string;
    linkedinLabel: string;
    locationLabel: string;
    locationValue: string;
    copy: string;
    copied: string;
    openProfile: string;
    ndaGuarantee: string;
  };

  // Tweaks panel
  tweaks: {
    title: string;
    subtitle: string;
    commercialFiguresLabel: string;
    commercialFiguresDesc: string;
    langSelectLabel: string;
    themeSelectLabel: string;
    resetImages: string;
    resetImagesConfirm: string;
  };
}

export const contentIT: ContentTranslation = {
  nav: {
    work: 'Progetti',
    leadership: 'Leadership & Metodo',
    alsoDelivered: 'Altri Progetti',
    contact: 'Contatti',
    ctaContact: 'Contattami',
    confidentiality: 'Accordo NDA',
    tweaks: 'Preferenze',
    hideMetrics: 'Nascondi dati commerciali',
    showMetrics: 'Mostra dati commerciali',
    language: 'Lingua',
    theme: 'Tema',
    light: 'Chiaro',
    dark: 'Scuro'
  },

  hero: {
    badge: 'Design Manager • Strategic Innovation Lead',
    greeting: 'Ciao, sono Alessandra',
    title: 'Trasformo i bisogni degli utenti e le complessità di business in decisioni e direzioni di prodotto concrete.',
    subtitle: 'Con 5+ anni di esperienza in consulenza strategica di design e innovazione al servizio di oltre 15 clienti, coniugo pensiero sistemico, visione strategica, Human-Centered Design e ricerca qualitativa per trasformare vincoli tecnici in prodotti intuitivi, scalabili e commercialmente redditizi.',
    ctaWork: 'Esplora i 6 Progetti',
    ctaLeadership: 'Leadership & Visione',
    quickStats: [
      { value: '20+', label: 'Progetti internazionali in complessi settori B2B regolamentati', color: 'rose' },
      { value: '~40%', label: 'Marginalità media generata per i progetti', color: 'orange' },
      { value: '+15', label: 'Clienti B2B serviti in 5 anni', color: 'violet' },
      { value: '4-6', label: 'Designers guidati nel team', color: 'blue' }
    ]
  },

  ndaNote: {
    badge: 'Protocollo di Riservatezza NDA',
    title: 'Progetti anonimizzati per scala industriale e settore',
    text: 'Tutti i marchi, i nomi di prodotto e i dettagli proprietari dei clienti sono stati sostituiti con descrittori di scala (es. "Gruppo macchine industriali da oltre 1 miliardo di euro, 13 mercati"). I numeri operativi e le percentuali sono approssimati per garantire la riservatezza, preservando la veridicità delle sfide di design e dei risultati.',
    confidentialBadge: 'Approfondimenti e materiali completi disponibili in colloquio privato'
  },

  workSection: {
    badge: 'Casi Studio Selezionati',
    title: 'Sei progetti emblematici tra HMI, Design System e Ricerca',
    subtitle: 'Ogni progetto include contesto, ruolo di guida del team e impatto misurabile.',
    filterAll: 'Tutti i progetti',
    contextLabel: 'Contesto',
    roleLabel: 'Ruolo & Leadership',
    outcomeLabel: 'Risultato & Impatto',
    viewDetails: 'Dettaglio Progetto',
    dropUploadText: 'Carica screenshot o schema visivo',
    dropReplaceText: 'Sostituisci immagine di progetto',
    removeImageText: 'Rimuovi immagine'
  },

  featuredProjects: [
    {
      id: 'control-room-hmi',
      codename: 'Progetto Control-Room & HMI Linea',
      sectorScale: 'Leader globale nel packaging asettico e food-processing • 150+ mercati',
      title: 'Control Room per packaging asettico e supervisory panel multi-linea',
      category: 'HMI & Control Room',
      categoryKey: 'hmi-control',
      timeframe: 'Iniziativa pluriennale',
      context: 'Il cliente, un gigante del packaging con 150+ mercati, necessitava di unificare la supervisione di linee di produzione continue ad altissima velocità, dove 5 minuti di fermo macchina comportano perdite critiche. Gli operatori affrontavano un sovraccarico visivo di allarmi e pannelli eterogenei.',
      role: 'Ho coordinato il team di designer e ricercatori, guidando le sessioni con responsabili di produzione e ingegneri software. Ho strutturato la roadmap di design, la gerarchia visiva per monitor industriali e i test ergonomici per operatori con guanti protettivi in camera bianca.',
      outcome: 'Definita un\'architettura HMI centralizzata e responsive che riduce il carico cognitivo dell\'80%. Il modello è stato validato su stabilimenti pilota in Europa e adottato come standard globale per tutte le future linee asettiche del gruppo.',
      metrics: [
        { value: '~35%', label: 'Consumo budget al kick-off', note: 'Ottimizzazione del tempo stimato' },
        { value: '-60%', label: 'Riduzione tempi reazione allarmi' },
        { value: 'Standard', label: 'Architettura validata per 150+ mercati' }
      ],
      pillTags: [
        { icon: 'Shield', text: 'Industrial HMI' },
        { icon: 'Eye', text: 'Alarm Fatigue Prevention' },
        { icon: 'Users', text: 'Gloved Ergonomics' },
        { icon: 'Layout', text: 'Multi-Screen Control Room' }
      ],
      defaultIllustration: 'control-room',
      colorTheme: 'blue'
    },
    {
      id: 'hmi-corporate-redesign',
      codename: 'Progetto 4-Workstream HMI',
      sectorScale: 'Gruppo industriale multinazionale (€1B+ fatturato, 13 mercati verticali)',
      title: 'Ridisegno HMI aziendale coordinando 4 workstream paralleli',
      category: 'HMI & Direzione Strategica',
      categoryKey: 'hmi-redesign',
      timeframe: '14 mesi di trasformazione',
      context: 'Un colosso dell\'automazione industriale vendeva macchinari con 4 interfacce proprietarie completamente disallineate, sviluppate da business unit distinte. La frammentazione generava alti costi di manutenzione software e formazione prolungata per i clienti finali.',
      role: 'Ho gestito la convergenza dei 4 team di lavoro in parallelo (ricerca utenti, architettura dell\'informazione, UI system e governance con i PM). Ho pianificato i carichi di lavoro del team di design, difeso le scelte strategiche con gli executive e monitorato costantemente il burn rate di progetto.',
      outcome: 'Allineamento completo delle 4 divisioni su un framework interattivo comune. Il progetto ha mantenuto una marginalità commerciale di circa il 40%, azzerando il debito visivo e riducendo i tempi di onboarding operatore di oltre il 50%.',
      metrics: [
        { value: '~40%', label: 'Margine operativo del progetto', note: 'Budget rispettato nei tempi' },
        { value: '4 su 4', label: 'Workstream unificati' },
        { value: '-50%', label: 'Tempo di formazione clienti' }
      ],
      pillTags: [
        { icon: 'GitMerge', text: '4 Workstream Paralleli' },
        { icon: 'Briefcase', text: 'Gestione Burn Rate' },
        { icon: 'Users', text: 'People Management' },
        { icon: 'TrendingUp', text: 'Margine ~40%' }
      ],
      defaultIllustration: 'workstreams',
      colorTheme: 'violet'
    },
    {
      id: 'group-design-system-cnc',
      codename: 'Progetto Token & CNC Master',
      sectorScale: 'Gruppo europeo di macchine CNC e lavorazione legno/vetro • 8 brand',
      title: 'Design System di Gruppo e HMI per macchine di taglio CNC',
      category: 'Design Systems & Hardware',
      categoryKey: 'design-systems',
      timeframe: 'Evoluzione continua',
      context: 'Otto brand consociati utilizzavano framework software diversi per macchine da taglio industriali. Serviva un design system unificato in grado di adattarsi a schermi touch resistivi da 15" e 21", rispettando le diverse identità di brand senza duplicare il codice di sviluppo.',
      role: 'Ho definito la tassonomia dei design token (spaziature, colori, touch-targets di sicurezza) e guidato il designer junior e i programmatori front-end. Ho istituito un comitato di governance per la revisione dei componenti e documentato le linee guida di accessibilità industriale.',
      outcome: 'Design system adottato al 100% da tutti i brand del gruppo per le nuove generazioni di macchine. Riduzione del 45% nei tempi di rilascio delle nuove interfacce e transizione fluida tra i diversi brand per i clienti multinazionali.',
      metrics: [
        { value: '8 Brand', label: 'Unificati sotto lo stesso sistema' },
        { value: '-45%', label: 'Time-to-market nuovi schermi' },
        { value: '~50%', label: 'Rinnovi su canoni di supporto' }
      ],
      pillTags: [
        { icon: 'Layers', text: 'Design Tokens' },
        { icon: 'Cpu', text: 'CNC Touchscreen 15"-21"' },
        { icon: 'Award', text: 'Governance Multi-Brand' },
        { icon: 'Repeat', text: 'Component Lifecycle' }
      ],
      defaultIllustration: 'design-tokens',
      colorTheme: 'rose'
    },
    {
      id: 'trade-fair-benchmarks',
      codename: 'Progetto Market Benchmark 24',
      sectorScale: 'Gruppo meccatronico internazionale per lavorazioni avanzate',
      title: 'Benchmark competitivo su 24 player internazionali in fiera industriale',
      category: 'Competitor Intelligence & HMI',
      categoryKey: 'benchmarks',
      timeframe: 'Studio strategico semestrale',
      context: 'In previsione del lancio di una nuova linea di macchinari, la direzione aziendale mancava di una visione comparativa chiara sulle tendenze UX e HMI dei competitor globali tedeschi, scandinavi e asiatici durante i principali saloni europei (es. Fensterbau e Anuga).',
      role: 'Ho strutturato una griglia di valutazione quantitativa e qualitativa (45 parametri: densità allarmi, navigazione touch, feedback acustico/luminoso). Ho condotto l\'indagine sul campo con i designer, analizzando dal vivo 24 stazioni di lavoro competitor.',
      outcome: 'Report strategico executive che ha orientato direttamente gli investimenti di R&D del cliente per il successivo triennio, posizionando l\'interfaccia dell\'azienda come la prima sul mercato per chiarezza di stato del ciclo produttivo.',
      metrics: [
        { value: '24 Player', label: 'Macchine competitor testate dal vivo' },
        { value: '45 Criteri', label: 'Matrice comparativa standardizzata' },
        { value: '3 Anni', label: 'Roadmap strategica R&D orientata' }
      ],
      pillTags: [
        { icon: 'BarChart2', text: '24 Competitor Analizzati' },
        { icon: 'Sliders', text: '45 Parametri UX/HMI' },
        { icon: 'Search', text: 'Field Intelligence' },
        { icon: 'FileText', text: 'Executive Strategy' }
      ],
      defaultIllustration: 'benchmarks',
      colorTheme: 'orange'
    },
    {
      id: 'field-research-service',
      codename: 'Progetto Field Insights & Service Blueprint',
      sectorScale: 'Fornitore di impianti industriali complessi e manutenzione predittiva',
      title: 'Ricerca contestuale negli stabilimenti e blueprinting di servizio',
      category: 'Ricerca sul Campo & Strategia',
      categoryKey: 'field-research',
      timeframe: '8 mesi di ricerca e co-design',
      context: 'I clienti industriali lamentavano attriti e ritardi nella richiesta di assistenza tecnica e ricambi per macchinari in linea continua. La percezione di servizio dell\'assistenza post-vendita non rifletteva l\'alto costo dei contratti di manutenzione.',
      role: 'Ho condotto 3 cicli di osservazione contestuale e interviste direttamente nei reparti produttivi (intervistando operatori, capi turno e tecnici di manutenzione). Ho facilitato workshop di co-design cross-funzionali tra team commerciale, R&D e supporto post-vendita.',
      outcome: 'Creazione del primo Service Blueprint end-to-end del gruppo, identificando 14 punti di attrito critici e definendo il portale digitale di tele-assistenza predittiva con conseguente aumento dei tassi di rinnovo dei contratti.',
      metrics: [
        { value: '3 Impianti', label: 'Visite immersive sul campo' },
        { value: '14 Punti', label: 'Attriti di processo eliminati' },
        { value: '+28%', label: 'Soddisfazione clienti manutenzione' }
      ],
      pillTags: [
        { icon: 'MapPin', text: 'Contextual Inquiry' },
        { icon: 'Compass', text: 'Service Blueprinting' },
        { icon: 'Users', text: 'Workshop Co-Design' },
        { icon: 'ShieldCheck', text: 'Predictive Maintenance' }
      ],
      defaultIllustration: 'field-research',
      colorTheme: 'rose'
    },
    {
      id: 'retail-self-shopping',
      codename: 'Progetto Mobile Scan & Feature Prioritization',
      sectorScale: 'Leader globale in soluzioni di lettura ottica, sensori e mobile scanner',
      title: 'App per self-shopping e prioritizzazione strategica delle feature',
      category: 'Mobile & Retail Tech',
      categoryKey: 'retail-tech',
      timeframe: '6 mesi di ideazione e test',
      context: 'Il cliente voleva valorizzare la propria flotta di scanner portatili per la grande distribuzione, integrando un\'esperienza mobile shopping contemporanea che convincesse le catene di supermercati europee a rinnovare i contratti di fornitura hardware.',
      role: 'Ho guidato il processo di benchmarking e prioritizzazione tra oltre 40 funzionalità candidate (liste spesa dinamiche, percorsi intelligenti in corsia, pagamenti 1-click). Ho mentito i designer sui test di usabilità rapida con consumatori reali.',
      outcome: 'Identificati 11 vettori di differenziazione unici, concretizzati in un prototipo interattivo ad alta fedeltà. Il concept è stato presentato alle principali catene retail europee come traino per la vendita dei nuovi dispositivi hardware.',
      metrics: [
        { value: '45 Feature', label: 'Vagliate e prioritizzate con il business' },
        { value: '11 Vettori', label: 'Differenziazione proprietaria brevettabile' },
        { value: '100%', label: 'Roadmap validata con clienti retail' }
      ],
      pillTags: [
        { icon: 'Smartphone', text: 'Self-Shopping UX' },
        { icon: 'CheckSquare', text: 'Feature Matrix 45+' },
        { icon: 'Zap', text: 'Rapid Prototyping' },
        { icon: 'Smile', text: 'Consumer Field Testing' }
      ],
      defaultIllustration: 'retail-mobile',
      colorTheme: 'violet'
    }
  ],

  alsoDelivered: {
    badge: 'Archivio Sintetico',
    title: 'Altri progetti ed esperienze rilevanti',
    subtitle: 'Esperienze complementari di product design, cultura organizzativa e iniziative internazionali.',
    items: [
      {
        id: 'hackathon-app',
        codename: 'Mobile Companion Hackathon Globale',
        sectorScale: 'Istituzione accademica internazionale di primo livello',
        title: 'Companion App iOS/Android per hackathon e valutazione giuria in tempo reale',
        role: 'Design Lead & Keynote Speaker',
        summary: 'Progettazione end-to-end dell\'app nativa utilizzata da 300+ partecipanti internazionali e giurati, con sistema di punteggio ponderato in tempo reale.',
        impact: 'Keynote di apertura su "Human-Centered Design for Social Good"; 100% adozione durante la competizione.',
        tags: ['Mobile UX', 'Design for Good', 'Mentoring']
      },
      {
        id: 'designops-iso9001',
        codename: 'DesignOps & Framework Qualità',
        sectorScale: 'Agenzia di innovazione e design strategico',
        title: 'Standardizzazione processi DesignOps e certificazione ISO 9001',
        role: 'Design Manager & Operations Lead',
        summary: 'Definizione dei template di delivery, metriche di salute del progetto e processi di revisione per team multidisciplinari.',
        impact: 'Superamento dell\'audit qualità ISO 9001 a zero non-conformità e riduzione dei tempi di onboarding di nuovi designer.',
        tags: ['DesignOps', 'ISO 9001 Quality', 'Team Health']
      },
      {
        id: 'video-glossary',
        codename: 'Video Glossario Tech & Design',
        sectorScale: 'Iniziativa interna di condivisione della conoscenza',
        title: 'Glossario multimediale di 65 termini tecnici per designer e PM',
        role: 'Autore & Curatore',
        summary: 'Format video e visual card per chiarire concetti complessi di meccatronica, software industriale e principi di usabilità ai nuovi arrivati.',
        impact: 'Utilizzato come base formativa permanente per allineare rapidamente junior designer e figure non tecniche.',
        tags: ['Knowledge Sharing', 'Onboarding', 'Mentorship']
      }
    ]
  },

  leadership: {
    badge: 'Modello di Leadership',
    title: 'Come guido le persone, la complessità tecnica e gli obiettivi di business',
    subtitle: 'Tre pilastri fondati sull\'autonomia delle persone, sulla scalabilità dei processi di ricerca e sulla disciplina di business.',
    quote: '«Il buon design industriale non semplifica la realtà artificialmente: la rende comprensibile ed efficiente per chi ci lavora ogni giorno.»',
    pillars: [
      {
        id: 'people-autonomy',
        title: 'Crescita delle persone & Autonomia',
        subtitle: 'Dalla mentorship all’autonomia progettuale',
        icon: 'Heart',
        color: 'rose',
        description: 'Sviluppo l’autonomia delle persone attraverso mentorship, review strutturate e feedback continui, accompagnandole progressivamente verso responsabilità progettuali crescenti. I risultati sono misurabili: designer che hanno consolidato le proprie competenze UI e operative fino a ottenere il riconoscimento diretto del cliente; user researchers che conducono in autonomia le loro ricerche sul campo; e risorse che assumono la responsabilità end-to-end di un progetto.'
      },
      {
        id: 'research-operations',
        title: 'Research Operations & Metodo',
        subtitle: 'Processi standardizzati, AI come acceleratore',
        icon: 'Search',
        color: 'orange',
        description: 'Punto di riferimento per le Research Operations strutturate attraverso processi, framework e template riutilizzabili, rendendo la ricerca più consistente, scalabile e meno dipendente dalle singole persone. Integro l’AI nelle fasi più operative di discovery e sintesi, riducendo il lavoro meccanico e preservando il tempo per ciò che richiede giudizio: osservare, interpretare e comprendere le persone.'
      },
      {
        id: 'business-governance',
        title: 'Pianificazione & Client Management',
        subtitle: 'Dalla gestione reattiva alla previsione',
        icon: 'TrendingUp',
        color: 'violet',
        description: 'Un modello vincente di pianificazione e monitoraggio del burn rate a partire dalle esigenze di un singolo cliente, esteso successivamente all’intero portafoglio. Questo mi ha permesso di anticipare rischi, ricalibrare tempestivamente le stime e mantenere il controllo su delivery e marginalità. Parallelamente, ho costruito relazioni continuative con i clienti, contribuendo al rinnovo e all’espansione delle collaborazioni.'
      }
    ]
  },

  contact: {
    badge: 'Disponibilità Professionale',
    title: 'Parliamo di nuove sfide di Design Management',
    subtitle: 'Aperta a ruoli di Design Leadership, Lead Product Design, Product Manager, Design Project Manager e Design Strategy in contesti complessi e internazionali.',
    reachOut: 'Contatti Diretti',
    emailLabel: 'Email Personale',
    phoneLabel: 'Prenota una call',
    calendarLabel: 'Prenota una call',
    calendarAction: 'Apri Google Calendar',
    calendarDesc: 'Google Calendar • Colloquio 30-45 min',
    linkedinLabel: 'Profilo LinkedIn',
    locationLabel: 'Base',
    locationValue: 'Verona, Italia • Disponibile per ruoli Hybrid, Remote e Relocation',
    copy: 'Copia',
    copied: 'Copiato!',
    openProfile: 'Apri profilo',
    ndaGuarantee: 'Approfondimenti di processo, materiali di progetto e casi studio dettagliati sono disponibili su richiesta in sede di colloquio riservato.'
  },

  tweaks: {
    title: 'Pannello Preferenze & Vista',
    subtitle: 'Personalizza la visualizzazione del portfolio',
    commercialFiguresLabel: 'Dati commerciali e percentuali (~40%, budget)',
    commercialFiguresDesc: 'Attiva o disattiva la visualizzazione dei parametri numerici di margine ed efficienza economica.',
    langSelectLabel: 'Lingua dell\'interfaccia',
    themeSelectLabel: 'Aspetto visivo',
    resetImages: 'Ripristina illustrazioni predefinite',
    resetImagesConfirm: 'Rimuovere tutte le immagini personalizzate caricate nei riquadri?'
  }
};

export const contentEN: ContentTranslation = {
  nav: {
    work: 'Projects',
    leadership: 'Leadership & Method',
    alsoDelivered: 'Also Delivered',
    contact: 'Contact',
    ctaContact: 'Contact Me',
    confidentiality: 'NDA Terms',
    tweaks: 'Preferences',
    hideMetrics: 'Hide commercial figures',
    showMetrics: 'Show commercial figures',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark'
  },

  hero: {
    badge: 'Design Manager • Strategic Innovation Lead',
    greeting: 'Hi, I am Alessandra',
    title: 'Transforming user needs and business complexities into concrete product decisions and directions.',
    subtitle: 'With 5+ years of experience in strategic design and innovation consulting serving 15+ clients, I combine systems thinking, strategic vision, Human-Centered Design, and qualitative research to transform technical constraints into intuitive, scalable, and commercially profitable products.',
    ctaWork: 'Explore the 6 Projects',
    ctaLeadership: 'Leadership & Method',
    quickStats: [
      { value: '20+', label: 'International projects across complex regulated B2B sectors', color: 'rose' },
      { value: '~40%', label: 'Average margin generated across projects', color: 'orange' },
      { value: '+15', label: 'B2B clients served across 5 years', color: 'violet' },
      { value: '4-6', label: 'Designers led in the team', color: 'blue' }
    ]
  },

  ndaNote: {
    badge: 'NDA Confidentiality Protocol',
    title: 'Anonymized by industrial scale & market sector',
    text: 'All proprietary corporate names, brands, and product identifiers have been replaced with scale descriptors (e.g., "€1B+ industrial machinery group, 13 markets"). Commercial figures and percentages are approximate to protect client NDAs while demonstrating genuine design challenges and outcomes.',
    confidentialBadge: 'Detailed walkthroughs and project materials available in private interview'
  },

  workSection: {
    badge: 'Featured Case Studies',
    title: 'Six flagship projects spanning HMI, Design Systems, and Field Research',
    subtitle: 'Each case study covers context, team leadership, and measurable outcomes.',
    filterAll: 'All projects',
    contextLabel: 'Context',
    roleLabel: 'Role & Leadership',
    outcomeLabel: 'Outcome & Impact',
    viewDetails: 'Project Details',
    dropUploadText: 'Upload visual artefact or screen',
    dropReplaceText: 'Replace project image',
    removeImageText: 'Remove image'
  },

  featuredProjects: [
    {
      id: 'control-room-hmi',
      codename: 'Project Control-Room & Line HMI',
      sectorScale: 'Global packaging & food-processing leader • 150+ markets',
      title: 'Packaging line control room & multi-line supervisory panel',
      category: 'HMI & Control Room',
      categoryKey: 'hmi-control',
      timeframe: 'Multi-year engagement',
      context: 'A global food-processing and aseptic packaging leader operating in 150+ markets needed to unify supervisory control across high-speed packaging lines where 5 minutes of downtime meant catastrophic waste. Operators struggled with alarm overload across mismatched screens.',
      role: 'Orchestrated the team of UI/UX designers and field researchers, leading working sessions with line supervisors and firmware engineers. Directed the information architecture, clean visual alarm hierarchy, and gloved clean-room ergonomics.',
      outcome: 'Engineered a centralized, responsive HMI architecture cutting cognitive fatigue by ~80%. Validated in European pilot manufacturing plants and adopted as the international standard across the group\'s next-generation lines.',
      metrics: [
        { value: '~35%', label: 'Budget consumption at kickoff', note: 'Significant efficiency saving' },
        { value: '-60%', label: 'Alarm response reaction time' },
        { value: 'Standard', label: 'Adopted across 150+ markets' }
      ],
      pillTags: [
        { icon: 'Shield', text: 'Industrial HMI' },
        { icon: 'Eye', text: 'Alarm Fatigue Mitigation' },
        { icon: 'Users', text: 'Gloved Ergonomics' },
        { icon: 'Layout', text: 'Multi-Screen Control Room' }
      ],
      defaultIllustration: 'control-room',
      colorTheme: 'blue'
    },
    {
      id: 'hmi-corporate-redesign',
      codename: 'Project 4-Workstream HMI',
      sectorScale: '€1B+ industrial machinery group • 13 vertical markets',
      title: 'Corporate HMI redesign across 4 parallel discovery workstreams',
      category: 'HMI & Strategic Direction',
      categoryKey: 'hmi-redesign',
      timeframe: '14-month transformation',
      context: 'An automation conglomerate was shipping high-end machinery with 4 disjointed legacy interfaces built by independent business units. This fragmentation spiked customer support overhead and prolonged new operator onboarding.',
      role: 'Directed 4 parallel design workstreams (user research, information architecture, UI component system, and PM governance). Balanced team workloads, defended core design decisions with executive sponsors, and tracked weekly project burn rates.',
      outcome: 'Aligned all 4 divisions around a shared interactive blueprint. Maintained a ~40% operational margin on delivery, eliminated visual debt, and reduced operator training time by over half.',
      metrics: [
        { value: '~40%', label: 'Commercial project margin', note: 'On time and within scope' },
        { value: '4 of 4', label: 'Unified workstreams' },
        { value: '-50%', label: 'Operator onboarding time' }
      ],
      pillTags: [
        { icon: 'GitMerge', text: '4 Parallel Workstreams' },
        { icon: 'Briefcase', text: 'Burn Rate Management' },
        { icon: 'Users', text: 'People Management' },
        { icon: 'TrendingUp', text: '~40% Delivery Margin' }
      ],
      defaultIllustration: 'workstreams',
      colorTheme: 'violet'
    },
    {
      id: 'group-design-system-cnc',
      codename: 'Project Token & CNC Master',
      sectorScale: 'European CNC machinery group • 8 distinct brands',
      title: 'Group-wide design system & CNC cutting machine HMI',
      category: 'Design Systems & Hardware',
      categoryKey: 'design-systems',
      timeframe: 'Continuous evolution',
      context: 'Eight sister brands were building cutting and shaping machines with divergent codebases. The group needed a unified design system supporting 15" and 21" resistive touchscreens, honoring brand individuality without rewriting core logic.',
      role: 'Architected the multi-brand design token system (touch targets, spacing, status colorways) and mentored junior designers and front-end developers. Established a cross-brand governance board and authored industrial accessibility guidelines.',
      outcome: 'Achieved 100% adoption across all 8 group brands for new machine generations. Decreased new interface release cycles by 45% and drove higher client renewal rates on multi-brand service packages.',
      metrics: [
        { value: '8 Brands', label: 'Unified under single token system' },
        { value: '-45%', label: 'Time-to-market for new screens' },
        { value: '~50%', label: 'Support retainer renewal rates' }
      ],
      pillTags: [
        { icon: 'Layers', text: 'Design Tokens' },
        { icon: 'Cpu', text: 'CNC Touchscreen 15"-21"' },
        { icon: 'Award', text: 'Multi-Brand Governance' },
        { icon: 'Repeat', text: 'Component Lifecycle' }
      ],
      defaultIllustration: 'design-tokens',
      colorTheme: 'rose'
    },
    {
      id: 'trade-fair-benchmarks',
      codename: 'Project Market Benchmark 24',
      sectorScale: 'International mechatronics group for precision manufacturing',
      title: 'Multi-player competitive HMI benchmark across 24 global exhibitors',
      category: 'Competitor Intelligence & HMI',
      categoryKey: 'benchmarks',
      timeframe: '6-month strategic study',
      context: 'Ahead of an upcoming machine generation launch, leadership needed structured intelligence on UX/HMI trends from German, Scandinavian, and Asian competitors exhibiting at flagship European fairs (Fensterbau and Anuga).',
      role: 'Created a 45-parameter quantitative and qualitative evaluation framework (alarm density, touch physics, audio cues, cognitive load). Led researchers on-site, conducting structured evaluations of 24 operating competitor machines.',
      outcome: 'Synthesized an executive intelligence brief that directly guided R&D roadmaps for the subsequent 3 years, positioning the client\'s machine interface as best-in-class for visual clarity and operator safety.',
      metrics: [
        { value: '24 Players', label: 'Competitor machines analyzed live' },
        { value: '45 Criteria', label: 'Standardized UX/HMI matrix' },
        { value: '3 Years', label: 'Strategic R&D roadmap steered' }
      ],
      pillTags: [
        { icon: 'BarChart2', text: '24 Competitors Evaluated' },
        { icon: 'Sliders', text: '45 UX/HMI Parameters' },
        { icon: 'Search', text: 'Field Intelligence' },
        { icon: 'FileText', text: 'Executive Strategy' }
      ],
      defaultIllustration: 'benchmarks',
      colorTheme: 'orange'
    },
    {
      id: 'field-research-service',
      codename: 'Project Field Insights & Service Blueprint',
      sectorScale: 'High-precision manufacturing & predictive maintenance provider',
      title: 'Factory-floor contextual inquiry and end-to-end service blueprinting',
      category: 'Field Research & Strategy',
      categoryKey: 'field-research',
      timeframe: '8 months of research and co-design',
      context: 'Industrial clients were experiencing friction when ordering spare parts and dispatching maintenance technicians for continuous production lines. Service satisfaction fell short of the high price tags on maintenance retainers.',
      role: 'Conducted 3 immersive contextual inquiry cycles directly inside manufacturing plants (interviewing operators, shift leads, and field service technicians). Facilitated co-design sprints bridging sales, R&D, and post-sales support teams.',
      outcome: 'Built the group\'s first comprehensive Service Blueprint, isolating 14 critical handoff bottlenecks and defining the digital architecture for predictive remote assistance, lifting maintenance renewal satisfaction.',
      metrics: [
        { value: '3 Plants', label: 'Immersive factory visits' },
        { value: '14 Points', label: 'Service friction bottlenecks solved' },
        { value: '+28%', label: 'Maintenance customer satisfaction' }
      ],
      pillTags: [
        { icon: 'MapPin', text: 'Contextual Inquiry' },
        { icon: 'Compass', text: 'Service Blueprinting' },
        { icon: 'Users', text: 'Co-Design Sprints' },
        { icon: 'ShieldCheck', text: 'Predictive Maintenance' }
      ],
      defaultIllustration: 'field-research',
      colorTheme: 'rose'
    },
    {
      id: 'retail-self-shopping',
      codename: 'Project Mobile Scan & Feature Prioritization',
      sectorScale: 'Global leader in optical sensors, mobile computers & retail capture',
      title: 'Self-shopping mobile companion & feature prioritization framework',
      category: 'Mobile & Retail Tech',
      categoryKey: 'retail-tech',
      timeframe: '6-month discovery & validation',
      context: 'The client needed to enhance their handheld hardware fleet in retail stores by offering a companion self-shopping software experience compelling enough for European supermarket chains to upgrade their physical scanner contracts.',
      role: 'Steered competitive benchmarking across 40+ candidate features (smart in-aisle routing, real-time basket tallying, one-tap checkout). Mentored junior designers through rapid usability testing sessions with everyday shoppers.',
      outcome: 'Synthesized 11 distinctive, proprietary feature vectors into an interactive high-fidelity prototype. The concept was pitched directly to key retail accounts, accelerating hardware renewal sales cycles.',
      metrics: [
        { value: '45 Features', label: 'Screened & prioritized with business' },
        { value: '11 Vectors', label: 'Proprietary differentiators defined' },
        { value: '100%', label: 'Validated against retail buyer criteria' }
      ],
      pillTags: [
        { icon: 'Smartphone', text: 'Self-Shopping UX' },
        { icon: 'CheckSquare', text: '45+ Feature Matrix' },
        { icon: 'Zap', text: 'Rapid Prototyping' },
        { icon: 'Smile', text: 'Shopper Testing' }
      ],
      defaultIllustration: 'retail-mobile',
      colorTheme: 'violet'
    }
  ],

  alsoDelivered: {
    badge: 'Condensed Archive',
    title: 'Additional selected engagements & initiatives',
    subtitle: 'Complementary design delivery, organizational development, and international collaborations.',
    items: [
      {
        id: 'hackathon-app',
        codename: 'Global Hackathon Mobile Companion',
        sectorScale: 'Top-tier international academic institution',
        title: 'Native iOS/Android companion app & real-time jury scoring system',
        role: 'Design Lead & Keynote Speaker',
        summary: 'End-to-end UX/UI for a mobile app serving 300+ international participants and judges, featuring a live weighted scoring engine.',
        impact: 'Delivered opening keynote on "Human-Centered Design for Social Good"; 100% adoption during the competition.',
        tags: ['Mobile UX', 'Design for Good', 'Mentoring']
      },
      {
        id: 'designops-iso9001',
        codename: 'DesignOps & Quality Framework',
        sectorScale: 'Strategic design & innovation consultancy',
        title: 'DesignOps standardization & ISO 9001 quality certification',
        role: 'Design Manager & Operations Lead',
        summary: 'Created delivery templates, project health scorecards, and standardized review frameworks for multidisciplinary design teams.',
        impact: 'Passed ISO 9001 quality audit with zero non-conformities and significantly expedited junior onboarding.',
        tags: ['DesignOps', 'ISO 9001 Quality', 'Team Health']
      },
      {
        id: 'video-glossary',
        codename: 'Tech & Design Video Glossary',
        sectorScale: 'Internal organizational knowledge initiative',
        title: '65-entry multimedia glossary for designers and product managers',
        role: 'Author & Curator',
        summary: 'Curated video formats and visual flashcards demystifying mechatronics, industrial software, and core usability principles.',
        impact: 'Served as an ongoing learning hub, accelerating team alignment between design, engineering, and sales.',
        tags: ['Knowledge Sharing', 'Onboarding', 'Mentorship']
      }
    ]
  },

  leadership: {
    badge: 'Leadership Model',
    title: 'How I grow people, manage technical complexity, and drive business results',
    subtitle: 'Three pillars anchored in team autonomy, scalable research operations, and financial delivery discipline.',
    quote: '«Great industrial design does not artificially oversimplify reality: it makes complex workflows legible, empowering, and safe for the humans operating them daily.»',
    pillars: [
      {
        id: 'people-autonomy',
        title: 'People Growth & Autonomy',
        subtitle: 'From mentorship to project ownership',
        icon: 'Heart',
        color: 'rose',
        description: 'I foster team autonomy through mentorship, structured reviews, and continuous feedback, guiding individuals toward increasing project responsibility. Measurable results include designers recognized directly by enterprise clients, researchers leading field studies autonomously, and team members taking full end-to-end ownership.'
      },
      {
        id: 'research-operations',
        title: 'Research Operations & Method',
        subtitle: 'Standardized workflows, AI as an accelerator',
        icon: 'Search',
        color: 'orange',
        description: 'A key anchor for structured Research Operations through standardized frameworks and reusable templates, making research consistent, scalable, and resilient. I integrate AI into routine discovery and synthesis phases, freeing time for what requires critical human judgment: observing, interpreting, and understanding users.'
      },
      {
        id: 'business-governance',
        title: 'Planning & Client Management',
        subtitle: 'From reactive management to proactive forecasting',
        icon: 'TrendingUp',
        color: 'violet',
        description: 'A proven planning and burn-rate monitoring framework piloted on a flagship account and scaled across the portfolio. This enabled early risk anticipation, timely scope recalibration, and strict delivery and margin control, while nurturing lasting client partnerships that drive sustained renewals and expansion.'
      }
    ]
  },

  contact: {
    badge: 'Professional Availability',
    title: 'Let’s discuss your design leadership challenges',
    subtitle: 'Available for Design Leadership, Lead Product Design, Product Manager, Design Project Manager, and Design Strategy roles in complex, international environments.',
    reachOut: 'Direct Contact Details',
    emailLabel: 'Direct Email',
    phoneLabel: 'Book a call',
    calendarLabel: 'Book a Call',
    calendarAction: 'Open Google Calendar',
    calendarDesc: 'Google Calendar • 30-45 min Call',
    linkedinLabel: 'LinkedIn Profile',
    locationLabel: 'Base Location',
    locationValue: 'Verona, Italy • Open to Hybrid, Remote & Relocation opportunities',
    copy: 'Copy',
    copied: 'Copied!',
    openProfile: 'Open profile',
    ndaGuarantee: 'In-depth process walkthroughs, project materials, and detailed case studies are available upon request during a confidential interview.'
  },

  tweaks: {
    title: 'Preferences & Portfolio Controls',
    subtitle: 'Customize how information is displayed',
    commercialFiguresLabel: 'Commercial figures & percentages (~40%, budgets)',
    commercialFiguresDesc: 'Toggle visibility of commercial margin and burn rate metrics across all case studies.',
    langSelectLabel: 'Display Language',
    themeSelectLabel: 'Visual Appearance',
    resetImages: 'Reset to default illustrations',
    resetImagesConfirm: 'Are you sure you want to remove all custom dropped images?'
  }
};

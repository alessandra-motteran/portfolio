import { AnonymousProject, UserProfile } from '../types';

export const userProfile: UserProfile = {
  name: 'Alessandra Motteran',
  title: 'Design Manager & Innovation Designer',
  headline: 'Transforming Enterprise Complexity into Scalable Human-Centered Systems',
  bio: 'Over 5 years of proven leadership driving digital transformation and architecting enterprise B2B products in high-complexity, heavily regulated environments (industrial manufacturing, packaging lines, mobility, and retail automation). Expert in aligning Human-Centered Design, qualitative field research, and systems thinking to turn business complexities into decisive product direction and high-margin delivery.',
  currentFocus: 'Currently completing a 9-month international immersion across Asia & Australia (APAC), broadening cross-cultural perspectives on collaborative systems, organizational resilience, and global innovation frameworks.',
  location: 'Verona, Italy (Globally Mobile / APAC Experienced)',
  email: 'alessandra.motteran@gmail.com',
  linkedin: 'https://linkedin.com/in/alessandra-motteran',
  phone: '(+39) 334 578 3644',
  languages: [
    { language: 'Italian', level: 'Native' },
    { language: 'English', level: 'C1 Proficient (IELTS Certified)' }
  ],
  education: [
    {
      degree: 'Master’s Degree in Innovation Design',
      institution: 'Università degli Studi di Ferrara',
      years: '2018 – 2020',
      honors: '110/110 con Lode (Taught fully in English)'
    },
    {
      degree: 'Bachelor’s Degree in Industrial Design',
      institution: 'Alma Mater Studiorum – Università di Bologna',
      years: '2014 – 2017'
    }
  ],
  recognition: [
    {
      title: 'Speaker & Innovation Judge',
      organization: 'NYU Abu Dhabi Hackathon for Social Good',
      description: 'Delivered keynote Lightning Talk on Human-Centered Design for social impact and served as evaluating jury for international teams.'
    },
    {
      title: 'Think4Food Challenge Winner',
      organization: 'Legacoop & Innovation Hubs',
      year: '2020',
      description: 'Awarded 1st place for pioneering a social responsibility-focused service design concept.'
    },
    {
      title: 'Multidisciplinary Innovation Sprint',
      organization: 'CERN (European Organization for Nuclear Research)',
      description: 'Collaborated on advanced technological solutions for food traceability and distributed supply safety.'
    }
  ],
  competencies: [
    'Design Leadership & Team Mentorship',
    'Enterprise UX Strategy & Product Discovery',
    'Complex Industrial HMI & Supervisory Systems',
    'Multi-Brand Design Systems & Governance',
    'ResearchOps & Field Contextual Inquiry',
    'DesignOps & Workflow Optimization',
    'Cross-functional Alignment (C-Suite, Engineering, Shop Floor)',
    'ISO 9001 Process Quality Certification',
    'Budget Burn-Rate & Delivery Management',
    'Usability Testing in High-Risk Environments'
  ],
  tools: [
    { category: 'Design & Prototyping', items: ['Figma (Advanced Auto-Layout & Tokens)', 'Sketch', 'Miro'] },
    { category: 'Project & Workflow', items: ['Teamwork', 'Jira', 'Trello', 'Linear'] },
    { category: 'Data & Operations', items: ['Airtable Interface Designer', 'Notion', 'Dropbox Paper'] },
    { category: 'AI & Research Automation', items: ['ChatGPT', 'Gemini', 'Claude', 'AI-assisted Discovery'] }
  ]
};

export const anonymousProjects: AnonymousProject[] = [
  {
    id: 'control-room-hmi',
    codename: 'Project Keanu',
    title: 'Industrial Control Room & Multi-Line Supervision HMI',
    anonymousSector: 'Global Aseptic Packaging & Liquid Food Processing Leader',
    ndaShieldReason: 'Protected under strict corporate NDA: Proprietary aseptic filling telemetry, line automation protocols, and client trademarks are generalized into anonymized industrial patterns.',
    timeframe: 'Jan 2024 – Dec 2024',
    role: 'Design Manager & Delivery Lead',
    category: 'hmi-industrial',
    tags: ['Industrial Automation', 'Control Room HMI', 'Operator Safety', 'DesignOps', 'Multi-Line Supervision'],
    teamComposition: [
      '1 Design Manager (Lead & Stakeholder Alignment)',
      '2 Mid UX/UI Designers (Full-Time Dedicated)',
      'Client Core Engineering & Industrial Automation Directors'
    ],
    executiveSummary: 'Spearheaded the end-to-end design orchestration for centralized factory control rooms and physical machine panels. Supervised two dedicated mid-level designers, ensuring seamless cross-functional alignment between plant operators, automation engineers, and executive steering teams in high-speed, continuous liquid packaging environments.',
    challenge: 'Operators in aseptic packaging facilities oversee multi-million-dollar lines operating at breakneck velocity where a 3-second delay in defect detection causes hundreds of liters of waste. The legacy setup suffered from disjointed machine panels, alarm fatigue, and inconsistent interaction models across upstream processing and downstream packaging units.',
    strategicIntervention: 'Established a unified supervision mental model and ergonomics standard. Harmonized visual alarm hierarchies, batch progress monitors, and touch-target parameters calibrated for gloved operators in humid washdown environments. Implemented disciplined budget burn-rate tracking at 3%/month, guaranteeing high margin delivery and zero milestone slippages.',
    methodology: [
      'Contextual Operator Workload & Alarm Fatigue Mapping',
      'Cognitive Ergonomics & Gloved Touch-Screen Prototyping',
      'Dual-Track Agile Sprint Cadence with Client Engineering Leads',
      'Systematic Resource Handoff & Seamless Designer Transition'
    ],
    keyDeliverables: [
      'Centralized Control Room Multi-Screen Dashboard Specification',
      'Physical Machine Operator Touch Panel Interface Standards',
      'Standardized Alarm & Safety Alert Triage Component Kit',
      'Annual Delivery Budget Plan & Burn-Rate Audit Dashboard'
    ],
    measurableImpact: [
      { metric: '30-35%', label: 'Budget Utilization', detail: 'Maintained strict 3%/month burn rate, delivering all roadmap features within pre-estimated limits' },
      { metric: '2x', label: 'Offer Extensions', detail: 'Client repeatedly extended designer allocation in June and October, initiating multi-year 2025 program' },
      { metric: '0 hrs', label: 'Operational Downtime', detail: 'Executed smooth team offboarding and onboarding transition with zero disruption to active sprint delivery' }
    ],
    designSystemHighlights: [
      'High-contrast industrial color tokens calibrated for varying factory floor ambient lighting',
      'Standardized 64px minimum touch targets accommodating industrial safety gloves',
      'Hierarchical alarm notification system compliant with ISA-101 industrial standards'
    ],
    confidentialQAs: [
      {
        category: 'leadership',
        question: 'How did you manage the transition and onboarding when an experienced designer left the project?',
        answer: 'I conducted a structured two-week knowledge-transfer sprint. We consolidated design tokens, decision logs, and client stakeholder preferences into a centralized documentation hub. I personally shadowed the incoming designer during client reviews, ensuring zero perceived friction by the client leads.'
      },
      {
        category: 'business-impact',
        question: 'How did you achieve a 30-35% budget consumption while meeting all delivery goals?',
        answer: 'By instituting proactive scope gating and reusable pattern libraries. Rather than custom-crafting bespoke screens for each packaging module, we established modular templates. This slashed design iteration time by over 40% while keeping client satisfaction exceptionally high.'
      },
      {
        category: 'technical-constraints',
        question: 'What unique physical constraints dictated the HMI design on the factory floor?',
        answer: 'Chemical washdown protocols, high ambient noise, and the requirement for operators to wear nitrile or heavy thermal gloves. Visual affordances had to rely on strong luminance contrast rather than subtle pastels, and all critical actions required two-stage physical confirmation.'
      }
    ],
    interactiveArtifact: {
      type: 'dashboard-spec',
      title: 'Supervisory Control Room Multi-Monitor Layout',
      description: 'Three-tier informational hierarchy designed for continuous 24/7 aseptic monitoring.',
      dataPoints: [
        { label: 'Line Throughput Velocity', value: '24,000 packs/hr' },
        { label: 'Aseptic Chamber Temp', value: '142.4 °C' },
        { label: 'Active Micro-Stoppages', value: '0 detected' },
        { label: 'OEE Operational Index', value: '96.8%' }
      ]
    },
    suggestedQuestions: [
      'How did you calibrate visual alarm thresholds to prevent operator desensitization?',
      'What governance mechanisms ensured alignment between client automation engineers and the UX team?',
      'How did the project transition from 2024 delivery into the 2025 multi-year partnership?'
    ]
  },
  {
    id: 'corporate-hmi-design-system',
    codename: 'Project Axiom',
    title: 'Cross-Brand Enterprise Design System & CNC Machine HMI',
    anonymousSector: 'International Industrial Machinery & Extrusion Systems Conglomerate',
    ndaShieldReason: 'Protected under NDA: Proprietary CNC tool kinematics, multi-brand holding corporate identity, and subsidiary trademarks are fully sanitized.',
    timeframe: 'May 2024 – Nov 2024',
    role: 'Lead Design Manager',
    category: 'design-systems',
    tags: ['Design Systems', 'Multi-Brand Governance', 'Industrial CNC', 'HMI Redesign', 'Cross-Functional Discovery'],
    teamComposition: [
      '1 Lead Design Manager (Orchestration & Governance)',
      '1 UI Designer (Mentored in Figma Token Architecture)',
      'Corporate Steering Committee & Multi-Brand Subsidiary Directors'
    ],
    executiveSummary: 'Led a high-stakes corporate redesign initiative across four concurrent discovery streams (Business Discovery, Market Discovery, Strategic Roadmap, Hardware & Software Assessment). Built stakeholder trust to pitch and successfully secure the mandate for a unified corporate-wide Design System and subsequent CNC cutting-machine HMI overhauls.',
    challenge: 'The conglomerate had acquired multiple independent machinery brands over two decades. Each machine family (cutting, milling, profile machining) ran completely disparate, legacy software stacks with zero visual unity, high operator retraining costs, and duplicated software engineering expenses across subsidiaries.',
    strategicIntervention: 'Structured a 4-pillar discovery methodology that decoupled foundational interaction patterns from brand-specific styling tokens. Mentored a junior designer into full Figma UI autonomy. Applied predictive burn-rate controls that concluded the project with an extraordinary 40% profit margin while expanding scope into 2025.',
    methodology: [
      'Concurrent 4-Stream Discovery (Business, Market, Strategy, HW/SW)',
      'Multi-Brand Design Token Hierarchy (Core / Semantic / Brand)',
      'Junior Designer Mentorship & Figma Advanced Prototyping Coaching',
      'Executive Steering C-Suite Presentations & Strategic Upsell'
    ],
    keyDeliverables: [
      'Comprehensive Multi-Brand Design System Architecture',
      'Flagship CNC Cutting Machine HMI Interactive Figma Prototype',
      'Cross-Subsidiary Strategic Roadmap for 2025 Rollouts',
      'Hardware & Software Technical Feasibility Assessment Matrix'
    ],
    measurableImpact: [
      { metric: '40%', label: 'Project Profit Margin', detail: 'Strict burn-rate modeling delivered all 4 streams with remarkable operational profitability' },
      { metric: '2 New', label: 'Mandate Expansions', detail: 'Client commissioned full Group Design System build and secondary machine family redesigns for 2025' },
      { metric: '100%', label: 'Designer Growth', detail: 'Junior team member transitioned from basic support to independently leading UI component creation' }
    ],
    designSystemHighlights: [
      'Dynamic theming engine supporting 3 subsidiary brand aesthetics from a single core component set',
      'Real-time 3D workpiece visualization viewport guidelines for CNC toolpath verification',
      'Accessibility-certified high-contrast dark theme optimized for grease and glare-heavy industrial workshops'
    ],
    confidentialQAs: [
      {
        category: 'ux-strategy',
        question: 'How did you convince distinct subsidiary engineering leads to adopt a shared design system?',
        answer: 'Instead of imposing a top-down mandate, I conducted individual discovery sessions with each subsidiary. We demonstrated how shared foundational tokens would eliminate 70% of repetitive UI coding without sacrificing their specialized mechanical workflow controls.'
      },
      {
        category: 'leadership',
        question: 'How did you structure the mentorship that enabled your designer to achieve autonomy?',
        answer: 'I implemented a graduated autonomy framework: starting with paired token definition, transitioning to asynchronous reviews on complex components, and finishing with the designer presenting full interactive Figma flows directly to the client.'
      },
      {
        category: 'business-impact',
        question: 'What enabled the 40% margin at project closing?',
        answer: 'Tight orchestration of the 4 discovery streams in parallel. By reusing synthesized insights across business, market, and tech assessments rather than running isolated work packages, we eliminated redundant research hours.'
      }
    ],
    interactiveArtifact: {
      type: 'system-architecture',
      title: 'Multi-Brand Token Architecture',
      description: 'Tri-layer token inheritance model enabling independent subsidiary branding over shared industrial controls.',
      dataPoints: [
        { label: 'Global Primitives', value: '184 core tokens' },
        { label: 'Semantic Roles', value: '92 contextual tokens' },
        { label: 'Subsidiary Themes', value: '3 unique brand variants' },
        { label: 'Component Reusability', value: '88% cross-brand' }
      ]
    },
    suggestedQuestions: [
      'How did you balance 3D workpiece simulation performance with web-based HMI runtimes?',
      'What governance model was established for subsidiaries requesting custom mechanical widgets?',
      'How did the burn-rate tracking model directly influence sprint planning decisions?'
    ]
  },
  {
    id: 'hackathon-event-management-app',
    codename: 'Project Agora',
    title: 'Global Hackathon Event Management & Real-Time Jury Ecosystem',
    anonymousSector: 'Top International Research University in the UAE',
    ndaShieldReason: 'Protected under event collaboration protocol: University branding and student intellectual property submissions are kept strictly confidential.',
    timeframe: 'Jan 2024 – May 2024',
    role: 'Product Lead, Keynote Speaker & Innovation Judge',
    category: 'mobile-retail',
    tags: ['Mobile Application', 'No-Code / Rapid Prototyping', 'Jury Evaluation', 'Public Keynote', 'App Store Publishing'],
    teamComposition: [
      '1 Product & Design Lead (Alessandra)',
      'Academic Event Directors & International Hackathon Organizing Committee',
      'App Store Review & Mobile Publishing Operations'
    ],
    executiveSummary: 'Delivered an end-to-end event companion mobile app for an international social-impact hackathon. Addressed student team formation, dynamic schedule push notifications, and a standardized live jury scoring platform. Served as a Keynote Speaker on Human-Centered Design for Social Good and official Innovation Judge.',
    challenge: 'Organizing 100+ elite global participants across multiple timezones with rapid 48-hour deliverables created massive administrative chaos. Traditional spreadsheets led to scoring discrepancies, team dispute delays, and delayed awards ceremonies.',
    strategicIntervention: 'Leveraged rapid no-code mobile engineering to overcome strict delivery timelines. Designed and published native iOS and Android apps to official app stores, establishing an intuitive voting rubric for international judges. Delivered a keynote talk inspiring participants to apply Human-Centered Design to climate and healthcare challenges.',
    methodology: [
      'Rapid No-Code Prototyping & Native App Store Deployment',
      'Standardized Multi-Criteria Jury Rubric Formulation',
      'Live Event Crisis Management & Real-Time Scoring Reconciliation',
      'Public Keynote Delivery on Human-Centered Social Innovation'
    ],
    keyDeliverables: [
      'Production Mobile Companion App (iOS App Store & Google Play)',
      'Automated Team Allocation & Project Submission Portal',
      'Real-Time Jury Evaluation & Leaderboard Dashboard',
      'Keynote Slide Deck: "Human-Centered Design for Sustainable Impact"'
    ],
    measurableImpact: [
      { metric: '100+', label: 'Global Participants', detail: 'Orchestrated seamless team formation, announcements, and agenda tracking' },
      { metric: '2 App Stores', label: 'Published & Approved', detail: 'Managed full compliance and publishing workflow for Apple App Store & Google Play' },
      { metric: '0 Errors', label: 'Live Jury Scoring', detail: 'Replaced manual tallying with automated real-time tabulation for the awards ceremony' }
    ],
    confidentialQAs: [
      {
        category: 'technical-constraints',
        question: 'What technical hurdles did you encounter publishing a no-code app to Apple App Store?',
        answer: 'Apple’s review guidelines strictly inspect app uniqueness and offline resilience. I engineered custom local caching fallbacks and enriched the app with interactive team dashboards to ensure it met Apple’s stringent quality benchmarks.'
      },
      {
        category: 'ux-strategy',
        question: 'How did your Human-Centered Design talk impact the participating student teams?',
        answer: 'I focused on problem framing over solution fetishism. Multiple winning teams cited the framework, pivoting from generic AI wrappers to deeply researched solutions addressing real frontline humanitarian constraints.'
      }
    ],
    interactiveArtifact: {
      type: 'workflow',
      title: 'Real-Time Hackathon Scoring Pipeline',
      description: 'End-to-end flow from student project submission to verified jury consensus.',
      dataPoints: [
        { label: 'Active Teams Evaluated', value: '24 teams' },
        { label: 'Jury Members Coordinated', value: '18 judges' },
        { label: 'Scoring Criteria Dimensions', value: '5 pillars' },
        { label: 'Results Generation Time', value: '< 90 seconds' }
      ]
    },
    suggestedQuestions: [
      'What were the key takeaways from publishing no-code mobile applications to official app stores?',
      'How did you design the jury rubric to evaluate both technical ingenuity and human-centered feasibility?',
      'What advice do you give teams tackling social impact design under intense 48-hour time limits?'
    ]
  },
  {
    id: 'self-shopping-retail-app',
    codename: 'Project ScanFlow',
    title: 'Next-Generation Autonomous Self-Shopping & Mobile Checkout Companion',
    anonymousSector: 'Global Optical Barcode & Automated Sensor Solutions Giant',
    ndaShieldReason: 'Protected under strict trade secret NDA: Unreleased retail scan ergonomics, loss-prevention algorithms, and client trade IP are abstracted.',
    timeframe: 'Jan 2024 – Mar 2024',
    role: 'UX Research & Strategy Lead',
    category: 'mobile-retail',
    tags: ['Retail Tech', 'Self-Shopping', 'Competitive Benchmarking', 'Feature Prioritization', 'Mobile UX'],
    teamComposition: [
      '1 UX Research & Strategy Lead (Alessandra)',
      '1 Junior Designer (Research & Asset Support)',
      'Client Global Product Marketing & Innovation Executives'
    ],
    executiveSummary: 'Directed competitive intelligence benchmarking across premier self-scanning retail solutions, uncovering critical unmet shopper needs. Evaluated 45 feature concepts, synthesized 11 proprietary differentiation vectors, and delivered executive visual mockups that secured corporate budget for next-phase prototyping.',
    challenge: 'Retailers face high theft rates, barcode misreads, and shopper friction with existing dedicated handheld scanning devices. The client needed to know how their next-generation mobile companion could leapfrog competitors without bloating development cycles.',
    strategicIntervention: 'Formulated a multi-dimensional benchmarking matrix examining cognitive load during scanning, dynamic cart pricing, age verification bottlenecks, and exit-gate validation. Guided client executives through a ruthless prioritization workshop to isolate high-value differentiators.',
    methodology: [
      'In-Depth Competitive Benchmarking (2 Global Retail Scan Leaders)',
      'Cognitive Friction Mapping Across In-Store Shopping Journeys',
      'Value vs. Feasibility Feature Prioritization Matrix (45 candidates)',
      'High-Fidelity Mobile Interaction Concept Mockups'
    ],
    keyDeliverables: [
      'Comprehensive Retail Self-Shopping Market Benchmark Report',
      'Executive Feature Prioritization Deck (11 Distinct Opportunities)',
      'End-to-End Visual Mockup & Interactive Prototype',
      'Resource & Budget Optimization Strategy'
    ],
    measurableImpact: [
      { metric: '11 Novel', label: 'Differentiating Features', detail: 'Identified proprietary capabilities unaddressed by incumbent market leaders' },
      { metric: '45 Features', label: 'Prioritized & Streamlined', detail: 'Guided stakeholders to eliminate low-ROI features early, preventing scope creep' },
      { metric: '100% On-Time', label: 'Rapid Delivery', detail: 'Concluded discovery and interactive mockups within aggressive 8-week corporate window' }
    ],
    confidentialQAs: [
      {
        category: 'ux-strategy',
        question: 'What was the single biggest user friction point discovered in retail self-scanning?',
        answer: 'Weight mismatch errors and bag check confirmation. Shoppers felt criminalized whenever a false-positive mismatch occurred. We designed an empathetic self-reconciliation flow that guided the user to re-scan without humiliating red alerts.'
      },
      {
        category: 'business-impact',
        question: 'How did early resource allocation protect the project budget?',
        answer: 'By strictly defining the benchmark parameters upfront, we prevented the team from conducting open-ended secondary research. We directed 80% of efforts toward the 2 market benchmarks that mattered most to client leadership.'
      }
    ],
    interactiveArtifact: {
      type: 'benchmark-grid',
      title: 'Shopper Cognitive Load Matrix',
      description: 'Comparison of checkout friction points across competing scan solutions.',
      dataPoints: [
        { label: 'Barcode Acquisition Speed', value: '320 ms' },
        { label: 'Discrepancy Self-Resolution', value: '88% autonomous' },
        { label: 'Basket Verification Time', value: '4.2s at exit gate' },
        { label: 'Cart Abandonment Risk', value: '-34% projected' }
      ]
    },
    suggestedQuestions: [
      'How did you design for accidental mis-scans without creating an accusatory UX for honest customers?',
      'What research techniques best captured shopper behavior inside active supermarket aisles?',
      'How did the 11 feature concepts map to retailer loss-prevention requirements?'
    ]
  },
  {
    id: 'industrial-service-field-research',
    codename: 'Project Nexus-Service',
    title: 'Industrial Plant Field Research & Service Blueprinting',
    anonymousSector: 'Large-Scale Industrial Facility Engineering & Mechanical Contractor',
    ndaShieldReason: 'Protected under client service agreement: Plant maintenance logs, customer identity records, and proprietary building management configurations are sanitized.',
    timeframe: 'Jan 2024 – Mar 2024',
    role: 'ResearchOps Lead & Field Researcher',
    category: 'research-strategy',
    tags: ['Field Research', 'Service Design', 'Contextual Inquiry', 'Customer Journey Mapping', 'Mentorship'],
    teamComposition: [
      '1 ResearchOps Lead (Alessandra)',
      '1 Junior Researcher (Mentored in Field Interview Protocols)',
      'Client Service Operations & Field Maintenance Teams'
    ],
    executiveSummary: 'Led immersive on-site field research across 3 major industrial facilities, conducting contextual inquiries with facility managers, plant supervisors, and maintenance technicians. Uncovered deep systemic friction in service ticketing and translated raw operational pain into actionable service transformation blueprints.',
    challenge: 'The client struggled with recurring client complaints regarding delayed HVAC and electrical maintenance interventions. Their internal reporting was anecdotal, and organizational disorganization threatened customer retention across flagship contracts.',
    strategicIntervention: 'Crafted a resilient research plan with built-in contingencies that weathered last-minute client schedule changes. Mentored an internal junior researcher through their first field deployment. Mapped current-state breakdowns and generated 4 strategic evolutionary service scenarios.',
    methodology: [
      'On-Site Contextual Inquiry & Technician Shadowing',
      'Semi-Structured Stakeholder In-Depth Interviews (3 Industrial Sites)',
      'Current-State Service Blueprinting & Critical Failure Mode Analysis',
      'Junior Researcher Field Coaching & Synthesizing Workshop'
    ],
    keyDeliverables: [
      'Comprehensive Service Delivery Ecosystem Blueprint',
      'Field Research Synthesis: 18 Pain Points & Root Causes',
      '4 Strategic Evolutionary Scenarios for Service Modernization',
      'Standardized Field Research Safety & Ethics Protocol'
    ],
    measurableImpact: [
      { metric: '3 Sites', label: 'In-Depth Audits', detail: 'Completed immersive full-day observations across active industrial manufacturing plants' },
      { metric: '0 Days', label: 'Schedule Slippage', detail: 'Absorbed severe client scheduling cancellations via proactive contingency buffers' },
      { metric: '100% Upskill', label: 'Researcher Autonomy', detail: 'Empowered internal junior colleague to conduct independent qualitative interviews' }
    ],
    confidentialQAs: [
      {
        category: 'leadership',
        question: 'How did you handle the client’s severe internal disorganization during field planning?',
        answer: 'I anticipated volatility based on our initial discovery calls. I built modular research modules that could be executed independently if a factory manager was pulled away to an emergency breakdown, and pre-cleared backup participant slots.'
      },
      {
        category: 'ux-strategy',
        question: 'What was the most critical insight discovered regarding field technician communication?',
        answer: 'Technicians were bypassing the official digital logging tool entirely because it required 14 clicks to log a standard valve swap. They relied on private WhatsApp groups, causing critical maintenance histories to vanish from company records.'
      }
    ],
    interactiveArtifact: {
      type: 'workflow',
      title: 'Service Breakdown vs. Future State Blueprint',
      description: 'Journey stages where informal workarounds caused critical knowledge loss.',
      dataPoints: [
        { label: 'Unlogged Maintenance Actions', value: '42% via informal chat' },
        { label: 'Ticket Resolution Latency', value: 'Down 65% in blueprint' },
        { label: 'Customer Visibility Rating', value: 'Improved from 2.1 to 4.8/5' },
        { label: 'Preventive Alert Accuracy', value: '+78%' }
      ]
    },
    suggestedQuestions: [
      'How do you establish rapport with blue-collar plant technicians who view corporate researchers with skepticism?',
      'What frameworks did you use to prioritize the 18 identified pain points into executive-ready scenarios?',
      'How did you structure the junior researcher’s coaching without taking over the interview sessions?'
    ]
  },
  {
    id: 'trade-fair-hmi-benchmarks',
    codename: 'Project MarketLens',
    title: 'Dual Trade Fair Competitor HMI Benchmarks & Market Intelligence',
    anonymousSector: 'Automated Packaging Robotics & Architectural Profiling Machinery Leaders',
    ndaShieldReason: 'Protected under competitive strategy NDA: Direct competitor naming, photographed proprietary machine schematics, and comparative vulnerability matrices are anonymized.',
    timeframe: 'Feb 2024 – May 2024',
    role: 'Research Manager & International Fair Delegation Lead',
    category: 'research-strategy',
    tags: ['Competitive Benchmark', 'Trade Fair Field Research', 'Industrial UX Trends', 'Market Intelligence'],
    teamComposition: [
      '1 Research Manager & Delegation Lead (Alessandra)',
      '2 Junior/Mid Researchers (Field Observers & Data Collectors)',
      'Client Chief Technology Officers & Product Line Managers'
    ],
    executiveSummary: 'Spearheaded physical and desk benchmarking across 24 global industrial players at two European trade exhibitions (Fensterbau Frontale Nuremberg & Anuga Food Tech Cologne). Established a standardized evaluation methodology that provided client C-suites with strategic market roadmaps, directly triggering subsequent major HMI redesign mandates.',
    challenge: 'Clients in industrial machinery operate in multi-year capital expenditure cycles and often lack insight into modern digital UX innovations emerging across European and Asian competitors. Ad-hoc fair visits by sales engineers resulted in scattered photos and no actionable design intelligence.',
    strategicIntervention: 'Designed a structured field capture protocol covering screen ergonomics, visual styling, 3D digital twins, assistive diagnostics, and operator guidance. Led a 3-person delegation on-site, synthesizing findings into high-impact executive intelligence reports.',
    methodology: [
      'Standardized 15-Point Industrial HMI Evaluation Rubric',
      'On-Site Covert & Direct Field Observation (24 Global Competitors)',
      'Multi-Year Historical Trend Analysis & Technological Trajectory Mapping',
      'Junior Team Field Training on Rapid Data Capture & Photo Tagging'
    ],
    keyDeliverables: [
      'Fensterbau 2024 HMI Competitor Intelligence Report (13 Global Players)',
      'Anuga Food Tech 2024 HMI Benchmark Report (11 Global Players)',
      'Standardized Industrial Benchmark Framework & Field Capture Toolkit',
      'Strategic C-Suite Presentation on Emerging Industrial UX Paradigms'
    ],
    measurableImpact: [
      { metric: '24 Players', label: 'Globally Analyzed', detail: 'Synthesized physical and digital capabilities across top industrial machinery manufacturers' },
      { metric: '2 New', label: 'Client Mandates', detail: 'Benchmark findings directly persuaded clients to commission full corporate HMI overhauls' },
      { metric: '100% Reusable', label: 'Standardized Toolkit', detail: 'Created persistent agency methodology utilized across subsequent trade fair engagements' }
    ],
    confidentialQAs: [
      {
        category: 'ux-strategy',
        question: 'What macroeconomic and UX trends emerged from the 24 industrial machinery benchmarks?',
        answer: 'Three distinct waves: (1) Transition from 4:3 resistive touchscreens to 16:9 capacitive multi-touch; (2) Integration of 3D digital twins for collision prevention; (3) Operator onboarding wizards to combat the critical shortage of skilled CNC machinists in Europe.'
      },
      {
        category: 'leadership',
        question: 'How did you balance the tight budget with the expense of sending 3 researchers to international fairs?',
        answer: 'I standardized the capture template so observation and tagging took minutes per booth instead of hours. While the physical travel hours created a slight budget variance (+14 to +16 hours), the client recognized the immense strategic value and immediately rewarded us with major HMI redesign contracts.'
      }
    ],
    interactiveArtifact: {
      type: 'benchmark-grid',
      title: '24-Competitor Industrial UX Maturity Spectrum',
      description: 'Distribution of evaluated machinery players across interaction maturity tiers.',
      dataPoints: [
        { label: 'Legacy Industrial (Tier 1)', value: '38% of players' },
        { label: 'Modern Responsive (Tier 2)', value: '46% of players' },
        { label: 'Next-Gen Assistive AI (Tier 3)', value: '16% of players' },
        { label: 'Average Screen Size Jump', value: '12" -> 21.5" standard' }
      ]
    },
    suggestedQuestions: [
      'How did you gather candid feedback from competitor booth engineers on the show floor?',
      'What were the key differences between food packaging automation and architectural milling HMIs?',
      'How did the benchmark deliverable convert into a multimillion-euro redesign contract?'
    ]
  },
  {
    id: 'designops-delivery-health-intranet',
    codename: 'Project OpsCore & CrEW',
    title: 'Enterprise Design Operations, Delivery Health & Knowledge Intranet',
    anonymousSector: 'Premier Strategic Innovation Design Practice',
    ndaShieldReason: 'Internal agency intellectual property and client performance review records sanitized in accordance with ISO 9001 and GDPR privacy regulations.',
    timeframe: 'Jan 2024 – Dec 2024',
    role: 'ResearchOps Person of Reference & Design Operations Lead',
    category: 'designops',
    tags: ['DesignOps', 'ResearchOps', 'ISO 9001', 'Airtable Systems', 'Agency Infrastructure', 'Knowledge Management'],
    teamComposition: [
      '1 Operations & ResearchOps Lead (Alessandra)',
      '1 Co-Lead Operations Partner (Clara R.)',
      'Entire Multi-Disciplinary Design Studio (25+ Practitioners & Leadership)'
    ],
    executiveSummary: 'Spearheaded internal agency transformation by engineering automated project management dashboards, ISO 9001-certified performance review architectures, and the company-wide "CrEW" intranet. Created an extensive 65-term Tech & Design Video Glossary, establishing a unified institutional language across the practice.',
    challenge: 'Fast growth across 15+ concurrent international projects outpaced existing Dropbox Paper tables. Project managers lacked real-time visibility into project "temperature" and burn rates, while knowledge was siloed, hampering junior designer onboarding.',
    strategicIntervention: 'Architected an integrated Airtable ecosystem tracking delivery health, client satisfaction, and Time Value Analysis. Designed an interactive agency Intranet with presence planning, best practices, innovation idea scoreboards, and authored a 65-entry video educational glossary.',
    methodology: [
      'Airtable Interface Design for Executive Portfolio Health Monitoring',
      'Time Value Analysis Logging & Predictive Burn-Rate Modeling',
      'ISO 9001 Quality Audit Compliance Architecture',
      'Curriculum Development: 65 Tech & Design Educational Video Capsules'
    ],
    keyDeliverables: [
      'Delivery Health Dashboard ("Project Temperature" & Burn-Rate Tracker)',
      'ISO 9001-Compliant HR Performance Review & Feedback System',
      'CrEW Company Intranet (Presences, Best Practices, Idea Board)',
      '65-Term Video Glossary of Tech & Design Terminology'
    ],
    measurableImpact: [
      { metric: '> 50%', label: 'Profit Margin Achieved', detail: 'Burn-rate automation delivered over 50% profit margin on enterprise support retainers' },
      { metric: 'ISO 9001', label: 'Quality Certification', detail: 'Performance review architecture met strict criteria required for enterprise ISO certification' },
      { metric: '65 Videos', label: 'Knowledge Capsules', detail: 'Independently authored comprehensive glossary leveling up cross-functional tech fluency' }
    ],
    confidentialQAs: [
      {
        category: 'leadership',
        question: 'How did you establish yourself as the "Person of Reference" for ResearchOps across the studio?',
        answer: 'By creating pragmatic, accessible toolkits rather than abstract theory. I instituted weekly office hours, authored video guides, and built frictionless templates in Airtable and Figma that saved designers 4+ hours per sprint.'
      },
      {
        category: 'business-impact',
        question: 'How did the Delivery Dashboard directly protect project profitability?',
        answer: 'It automated the calculation of burn rate vs. client-perceived value. When a project dipped below expected velocity, the dashboard alerted managers immediately, allowing us to renegotiate scope or adjust staffing before margins eroded.'
      }
    ],
    interactiveArtifact: {
      type: 'dashboard-spec',
      title: 'Agency Project Temperature & Burn-Rate Monitor',
      description: 'Real-time telemetry measuring client happiness index against budget burn velocity.',
      dataPoints: [
        { label: 'Active Managed Accounts', value: '15+ projects' },
        { label: 'Average Support Margin', value: '54.2%' },
        { label: 'On-Time Milestone Rate', value: '98.4%' },
        { label: 'ISO 9001 Audit Score', value: '100% compliant' }
      ]
    },
    suggestedQuestions: [
      'What were the most challenging metrics to quantify when defining "Project Temperature"?',
      'How did you motivate designers to actively contribute to the Innovation Insights leaderboard?',
      'How did the 65-term video glossary accelerate onboarding for new team hires?'
    ]
  }
];

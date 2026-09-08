export type ProjectCategory = 
  | 'all'
  | 'hmi-industrial'
  | 'design-systems'
  | 'research-strategy'
  | 'mobile-retail'
  | 'designops';

export interface ProjectQA {
  question: string;
  answer: string;
  category: 'leadership' | 'ux-strategy' | 'technical-constraints' | 'business-impact';
}

export interface MetricHighlight {
  metric: string;
  label: string;
  detail: string;
}

export interface InteractiveArtifact {
  type: 'workflow' | 'system-architecture' | 'benchmark-grid' | 'dashboard-spec';
  title: string;
  description: string;
  dataPoints?: { label: string; value: string | number }[];
}

export interface UserEnrichedNote {
  id: string;
  addedAt: string;
  title: string;
  content: string;
  category: string;
  sourceType: 'manual' | 'pdf' | 'figma';
}

export interface AnonymousProject {
  id: string;
  title: string;
  codename: string;
  anonymousSector: string;
  ndaShieldReason: string;
  timeframe: string;
  role: string;
  teamComposition: string[];
  category: ProjectCategory;
  tags: string[];
  executiveSummary: string;
  challenge: string;
  strategicIntervention: string;
  methodology: string[];
  keyDeliverables: string[];
  measurableImpact: MetricHighlight[];
  designSystemHighlights?: string[];
  confidentialQAs: ProjectQA[];
  interactiveArtifact: InteractiveArtifact;
  suggestedQuestions: string[];
  userEnrichedNotes?: UserEnrichedNote[];
  figmaUrlPlaceholder?: string;
}

export interface UserProfile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  currentFocus: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  languages: { language: string; level: string }[];
  education: { degree: string; institution: string; years: string; honors?: string }[];
  recognition: { title: string; organization: string; year?: string; description: string }[];
  competencies: string[];
  tools: { category: string; items: string[] }[];
}

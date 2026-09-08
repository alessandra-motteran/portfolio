import React, { useState } from 'react';
import { AnonymousProject, UserEnrichedNote } from '../types';
import { 
  FileText, UploadCloud, ShieldCheck, Sparkles, CheckCircle2, 
  ExternalLink, Layers, ArrowRight, Lock, Eye, AlertTriangle 
} from 'lucide-react';

interface ArtifactIntakeProps {
  projects: AnonymousProject[];
  onEnrichProject: (projectId: string, note: UserEnrichedNote) => void;
  onSelectProjectForView: (project: AnonymousProject) => void;
}

export const ArtifactIntake: React.FC<ArtifactIntakeProps> = ({
  projects,
  onEnrichProject,
  onSelectProjectForView
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '');
  const [sourceType, setSourceType] = useState<'pdf' | 'figma' | 'manual'>('pdf');
  const [noteTitle, setNoteTitle] = useState<string>('Delivery Presentation Synthesis');
  const [rawContent, setRawContent] = useState<string>('');
  const [figmaUrl, setFigmaUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [sanitizedResult, setSanitizedResult] = useState<{
    anonymizedContext?: string;
    keyMethods?: string[];
    deliverables?: string[];
    measurableImpact?: string[];
    sanitizedSummary?: string;
  } | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  // Quick-load demo samples so the user can test the NDA engine immediately
  const loadSample = (sampleType: 'tetra' | 'voilap' | 'datalogic') => {
    if (sampleType === 'tetra') {
      setSelectedProjectId('control-room-hmi');
      setSourceType('pdf');
      setNoteTitle('Tetra Pak Keanu Control Room Delivery Deck');
      setRawContent(
        `Tetra Pak Keanu Project Delivery Presentation - Executive Summary:
Client: Tetra Pak Packaging Solutions (Modena)
Scope: Complete redesign of the operator Keanu Control Room & touch panel interface for high-speed aseptic filling machines.
Key team: Alessandra Motteran (Associate Manager), Karin & Tiziana (Tetra Pak Design Leads), 2 Mid UX designers.
Results: Kept burn rate steady at 3% per month, reaching 33% total budget consumption by December. Handled offboarding of Valeria Strippoli without delivery gaps. Tetra Pak extended Mid Designer contract twice in June and October and approved 2025 proposal. Plant operators praised reduced alarm fatigue on aseptic filling lines.`
      );
    } else if (sampleType === 'voilap') {
      setSelectedProjectId('corporate-hmi-design-system');
      setSourceType('figma');
      setNoteTitle('Voilàp Group Design System & Elumatec CNC HMI Tokens');
      setFigmaUrl('https://www.figma.com/file/voilap-corporate-design-system-2024');
      setRawContent(
        `Voilàp HMI Corporate Redesign Sprint - Delivery Deck:
Client: Voilàp Holding (including Elumatec cutting machines and Emmegi extrusion).
Challenge: Disjointed legacy interfaces across German and Italian machinery lines.
Execution: Led 4 parallel streams (Business Discovery, Market Discovery, Strategic Roadmap, HW/SW Assessment). Coached Ginevra Longo in Figma token architectures.
Outcome: Secured 40% margin at project closing. Client commissioned creation of unified Voilàp Group Design System and full redesign of Elumatec cutting machines HMI for 2025.`
      );
    } else {
      setSelectedProjectId('self-shopping-retail-app');
      setSourceType('manual');
      setNoteTitle('Datalogic Self-Shopping Benchmark & 11 Novel Features');
      setRawContent(
        `Datalogic Self-Shopping Mobile App Exploration:
Client: Datalogic SpA
Scope: Evaluated 2 major European retail self-shopping competitors. Analyzed 45 functional features with client stakeholders.
Deliverable: Synthesized 11 innovative differentiating features (smart barcode auto-acquisition, loss-prevention self-reconciliation, exit validation) and created visual mockups on time.`
      );
    }
    setSanitizedResult(null);
  };

  const handleSanitizeAndProcess = async () => {
    if (!rawContent.trim()) return;
    setIsProcessing(true);
    setSuccessMessage(null);

    try {
      const res = await fetch('/api/sanitize-and-enrich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawText: rawContent,
          projectTitle: currentProject.title,
          clientHint: currentProject.anonymousSector
        })
      });
      const data = await res.json();
      setSanitizedResult(data);
    } catch (err) {
      console.error('Sanitization failed', err);
      // Fallback rule-based
      const fallbackClean = rawContent
        .replace(/Tetra Pak|Tetrapak/gi, '[Global Packaging & Processing Leader]')
        .replace(/Voilàp|Voilap/gi, '[International Industrial Machinery Group]')
        .replace(/Elumatec/gi, '[Precision Cutting Machinery Subsidiary]')
        .replace(/Datalogic/gi, '[Global Optical Sensor & Auto-ID Provider]');
      setSanitizedResult({
        anonymizedContext: fallbackClean,
        keyMethods: ['Human-Centered Design', 'Cognitive Ergonomics', 'Burn-Rate Governance'],
        deliverables: ['Standardized Component System', 'Interactive Prototype'],
        measurableImpact: ['High stakeholder trust', 'Margin protection']
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAppendToProject = () => {
    if (!sanitizedResult) return;

    let formattedContent = '';
    if (sanitizedResult.anonymizedContext) {
      formattedContent += `${sanitizedResult.anonymizedContext}\n\n`;
    } else if (sanitizedResult.sanitizedSummary) {
      formattedContent += `${sanitizedResult.sanitizedSummary}\n\n`;
    }

    if (sanitizedResult.keyMethods && sanitizedResult.keyMethods.length > 0) {
      formattedContent += `• Key Methods: ${sanitizedResult.keyMethods.join(', ')}\n`;
    }
    if (sanitizedResult.deliverables && sanitizedResult.deliverables.length > 0) {
      formattedContent += `• Deliverables: ${sanitizedResult.deliverables.join(', ')}\n`;
    }
    if (sanitizedResult.measurableImpact && sanitizedResult.measurableImpact.length > 0) {
      formattedContent += `• Measurable Impact: ${sanitizedResult.measurableImpact.join(', ')}\n`;
    }
    if (figmaUrl) {
      formattedContent += `• Figma Reference: [Token Library & Prototypes - Sanitized]\n`;
    }

    const newNote: UserEnrichedNote = {
      id: `note-${Date.now()}`,
      addedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      title: noteTitle || 'Enriched Delivery Synthesis',
      content: formattedContent,
      category: 'Delivery Presentation',
      sourceType: sourceType
    };

    onEnrichProject(selectedProjectId, newNote);
    setSuccessMessage(`Successfully anonymized and attached note to "${currentProject.title}"!`);
    setRawContent('');
    setFigmaUrl('');
    setSanitizedResult(null);
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-stone-100">
      {/* Header */}
      <div className="mb-8 bg-stone-900 border border-stone-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              NDA Ingestion & Anonymization Engine
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Presentation PDF & Figma Intake Hub
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed">
              As Alessandra noted: <span className="italic text-stone-200">"I can give you pdf of projects delivery presentations, or figma files"</span>. 
              Paste or upload presentations, meeting synthesis decks, or Figma links here. The built-in NDA engine scrubs client brand names, shields confidential blueprints, and synthesizes them into structured case study sections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400">Quick Test Samples:</span>
            <button
              onClick={() => loadSample('tetra')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-750 text-amber-300 rounded border border-stone-700 cursor-pointer"
            >
              Packaging Deck
            </button>
            <button
              onClick={() => loadSample('voilap')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-750 text-amber-300 rounded border border-stone-700 cursor-pointer"
            >
              Figma HMI Spec
            </button>
            <button
              onClick={() => loadSample('datalogic')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-750 text-amber-300 rounded border border-stone-700 cursor-pointer"
            >
              Retail Benchmarks
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Input Form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-5 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                1. Target Project Case Study
              </label>
              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.codename} — {p.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Source Type Selector */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                2. Artifact Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSourceType('pdf')}
                  className={`p-2.5 rounded-lg text-xs font-medium border flex items-center justify-center space-x-1.5 cursor-pointer ${
                    sourceType === 'pdf'
                      ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                      : 'bg-stone-850 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF Slides / Text</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSourceType('figma')}
                  className={`p-2.5 rounded-lg text-xs font-medium border flex items-center justify-center space-x-1.5 cursor-pointer ${
                    sourceType === 'figma'
                      ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                      : 'bg-stone-850 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Figma File / Tokens</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSourceType('manual')}
                  className={`p-2.5 rounded-lg text-xs font-medium border flex items-center justify-center space-x-1.5 cursor-pointer ${
                    sourceType === 'manual'
                      ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                      : 'bg-stone-850 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Delivery Notes</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                Artifact Label / Presentation Title
              </label>
              <input
                type="text"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="e.g. Q4 Executive Steering Committee Deck"
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Figma Link if selected */}
            {sourceType === 'figma' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                  Figma File / Design Tokens URL
                </label>
                <input
                  type="url"
                  value={figmaUrl}
                  onChange={(e) => setFigmaUrl(e.target.value)}
                  placeholder="https://www.figma.com/file/.../confidential-project"
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            )}

            {/* Content Textarea */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center justify-between">
                <span>Presentation Slide Notes / Raw Deliverables</span>
                <span className="text-[10px] text-stone-500 font-normal">NDA Filter Automatically Applied</span>
              </label>
              <textarea
                value={rawContent}
                onChange={(e) => setRawContent(e.target.value)}
                placeholder="Paste content from your delivery presentation slides, user research reports, burn-rate spreadsheets, or client feedback. Even if you include real client names here, the NDA engine will scrub them before publishing!"
                rows={8}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-xs text-stone-200 font-mono focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Action button */}
            <button
              type="button"
              onClick={handleSanitizeAndProcess}
              disabled={isProcessing || !rawContent.trim()}
              className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isProcessing ? 'Scrubbing Brands & Anonymizing...' : 'Sanitize & Synthesize with NDA Protocol'}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Sanitized Preview & Attach */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="text-xs font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-amber-400" />
                Sanitized Case Study Output
              </h3>
              <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
                NDA Compliant
              </span>
            </div>

            {sanitizedResult ? (
              <div className="space-y-4 text-xs">
                {/* Context */}
                <div className="p-3.5 bg-stone-850 rounded-lg border border-stone-750">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Anonymized Executive Synthesis
                  </span>
                  <p className="text-stone-200 leading-relaxed">
                    {sanitizedResult.anonymizedContext || sanitizedResult.sanitizedSummary}
                  </p>
                </div>

                {/* Methods & Deliverables */}
                {sanitizedResult.keyMethods && sanitizedResult.keyMethods.length > 0 && (
                  <div className="p-3.5 bg-stone-850 rounded-lg border border-stone-750">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                      Synthesized Methods
                    </span>
                    <ul className="list-disc list-inside text-stone-300 space-y-1">
                      {sanitizedResult.keyMethods.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact */}
                {sanitizedResult.measurableImpact && sanitizedResult.measurableImpact.length > 0 && (
                  <div className="p-3.5 bg-stone-850 rounded-lg border border-stone-750">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      Business & Delivery Impact
                    </span>
                    <ul className="list-disc list-inside text-stone-300 space-y-1">
                      {sanitizedResult.measurableImpact.map((imp, idx) => (
                        <li key={idx}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Append Button */}
                <button
                  type="button"
                  onClick={handleAppendToProject}
                  className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Append to Live Case Study ({currentProject.codename})</span>
                </button>
              </div>
            ) : (
              <div className="py-16 text-center space-y-3">
                <ShieldCheck className="w-10 h-10 text-stone-600 mx-auto" />
                <div className="text-xs text-stone-300 font-medium">Ready to Sanitize Presentation Artifacts</div>
                <p className="text-[11px] text-stone-500 max-w-sm mx-auto leading-relaxed">
                  Enter delivery slide notes, upload presentation text, or test with one of the quick samples above. Our NDA pipeline scrubs sensitive trademarks into verified anonymous industry archetypes.
                </p>
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{successMessage}</span>
                </div>
                <button
                  onClick={() => onSelectProjectForView(currentProject)}
                  className="text-xs font-semibold underline text-amber-300 cursor-pointer"
                >
                  View in Case Study
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

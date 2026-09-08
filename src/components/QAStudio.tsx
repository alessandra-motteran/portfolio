import React, { useState } from 'react';
import { AnonymousProject } from '../types';
import { 
  Sparkles, ShieldCheck, MessageSquare, Plus, CheckCircle2, 
  Send, RefreshCw, Lock, HelpCircle, FileText, ChevronRight 
} from 'lucide-react';

interface QAStudioProps {
  projects: AnonymousProject[];
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
  onSaveAnswer: (projectId: string, question: string, answer: string) => void;
}

export const QAStudio: React.FC<QAStudioProps> = ({
  projects,
  selectedProjectId,
  onSelectProject,
  onSaveAnswer
}) => {
  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const [activeQuestion, setActiveQuestion] = useState<string>(
    currentProject?.suggestedQuestions[0] || 'How did you establish stakeholder alignment in this project?'
  );
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [dynamicQuestions, setDynamicQuestions] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Switch project handler
  const handleProjectChange = (newId: string) => {
    onSelectProject(newId);
    const newProj = projects.find((p) => p.id === newId);
    if (newProj && newProj.suggestedQuestions.length > 0) {
      setActiveQuestion(newProj.suggestedQuestions[0]);
    }
    setUserAnswer('');
    setDynamicQuestions([]);
  };

  // Generate more probing questions via server endpoint
  const handleGenerateQuestions = async () => {
    setIsGenerating(true);
    setStatusMessage(null);
    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectTitle: currentProject.title,
          anonymousSector: currentProject.anonymousSector,
          role: currentProject.role,
          summary: currentProject.executiveSummary,
          existingQAs: currentProject.confidentialQAs.map((q) => q.question)
        })
      });
      const data = await res.json();
      if (data.questions && Array.isArray(data.questions)) {
        setDynamicQuestions(data.questions);
        if (data.questions[0]) {
          setActiveQuestion(data.questions[0]);
        }
      }
    } catch (err) {
      console.error('Failed to generate AI questions', err);
      // Fallback
      setDynamicQuestions([
        `How did you track and control burn-rate throughout ${currentProject.codename}?`,
        `What qualitative research techniques were most effective in the ${currentProject.anonymousSector} domain?`,
        `How did you overcome resistance from client engineering teams?`
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  // Save the answer to the case study
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    // Automatic local check to warn or sanitize if client names are typed
    let cleanAnswer = userAnswer
      .replace(/Tetra Pak|Tetrapak/gi, '[Global Packaging Leader]')
      .replace(/Voilàp|Voilap/gi, '[Industrial Machinery Conglomerate]')
      .replace(/Datalogic/gi, '[Barcode & Sensor Solutions Giant]')
      .replace(/NYUAD/gi, '[International Academic Institution in UAE]')
      .replace(/Ing Ferrari|Ferrari/gi, '[Industrial Plant Engineering Contractor]')
      .replace(/Motiqa|Clevertech/gi, '[Industrial Equipment Specialist]');

    onSaveAnswer(currentProject.id, activeQuestion, cleanAnswer);
    setUserAnswer('');
    setStatusMessage('Response saved directly into the Project Case Study under NDA compliance!');
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const allQuestions = [
    ...currentProject.suggestedQuestions,
    ...dynamicQuestions
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-stone-100">
      {/* Header Banner */}
      <div className="mb-8 bg-stone-900 border border-stone-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Interactive Interview & Probing Assistant
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Project Deep-Dive Q&A Studio
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed">
              As Alessandra noted: <span className="italic text-stone-200">"You can ask me details on any projects, the important is that they are anonymous because I CANNOT use the companies name as they signed NDA."</span> This interactive studio allows recruiters, interviewers, and stakeholders to select any project, ask executive-level design leadership questions, and capture answers with automatic NDA sanitization.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs bg-stone-850 p-3 rounded-xl border border-stone-800 text-stone-300">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">NDA Shield Active</div>
              <div className="text-[11px] text-stone-400">All saved notes are automatically sanitized</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Project Selector & Question Bank */}
        <div className="lg:col-span-5 space-y-6">
          {/* Project Selector */}
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-4 space-y-3">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
              1. Select Anonymous Project
            </label>
            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProjectChange(p.id)}
                  className={`w-full text-left p-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                    p.id === currentProject.id
                      ? 'bg-amber-500/15 border-amber-500/40 text-white'
                      : 'bg-stone-850 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 font-mono text-[11px]">
                      {p.codename}
                    </span>
                    <span className="text-[10px] text-stone-500">{p.timeframe}</span>
                  </div>
                  <div className="font-semibold text-stone-200 truncate mt-0.5">
                    {p.title}
                  </div>
                  <div className="text-[10px] text-stone-400 truncate mt-0.5">
                    {p.anonymousSector}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Bank */}
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                2. Select or Generate a Question
              </label>
              <button
                onClick={handleGenerateQuestions}
                disabled={isGenerating}
                className="flex items-center space-x-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Thinking...' : 'AI Generate Questions'}</span>
              </button>
            </div>

            <div className="space-y-2">
              {allQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuestion(q)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition-colors cursor-pointer border ${
                    activeQuestion === q
                      ? 'bg-stone-800 border-amber-400/80 text-white font-medium'
                      : 'bg-stone-850/60 border-stone-800 text-stone-300 hover:bg-stone-800/80'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{q}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active Question, Answer Workspace & Existing Q&A */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Question Answer Form */}
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-5 space-y-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase text-amber-400 tracking-wider">
                Active Interview Prompt • {currentProject.codename}
              </span>
              <div className="p-3.5 bg-stone-850 rounded-lg border border-stone-750 text-sm font-semibold text-white flex items-start space-x-2">
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{activeQuestion}</span>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <label className="text-xs font-semibold text-stone-300 block">
                Provide or Refine Details (Alessandra or Interviewer Notes)
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type details on methodologies, stakeholder pushbacks, burn-rate milestones, or operator feedback here. Note: Any real company names typed will be automatically scrubbed to maintain NDA compliance."
                rows={5}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center space-x-1.5 text-[11px] text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Auto-scrubs client trademarks into anonymous archetypes</span>
                </div>

                <button
                  type="submit"
                  disabled={!userAnswer.trim()}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Save Answer to Case Study</span>
                </button>
              </div>

              {statusMessage && (
                <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Existing Curated Answers for this Project */}
          <div className="bg-stone-900 rounded-xl border border-stone-800 p-5 space-y-4">
            <h3 className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center justify-between">
              <span>Verified Case Study Responses ({currentProject.confidentialQAs.length})</span>
              <span className="text-[11px] text-amber-400 font-mono">Executive & Strategic View</span>
            </h3>

            <div className="space-y-3">
              {currentProject.confidentialQAs.map((qa, idx) => (
                <div key={idx} className="p-4 bg-stone-850 rounded-xl border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-amber-300">
                      Q: {qa.question}
                    </h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700">
                      {qa.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 pl-4 border-l-2 border-stone-700 leading-relaxed">
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

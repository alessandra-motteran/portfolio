import React from 'react';
import { X, Printer, ShieldCheck, Download, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { AnonymousProject, UserProfile } from '../types';

interface ExportSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  projects: AnonymousProject[];
}

export const ExportSummaryModal: React.FC<ExportSummaryModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 p-6 sm:p-8 space-y-6 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">Executive Portfolio Summary Brief</h2>
              <p className="text-[11px] text-stone-400">Standardized Confidential Candidate Assessment Document</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Dossier */}
        <div className="space-y-6 text-xs text-stone-300 leading-relaxed bg-stone-950 p-6 rounded-xl border border-stone-800/80">
          {/* Header */}
          <div className="border-b border-stone-800 pb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white font-sans">{profile.name}</h1>
              <div className="text-sm font-semibold text-amber-400 mt-0.5">{profile.title}</div>
              <p className="text-stone-400 text-xs mt-1 max-w-xl">{profile.bio}</p>
            </div>

            <div className="text-right text-stone-400 space-y-1 font-mono text-[11px]">
              <div>{profile.location}</div>
              <div className="text-stone-200">{profile.email}</div>
              <div>{profile.phone}</div>
              <div className="text-amber-400">Strict NDA Shield Active</div>
            </div>
          </div>

          {/* Key Leadership Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
              <div className="text-xl font-bold text-amber-400 font-mono">15+ Projects</div>
              <div className="text-[10px] text-stone-400 mt-0.5">International Delivery</div>
            </div>
            <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
              <div className="text-xl font-bold text-emerald-400 font-mono">40-50%+</div>
              <div className="text-[10px] text-stone-400 mt-0.5">Profit Margins Achieved</div>
            </div>
            <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
              <div className="text-xl font-bold text-sky-400 font-mono">24 Players</div>
              <div className="text-[10px] text-stone-400 mt-0.5">HMI Benchmarking</div>
            </div>
            <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
              <div className="text-xl font-bold text-purple-400 font-mono">ISO 9001</div>
              <div className="text-[10px] text-stone-400 mt-0.5">Process Quality Audit</div>
            </div>
          </div>

          {/* Project Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-1">
              Anonymous Case Studies Overview (7 Key Engagements)
            </h3>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-stone-900 rounded-lg border border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-amber-400 font-mono text-xs">{proj.codename}</span>
                      <span className="text-stone-500">•</span>
                      <span className="font-semibold text-white text-xs">{proj.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">{proj.timeframe}</span>
                  </div>

                  <div className="text-[11px] text-stone-400 italic">
                    Sector: {proj.anonymousSector} | Role: {proj.role}
                  </div>

                  <p className="text-[11px] text-stone-300">
                    {proj.executiveSummary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.measurableImpact.map((m, i) => (
                      <span key={i} className="text-[10px] bg-stone-800 px-2 py-0.5 rounded text-stone-300 border border-stone-750">
                        <strong className="text-amber-300">{m.metric}</strong> {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="border-t border-stone-800 pt-3 flex flex-wrap justify-between gap-4 text-[11px] text-stone-400">
            <div>
              <strong className="text-stone-200">Education:</strong> Master’s in Innovation Design (110/110 con Lode, Univ. Ferrara) • Bachelor’s in Industrial Design (Univ. Bologna)
            </div>
            <div>
              <strong className="text-stone-200">Accolades:</strong> NYU Abu Dhabi Hackathon Keynote & Judge • Think4Food Challenge 2020 Winner • CERN Innovation Sprint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

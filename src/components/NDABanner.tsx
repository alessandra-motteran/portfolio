import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { ContentTranslation } from '../data/portfolioContent';

interface NDABannerProps {
  content: ContentTranslation;
}

export const NDABanner: React.FC<NDABannerProps> = ({ content }) => {
  const { ndaNote } = content;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 text-white shadow-md relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-800 text-rose-300 text-[11px] font-bold uppercase tracking-wider border border-stone-700">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
              <span>{ndaNote.badge}</span>
            </div>
            
            <h3 className="text-sm sm:text-base font-bold text-white">
              {ndaNote.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {ndaNote.text}
            </p>
          </div>

          <div className="shrink-0 p-3 rounded-2xl bg-stone-800/90 border border-stone-700 text-xs font-medium text-stone-200 flex items-center gap-2 shadow-2xs">
            <Lock className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="text-[11px] leading-tight max-w-[220px] text-stone-300">
              {ndaNote.confidentialBadge}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

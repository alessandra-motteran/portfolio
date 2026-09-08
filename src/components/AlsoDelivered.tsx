import React from 'react';
import { Archive, CheckCircle2 } from 'lucide-react';
import { ContentTranslation, AlsoDeliveredItem } from '../data/portfolioContent';

interface AlsoDeliveredProps {
  content: ContentTranslation;
}

export const AlsoDelivered: React.FC<AlsoDeliveredProps> = ({ content }) => {
  const { alsoDelivered } = content;

  return (
    <section id="also-delivered-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200 text-xs font-semibold">
          <Archive className="w-3.5 h-3.5 text-rose-600" />
          <span>{alsoDelivered.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          {alsoDelivered.title}
        </h2>

        <p className="text-sm text-stone-600 leading-relaxed">
          {alsoDelivered.subtitle}
        </p>
      </div>

      {/* Index Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {alsoDelivered.items.map((item: AlsoDeliveredItem) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-stone-200/90 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-rose-300 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider font-mono">
                  {item.codename}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/60">
                  {item.role}
                </span>
              </div>

              <h3 className="text-sm font-bold text-stone-900 leading-snug">
                {item.title}
              </h3>

              <div className="text-xs text-stone-500 italic">
                {item.sectorScale}
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-stone-100">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px] text-stone-800 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item.impact}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

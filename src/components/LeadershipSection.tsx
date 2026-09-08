import React from 'react';
import { Heart, Search, TrendingUp, Layers, Quote, Sparkles } from 'lucide-react';
import { ContentTranslation, LeadershipPillar } from '../data/portfolioContent';

interface LeadershipSectionProps {
  content: ContentTranslation;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  content
}) => {
  const { leadership } = content;

  // Icon mapping
  const renderPillarIcon = (name: string) => {
    switch (name) {
      case 'Heart': return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Search': return <Search className="w-5 h-5 text-rose-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-rose-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="leadership-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200/80 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>{leadership.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          {leadership.title}
        </h2>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {leadership.subtitle}
        </p>
      </div>

      {/* Quote Banner (Dark Theme) */}
      <div className="p-6 sm:p-7 rounded-3xl bg-stone-900 border border-stone-800 text-stone-100 flex items-start gap-4 shadow-md">
        <div className="p-2.5 rounded-2xl bg-stone-800 text-rose-400 border border-stone-700/80 shadow-2xs shrink-0">
          <Quote className="w-5 h-5" />
        </div>
        <div className="text-sm sm:text-base font-medium italic text-stone-200 leading-relaxed pt-1">
          {leadership.quote}
        </div>
      </div>

      {/* 3 Pillars Grid (Harmonized, elegant 3-column managerial layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {leadership.pillars.map((pillar: LeadershipPillar) => {
          return (
            <div
              key={pillar.id}
              className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-xs transition-all hover:shadow-md hover:border-rose-300 flex flex-col justify-start"
            >
              {/* Pillar Title & Icon Header (Wrapped for full readability, no truncation) */}
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 shadow-2xs shrink-0 mt-0.5">
                  {renderPillarIcon(pillar.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="text-xs sm:text-[13px] font-semibold text-stone-700 mt-1 leading-snug">
                    {pillar.subtitle}
                  </div>
                </div>
              </div>

              {/* Single lean authoritative description */}
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pt-3 border-t border-stone-100 flex-1">
                {pillar.description}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
};

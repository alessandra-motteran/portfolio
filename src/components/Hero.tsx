import React from 'react';
import { ArrowDown, Sparkles, TrendingUp, Layers, Users, Building2 } from 'lucide-react';
import { ContentTranslation } from '../data/portfolioContent';

interface HeroProps {
  content: ContentTranslation;
  onExploreProjects: () => void;
  onExploreLeadership: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  content,
  onExploreProjects,
  onExploreLeadership
}) => {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Subtle warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Intro Header */}
      <div className="space-y-6 max-w-5xl">
        
        {/* Soft Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>{hero.badge}</span>
        </div>

        {/* Display Typography */}
        <div className="space-y-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-stone-500 uppercase">
            {hero.greeting}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
            {hero.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-4xl">
            {hero.subtitle}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onExploreProjects}
            className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{hero.ctaWork}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreLeadership}
            className="px-5 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm border border-stone-200 transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>{hero.ctaLeadership}</span>
          </button>
        </div>

      </div>

      {/* 4 Metric Cards spanning the full width of the container */}
      <div className="w-full pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {hero.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="w-full p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 hover:border-rose-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl lg:text-4xl font-black tracking-tight font-mono text-stone-900">
                  {stat.value}
                </span>
                <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-rose-100/70 transition-colors">
                  {idx === 0 && <Layers className="w-4 h-4" />}
                  {idx === 1 && <TrendingUp className="w-4 h-4" />}
                  {idx === 2 && <Building2 className="w-4 h-4" />}
                  {idx === 3 && <Users className="w-4 h-4" />}
                </div>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-stone-600 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

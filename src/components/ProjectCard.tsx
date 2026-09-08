import React from 'react';
import { 
  Building2, Users, Sparkles, Layers, 
  Shield, Eye, Layout, GitMerge, Briefcase, TrendingUp, Cpu, Award, 
  Repeat, BarChart2, Sliders, Search, FileText, MapPin, Compass, 
  ShieldCheck, Smartphone, CheckSquare, Zap, Smile 
} from 'lucide-react';
import { LocalizedProject } from '../data/portfolioContent';
import { ProjectIllustration } from './ProjectIllustration';

interface ProjectCardProps {
  project: LocalizedProject;
  contextLabel: string;
  roleLabel: string;
  outcomeLabel: string;
}

// Icon helper for dynamic icon names in pill tags
const renderPillIcon = (name: string) => {
  const iconProps = { className: "w-3 h-3 shrink-0" };
  switch (name) {
    case 'Shield': return <Shield {...iconProps} />;
    case 'Eye': return <Eye {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'GitMerge': return <GitMerge {...iconProps} />;
    case 'Briefcase': return <Briefcase {...iconProps} />;
    case 'TrendingUp': return <TrendingUp {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'Repeat': return <Repeat {...iconProps} />;
    case 'BarChart2': return <BarChart2 {...iconProps} />;
    case 'Sliders': return <Sliders {...iconProps} />;
    case 'Search': return <Search {...iconProps} />;
    case 'FileText': return <FileText {...iconProps} />;
    case 'MapPin': return <MapPin {...iconProps} />;
    case 'Compass': return <Compass {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'CheckSquare': return <CheckSquare {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Smile': return <Smile {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  contextLabel,
  roleLabel,
  outcomeLabel
}) => {
  return (
    <div className="rounded-3xl bg-white border border-stone-200/90 hover:border-rose-300 transition-all duration-300 p-5 sm:p-7 shadow-xs hover:shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Title + Chip + Tags FIRST, then Visual Asset BELOW (5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* 1. Sector + Scale descriptor & Timeframe */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200/70">
                  <Building2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>{project.sectorScale}</span>
                </span>
                <span className="text-[11px] font-mono text-stone-500">
                  {project.timeframe}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                {project.title}
              </h3>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.pillTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-stone-100 text-stone-700 border border-stone-200/70"
                  >
                    {renderPillIcon(tag.icon)}
                    <span>{tag.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Visual Static Illustration Frame Below */}
            <ProjectIllustration
              codename={project.codename}
              defaultIllustration={project.defaultIllustration}
              colorTheme={project.colorTheme}
            />
          </div>
        </div>

        {/* Right Column: Structured Narrative & Metrics (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          
          {/* 3 Structured Narrative Text Boxes */}
          <div className="space-y-3 text-xs">
            
            {/* 1. Context Box */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-stone-600">
                <Layers className="w-3.5 h-3.5 text-stone-500" />
                <span>{contextLabel}</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {project.context}
              </p>
            </div>

            {/* 2. Role & Leadership Box */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-rose-800">
                <Users className="w-3.5 h-3.5 text-rose-600" />
                <span>{roleLabel}</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                {project.role}
              </p>
            </div>

            {/* 3. Outcome & Impact Box */}
            <div className="p-3.5 rounded-2xl bg-rose-50/40 border border-rose-200/60 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-rose-900">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>{outcomeLabel}</span>
              </div>
              <p className="leading-relaxed text-stone-800">
                {project.outcome}
              </p>
            </div>

          </div>

          {/* Vaguer Metrics Badges */}
          <div className="pt-2">
            <div className="grid grid-cols-3 gap-2.5">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl text-center flex flex-col justify-center bg-stone-50 border border-stone-200/80 text-stone-900"
                >
                  <div className="text-sm sm:text-base font-black font-mono text-stone-900">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-stone-500 font-medium leading-tight truncate mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

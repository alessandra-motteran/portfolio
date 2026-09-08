import React from 'react';
import { userProfile } from '../data/portfolioData';
import { 
  Award, GraduationCap, Cpu, Layers, Users, BarChart3, 
  CheckCircle2, Globe, Shield, Sparkles, BookOpen 
} from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-stone-100 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25 uppercase tracking-wider">
          <Layers className="w-3 h-3 text-amber-400" />
          Strategic Capabilities & Operations
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Design Leadership, DesignOps & Research Architecture
        </h2>
        <p className="text-sm text-stone-300 leading-relaxed">
          From individual qualitative contextual inquiries to orchestrating enterprise-wide Design Systems and ISO 9001-certified operational workflows.
        </p>
      </div>

      {/* 3 Core Leadership Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">People Leadership & Mentorship</h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Directing high-performance UX/UI design squads across 15+ international engagements. Pioneered a graduated autonomy model that upskilled junior researchers and UI designers to independently drive enterprise client presentations, field contextual inquiries, and advanced Figma token hierarchies.
          </p>
          <div className="pt-2 text-[11px] text-amber-300/80 font-medium">
            Proven track record in team retention, talent elevation, and seamless project transitions.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Complex HMI & Industrial Systems</h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Translating the harsh realities of physical factory floors—chemical washdowns, gloved touch manipulation, alarm fatigue, and micro-stoppages—into resilient supervisory control rooms and touch panels. Grounded in cognitive ergonomics and ISA-101 industrial interaction standards.
          </p>
          <div className="pt-2 text-[11px] text-sky-300/80 font-medium">
            Bridging mechanical engineering limits with modern digital touch experiences.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">DesignOps & ISO 9001 Process Quality</h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Built company-wide delivery health dashboards, Time Value Analysis tracking, and transparent performance review systems on Airtable that satisfied rigorous ISO 9001 enterprise certification audits. Maintained 40%–50%+ profit margins by preventing scope drift.
          </p>
          <div className="pt-2 text-[11px] text-emerald-300/80 font-medium">
            Author of 65-term Tech & Design Video Glossary for institutional knowledge sharing.
          </div>
        </div>
      </div>

      {/* Recognized Achievements & Academic Foundation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        {/* Academic Foundation */}
        <div className="lg:col-span-6 bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-5">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Education & Formative Research</h3>
          </div>

          <div className="space-y-4">
            {userProfile.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-850 border border-stone-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">{edu.degree}</h4>
                  <span className="text-[11px] text-stone-400 font-mono">{edu.years}</span>
                </div>
                <div className="text-xs text-amber-300 font-medium">{edu.institution}</div>
                {edu.honors && (
                  <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                    ★ {edu.honors}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Language Fluency
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {userProfile.languages.map((l, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-stone-850 border border-stone-800 text-xs">
                  <div className="font-semibold text-white">{l.language}</div>
                  <div className="text-stone-400 text-[11px]">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accolades & Distinctions */}
        <div className="lg:col-span-6 bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-5">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Distinctions & Keynotes</h3>
          </div>

          <div className="space-y-3.5">
            {userProfile.recognition.map((rec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-850 border border-stone-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-amber-300">{rec.title}</h4>
                  {rec.year && <span className="text-[11px] text-stone-400 font-mono">{rec.year}</span>}
                </div>
                <div className="text-xs font-semibold text-white">{rec.organization}</div>
                <p className="text-xs text-stone-300 leading-relaxed mt-1">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tooling Ecosystem Grid */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-5">
        <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider">
          Professional Tooling & Operational Stack
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {userProfile.tools.map((group, idx) => (
            <div key={idx} className="p-4 bg-stone-850 rounded-xl border border-stone-800 space-y-2">
              <h4 className="text-xs font-bold text-amber-400">{group.category}</h4>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-stone-300 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

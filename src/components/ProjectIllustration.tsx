import React from 'react';
import { Shield, Layers, Layout, MapPin, Lock } from 'lucide-react';

interface ProjectIllustrationProps {
  codename: string;
  defaultIllustration: 'control-room' | 'workstreams' | 'design-tokens' | 'benchmarks' | 'field-research' | 'retail-mobile';
  colorTheme?: 'rose' | 'violet' | 'blue' | 'orange';
}

export const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({
  codename,
  defaultIllustration
}) => {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200/90 bg-stone-50/70 p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Status */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 border border-stone-200/80 text-stone-700 shadow-2xs">
          <Shield className="w-3 h-3 text-rose-600" />
          <span>{codename}</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-stone-100/90 border border-stone-200/70 text-stone-500">
          <Lock className="w-3 h-3 text-stone-400" />
          <span>Schema Riservato</span>
        </span>
      </div>

      {/* Center Graphic Motif */}
      <div className="flex-1 flex items-center justify-center py-2">
        {defaultIllustration === 'control-room' && (
          <div className="w-full max-w-[260px] space-y-2">
            <div className="h-3 w-2/3 bg-stone-200 rounded-full" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 bg-white rounded-xl border border-stone-200 p-1.5 flex flex-col justify-between shadow-2xs">
                <div className="w-4 h-4 rounded-md bg-stone-100 flex items-center justify-center text-[8px] font-mono text-stone-600">01</div>
                <div className="h-1.5 w-4/5 bg-stone-300 rounded-full" />
              </div>
              <div className="h-14 bg-white rounded-xl border border-stone-200 p-1.5 flex flex-col justify-between shadow-2xs">
                <div className="w-4 h-4 rounded-md bg-amber-100 flex items-center justify-center text-[8px] font-mono text-amber-700">ALM</div>
                <div className="h-1.5 w-3/5 bg-amber-300 rounded-full" />
              </div>
              <div className="h-14 bg-white rounded-xl border border-stone-200 p-1.5 flex flex-col justify-between shadow-2xs">
                <div className="w-4 h-4 rounded-md bg-emerald-100 flex items-center justify-center text-[8px] font-mono text-emerald-700">OK</div>
                <div className="h-1.5 w-5/6 bg-emerald-300 rounded-full" />
              </div>
            </div>
            <div className="h-2 w-full bg-stone-200/80 rounded-full" />
          </div>
        )}

        {defaultIllustration === 'workstreams' && (
          <div className="w-full max-w-[260px] space-y-2">
            <div className="grid grid-cols-4 gap-1.5">
              {['UX/Res', 'InfoArch', 'UI Sys', 'Gov'].map((stream, idx) => (
                <div key={idx} className="h-16 bg-white rounded-xl border border-stone-200 p-1.5 flex flex-col justify-between text-[8px] font-bold text-stone-700 shadow-2xs">
                  <span>{stream}</span>
                  <div className="space-y-1">
                    <div className="h-1 bg-rose-300 rounded-full w-full" />
                    <div className="h-1 bg-stone-200 rounded-full w-2/3" />
                  </div>
                </div>
              ))}
            </div>
            <div className="h-2.5 bg-stone-200/70 rounded-full flex items-center px-1">
              <div className="h-1.5 w-2/3 bg-rose-500 rounded-full" />
            </div>
          </div>
        )}

        {defaultIllustration === 'design-tokens' && (
          <div className="w-full max-w-[260px] space-y-2">
            <div className="flex gap-2 items-center justify-center">
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-xs font-mono font-bold text-rose-600 shadow-2xs">Aa</div>
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-xs font-mono font-bold text-stone-700 shadow-2xs">#F4</div>
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-xs font-mono font-bold text-stone-700 shadow-2xs">16px</div>
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-xs font-mono font-bold text-amber-700 shadow-2xs">CNC</div>
            </div>
            <div className="p-2 bg-white rounded-xl border border-stone-200 space-y-1 shadow-2xs">
              <div className="h-2 bg-rose-300 rounded-full w-3/4" />
              <div className="h-2 bg-stone-200 rounded-full w-1/2" />
            </div>
          </div>
        )}

        {defaultIllustration === 'benchmarks' && (
          <div className="w-full max-w-[260px] space-y-1.5">
            <div className="grid grid-cols-4 gap-1">
              {[85, 45, 92, 60].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center justify-end h-16 bg-white border border-stone-200 rounded-lg p-1 shadow-2xs">
                  <div
                    style={{ height: `${val}%` }}
                    className="w-full bg-rose-500/80 rounded-md transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-stone-600 px-1">
              <span>24 Competitors</span>
              <span>45 Criteria</span>
            </div>
          </div>
        )}

        {defaultIllustration === 'field-research' && (
          <div className="w-full max-w-[260px] space-y-2">
            <div className="flex items-center justify-around">
              <div className="p-2 rounded-xl bg-white border border-stone-200 text-rose-600 shadow-2xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="h-0.5 w-10 bg-stone-300 border-dashed" />
              <div className="p-2 rounded-xl bg-white border border-stone-200 text-amber-600 shadow-2xs">
                <Layers className="w-4 h-4" />
              </div>
              <div className="h-0.5 w-10 bg-stone-300 border-dashed" />
              <div className="p-2 rounded-xl bg-white border border-stone-200 text-stone-700 shadow-2xs">
                <Layout className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center text-[10px] font-semibold text-stone-600">
              Contextual Inquiry • Service Blueprinting
            </div>
          </div>
        )}

        {defaultIllustration === 'retail-mobile' && (
          <div className="w-full max-w-[260px] flex items-center justify-center gap-3">
            <div className="w-16 h-20 bg-white rounded-xl border border-stone-200 p-1 flex flex-col justify-between shadow-2xs">
              <div className="h-1.5 w-6 bg-stone-300 rounded-full mx-auto" />
              <div className="space-y-1">
                <div className="h-2 bg-rose-400 rounded-full w-4/5" />
                <div className="h-2 bg-stone-200 rounded-full w-3/5" />
              </div>
              <div className="h-3 bg-stone-800 rounded-md w-full" />
            </div>
            <div className="space-y-1 text-left">
              <div className="text-[11px] font-bold text-stone-800">Scan & Go</div>
              <div className="h-1.5 w-16 bg-stone-300 rounded-full" />
              <div className="h-1.5 w-12 bg-stone-200 rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Discreet Footer Category Tag */}
      <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 pt-1 border-t border-stone-200/60">
        <span>Artefatto & Sistema</span>
        <span className="text-stone-600 font-semibold">NDA Protected</span>
      </div>
    </div>
  );
};

import React from 'react';
import { userProfile } from '../data/portfolioData';
import { Globe, Compass, HeartHandshake, BookOpen, MapPin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

interface InternationalExperienceProps {
  onOpenContact: () => void;
}

export const InternationalExperience: React.FC<InternationalExperienceProps> = ({
  onOpenContact
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-stone-100 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/25 uppercase tracking-wider">
          <Globe className="w-3 h-3 text-sky-400" />
          Global Perspectives & Intentional Immersion
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          International Journey: APAC, Asia & Australia
        </h2>
        <p className="text-sm text-stone-300 leading-relaxed">
          Broadening perspectives on human collaboration, resilient cross-cultural communication, and organizational diversity.
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl font-bold text-white leading-snug">
              9 Months of Conscious Exploration Across Diverse Ecosystems
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {userProfile.currentFocus}
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              Having led high-tempo delivery across 15+ international industrial clients, this deliberate 9-month sabbatical combines volunteering, nomadic work, and deep immersion into APAC business cultures. This journey enriches the Human-Centered Design toolkit with authentic adaptability, decentralized collaboration stamina, and a nuanced understanding of how diverse societies solve structural friction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3 bg-stone-850 rounded-xl border border-stone-800">
                <Compass className="w-4 h-4 text-amber-400 mb-1" />
                <div className="text-xs font-bold text-white">Cross-Cultural Agility</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Navigating high-context vs low-context teams</div>
              </div>
              <div className="p-3 bg-stone-850 rounded-xl border border-stone-800">
                <HeartHandshake className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-xs font-bold text-white">Grassroots Volunteering</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Hands-on community impact initiatives</div>
              </div>
              <div className="p-3 bg-stone-850 rounded-xl border border-stone-800">
                <BookOpen className="w-4 h-4 text-sky-400 mb-1" />
                <div className="text-xs font-bold text-white">Systemic Resilience</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Observing scalable public and private services</div>
              </div>
            </div>
          </div>

          {/* Right Status Card */}
          <div className="lg:col-span-4 bg-stone-850 p-6 rounded-xl border border-stone-750 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Professional Availability</span>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-bold text-white">Open to Opportunities</div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Available for Senior Design Leadership, Lead Product Design, and Design Strategy roles worldwide (Hybrid / Remote / Relocation).
              </p>
            </div>

            <div className="pt-2 border-t border-stone-750 space-y-2 text-xs text-stone-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Home Base: Verona, Italy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-stone-400" />
                <span>Timezone Agility (EU, APAC, Americas)</span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Initiate Confidential Conversation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

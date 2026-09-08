import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { ContentTranslation } from '../data/portfolioContent';

interface NavbarProps {
  content: ContentTranslation;
  language: 'it' | 'en';
  onToggleLanguage: (lang: 'it' | 'en') => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  language,
  onToggleLanguage,
  onOpenContact,
  activeSection
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-50/90 border-b border-stone-200/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-rose-600 p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-white font-black text-xs tracking-wider">
              AM
            </span>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-bold tracking-tight text-stone-900">
              Alessandra Motteran
            </div>
            <div className="text-[10px] text-stone-500 font-medium">
              Design Manager • Strategic Innovation Lead
            </div>
          </div>
        </div>

        {/* Section Links: Leadership & Metodo / Progetti / Contatti */}
        <nav className="hidden md:flex items-center space-x-1 font-medium text-xs">
          <button
            onClick={() => scrollTo('leadership-section')}
            className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
              activeSection === 'leadership'
                ? 'bg-rose-100 text-rose-800 font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {content.nav.leadership}
          </button>

          <button
            onClick={() => scrollTo('projects-section')}
            className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
              activeSection === 'projects'
                ? 'bg-rose-100 text-rose-800 font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {content.nav.work}
          </button>

          <button
            onClick={() => scrollTo('contact-section')}
            className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
              activeSection === 'contact'
                ? 'bg-rose-100 text-rose-800 font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {content.nav.contact}
          </button>
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center space-x-2.5">
          
          {/* Bilingual Toggle (IT / EN) */}
          <div className="bg-stone-200/60 p-0.5 rounded-full flex items-center border border-stone-300/60">
            <button
              id="toggle-lang-it"
              onClick={() => onToggleLanguage('it')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'it'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Passa a Italiano"
            >
              IT
            </button>
            <button
              id="toggle-lang-en"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Contact CTA */}
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>{content.nav.ctaContact}</span>
          </button>
        </div>

      </div>
    </header>
  );
};

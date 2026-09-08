import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NDABanner } from './components/NDABanner';
import { ProjectCard } from './components/ProjectCard';
import { LeadershipSection } from './components/LeadershipSection';
import { AlsoDelivered } from './components/AlsoDelivered';
import { ContactSection } from './components/ContactSection';
import { contentIT, contentEN, ContentTranslation } from './data/portfolioContent';
import { Sparkles } from 'lucide-react';

export default function App() {
  // User Requirement: "di default italiano e light"
  const [language, setLanguage] = useState<'it' | 'en'>(() => {
    try {
      const saved = localStorage.getItem('alessandra_portfolio_lang');
      if (saved === 'it' || saved === 'en') return saved;
    } catch (e) {
      console.error(e);
    }
    return 'it'; // Default Italian
  });

  const [activeSection, setActiveSection] = useState<string>('leadership');

  // Active localized content
  const content: ContentTranslation = language === 'it' ? contentIT : contentEN;

  // Clean up any residual dark class on document root
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Sync language with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('alessandra_portfolio_lang', language);
    } catch (e) {
      console.error(e);
    }
  }, [language]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['leadership-section', 'projects-section', 'contact-section'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'leadership-section' ? 'leadership' : sectionId === 'projects-section' ? 'projects' : 'contact');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLanguage = (lang: 'it' | 'en') => {
    setLanguage(lang);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased flex flex-col selection:bg-rose-500 selection:text-white">
      
      {/* Sticky Primary Navbar with IT/EN Toggle and Navigation */}
      <Navbar
        content={content}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenContact={() => scrollTo('contact-section')}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-12">
        
        {/* 1. Hero Section */}
        <Hero
          content={content}
          onExploreLeadership={() => scrollTo('leadership-section')}
          onExploreProjects={() => scrollTo('projects-section')}
        />

        {/* 2. Dedicated Leadership Section (FIRST) */}
        <div id="leadership-section" className="border-t border-stone-200/80">
          <LeadershipSection content={content} />
        </div>

        {/* 3. Featured Projects with NDA Banner */}
        <div id="projects-section" className="border-t border-stone-200/80 pt-8">
          <NDABanner content={content} />

          {/* Featured 6 Projects Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200/80 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                  <span>{content.workSection.badge}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {content.workSection.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {content.workSection.subtitle}
                </p>
              </div>
            </div>

            {/* 6 Featured Case Studies - Full Width of the Page Container */}
            <div className="grid grid-cols-1 gap-8 pt-4 w-full">
              {content.featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  contextLabel={content.workSection.contextLabel}
                  roleLabel={content.workSection.roleLabel}
                  outcomeLabel={content.workSection.outcomeLabel}
                />
              ))}
            </div>

          </section>
        </div>

        {/* 4. "Also Delivered" Index */}
        <div id="also-delivered-section" className="border-t border-stone-200/80">
          <AlsoDelivered content={content} />
        </div>

        {/* 5. Contact Section */}
        <div id="contact-section" className="border-t border-stone-200/80">
          <ContactSection content={content} />
        </div>

      </main>

      {/* Footer: Left info and Right info only */}
      <footer className="border-t border-stone-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Left Block */}
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <div className="font-bold text-stone-900 text-sm">
              Alessandra Motteran • Design Management & Innovation
            </div>
            <div className="text-[11px] text-stone-600 leading-relaxed">
              {language === 'it' 
                ? 'Aperta a ruoli di Design Leadership, Lead Product Design, Product Manager, Design Project Manager e Design Strategy in contesti complessi e internazionali.'
                : 'Available for Design Leadership, Lead Product Design, Product Manager, Design Project Manager, and Design Strategy roles in complex, international environments.'}
            </div>
            <div className="text-[10px] text-stone-400">
              Verona, Italia • Hybrid / Remote / Relocation
            </div>
          </div>

          {/* Right Block */}
          <div className="text-[11px] text-stone-500 text-center md:text-right max-w-md leading-relaxed">
            {language === 'it' 
              ? 'Dettagli e materiali di progetto possono essere condivisi in sede di colloquio riservato • Protetto da NDA' 
              : 'Additional project details and materials can be shared during a confidential interview • Protected by NDA'}
          </div>
        </div>
      </footer>

    </div>
  );
}

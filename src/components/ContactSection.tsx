import React, { useState } from 'react';
import { Mail, Calendar, ExternalLink, Copy, Check, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { ContentTranslation } from '../data/portfolioContent';

interface ContactSectionProps {
  content: ContentTranslation;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const { contact } = content;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'alessandra.motteran@gmail.com';
  const calendarUrl = 'https://calendar.app.google/yqh6Gb6pisVcr7GXA';
  const linkedinUrl = 'https://www.linkedin.com/in/alessandra-motteran';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>{contact.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          {contact.title}
        </h2>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {contact.subtitle}
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Email Card */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-rose-300 transition-all">
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 w-fit shadow-2xs">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                {contact.emailLabel}
              </div>
              <a
                href={`mailto:${email}`}
                className="text-sm font-bold text-stone-900 hover:text-rose-600 transition-colors break-all"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <a
              href={`mailto:${email}`}
              className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs text-center transition-colors shadow-2xs"
            >
              Invia Email
            </a>
            <button
              onClick={() => copyToClipboard(email)}
              title={contact.copy}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Google Calendar Card */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-rose-300 transition-all">
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 w-fit shadow-2xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                {contact.calendarLabel}
              </div>
              <div className="text-sm font-bold text-stone-900">
                {contact.calendarDesc}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <span>{contact.calendarAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200/90 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-rose-300 transition-all">
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 w-fit shadow-2xs">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                {contact.linkedinLabel}
              </div>
              <div className="text-sm font-bold text-stone-900">
                alessandra-motteran
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <span>{contact.openProfile}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Reassuring NDA Note Card */}
      <div className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{contact.locationValue}</span>
        </div>

        <div className="flex items-center gap-2 text-stone-500 text-[11px] max-w-lg">
          <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{contact.ndaGuarantee}</span>
        </div>
      </div>

    </section>
  );
};

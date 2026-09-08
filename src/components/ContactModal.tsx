import React, { useState } from 'react';
import { X, Mail, Phone, ExternalLink, Copy, Check, ShieldCheck, Lock } from 'lucide-react';
import { userProfile } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectContext?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  projectContext
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div 
        className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100 p-6 space-y-6 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25 uppercase tracking-wider mb-1">
              Direct Contact & Confidential Inquiry
            </div>
            <h3 className="text-xl font-bold text-white">
              Connect with {userProfile.name}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Design Manager • Innovation Designer
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {projectContext && (
          <div className="p-3 rounded-lg bg-amber-950/25 border border-amber-900/40 text-xs text-amber-200/90 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Inquiry regarding: <strong className="text-white">{projectContext}</strong></span>
          </div>
        )}

        <div className="space-y-3">
          {/* Email */}
          <div className="p-3.5 rounded-xl bg-stone-850 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-stone-800 text-amber-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Email</div>
                <a 
                  href={`mailto:${userProfile.email}?subject=${encodeURIComponent(projectContext ? `Confidential Inquiry: ${projectContext}` : 'Design Leadership Inquiry')}`}
                  className="text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  {userProfile.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(userProfile.email, 'email')}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-3.5 rounded-xl bg-stone-850 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-stone-800 text-amber-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Phone / WhatsApp</div>
                <a 
                  href={`tel:${userProfile.phone.replace(/\s+/g, '')}`}
                  className="text-xs font-semibold text-white hover:text-amber-400 transition-colors font-mono"
                >
                  {userProfile.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(userProfile.phone, 'phone')}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              title="Copy phone number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="p-3.5 rounded-xl bg-stone-850 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-stone-800 text-sky-400">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">LinkedIn Profile</div>
                <div className="text-xs font-semibold text-white">/alessandra-motteran</div>
              </div>
            </div>

            <a
              href={userProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-750 rounded-lg border border-stone-700 transition-colors"
            >
              Open Link
            </a>
          </div>
        </div>

        {/* NDA Assurance */}
        <div className="p-3 bg-stone-950/60 rounded-xl border border-stone-800 text-[11px] text-stone-400 flex items-start space-x-2 leading-relaxed">
          <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Detailed unredacted project decks, Figma tokens, and interactive walk-throughs can be presented in a 1-on-1 interview under mutual confidentiality.
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

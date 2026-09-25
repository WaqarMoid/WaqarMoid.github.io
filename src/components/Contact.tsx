import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowRight } from 'lucide-react';
import { Icons } from './Icons';
import { personalInfo, socialLinks } from '../data/content';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialButtons = [
    { label: 'LinkedIn', icon: Icons.Linkedin, url: socialLinks.linkedin, color: 'hover:text-blue-400' },
    { label: 'GitHub', icon: Icons.Github, url: socialLinks.github, color: 'hover:text-neutral-100' },
    { label: 'Twitter / X', icon: Icons.Twitter, url: socialLinks.twitter, color: 'hover:text-blue-300' },
    { label: 'Spotify', icon: Icons.Spotify, url: socialLinks.spotify, color: 'hover:text-emerald-400' },
    { label: 'Letterboxd', icon: Icons.Letterboxd, url: socialLinks.letterboxd, color: 'hover:text-orange-400' },
    { label: 'Instagram', icon: Icons.Instagram, url: socialLinks.instagram, color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto rounded-3xl bg-[#121212] border border-[#262626] p-8 sm:p-12 text-center relative z-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-medium text-emerald-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Open to Discussions & Opportunities</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#fafafa] tracking-tight mb-4">
          Let's connect.
        </h2>

        <p className="text-base text-[#a3a3a3] max-w-lg mx-auto mb-8 font-normal leading-relaxed">
          Whether you'd like to discuss machine learning, quantitative research, quizzing, or have a collaborative idea in mind, feel free to reach out.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md hover:shadow-lg hover:shadow-white/10 group"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#171717] border border-[#262626] text-sm font-medium text-[#fafafa] hover:border-[#3a3a3a] hover:bg-[#202020] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#737373]" />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row with all specified platforms */}
        <div className="pt-8 border-t border-[#262626]/70">
          <div className="text-xs text-[#737373] uppercase tracking-wider mb-4 font-medium">
            Find me on
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {socialButtons.map((btn, idx) => {
              const Icon = btn.icon;
              return (
                <a
                  key={idx}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171717] border border-[#262626] text-xs font-medium text-[#a3a3a3] hover:border-[#3a3a3a] ${btn.color} hover:bg-[#1a1a1a] transition-all`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{btn.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

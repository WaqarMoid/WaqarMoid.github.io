import React from 'react';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/content';
import { ProfileCard } from './ProfileCard';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 bg-tech-grid"
    >
      {/* Radial Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#262626] text-xs text-[#a3a3a3]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-[#fafafa]">{personalInfo.institute}</span>
            <span className="text-[#525252]">/</span>
            <span>Biological Sciences & AI/ML</span>
          </div>

          {/* Main Title in Economica Font */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fafafa] font-heading leading-[1.05]">
            Working across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              AI, data,
            </span>{' '}
            and biological sciences.
          </h1>

          {/* Subtext in Raleway */}
          <p className="text-base sm:text-lg text-[#a3a3a3] max-w-xl font-normal leading-relaxed">
            Final-year undergraduate at IIT Kanpur working across machine learning, computational biology, quantitative finance, and web systems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md hover:shadow-lg hover:shadow-white/10 group"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#171717] border border-[#262626] text-sm font-medium text-[#fafafa] hover:border-[#3a3a3a] hover:bg-[#202020] transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Get in touch</span>
            </button>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-[#a3a3a3] hover:text-[#fafafa] transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

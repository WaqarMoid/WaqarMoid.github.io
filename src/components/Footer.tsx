import React from 'react';
import { personalInfo, socialLinks } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#737373]">
        {/* Identity */}
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-base text-[#fafafa]">
            {personalInfo.name}
          </p>
          <p className="text-[#737373] mt-0.5">
            Biological Sciences & BioEngineering · IIT Kanpur
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={socialLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Spotify
          </a>
          <a
            href={socialLinks.letterboxd}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            Letterboxd
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fafafa] transition-colors"
          >
            Resume (PDF)
          </a>
        </div>

        {/* Copyright & Stack */}
        <div className="text-center md:text-right space-y-1">
          <p>© {new Date().getFullYear()} {personalInfo.name}</p>
          <p className="text-[11px] text-[#525252]">
            Vite · React · Tailwind CSS · Economica & Raleway
          </p>
        </div>
      </div>
    </footer>
  );
};

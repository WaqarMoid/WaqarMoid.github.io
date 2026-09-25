import React from 'react';
import { MapPin, Terminal } from 'lucide-react';
import { personalInfo } from '../data/content';

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      {/* Ambient Gradient Glow Halo */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-blue-500/20 via-cyan-500/10 to-purple-500/20 blur-xl opacity-60 pointer-events-none" />

      {/* Terminal Card Container */}
      <div className="relative rounded-2xl bg-[#121212] border border-[#262626] p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header Chrome */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626] text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#262626] hover:bg-red-500/60 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#262626] hover:bg-yellow-500/60 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#262626] hover:bg-green-500/60 transition-colors" />
          </div>
          <div className="text-[11px] text-[#737373] tracking-widest font-mono flex items-center gap-1">
            <span>undergrad.profile</span>
            <span className="text-blue-400 font-bold">&gt;_</span>
          </div>
          <div className="w-6 text-right">
            <Terminal className="w-3.5 h-3.5 text-blue-400/80 inline" />
          </div>
        </div>

        {/* Portrait Image Container */}
        <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#262626] bg-[#171717] mb-3 group">
          <img
            src="/avatar.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out"
            onError={(e) => {
              // Fallback to stylized avatar if image missing
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121212] to-[#171717] text-[#fafafa]">
                    <div class="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-3xl font-heading font-bold text-blue-400 mb-2">
                      WM
                    </div>
                    <span class="text-xs text-[#737373] font-mono tracking-wider">IIT KANPUR</span>
                  </div>
                `;
              }
            }}
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Badges */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a0a0a]/90 backdrop-blur-md border border-[#262626] text-[11px] font-medium text-[#fafafa]">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>{personalInfo.institute}</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-[#0a0a0a]/90 backdrop-blur-md border border-[#262626] text-[11px] font-semibold text-emerald-400">
              CPI: {personalInfo.cpi.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Spec Metadata Rows */}
        <div className="space-y-2 pt-1 font-raleway">
          <div className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg bg-[#171717] border border-[#262626]/70">
            <span className="text-[#737373]">Department</span>
            <span className="text-[#fafafa] font-medium text-[11px] text-right">BSBE (Biological Sciences)</span>
          </div>
          <div className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg bg-[#171717] border border-[#262626]/70">
            <span className="text-[#737373]">Domain Focus</span>
            <span className="text-blue-400 font-medium text-[11px]">AI/ML · Data · BioInformatics</span>
          </div>
          <div className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg bg-[#171717] border border-[#262626]/70">
            <span className="text-[#737373]">Status</span>
            <span className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Final Year (2023 - Present)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

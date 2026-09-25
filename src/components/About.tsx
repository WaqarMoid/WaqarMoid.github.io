import React from 'react';
import { Award, Users, GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { personalInfo, achievements, responsibilities } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Profile & Background"
        title="About & Beyond the Lab"
        subtitle="Undergraduate journey, competitive quizzing achievements, and campus leadership."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Academic & Narrative Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-[#fafafa]">Academic Background</h3>
                <p className="text-xs text-[#737373]">IIT Kanpur</p>
              </div>
            </div>

            <p className="text-sm text-[#a3a3a3] leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="pt-2 space-y-2.5 border-t border-[#262626] text-xs">
              <div className="flex justify-between py-1 border-b border-[#262626]/50">
                <span className="text-[#737373]">Degree</span>
                <span className="text-[#fafafa] font-medium text-right">B.Tech, BSBE (2023–Present)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#262626]/50">
                <span className="text-[#737373]">Cumulative CPI</span>
                <span className="text-emerald-400 font-semibold">{personalInfo.cpi}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">High School</span>
                <span className="text-[#fafafa] text-right font-medium">St. Thomas' Boys' School, Kolkata</span>
              </div>
            </div>
          </div>

          {/* Leadership & Campus Responsibility */}
          <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-[#fafafa]">Campus Leadership</h3>
                <p className="text-xs text-[#737373]">Positions of responsibility</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-1">
              {responsibilities.slice(0, 3).map((item, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="flex items-center justify-between text-[#fafafa] font-semibold">
                    <span>{item.role}</span>
                    <span className="text-[11px] text-[#737373] font-normal">{item.period}</span>
                  </div>
                  <p className="text-[#737373] text-[11px] leading-relaxed">
                    {item.points[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Achievements & Quizzing */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xl font-heading font-bold text-[#fafafa]">Notable Highlights & Honors</h3>
          </div>

          <div className="space-y-3.5">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#121212] border border-[#262626] p-5 hover:border-[#3a3a3a] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-base font-bold font-heading text-[#fafafa]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#171717] border border-[#262626] text-blue-400 font-medium shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

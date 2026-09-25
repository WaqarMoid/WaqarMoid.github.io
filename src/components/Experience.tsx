import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experiences } from '../data/content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Career Timeline"
        title="Work Experience"
        subtitle="Internships and engineering contributions across full-stack development and applied AI."
      />

      <div className="space-y-8 relative">
        {/* Subtle vertical connector line */}
        <div className="hidden md:block absolute left-6 top-4 bottom-4 w-[1px] bg-[#262626]" />

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative md:pl-16 group"
          >
            {/* Timeline Node Indicator */}
            <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#121212] border-2 border-blue-500/60 group-hover:border-blue-400 group-hover:scale-125 transition-all items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-7 hover:border-[#3a3a3a] transition-all hover:-translate-y-0.5 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#262626]/80">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#171717] border border-[#262626] text-xs font-medium text-blue-400 mb-1.5">
                    <Briefcase className="w-3 h-3" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#fafafa]">
                    {exp.role}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-[#737373] bg-[#171717]/60 px-3 py-1 rounded-md border border-[#262626] self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-5 text-sm text-[#a3a3a3] font-normal leading-relaxed">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-[#171717] text-[#737373] border border-[#262626] hover:text-[#fafafa] hover:border-[#3a3a3a] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { Code, Cpu, Wrench, BookOpen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '../data/content';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
        subtitle="Languages, scientific libraries, machine learning frameworks, and engineering tools."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Languages */}
        <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 hover:border-[#3a3a3a] transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-[#fafafa]">Languages</h3>
              <p className="text-xs text-[#737373]">Core programming</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.languages.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-[#fafafa] hover:border-blue-500/40 hover:text-blue-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Libraries & Frameworks */}
        <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 hover:border-[#3a3a3a] transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-[#fafafa]">ML & Scientific</h3>
              <p className="text-xs text-[#737373]">Data & modeling</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.mlAndLibraries.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-[#fafafa] hover:border-purple-500/40 hover:text-purple-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Infrastructure */}
        <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 hover:border-[#3a3a3a] transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-[#fafafa]">Tools & Systems</h3>
              <p className="text-xs text-[#737373]">Database & deployment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.toolsAndSystems.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-[#fafafa] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Relevant Coursework Card */}
      <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6">
        <div className="flex items-center gap-2 mb-3 text-xs text-[#737373] uppercase tracking-wider font-semibold">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span>Relevant Academic Coursework</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsData.coursework.map((course, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-md bg-[#171717] text-[#a3a3a3] border border-[#262626]"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

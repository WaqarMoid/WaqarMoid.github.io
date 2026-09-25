import React, { useState } from 'react';
import { ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import { Icons } from './Icons';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data/content';

const CATEGORIES = ['All', 'Web Application', 'Data Visualization & Finance', 'Computational Biology & ML', 'Quantitative Finance', 'NLP & Public Policy'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(selectedCategory) || selectedCategory.includes(p.category));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <SectionHeading
          eyebrow="Key Projects"
          title="Selected Projects"
          subtitle="Coursework, research implementations, and personal tools built at IIT Kanpur."
          className="mb-0"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black border-white font-medium'
                  : 'bg-[#121212] border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#3a3a3a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#121212] border border-[#262626] p-6 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between group"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-blue-400 font-medium">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#fafafa] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#737373] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#3a3a3a] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Icons.Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#3a3a3a] transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#737373] mb-4">
                <Calendar className="w-3 h-3" />
                <span>{project.timeline}</span>
              </div>

              {/* Points */}
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                {project.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#262626]/70">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#171717] text-[#737373] border border-[#262626] group-hover:border-[#3a3a3a] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

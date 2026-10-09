"use client";
import React, { useState } from 'react';
import { nsocProjects } from '../data/nsoc-data';
import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Frontend Development', 'Web & Core Systems', 'Database & Backend', 'DevOps & Tooling', 'AI & Data Science'];

  const filtered = filter === 'All'
    ? nsocProjects
    : nsocProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          EXPLORE CODEBASES
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Winter Projects
        </h2>
        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
          Contribute to vetted open-source repositories with real code reviews and dedicated mentorship.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? 'bg-[#00a4ef] text-black border-white shadow-[0_0_15px_rgba(0,164,239,0.6)]'
                  : 'bg-[#0b1221] text-slate-300 border-white/20 hover:border-[#00a4ef]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <div key={project.id} className="mstc-card p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/20 text-[#00a4ef]">
                  {project.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/40' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' :
                  'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}>
                  {project.difficulty}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.languages.map(lang => (
                  <span key={lang} className="text-[11px] font-semibold bg-black/40 text-slate-300 border border-white/10 px-2.5 py-1 rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#ffb900]" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-[#00a4ef]" /> {project.forks}
                  </span>
                </div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00a4ef] px-3.5 py-1.5 rounded-full hover:bg-[#38bdf8] transition-colors"
                >
                  Contribute <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { nsocProjects } from '../data/nsoc-data';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-card border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Open Source Catalog
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Featured Winter Projects
        </h2>
        <p className="text-[#94a3b8] text-base">Real projects contributed by organizations & students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nsocProjects.map(project => {
          const isBeginner = project.difficulty === 'Beginner';
          return (
            <div
              key={project.id}
              className={`bg-card p-6 rounded-[24px] border flex flex-col justify-between transition-all hover:translate-y-[-2px] ${
                isBeginner
                  ? 'border-2 border-[#00a4ef] shadow-[6px_6px_0px_0px_#00a4ef]'
                  : 'border border-border shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary">{project.category}</span>
                  {isBeginner ? (
                    <span className="text-[9px] uppercase font-extrabold px-2 py-0.5 bg-primary text-primary-foreground rounded-full border border-white shadow-[2px_2px_0px_0px_#ffffff]">
                      Recommended
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-background text-[#94a3b8] rounded-full border border-border">
                      {project.difficulty}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.languages.map(lang => (
                    <span
                      key={lang}
                      className="text-[10px] font-mono px-2 py-0.5 bg-background text-foreground rounded-md border border-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-[#94a3b8]">{project.issuesCount} Open Issues</span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-primary hover:underline"
                  >
                    View Repo →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

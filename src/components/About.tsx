import React from 'react';
import { programStats } from '../data/nsoc-data';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Open Source Initiative
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f0f4f8] mb-6">
          About Nexus Spring of Code
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
          Nexus Spring of Code (NSoC) is a premier open-source program built for student developers. 
          We solve the barrier to entry by hosting real, production-grade projects contributed by organizations 
          and students, where participants contribute, get pull requests reviewed, and learn by building alongside top maintainers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Active Contributors", value: programStats.contributors, badge: "Global" },
          { label: "Real Projects", value: programStats.projects, badge: "Verified" },
          { label: "Community Sponsors", value: programStats.sponsors, badge: "Supported" },
          { label: "Participating Countries", value: programStats.countries, badge: "Worldwide" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#0b1221] p-6 rounded-[24px] border border-[#0f172a] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] flex flex-col items-center text-center hover:translate-y-[-2px] transition-transform"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#000000] text-[#00a4ef] rounded-full border border-[#0f172a] mb-3">
              {stat.badge}
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-[#00a4ef] mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-[#94a3b8]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0b1221] p-8 rounded-[24px] border border-[#0f172a] shadow-[6px_6px_0px_0px_#00a4ef]">
          <div className="text-2xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-[#f0f4f8] mb-2">What We Do</h3>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            Host open-source repositories and guide developers through real code contributions with line-by-line PR reviews.
          </p>
        </div>

        <div className="bg-[#0b1221] p-8 rounded-[24px] border border-[#0f172a] shadow-[6px_6px_0px_0px_white]">
          <div className="text-2xl mb-3">👥</div>
          <h3 className="text-xl font-bold text-[#f0f4f8] mb-2">Who It Is For</h3>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            Student developers, beginners, and enthusiastic engineers who want to make impactful contributions.
          </p>
        </div>

        <div className="bg-[#0b1221] p-8 rounded-[24px] border border-[#0f172a] shadow-[6px_6px_0px_0px_#00a4ef]">
          <div className="text-2xl mb-3">❄️</div>
          <h3 className="text-xl font-bold text-[#f0f4f8] mb-2">Upcoming Season</h3>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            Winter Edition runs from <span className="text-[#00a4ef] font-semibold">15 October to 30 December</span> with recognition and swags.
          </p>
        </div>
      </div>
    </section>
  );
};

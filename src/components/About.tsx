"use client";
import React from 'react';
import { programStats } from '../data/nsoc-data';
import { Users, FolderGit2, Award, Globe2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          ABOUT PROGRAM
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Nexus Spring of Code
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
          Nexus Spring of Code (NSoC) is an open source program built for student developers. 
          Many students want to start contributing to open source but do not know where to begin. 
          NSoC solves this by hosting real projects contributed by companies and students, 
          where participants can contribute, get pull requests reviewed, and learn by building alongside the community.
        </p>
      </div>

      {/* Stats Cards with MSTC Brutalist styling */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Contributors", value: programStats.contributors, icon: Users, color: "#00a4ef" },
          { label: "Real Projects", value: programStats.projects, icon: FolderGit2, color: "#a855f7" },
          { label: "Sponsors & Partners", value: programStats.sponsors, icon: Award, color: "#ffb900" },
          { label: "Countries Reached", value: programStats.countries, icon: Globe2, color: "#7fba00" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="mstc-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white mb-3">
                <Icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mstc-card p-8">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">What We Do</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Host open source projects and guide students through real, merged contributions.
          </p>
        </div>

        <div className="mstc-card-purple p-8">
          <div className="text-3xl mb-4">👥</div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Who It Is For</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Student developers and beginners who want to start their open source journey with confidence.
          </p>
        </div>

        <div className="mstc-card-white p-8">
          <div className="text-3xl mb-4">❄️</div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Upcoming Season</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Winter Edition runs from <span className="text-[#00a4ef] font-bold">15 October to 30 December</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

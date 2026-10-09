"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, Code2, Sparkles, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-36 pb-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Massive Bold Heading like in MSTC screenshot */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        NEXUS
      </h1>

      {/* Signature Multi-Color Pill Badge from MSTC screenshot */}
      <div className="mt-4 mb-16 inline-flex items-center gap-2 border-2 hero-pill border-slate-700/80 bg-[#080d1a]/90 backdrop-blur-md px-8 py-3 rounded-full shadow-[0_0_25px_rgba(0,164,239,0.25)]">
        <span className="font-extrabold text-base md:text-lg text-[#00a4ef]">
          Winter
        </span>
        <span className="font-extrabold text-base md:text-lg text-[#f25022]">
          Edition
        </span>
        <span className="font-extrabold text-base md:text-lg text-[#7fba00]">
          -2026
        </span>
        <span className="font-extrabold text-base md:text-lg text-[#ffb900]">
          OPEN SOURCE
        </span>
      </div>

      {/* The 3 Signature Action Cards from the screenshot */}
      <div id="action-cards" className="w-full flex flex-col gap-6 text-left">
        {/* Card 1: Join */}
        <Link href="/register" className="group block">
          <div className="mstc-card p-6 md:p-8 flex items-center justify-between cursor-pointer">
            {/* Ambient inner blob */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#00a4ef]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
            
            {/* Left Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-[#00a4ef] group-hover:text-[#00a4ef] transition-colors">
              <Globe className="w-7 h-7 md:w-8 md:h-8" />
            </div>

            {/* Centered Title + Subtitle */}
            <div className="flex-1 text-center px-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Join
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mt-1">
                A THRIVING COMMUNITY.
              </p>
            </div>

            {/* Right Arrow Indicator */}
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#00a4ef] group-hover:text-black transition-all shrink-0">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Card 2: Learn */}
        <Link href="#about" className="group block">
          <div className="mstc-card-purple p-6 md:p-8 flex items-center justify-between cursor-pointer">
            {/* Ambient inner blob */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#a855f7]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

            {/* Left Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-[#a855f7] group-hover:text-[#a855f7] transition-colors">
              <Code2 className="w-7 h-7 md:w-8 md:h-8" />
            </div>

            {/* Centered Title + Subtitle */}
            <div className="flex-1 text-center px-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Learn
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mt-1">
                INDUSTRY-STANDARD SKILLS.
              </p>
            </div>

            {/* Right Arrow Indicator */}
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#a855f7] group-hover:text-white transition-all shrink-0">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Card 3: Build */}
        <Link href="#projects" className="group block">
          <div className="mstc-card p-6 md:p-8 flex items-center justify-between cursor-pointer">
            {/* Ambient inner blob */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#00a4ef]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

            {/* Left Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-[#00a4ef] group-hover:text-[#00a4ef] transition-colors">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
            </div>

            {/* Centered Title + Subtitle */}
            <div className="flex-1 text-center px-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Build
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mt-1">
                REAL WORLD OPEN SOURCE PROJECTS.
              </p>
            </div>

            {/* Right Arrow Indicator */}
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#00a4ef] group-hover:text-black transition-all shrink-0">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      {/* Primary CTA Buttons */}
      <div className="mt-14 flex flex-wrap gap-5 justify-center">
        <Link
          href="/register"
          className="bg-[#00a4ef] text-black font-extrabold px-8 py-4 rounded-full text-base uppercase tracking-wider shadow-[0_0_25px_rgba(0,164,239,0.6)] hover:bg-[#38bdf8] hover:scale-105 transition-all border-2 border-white"
        >
          Register for Winter Edition
        </Link>
        <Link
          href="#projects"
          className="bg-black/60 text-white font-extrabold px-8 py-4 rounded-full text-base uppercase tracking-wider border-2 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all"
        >
          Browse Projects
        </Link>
      </div>
    </section>
  );
};

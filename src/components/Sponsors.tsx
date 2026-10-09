"use client";
import React from 'react';
import { sponsorsList } from '../data/nsoc-data';

export const Sponsors = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          OUR PARTNERS
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Supported By
        </h2>
        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
          Backed by leading developer toolchains, companies, and global open source communities.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sponsorsList.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mstc-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="text-2xl font-black text-white tracking-tight group-hover:text-[#00a4ef] transition-colors">
              {sponsor.name}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
              {sponsor.tier}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { sponsorsList } from '../data/nsoc-data';

export const Sponsors = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
        Ecosystem Partners
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f0f4f8] mb-4">
        Supported By Industry Leaders
      </h2>
      <p className="text-[#94a3b8] text-base mb-12">Organizations powering the student open source revolution</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sponsorsList.map(sponsor => (
          <div
            key={sponsor.id}
            className="bg-[#0b1221] p-6 rounded-[24px] border border-[#0f172a] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center hover:border-[#00a4ef] hover:translate-y-[-2px] transition-all"
          >
            <div className="text-xl font-black tracking-tight text-[#f0f4f8] mb-1">
              {sponsor.name}
            </div>
            <span className="text-[9px] uppercase font-bold text-[#00a4ef] tracking-widest">
              {sponsor.tier} Partner
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

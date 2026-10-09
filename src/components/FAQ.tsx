"use client";
import React, { useState } from 'react';
import { faqList } from '../data/nsoc-data';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>("q1");

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          QUESTIONS & ANSWERS
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-6">
        {faqList.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="mstc-card cursor-pointer"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#00a4ef] text-black border-transparent' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </div>
              {isOpen && (
                <div className="px-6 md:px-8 pb-8 pt-0 text-sm md:text-base text-slate-300 leading-relaxed font-medium border-t border-white/10 mt-2 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

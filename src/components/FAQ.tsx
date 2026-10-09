import React from 'react';
import { faqList } from '../data/nsoc-data';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-card border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Got Questions?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#94a3b8] text-base">Everything you need to know before contributing</p>
      </div>

      <div className="space-y-6">
        {faqList.map(faq => (
          <div
            key={faq.id}
            className="bg-card p-6 md:p-8 rounded-[24px] border border-border shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] hover:border-[#00a4ef] transition-colors"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-3">
              <span className="text-primary">❄</span>
              {faq.question}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed pl-6">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

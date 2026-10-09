"use client";
import React from 'react';
import { Gift, Award, FileText, Sparkles } from 'lucide-react';

export const Perks = () => {
  const benefits = [
    {
      title: "Exclusive NSoC Swags",
      description: "High-quality winter hoodies, tees, beanies, developer kits, and stickers dispatched to top performers.",
      icon: Gift,
      color: "#00a4ef",
      shadowClass: "mstc-card"
    },
    {
      title: "Official Certificate",
      description: "Verified certificate of completion recognizing your contributions to production open-source software.",
      icon: Award,
      color: "#a855f7",
      shadowClass: "mstc-card-purple"
    },
    {
      title: "Letter of Recommendation",
      description: "Personalized Letter of Recommendation (LOR) for top performing developers to boost internships and jobs.",
      icon: FileText,
      color: "#ffb900",
      shadowClass: "mstc-card-white"
    },
    {
      title: "Community Recognition",
      description: "Recognition on the official NSoC website, leaderboard, and social channels across 3,500+ developers.",
      icon: Sparkles,
      color: "#7fba00",
      shadowClass: "mstc-card"
    }
  ];

  return (
    <section id="perks" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          PERKS & REWARDS
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Benefits for Contributors
        </h2>
        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
          Every accepted pull request is recognized, and top contributors take home winter swags, LORs, and certificates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <div key={i} className={`${benefit.shadowClass} p-8 flex items-start gap-6`}>
              <div
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0"
                style={{ color: benefit.color }}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

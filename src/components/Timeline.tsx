"use client";
import React from 'react';
import { timelineEvents } from '../data/nsoc-data';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          WINTER SCHEDULE
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Program Timeline
        </h2>
        <p className="mt-4 text-slate-300 font-medium">
          Mark your calendar for the upcoming Winter Edition milestones.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {timelineEvents.map((event, i) => (
          <div
            key={event.id}
            className={i % 2 === 0 ? "mstc-card p-6 md:p-8" : "mstc-card-purple p-6 md:p-8"}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-1">
                  <Calendar className="w-6 h-6 text-[#00a4ef]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00a4ef] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 font-medium leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-start md:self-center">
                <span className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-black/50 border border-white/20 text-white">
                  Step 0{i + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

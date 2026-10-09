import React from 'react';
import { timelineEvents } from '../data/nsoc-data';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-card border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Milestones
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Winter Edition Roadmap
        </h2>
        <p className="text-[#94a3b8] text-base">Key schedule from opening to final rewards</p>
      </div>

      <div className="space-y-6">
        {timelineEvents.map((event, i) => (
          <div
            key={event.id}
            className="bg-card border border-border rounded-[24px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:border-[#00a4ef] transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-background border-2 border-[#00a4ef] flex items-center justify-center font-bold text-sm text-primary shadow-[2px_2px_0px_0px_#00a4ef]">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                <p className="text-sm text-[#94a3b8] mt-1">{event.description}</p>
              </div>
            </div>
            <div className="md:text-right flex-shrink-0">
              <span className="inline-block px-3 py-1 bg-background text-primary font-mono text-xs font-bold rounded-lg border border-border">
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

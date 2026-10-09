"use client";
import { Snowflake } from './Snowflake';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => <Snowflake key={i} />)}
      </div>
      
      {/* Recommended style border/shadow wrapper */}
      <div className="z-20 bg-card/60 backdrop-blur-sm border border-border shadow-[8px_8px_0px_0px_rgb(255,255,255)] p-12 rounded-[32px] mx-6 max-w-4xl w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground font-sans tracking-tight">
          Nexus Spring of Code
        </h1>
        <p className="text-xl md:text-2xl mt-6 text-primary font-semibold">
          Winter Edition | 15 Oct - 30 Dec
        </p>
        <a href="#register" className="mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-[12px] text-lg font-bold hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgb(255,255,255)] transition-all shadow-[8px_8px_0px_0px_rgb(255,255,255)] border border-[#000000]">
          Start Contributing
        </a>
      </div>
    </section>
  );
};

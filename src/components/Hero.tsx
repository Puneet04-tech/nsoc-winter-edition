"use client";
import { Snowflake } from './Snowflake';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-[#000000]">
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => <Snowflake key={i} />)}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold z-10 text-[#f0f4f8] font-sans tracking-tight">
        Nexus Spring of Code
      </h1>
      <p className="text-xl md:text-2xl mt-6 z-10 text-[#00a4ef] font-semibold">
        Winter Edition | 15 Oct - 30 Dec
      </p>
      <a href="#register" className="mt-10 z-10 bg-[#00a4ef] text-[#000000] px-8 py-4 rounded-[12px] text-lg font-bold hover:opacity-90 transition-opacity shadow-[4px_4px_0px_0px_rgb(255,255,255)]">
        Start Contributing
      </a>
    </section>
  );
};

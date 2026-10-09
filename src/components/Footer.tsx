"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Globe, Github, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-24 border-t-2 border-white/20 bg-[#070b14]/90 py-16 px-4 md:px-8 text-white relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6 p-0.5 rounded bg-black/40 border border-white/20">
              <span className="w-2.5 h-2.5 bg-[#f25022] rounded-[1px]" />
              <span className="w-2.5 h-2.5 bg-[#7fba00] rounded-[1px]" />
              <span className="w-2.5 h-2.5 bg-[#00a4ef] rounded-[1px]" />
              <span className="w-2.5 h-2.5 bg-[#ffb900] rounded-[1px]" />
            </div>
            <span className="font-black text-2xl tracking-tight">NSoC</span>
            <span className="text-xs uppercase px-2.5 py-0.5 bg-[#00a4ef] text-black font-black rounded-full">
              Winter Edition
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-3 font-medium text-center md:text-left">
            Nexus Spring of Code · Empowering student open source developers.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-bold text-slate-300">
          <a
            href="mailto:connect.nsoc@gmail.com"
            className="flex items-center gap-2 hover:text-[#00a4ef] transition-colors"
          >
            <Mail size={16} />
            <span>connect.nsoc@gmail.com</span>
          </a>
          <a
            href="https://nsoc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#00a4ef] transition-colors"
          >
            <Globe size={16} />
            <span>nsoc.in</span>
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-400 font-medium">
        © 2026 Nexus Spring of Code. Built for the community with Microsoft Technical Club design language.
      </div>
    </footer>
  );
};

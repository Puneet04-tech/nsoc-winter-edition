"use client";
import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#00a4ef] text-[#000000] font-black flex items-center justify-center text-lg shadow-[2px_2px_0px_0px_#ffffff]">
            ❄
          </span>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-foreground">NSoC</span>
            <span className="text-[10px] text-[#00a4ef] uppercase tracking-wider font-semibold -mt-1">
              Winter Edition
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-[#00a4ef] transition-colors">
            About
          </Link>
          <Link href="#timeline" className="hover:text-[#00a4ef] transition-colors">
            Timeline
          </Link>
          <Link href="#projects" className="hover:text-[#00a4ef] transition-colors">
            Projects
          </Link>
          <Link href="#leaderboard" className="hover:text-[#00a4ef] transition-colors">
            Leaderboard
          </Link>
          <Link href="#faq" className="hover:text-[#00a4ef] transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/register"
            className="flex items-center gap-2 bg-[#00a4ef] text-[#000000] px-4 py-2 rounded-[12px] text-xs font-bold shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all border border-[#000000]"
          >
            <span>Register</span>
            <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#000000] text-[#00a4ef] rounded-full border border-white">
              Recommended
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

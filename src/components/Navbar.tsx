"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-6xl mx-auto">
      <nav className="mstc-nav px-6 py-3.5 flex items-center justify-between transition-all">
        {/* Microsoft 4-square + NSoC Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6 p-0.5 rounded bg-black/40 border border-white/20">
            <span className="w-2.5 h-2.5 bg-[#f25022] rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-[#7fba00] rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-[#00a4ef] rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-[#ffb900] rounded-[1px]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-white dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              NSoC
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="#about" className="hover:text-[#00a4ef] transition-colors">
            About
          </Link>
          <Link href="#action-cards" className="hover:text-[#00a4ef] transition-colors">
            Explore
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
          <Link href="#perks" className="hover:text-[#00a4ef] transition-colors">
            Perks
          </Link>
          <Link href="#faq" className="hover:text-[#00a4ef] transition-colors">
            FAQ
          </Link>
        </div>

        {/* Right Actions: Theme Toggle & Register */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/register"
            className="hidden sm:inline-flex items-center gap-2 bg-[#00a4ef] text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#38bdf8] hover:shadow-[0_0_15px_rgba(0,164,239,0.7)] transition-all"
          >
            Register
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#00a4ef] transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 mstc-card p-6 flex flex-col gap-4 text-center">
          <Link href="#about" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            About
          </Link>
          <Link href="#action-cards" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            Explore
          </Link>
          <Link href="#timeline" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            Timeline
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            Projects
          </Link>
          <Link href="#leaderboard" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            Leaderboard
          </Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="py-2 text-white font-bold hover:text-[#00a4ef]">
            FAQ
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="bg-[#00a4ef] text-black py-3 rounded-full font-bold uppercase tracking-wider"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
};

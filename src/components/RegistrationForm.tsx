"use client";
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<'contributor' | 'project' | 'mentor'>('contributor');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          GET STARTED
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Register for Winter Edition
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Season runs 15 October to 30 December. Submissions open now.
        </p>
      </div>

      <div className="mstc-card p-8 md:p-12">
        {submitted ? (
          <div className="text-center py-12 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#00a4ef] mb-4 animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Application Submitted!
            </h3>
            <p className="text-slate-300 mt-2 max-w-md">
              Check your inbox for confirmation and onboarding steps to join the NSoC winter discord and repos.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs uppercase font-extrabold tracking-widest text-[#00a4ef] hover:underline"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selector Pills */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                I want to join as:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['contributor', 'project', 'mentor'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-3 px-2 rounded-xl text-xs font-black uppercase tracking-wider border-2 transition-all ${
                      role === r
                        ? 'border-white bg-[#00a4ef] text-black shadow-[4px_4px_0px_0px_#ffffff]'
                        : 'border-white/20 bg-white/5 text-slate-300 hover:border-white/50'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Linus Torvalds"
                  className="w-full bg-black/60 border-2 border-white/20 focus:border-[#00a4ef] focus:outline-none rounded-xl p-3.5 text-white placeholder-slate-500 font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="developer@college.edu"
                  className="w-full bg-black/60 border-2 border-white/20 focus:border-[#00a4ef] focus:outline-none rounded-xl p-3.5 text-white placeholder-slate-500 font-medium transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/username"
                  className="w-full bg-black/60 border-2 border-white/20 focus:border-[#00a4ef] focus:outline-none rounded-xl p-3.5 text-white placeholder-slate-500 font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  College / Institution
                </label>
                <input
                  type="text"
                  required
                  placeholder="VIT Bhopal / NIT / IIT"
                  className="w-full bg-black/60 border-2 border-white/20 focus:border-[#00a4ef] focus:outline-none rounded-xl p-3.5 text-white placeholder-slate-500 font-medium transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                Tech Stack / Experience
              </label>
              <textarea
                required
                rows={3}
                placeholder="TypeScript, Next.js, Rust, Python, Go..."
                className="w-full bg-black/60 border-2 border-white/20 focus:border-[#00a4ef] focus:outline-none rounded-xl p-3.5 text-white placeholder-slate-500 font-medium transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00a4ef] text-black font-black uppercase tracking-wider text-sm border-2 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#ffffff] hover:bg-[#38bdf8] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Registration</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Snowflake } from '../../components/Snowflake';

export default function RegisterPage() {
  const [role, setRole] = useState<'contributor' | 'maintainer' | 'mentor'>('contributor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    college: '',
    track: 'Web Development',
    experience: 'Beginner',
    statement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#f0f4f8] relative overflow-hidden font-sans py-12 px-6">
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(24)].map((_, i) => (
          <Snowflake key={i} />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Navigation header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#0f172a]">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-[#00a4ef] hover:underline"
          >
            ← Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#94a3b8]">Season</span>
            <span className="px-3 py-1 text-xs font-bold bg-[#0b1221] text-[#00a4ef] border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef]">
              Winter 2026
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#0b1221] border border-[#0f172a] rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00a4ef] bg-[#000000] border-2 border-[#00a4ef] rounded-full shadow-[4px_4px_0px_0px_#00a4ef] mb-4">
              Open Registration
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f0f4f8]">
              Join Nexus Spring of Code
            </h1>
            <p className="text-[#94a3b8] mt-3 text-base md:text-lg">
              Winter Edition: 15 October – 30 December 2026 • 100% Free & Open Source
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setRole('contributor')}
              className={`p-4 rounded-[16px] text-left transition-all border-2 ${
                role === 'contributor'
                  ? 'bg-[#000000] border-[#00a4ef] shadow-[4px_4px_0px_0px_#00a4ef]'
                  : 'bg-[#000000]/60 border-[#0f172a] hover:border-[#94a3b8]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-[#f0f4f8]">Contributor</span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 bg-[#00a4ef] text-[#000000] rounded-full border border-white shadow-[2px_2px_0px_0px_#ffffff]">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-[#94a3b8]">Build projects, get PRs merged & win swags</p>
            </button>

            <button
              type="button"
              onClick={() => setRole('maintainer')}
              className={`p-4 rounded-[16px] text-left transition-all border-2 ${
                role === 'maintainer'
                  ? 'bg-[#000000] border-[#00a4ef] shadow-[4px_4px_0px_0px_#00a4ef]'
                  : 'bg-[#000000]/60 border-[#0f172a] hover:border-[#94a3b8]'
              }`}
            >
              <div className="font-bold text-sm text-[#f0f4f8] mb-1">Project Maintainer</div>
              <p className="text-xs text-[#94a3b8]">Submit your repo for 3,500+ developers</p>
            </button>

            <button
              type="button"
              onClick={() => setRole('mentor')}
              className={`p-4 rounded-[16px] text-left transition-all border-2 ${
                role === 'mentor'
                  ? 'bg-[#000000] border-[#00a4ef] shadow-[4px_4px_0px_0px_#00a4ef]'
                  : 'bg-[#000000]/60 border-[#0f172a] hover:border-[#94a3b8]'
              }`}
            >
              <div className="font-bold text-sm text-[#f0f4f8] mb-1">Technical Mentor</div>
              <p className="text-xs text-[#94a3b8]">Review PRs & guide student developers</p>
            </button>
          </div>

          {submitted ? (
            <div className="bg-[#000000] border-2 border-[#00a4ef] rounded-[24px] p-8 text-center shadow-[6px_6px_0px_0px_#00a4ef]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00a4ef]/10 border-2 border-[#00a4ef] flex items-center justify-center text-3xl">
                ❄️
              </div>
              <h2 className="text-2xl font-bold text-[#f0f4f8] mb-2">Registration Confirmed!</h2>
              <p className="text-sm text-[#94a3b8] max-w-md mx-auto mb-6">
                Thank you for applying as a <span className="text-[#00a4ef] font-semibold">{role}</span>, {formData.fullName || 'developer'}. We have dispatched confirmation details to {formData.email || 'your email'}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-6 py-3 bg-[#00a4ef] text-[#000000] font-bold rounded-[12px] shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[2px] transition-all"
                >
                  Explore Projects
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#0b1221] border border-[#0f172a] text-[#f0f4f8] font-bold rounded-[12px] hover:border-[#00a4ef] transition-all"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    GitHub Profile URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    College / University / Org *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. VIT Bhopal University"
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    Primary Domain / Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  >
                    <option value="Web Development">Web & Frontend (React / Next.js / TypeScript)</option>
                    <option value="Backend & Cloud">Backend & Systems (Go / Rust / Node.js)</option>
                    <option value="AI & Machine Learning">AI & Data Science (Python / PyTorch)</option>
                    <option value="DevOps & Security">DevOps, Cloud & Tooling</option>
                    <option value="UI/UX & Documentation">UI/UX Design & Documentation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    Open Source Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                  >
                    <option value="Beginner">First Time Open Source Contributor</option>
                    <option value="Intermediate">Made a few PRs / Bug Fixes</option>
                    <option value="Advanced">Frequent Contributor / Maintainer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                  Why do you want to participate in NSoC Winter? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Share your goals, technologies you want to master, and what you look forward to building..."
                  className="w-full bg-[#000000] border border-[#0f172a] focus:border-[#00a4ef] rounded-[12px] p-4 text-sm text-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#00a4ef]/40 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#00a4ef] text-[#000000] font-extrabold text-base p-4 rounded-[12px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all shadow-[8px_8px_0px_0px_#ffffff] border border-[#000000]"
                >
                  Submit Winter Application →
                </button>
              </div>

              <p className="text-center text-xs text-[#94a3b8]">
                By registering, you agree to follow the NSoC Code of Conduct and Open Source Guidelines.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";
import React from 'react';
import { leaderboardData } from '../data/nsoc-data';
import { Trophy, GitPullRequest, Flame } from 'lucide-react';

export const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[#00a4ef] bg-[#0b1221] border border-[#00a4ef] rounded-full shadow-[0_0_15px_rgba(0,164,239,0.3)] mb-4">
          HALL OF FAME
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
          Winter Leaderboard
        </h2>
        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
          Points awarded for merged pull requests based on difficulty and code quality.
        </p>
      </div>

      <div className="mstc-card p-6 md:p-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-white/20 text-xs font-black uppercase tracking-widest text-slate-400">
                <th className="py-4 px-4">Rank</th>
                <th className="py-4 px-4">Contributor</th>
                <th className="py-4 px-4 text-center">PRs Merged</th>
                <th className="py-4 px-4 text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-medium">
              {leaderboardData.map((c) => (
                <tr key={c.rank} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-black text-sm ${
                      c.rank === 1 ? 'bg-[#ffb900] text-black shadow-[0_0_10px_#ffb900]' :
                      c.rank === 2 ? 'bg-[#e2e8f0] text-black' :
                      c.rank === 3 ? 'bg-[#f97316] text-black' : 'text-slate-400'
                    }`}>
                      {c.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src={c.avatarUrl} alt={c.name} className="w-9 h-9 rounded-full border border-white/20 bg-black/40" />
                      <div>
                        <div className="font-bold text-white">{c.name}</div>
                        <div className="text-xs text-slate-400">@{c.githubUsername}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-200">
                      <GitPullRequest size={13} className="text-[#00a4ef]" />
                      {c.prsMerged} PRs
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-black text-lg text-[#00a4ef]">
                    {c.points} pts
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { leaderboardData } from '../data/nsoc-data';

export const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-card border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Rankings
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Winter Leaderboard
        </h2>
        <p className="text-[#94a3b8] text-base">Top contributors driving open-source codebases</p>
      </div>

      <div className="bg-card border border-border rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background border-b border-border text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                <th className="p-4 pl-6">Rank</th>
                <th className="p-4">Contributor</th>
                <th className="p-4">PRs Merged</th>
                <th className="p-4">Points</th>
                <th className="p-4 pr-6">Badges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0f172a] text-sm">
              {leaderboardData.map(c => {
                const isTop1 = c.rank === 1;
                return (
                  <tr
                    key={c.rank}
                    className={`hover:bg-background/40 transition-colors ${
                      isTop1 ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="p-4 pl-6 font-mono font-bold">
                      {isTop1 ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground font-black shadow-[2px_2px_0px_0px_#ffffff]">
                          1
                        </span>
                      ) : (
                        <span className="text-[#94a3b8]">#{c.rank}</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-foreground">{c.name}</div>
                      <div className="text-xs text-primary font-mono">@{c.githubUsername}</div>
                    </td>
                    <td className="p-4 font-mono font-semibold text-foreground">{c.prsMerged}</td>
                    <td className="p-4 font-mono font-bold text-primary">{c.points}</td>
                    <td className="p-4 pr-6">
                      <div className="flex flex-wrap gap-1">
                        {c.badges.map(b => (
                          <span
                            key={b}
                            className="text-[10px] px-2 py-0.5 bg-background text-[#94a3b8] rounded-full border border-border"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

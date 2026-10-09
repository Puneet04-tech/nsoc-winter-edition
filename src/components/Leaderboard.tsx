import { leaderboardData } from '../data/nsoc-data';

export const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Winter Leaderboard</h2>
      <div className="glass rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-sky-950/50">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Contributor</th>
              <th className="p-4">PRs Merged</th>
              <th className="p-4">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map(c => (
              <tr key={c.rank} className="border-t border-border">
                <td className="p-4 font-bold text-sky-400">#{c.rank}</td>
                <td className="p-4 flex items-center gap-3">
                  <img src={c.avatarUrl} alt={c.name} className="w-8 h-8 rounded-full" />
                  {c.name}
                </td>
                <td className="p-4">{c.prsMerged}</td>
                <td className="p-4 font-bold">{c.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

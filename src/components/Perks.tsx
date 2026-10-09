import React from 'react';

export const Perks = () => {
  const benefits = [
    {
      title: "Exclusive NSoC Swags",
      description: "Winter hoodies, custom developer t-shirts, beanies, insulated mugs, and laptop sticker packs delivered to top performers.",
      icon: "❄️",
      tag: "Top Contributors",
      recommended: true,
    },
    {
      title: "Verified Certificate",
      description: "Official digital certificate validating your open source contributions and pull request impact.",
      icon: "📜",
      tag: "All Active Participants",
      recommended: false,
    },
    {
      title: "Letter of Recommendation",
      description: "Personalized Letter of Recommendation (LOR) from project maintainers and industry mentors.",
      icon: "🌟",
      tag: "Standout Developers",
      recommended: true,
    },
    {
      title: "Global Recognition",
      description: "Feature on the NSoC Hall of Fame, official website leaderboard, and partner social channels.",
      icon: "🌍",
      tag: "Public Profile",
      recommended: false,
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-card border border-[#00a4ef] rounded-full shadow-[2px_2px_0px_0px_#00a4ef] mb-4">
          Incentives & Rewards
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Benefits for Selected Developers
        </h2>
        <p className="text-[#94a3b8] text-base">Earn recognition and tangible rewards for your merged code</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className={`bg-card p-8 rounded-[32px] border transition-all flex flex-col justify-between ${
              benefit.recommended
                ? 'border-2 border-[#00a4ef] shadow-[8px_8px_0px_0px_#00a4ef]'
                : 'border border-border shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{benefit.icon}</span>
                {benefit.recommended ? (
                  <span className="text-[10px] uppercase font-extrabold px-3 py-1 bg-primary text-primary-foreground rounded-full border border-white shadow-[2px_2px_0px_0px_#ffffff]">
                    Recommended
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 bg-background text-[#94a3b8] rounded-full border border-border">
                    {benefit.tag}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">{benefit.description}</p>
            </div>
            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-semibold">
              <span>{benefit.tag}</span>
              <span>Included →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

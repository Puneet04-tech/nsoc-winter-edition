export const Perks = () => {
  const benefits = [
    {
      title: "Exclusive NSoC Swags",
      description: "Get cool winter hoodies, custom tees, beanies, stickers, and developer gear delivered to your doorstep.",
      icon: "❄️"
    },
    {
      title: "Official Certificate",
      description: "Receive a verified digital certificate recognizing your contributions to open-source software.",
      icon: "📜"
    },
    {
      title: "Letter of Recommendation",
      description: "Top-performing contributors get personalized letters of recommendation from core project maintainers.",
      icon: "🌟"
    },
    {
      title: "Global Recognition",
      description: "Feature your profile on the official NSoC landing page, leaderboard, and social channels.",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Benefits & Perks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="glass p-8 rounded-3xl flex gap-6 items-start">
            <span className="text-4xl">{benefit.icon}</span>
            <div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import { sponsorsList } from '../data/nsoc-data';

export const Sponsors = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">Supported By</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {sponsorsList.map(sponsor => (
          <div key={sponsor.id} className="glass p-8 rounded-2xl flex items-center justify-center font-bold text-sky-200 hover:text-sky-400">
            {sponsor.name}
          </div>
        ))}
      </div>
    </section>
  );
};

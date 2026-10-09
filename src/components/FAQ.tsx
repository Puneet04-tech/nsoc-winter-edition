import { faqList } from '../data/nsoc-data';

export const FAQ = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqList.map(faq => (
          <div key={faq.id} className="glass p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

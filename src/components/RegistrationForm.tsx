export const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 px-6 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Join NSoC Winter</h2>
      <form className="glass p-8 rounded-3xl space-y-4">
        <input type="text" placeholder="Full Name" className="w-full bg-background border border-border p-3 rounded-lg" />
        <input type="email" placeholder="Email Address" className="w-full bg-background border border-border p-3 rounded-lg" />
        <textarea placeholder="Tell us about yourself" className="w-full bg-background border border-border p-3 rounded-lg h-32" />
        <button type="submit" className="w-full bg-sky-500 text-sky-950 font-bold p-3 rounded-lg">Register Now</button>
      </form>
    </section>
  );
};

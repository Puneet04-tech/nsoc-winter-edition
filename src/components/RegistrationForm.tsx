"use client";
import { useState } from 'react';

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="register" className="py-20 px-6 max-w-xl mx-auto">
      <div className="bg-card p-10 rounded-[32px] border border-border shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8 text-foreground text-center font-sans">
          Register for NSoC Winter
        </h2>
        {submitted ? (
          <div className="text-center text-primary font-bold text-xl">
            Registration Submitted!
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input type="text" placeholder="Full Name" required className="w-full bg-background border border-border p-4 rounded-[12px] text-foreground focus:border-[#00a4ef] focus:outline-none" />
            <input type="email" placeholder="Email Address" required className="w-full bg-background border border-border p-4 rounded-[12px] text-foreground focus:border-[#00a4ef] focus:outline-none" />
            <textarea placeholder="Tell us about yourself" required className="w-full bg-background border border-border p-4 rounded-[12px] text-foreground focus:border-[#00a4ef] focus:outline-none h-32" />
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold p-4 rounded-[12px] hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

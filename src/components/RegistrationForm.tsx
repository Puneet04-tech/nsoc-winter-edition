"use client";
import { useState } from 'react';

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="register" className="py-20 px-6 max-w-xl mx-auto">
      <div className="bg-[#0b1221] p-10 rounded-[32px] border border-[#0f172a] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8 text-[#f0f4f8] text-center font-sans">
          Register for NSoC Winter
        </h2>
        {submitted ? (
          <div className="text-center text-[#00a4ef] font-bold text-xl">
            Registration Submitted!
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input type="text" placeholder="Full Name" required className="w-full bg-[#000000] border border-[#0f172a] p-4 rounded-[12px] text-[#f0f4f8] focus:border-[#00a4ef] focus:outline-none" />
            <input type="email" placeholder="Email Address" required className="w-full bg-[#000000] border border-[#0f172a] p-4 rounded-[12px] text-[#f0f4f8] focus:border-[#00a4ef] focus:outline-none" />
            <textarea placeholder="Tell us about yourself" required className="w-full bg-[#000000] border border-[#0f172a] p-4 rounded-[12px] text-[#f0f4f8] focus:border-[#00a4ef] focus:outline-none h-32" />
            <button type="submit" className="w-full bg-[#00a4ef] text-[#000000] font-bold p-4 rounded-[12px] hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

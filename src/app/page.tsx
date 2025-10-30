"use client";
import Link from 'next/link';
import React, { useRef } from 'react';

const TrustCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-400/10 mb-6 border border-amber-400/20 text-amber-400">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* Animated Grid Background */}
      <div className="animated-grid"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center py-20 overflow-hidden">
        <div className="animate-fadeInSlideUp" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Pioneering Your Path to Global Mobility.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
            We streamline the complexities of immigration, providing clear, expert guidance for your journey to a new beginning.
          </p>
          <Link href="/services" passHref>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-amber-500/20">
              Start Your Eligibility Check
            </button>
          </Link>
        </div>
      </section>

      {/* Trust Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <TrustCard
              title="Consultation"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.745A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>}
            />
            <TrustCard
              title="Documents"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>}
            />
            <TrustCard
              title="Submission"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-slate-400 mb-8">Let&apos;s make your global ambitions a reality. Get in touch today.</p>
          <Link href="/contact" passHref>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-amber-500/20">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const PillarBlock = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-700 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

const HomeContent: React.FC = () => {
  return (
    <>
      {/* Our 3-Pillar Guarantee Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-16 text-center">
            Our 3-Pillar Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={0}> {/* Apply ScrollReveal to each PillarBlock */}
              <PillarBlock
                title="Meticulous Review"
                description="Every application undergoes a rigorous, multi-stage review process by our seasoned experts, ensuring absolute accuracy and compliance with all regulations."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <PillarBlock
                title="Seamless Submission"
                description="We manage the entire submission process, from document collation to liaising with authorities, providing you with a stress-free experience."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13V7m0 6l-2 2m2-2l2 2m-6-6h4m2 0h4M5 20h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 0 00-2 2v13a2 2 0 002 2z"></path></svg>}
              />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <PillarBlock
                title="Dedicated Support"
                description="Benefit from personalized, one-on-one support from your dedicated consultant, available to answer all your questions and guide you at every step."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 12c-2.21 0-4.24-.89-5.657-2.343m5.657 2.343l3.536 3.536m0 0A9.953 9.953 0 0112 12c-2.21 0-4.24-.89-5.657-2.343m-5.657 2.343l3.536 3.536m0 0A9.953 9.953 0 0112 12c-2.21 0-4.24-.89-5.657-2.343"></path></svg>}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-90"></div>
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Begin Your Application?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-xl mb-10">
              Take the first step towards your global future. Our experts are ready to guide you.
            </p>
          </ScrollReveal>
          <Link href="/contact" passHref>
            <button className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Secure Your Consultation
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeContent;

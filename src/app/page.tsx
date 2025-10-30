"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AnimatedContentWrapper from '@/components/AnimatedContentWrapper';

const DynamicHomeContent = dynamic(() => import('@/components/HomeContent'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedContentWrapper>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
            The Definitive Path to Global Visa Approval
          </h1>
        </AnimatedContentWrapper>
        <AnimatedContentWrapper delay={200}>
          <p className="max-w-3xl mx-auto text-xl text-gray-700 mb-10">
            Navigate the complexities of international immigration with confidence. Our expert guidance ensures a seamless and successful journey to your global aspirations.
          </p>
        </AnimatedContentWrapper>
        <Link href="/services" passHref>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Start Your Eligibility Check
          </button>
        </Link>
      </section>
      <DynamicHomeContent />
    </main>
  );
}



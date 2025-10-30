"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AnimatedContentWrapper from '@/components/AnimatedContentWrapper';
import HeroCarousel from '@/components/HeroCarousel';

const DynamicHomeContent = dynamic(() => import('@/components/HomeContent'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <DynamicHomeContent />
    </main>
  );
}



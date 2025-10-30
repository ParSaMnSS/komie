"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const colors = ['bg-blue-900', 'bg-gray-800', 'bg-slate-900'];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden group">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out ${color} ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      ))}

      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8">
          Your Journey, Our Expertise
        </h1>
        <Link href="/contact" passHref>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Get a Free Consultation
          </button>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none group-hover:translate-x-0 -translate-x-2"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 text-gray-300/60 group-hover:text-gray-100 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none group-hover:translate-x-0 translate-x-2"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 text-gray-300/60 group-hover:text-gray-100 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 group">
        {colors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:bg-gray-300 ${index === currentIndex ? 'bg-blue-700 ring-2 ring-blue-700 ring-offset-2 ring-offset-transparent' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

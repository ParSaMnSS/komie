"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-950 text-slate-100`}
      >
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            hasScrolled
              ? "h-16 bg-slate-950 shadow-lg"
              : "h-24 bg-slate-950/80 backdrop-blur-xl"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-shrink-0">
                <Link href="/" className="text-3xl font-bold text-white">
                  My App
                </Link>
              </div>
              <nav className="hidden md:flex md:space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-slate-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px border-b border-amber-400/20"></div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-slate-950 p-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-4xl font-bold text-slate-100 hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <main>{children}</main>

        <footer className="bg-slate-950/90 mt-12">
          <div className="container mx-auto px-6 py-4 text-center text-slate-400">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

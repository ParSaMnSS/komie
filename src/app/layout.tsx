"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white text-gray-900 overflow-x-hidden`}
      >
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  My App
                </Link>
              </div>
              <nav className="hidden md:flex md:space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-gray-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200"></div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div
            className="absolute inset-0 bg-gray-800/75"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-white p-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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
                  className="text-2xl font-bold text-gray-900 hover:text-blue-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <main>{children}</main>

        <footer className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Column 1: Logo/Motto */}
              <div className="text-center md:text-left">
                <Link href="/" className="text-3xl font-bold text-gray-900">
                  My App
                </Link>
                <p className="mt-4 text-gray-600">Your Global Journey, Our Expert Guidance.</p>
              </div>

              {/* Column 2: Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact Details */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Contact Us</h3>
                <p className="text-gray-600">123 Global Tower, Suite 100</p>
                <p className="text-gray-600">New York, NY 10001, USA</p>
                <p className="mt-2 text-gray-600">Phone: +1 (212) 555-1234</p>
                <p className="text-gray-600">Email: info@myapp.com</p>
              </div>

              {/* Column 4: Google Maps Placeholder */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Find Us</h3>
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2060000000003!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-gray-500">Click map for full view</p>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
              &copy; {new Date().getFullYear()} My App. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

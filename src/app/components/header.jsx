'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white transition-all duration-300 shadow-sm ${isScrolled ? 'bg-gray-800 shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo/Title */}
        <Link href="/" className="text-xl font-semibold text-black">
          Drive
        </Link>

        {/* Right - Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm text-gray-700">
          <Link href="#">Overview</Link>
          <Link href="#">Requirements</Link>
          <Link href="#">Delivery driver</Link>
          <Link href="#">Driving basics</Link>
          <Link href="#">Earnings</Link>
          <Link href="#">Deactivations</Link>
          <Link href="#">Safety</Link>
          <Link href="#">Uber Pro</Link>
          <Link href="#">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}

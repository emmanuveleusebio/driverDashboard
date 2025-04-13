"use client";


// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
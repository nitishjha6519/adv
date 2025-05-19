"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-[#c25b5b] font-serif text-xl font-semibold tracking-wider">
              Adv Subhash Kr Jha & Associates
            </span>
            <span className="text-gray-600 text-xs tracking-wider">
              ADVOCATES / LEGAL CONSULTANTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#c25b5b] font-medium hover:text-[#a04545] transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/expertise"
            className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
          >
            OUR EXPERTISE
          </Link>
          <Link
            href="/services"
            className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
          >
            OUR SERVICES
          </Link>
          {/* <Link
            href="/blog"
            className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
          >
            BLOG
          </Link> */}
          <Link
            href="/contact"
            className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#c25b5b]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#c25b5b] font-medium hover:text-[#a04545] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/expertise"
              className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR EXPERTISE
            </Link>
            <Link
              href="/services"
              className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR SERVICES
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-[#c25b5b] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

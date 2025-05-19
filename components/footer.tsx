import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-white.png"
                alt="Adv Subhash Kr Jha & Associates Logo"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="text-[#e07777] font-serif text-lg font-semibold tracking-wider">
                  Adv Subhash Kr Jha
                </span>
                <span className="text-gray-400 text-xs tracking-wider">
                  & ASSOCIATES
                </span>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              Providing expert legal services in Delhi NCR for over two decades.
              Our commitment to excellence and client satisfaction sets us
              apart.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e07777] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e07777] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e07777] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e07777] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Labor & Employment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#e07777] transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for legal updates and insights.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e07777] focus:border-transparent text-white"
              />
              <button
                type="submit"
                className="w-full bg-[#c25b5b] hover:bg-[#a04545] text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Adv Subhash Kr Jha & Associates. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e07777] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e07777] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e07777] text-sm transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

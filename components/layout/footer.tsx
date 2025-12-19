import Image from 'next/image';
import Link from 'next/link';
import { About } from '@/config/about';
import { Applepay, Visa, Mastercard, Discover, Amex } from 'react-pay-icons';
import { MailboxIcon } from 'lucide-react';
import { InstagramIcon } from '../icons/instagram';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-primary/5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/branding/logo.png"
                alt="PKWY Wellness Logo"
                width={50}
                height={50}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{About.name}</h3>
                <p className="text-xs text-gray-500">Transform Your Body</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              {About.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <Link href="/#book" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                  Book a Class
                </Link>
              </li>
              <li>
                <a href="/waiver" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                  Waiver
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${About.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <MailboxIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{About.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={About.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <InstagramIcon />
                  <span>@pkwypilates</span>
                </a>
              </li>
            </ul>
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-gray-900">Legal</h5>
              <ul className="space-y-3">
                <li>
                  <a href="/legal/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/legal/terms" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} {About.companyLegalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="text-center space-y-2">
                  <div className="flex justify-center items-center space-x-2">
                    <Applepay className="w-6 h-6" />
                    <Visa className="w-6 h-6" />
                    <Mastercard className="w-6 h-6" />
                    <Discover className="w-6 h-6" />
                    <Amex className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

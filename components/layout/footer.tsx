import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Identity } from '@/config/identity';
import { Instagram, MapPin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 to-purple-50/20 pointer-events-none"></div>

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
                <h3 className="text-lg font-semibold text-gray-900">{Identity.name}</h3>
                <p className="text-xs text-gray-500">Transform Your Body</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              {Identity.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Book a Class
                </a>
              </li>
              <li>
                <a href="/waiver" className="text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  Waiver
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${Identity.email}`}
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{Identity.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={Identity.address.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{Identity.address.street}, {Identity.address.city}, {Identity.address.state} {Identity.address.zip}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="space-y-4">
              <a
                href={Identity.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span>@pkwypilates</span>
              </a>

              <div className="pt-4 space-y-2">
                <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Legal</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy-policy" className="text-xs text-gray-500 hover:text-pink-500 transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-xs text-gray-500 hover:text-pink-500 transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} {Identity.companyLegalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Live Classes Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

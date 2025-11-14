'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MapPin, Lock } from 'lucide-react';
import { Identity } from '@/config/identity';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#pricing', label: 'Book Class' },
    { href: Identity.social.instagram, label: 'Contact', external: true },
    { href: '/staff', label: 'Staff' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"></div>
      
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/branding/logo.png"
              width={500}
              height={500}
              alt="PKWY Pilates Logo"
              className="size-24 rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-gray-900">{Identity.name}</h1>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Pittsburgh, PA • Wellness • Pilates
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : link.href === '/staff' ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 bg-orange-900 text-white hover:bg-orange-800 rounded-lg transition-colors duration-200"
                >
                  {/* <Lock className="w-3.5 h-3.5" /> */}
                  {link.label}
                </Link>
              ) : link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : link.href === '/staff' ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex w-fit items-center gap-2 text-sm font-medium px-4 py-2 bg-orange-900 text-white hover:bg-orange-800 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Lock className="w-4 h-4" />
                    {link.label}
                  </Link>
                ) : link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
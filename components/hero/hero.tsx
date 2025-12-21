'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { About } from '@/config/about';
import { Fonts } from '@/config/fonts';
import { InstagramIcon } from '../icons/instagram';

export function HeroSection() {
  return (
    <main id="home" className="space-y-8 p-8 bg-secondary/20 rounded-4xl">
      <section className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-lg text-gray-400 tracking-widest'>
            MEET YOUR INSTRUCTOR
          </h1>
          <h2 className={`text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
            SAMANTHA
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative group">
            <Image
              src="/branding/instructor.png"
              alt="PKWY Wellness Instructor"
              width={250}
              height={250}
              className="object-cover transition-transform duration-300 rounded-3xl"
            />
            {/* Instagram Button Overlay */}
            <div className="absolute bottom-3 right-3">
              <a
                href={About.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-primary/50 bg-white/95 backdrop-blur-sm hover:border-primary hover:bg-white shadow-lg text-sm"
                >
                  <InstagramIcon />
                  <span className="font-medium">pkwypilates</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`space-y-4 ${Fonts.quicksand.className}`}>
        <div className='flex gap-2 justify-center items-center'>
          <a href="#book"
            rel="noopener noreferrer"
          >
            <Button className='font-bold' size="lg">
              Book a Class
            </Button>
          </a>

          <a
            href="/contact"
            rel="noopener noreferrer"
          >
            <Button variant='secondary' size="lg">
              Contact
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
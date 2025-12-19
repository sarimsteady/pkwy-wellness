'use client';

import { About } from '@/config/about';
import { GeometryDots } from '@/components/decoration/geometry-dots';
import { InstagramIcon } from '@/components/icons/instagram';
import { MailIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main className="space-y-4 mb-8 p-8">
      <GeometryDots />
      
      <section className="space-y-4">
        <div className="text-center">
          <h1 className="text-lg text-gray-400 tracking-widest mb-2">
            GET IN TOUCH
          </h1>
          <h2 className="text-4xl font-light text-gray-900">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {/* Email Card */}
          <a
            href={`mailto:${About.email}`}
            className="group block h-full"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-101 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4 pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto group-hover:bg-primary/20 transition-colors">
                  <MailIcon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Email</CardTitle>
                <CardDescription className="text-base">
                  Send us an email and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg font-medium text-primary">
                  {About.email}
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full"
                  onClick={(e) => e.preventDefault()}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </a>

          {/* Instagram Card */}
          <a
            href={About.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-101 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4 pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto group-hover:bg-primary/20 transition-colors">
                  <InstagramIcon />
                </div>
                <CardTitle className="text-2xl">Instagram</CardTitle>
                <CardDescription className="text-base">
                  Connect with Samantha on Instagram and follow us for updates, tips, and inspiration.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg font-medium text-primary">
                  @pkwypilates
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full"
                  onClick={(e) => e.preventDefault()}
                >
                  Visit Instagram
                </Button>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>
    </main>
  );
}


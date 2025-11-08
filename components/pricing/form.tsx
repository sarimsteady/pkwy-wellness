'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { Fonts } from '@/config/fonts';
import { Identity } from '@/config/identity';
import { Separator } from '../decoration/separator';
import Image from 'next/image';
import { Amex, Applepay, Discover, Mastercard, Visa } from 'react-pay-icons';

export function Pricing() {
    return (
        <main id="pricing" >
            <div className={`flex bg-orange-200/100 min-h-screen items-center justify-center p-5 ${Fonts.crimsonText.className}`}>
                <div className="rounded-3xl md:max-w-2xl max-w-md py-2 space-y-12">
                    <div className="text-center space-y-12">
                        <header className="space-y-4">
                            <h2 className={`text-lg font-light tracking-widest text-amber-900 ${Fonts.quicksand.className}`}>
                                PKWY Wellness x Pittsburgh Pilates
                            </h2>
                            <div className="space-y-2">
                                <h1 className='text-5xl text-amber-900 font-bold tracking-widest'>
                                    COMING SOON
                                </h1>
                                <h2 className={`text-4xl font-light tracking-widest text-amber-900 ${Fonts.quicksand.className}`}>
                                    Regular Classes
                                </h2>
                            </div>
                            <h3 className='text-xl text-pink-600 tracking-widest'>
                                Sunday Sessions
                            </h3>
                            <p className='text-amber-900 font-semibold text-lg'>
                                We&apos;re excited to announce that we&apos;ve secured a location for regular Sunday Pilates classes! 
                                Details and registration will be available soon.
                            </p>

                            <section className="bg-orange-300/30 rounded-2xl p-6 shadow-md space-y-6">
                                <h3 className="text-2xl font-semibold text-amber-900">
                                    Instructor
                                </h3>

                                <div className="flex justify-center">
                                    {/* Samantha */}
                                    <div className="flex flex-col items-center text-center max-w-sm">
                                        <Image
                                            src="/instructors/samantha.png"
                                            alt="Samantha Syed"
                                            width={128}
                                            height={128}
                                            className="w-32 h-32 rounded-full object-cover object-top shadow-lg"
                                        />
                                        <span className="mt-2 font-semibold text-amber-900 text-lg">Samantha Syed</span>

                                        <a href={Identity.social.instagram} target="_blank">
                                            <Button
                                                variant="outline"
                                                className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 brightness-105 text-sm"
                                            >
                                                <Instagram className="w-4 h-4 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
                                                @pkwypilates
                                            </Button>
                                        </a>

                                        <p className="mt-2 text-gray-600 text-sm">
                                            Dedicated gym enthusiast since 2011 whose journey into self-knowledge and spiritual growth led her to obtaining her Pilates certification and holistic wellness.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Separator />
                            <div className="space-y-6 text-center">
                                <h1 className={`text-4xl text-gray-500 font-ultralight tracking-widest ${Fonts.quicksand.className}`}>
                                    STAY TUNED
                                </h1>
                                <div className="bg-amber-100 rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Registration Opening Soon</h3>
                                    <p className="text-gray-700 mb-6">
                                        We&apos;re finalizing the details for our regular Sunday Pilates classes. 
                                        Registration and class information will be available very soon!
                                    </p>
                                    <Button 
                                        disabled
                                        className="w-full bg-gray-400 cursor-not-allowed text-white font-semibold"
                                    >
                                        Coming Soon
                                    </Button>
                                </div>
                            </div>
                        </header>
                    </div>

                    {/* Please Note Section */}
                    <div className="text-center mt-6 px-10 md:px-20">
                        <p className='text-lg font-semibold text-amber-900'>Location Details</p>
                        <div className="space-y-2">
                            <p className="text-gray-600 text-sm">
                                We&apos;ve secured a wonderful location for our regular Sunday Pilates classes. 
                                Specific address and accessibility details will be shared when registration opens.
                            </p>
                        </div>
                    </div>

                    {/* Payment Methods Section */}
                    <div className="text-center space-y-2">
                        <div className="flex justify-center items-center space-x-2">
                            <Applepay className="w-10 h-10" />
                            <Visa className="w-10 h-10" />
                            <Mastercard className="w-10 h-10" />
                            <Discover className="w-10 h-10" />
                            <Amex className="w-10 h-10" />
                        </div>
                        <p className="text-gray-600 text-sm">
                            All payments securely processed by <span className="font-semibold text-gray-800">Stripe</span>.
                        </p>
                    </div>

                    <Separator />

                    {/* Questions/Contact Section */}
                    <div className="text-center">
                        <div className="mx-auto space-y-2">
                            <div>
                                <h3 className={`text-2xl font-semibold text-amber-800`}>
                                    Questions?
                                </h3>
                                <p className="text-gray-600">
                                    Have questions or need help choosing the right option for you?
                                </p>
                            </div>
                            <a
                                href={Identity.social.instagram}
                            >
                                <Button className={Fonts.quicksand.className}>
                                    Contact
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    );
}
'use client';

import React from 'react';
import { Fonts } from '@/config/fonts';

export function Pricing() {
    return (
        <main id="pricing" >
            <div className={`flex bg-muted/30 items-center justify-center p-8 ${Fonts.crimsonText.className}`}>
                <div className="rounded-3xl md:max-w-2xl max-w-md py-2 space-y-12">
                    <div className="text-center space-y-12">
                        <header className="space-y-4">
                            <div className="space-y-2">
                                <h1 className='text-5xl text-amber-900 font-bold tracking-widest'>
                                    COMING SOON
                                </h1>
                                <h2 className={`text-4xl font-light tracking-widest text-amber-900 ${Fonts.quicksand.className}`}>
                                    Regular Classes
                                </h2>
                            </div>
                            <h3 className='text-xl text-primary tracking-widest'>
                                Sunday Sessions
                            </h3>
                            <p className='text-amber-900 font-semibold text-lg'>
                                We&apos;re excited to announce that we&apos;ve secured a location for regular Sunday Pilates classes!
                                Details and registration will be available soon.
                            </p>
                        </header>
                    </div>

                    {/* Please Note Section */}
                    <div className="text-center mt-6 px-10 md:px-20">
                        <p className='text-lg font-semibold text-amber-900'>Location Details</p>
                        <div className="space-y-2">
                            <p className="text-gray-600 text-sm">
                                Specific address and accessibility details will be shared when registration opens.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    );
}
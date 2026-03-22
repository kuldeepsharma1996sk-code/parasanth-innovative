'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <span className="text-tesla-red text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">
                        Talent Acquisition
                    </span>
                    <h1 className="text-6xl md:text-8xl font-light text-parasanth-charcoal tracking-tighter mb-6">
                        Join our <span className="font-bold">team.</span>
                    </h1>
                    
                    <div className="flex flex-col items-center gap-8">
                        <div className="h-px bg-parasanth-grey-mid/20 w-32"></div>
                        <div className="inline-flex items-center gap-4 px-6 py-3 bg-parasanth-grey-light rounded-full">
                            <div className="w-2 h-2 bg-tesla-red rounded-full animate-pulse"></div>
                            <span className="text-parasanth-charcoal font-black text-[10px] uppercase tracking-[0.3em]">
                                Coming Soon
                            </span>
                        </div>
                        <p className="text-parasanth-grey-dark text-lg md:text-xl max-w-xl font-medium leading-relaxed italic opacity-60">
                            We are currently restructuring our technical and operational hiring tracks for upcoming factory expansions.
                        </p>
                    </div>

                    <div className="mt-16">
                        <Link href="/" className="btn-primary">
                            Home
                        </Link>
                    </div>

                    {/* Background Detail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-tesla-red/5 rounded-full blur-[120px] opacity-50"></div>
                </motion.div>
            </div>
        </main>
    )
}

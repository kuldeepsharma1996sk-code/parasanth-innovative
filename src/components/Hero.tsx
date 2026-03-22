'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import React from 'react'

interface HeroProps {
    title: string | React.ReactNode
    subtitle: string | React.ReactNode
    backgroundImage?: string
    primaryCTA?: {
        text: string
        href: string
    }
    secondaryCTA?: {
        text: string
        href: string
    }
}

export default function Hero({
    title,
    subtitle,
    backgroundImage = '/hero-bg.jpg',
    primaryCTA = { text: 'Know More', href: '/contact' },
    secondaryCTA = { text: 'Explore Products', href: '#products' },
}: HeroProps) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden snap-section bg-white">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            />

            {/* Light Gradient Overlay */}
            <div className="absolute inset-0 hero-overlay" />

            {/* Animated Background Pattern - Subtle light orbs */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tesla-red/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-parasanth-grey-light rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-tesla-red text-[0.7rem] md:text-xs font-black tracking-[0.4em] uppercase mb-8"
                >
                    Parasanth Innovative Industries
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-parasanth-charcoal leading-tight mb-6"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-parasanth-grey-dark max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href={primaryCTA.href} className="px-10 py-5 bg-tesla-red text-white rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-parasanth-charcoal hover:shadow-xl hover:-translate-y-1 min-w-[200px]">
                        {primaryCTA.text}
                    </Link>
                    <Link href={secondaryCTA.href} className="btn-secondary min-w-[200px]">
                        {secondaryCTA.text}
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

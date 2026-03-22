'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const factoryStats = [
    { value: '1.5M+', label: 'Annual Capacity', suffix: 'Units' },
    { value: '50K+', label: 'Manufacturing', suffix: 'Sq. Ft.' },
    { value: '15+', label: 'Production', suffix: 'Lines' },
    { value: '24/7', label: 'Operations', suffix: 'Active' },
]

const capabilities = [
    {
        title: 'In-house R&D Lab',
        description: 'Product development, prototyping, and rigorous quality testing under one roof.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        title: 'Automated Assembly',
        description: 'State-of-the-art robotic assembly lines ensuring precision at scale.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Quality Control',
        description: '100% inspection at every stage with advanced testing equipment.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
]

export default function FactoryShowcase() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section ref={containerRef} className="relative min-h-screen bg-parasanth-charcoal overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/* Factory background */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-parasanth-charcoal via-charcoal-800 to-charcoal-950"
                    style={{
                        backgroundImage: `url('/factory/assembly-line.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-parasanth-charcoal/75" />
                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                    {/* Left: Stats and headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            Manufacturing Excellence
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                            Where Precision
                            <br />
                            Meets Scale
                        </h2>
                        <p className="text-white/60 text-lg mb-12 max-w-lg">
                            Our state-of-the-art manufacturing facility combines advanced automation with
                            rigorous quality control to deliver millions of appliances annually.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {factoryStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-tesla-red mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/50 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                    <div className="text-white/30 text-xs mt-1">{stat.suffix}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Capability cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Main card */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 bg-tesla-red rounded-full animate-pulse" />
                                <span className="text-white/60 text-sm uppercase tracking-wider">
                                    Live Production
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-8">
                                Facility Capabilities
                            </h3>

                            <div className="space-y-6">
                                {capabilities.map((cap, index) => (
                                    <motion.div
                                        key={cap.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/60 group-hover:text-tesla-red group-hover:bg-tesla-red/10 transition-all duration-300">
                                            {cap.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{cap.title}</h4>
                                            <p className="text-white/50 text-sm">{cap.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick stat card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-white/5 backdrop-blur-xl rounded-xl p-6 flex items-center justify-between border border-white/10"
                        >
                            <div>
                                <p className="text-white/50 text-sm mb-1">Quality Assurance Rate</p>
                                <p className="text-white text-2xl font-bold">99.8%</p>
                            </div>
                            <div className="w-16 h-16 rounded-full border-4 border-tesla-red flex items-center justify-center">
                                <svg className="w-8 h-8 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade to white */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Client logos data
const clients = [
    { name: 'Sansui', logo: '/clients/sansui.svg' },
    { name: 'Kenstar', logo: '/clients/kenstar.svg' },
    { name: 'Flipkart Smartbuy', logo: '/clients/flipkart-smartbuy.svg' },
    { name: 'Bajaj', logo: '/clients/bajaj.svg' },
    { name: 'Orient', logo: '/clients/orient.svg' },
    { name: 'Crompton', logo: '/clients/crompton.svg' },
]

// Certification data
const certifications = [
    {
        name: 'BIS/ISI Certified',
        code: 'IS 374',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <text x="32" y="52" textAnchor="middle" fontSize="8" fill="currentColor">ISI</text>
            </svg>
        ),
        description: 'Bureau of Indian Standards certified products',
        verified: true,
    },
    {
        name: 'ISO 9001:2015',
        code: 'Quality Management',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 32l8 8 16-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        description: 'International quality management certification',
        verified: true,
    },
    {
        name: 'BEE Star Rating',
        code: '5-Star Energy',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <polygon
                    points="32,8 38,26 56,26 42,38 48,56 32,46 16,56 22,38 8,26 26,26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        ),
        description: 'Bureau of Energy Efficiency compliant',
        verified: true,
    },
    {
        name: 'CE Marking',
        code: 'European Conformity',
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="24" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M24 20c-6.6 0-12 5.4-12 12s5.4 12 12 12" stroke="currentColor" strokeWidth="2" />
                <circle cx="42" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M42 20c-6.6 0-12 5.4-12 12s5.4 12 12 12" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        description: 'EU safety & environmental compliance',
        verified: true,
    },
]

// ClientMarquee - Infinite scrolling logo carousel
function ClientMarquee() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Double the clients for seamless loop
    const duplicatedClients = [...clients, ...clients]

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="py-16 overflow-hidden bg-parasanth-grey-light"
        >
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <p className="text-center text-parasanth-grey-dark text-sm uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-parasanth-grey-light to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-parasanth-grey-light to-transparent z-10" />

                {/* Scrolling container */}
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        x: {
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                    className="flex gap-16 items-center"
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="flex-shrink-0 w-40 h-20 flex items-center justify-center group cursor-pointer"
                        >
                            <div
                                className="w-full h-full flex items-center justify-center bg-white rounded-xl
                  filter grayscale opacity-60 transition-all duration-500 shadow-soft
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:shadow-soft-lg"
                            >
                                <span className="text-parasanth-charcoal/70 font-semibold text-sm group-hover:text-parasanth-charcoal transition-colors">
                                    {client.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

// CertificationGrid - Industry compliance badges
function CertificationGrid() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} id="certifications" className="snap-section py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                        Compliance & Quality
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-parasanth-charcoal mt-4">
                        Industry Certifications
                    </h2>
                    <p className="text-parasanth-grey-dark mt-4 max-w-2xl mx-auto">
                        Every product meets the highest standards of quality, safety, and energy efficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-white border border-parasanth-grey-mid/40 rounded-2xl p-8 
                hover:border-tesla-red/30 hover:shadow-soft-xl transition-all duration-300 group"
                        >
                            {/* Verified badge */}
                            {cert.verified && (
                                <div className="absolute top-4 right-4">
                                    <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-green-700 text-xs font-medium">Verified</span>
                                    </div>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="text-parasanth-grey-dark group-hover:text-tesla-red transition-colors duration-300 mb-6">
                                {cert.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-parasanth-charcoal font-semibold text-lg mb-1">{cert.name}</h3>
                            <p className="text-tesla-red text-sm font-medium mb-3">{cert.code}</p>
                            <p className="text-parasanth-grey-dark text-sm">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Combined IndustryTrust component
export default function IndustryTrust() {
    return (
        <>
            <CertificationGrid />
        </>
    )
}

// Named exports for individual use
export { ClientMarquee, CertificationGrid }

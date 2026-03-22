'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

interface PremiumHighlightProps {
    title: string
    subtitle: string
    description: string
    image: string
    features: string[]
    ctaText?: string
    ctaHref?: string
    reverse?: boolean
}

export default function PremiumHighlight({
    title,
    subtitle,
    description,
    image,
    features,
    ctaText = 'Learn More',
    ctaHref = '/products',
    reverse = false,
}: PremiumHighlightProps) {
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    // Ken Burns scroll-based scale effect
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ['start end', 'end start'],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-parasanth-grey-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image with Ken Burns effect */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft-xl ${reverse ? 'lg:order-2' : ''}`}
                    >
                        {/* Image container with Ken Burns */}
                        <motion.div
                            style={{ scale, opacity }}
                            className="absolute inset-0"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('${image}')` }}
                            />
                        </motion.div>

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-parasanth-charcoal/70 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-parasanth-charcoal/30 to-transparent" />

                        {/* Featured badge */}
                        <div className="absolute top-6 left-6">
                            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <span className="text-parasanth-charcoal text-xs font-medium uppercase tracking-wider">
                                    Featured Product
                                </span>
                            </div>
                        </div>

                        {/* Bottom product name */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <p className="text-tesla-red text-sm font-medium tracking-widest uppercase mb-2">
                                    {subtitle}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    {title}
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={reverse ? 'lg:order-1' : ''}
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            Premium Excellence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-parasanth-charcoal mt-4 mb-6 leading-tight">
                            Engineered for <br />
                            <span className="text-gradient">Superior Performance</span>
                        </h2>
                        <p className="text-parasanth-grey-dark text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Feature list */}
                        <ul className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-tesla-red/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-parasanth-charcoal/80">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href={ctaHref} className="btn-primary">
                                {ctaText}
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                Request Sample
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import HomeAbout from '@/components/HomeAbout'
import FactoryShowcase from '@/components/FactoryShowcase'
import Link from 'next/link'

import ProductSection from '@/components/ProductSection'
import InnovationShowroom from '@/components/InnovationShowroom'

const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500K+', label: 'Units Annually' },
    { number: '50+', label: 'Product SKUs' },
    { number: '10+', label: 'Brand Partners' },
]

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Engineering Excellence in Every Product"
                subtitle="India's premier OEM manufacturer of small domestic appliances. From concept to creation, we deliver precision-engineered products at scale."
            />

            {/* About Us Narrative */}
            <HomeAbout />

            {/* Factory Showcase - Full width manufacturing unit display */}
            <FactoryShowcase />

            {/* Products Section Anchor */}
            <div id="products" className="scroll-mt-20" />

            {/* Digital Showroom Grid - 3-column layout */}
            <ProductSection />

            {/* Innovation Digital Showroom - Curated Collection Layout */}
            <InnovationShowroom />

            {/* OEM Excellence Section */}
            <section id="oem" className="snap-section bg-parasanth-grey-light py-24 md:py-32 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-tesla-red text-sm font-medium tracking-widest uppercase"
                        >
                            OEM Excellence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-parasanth-charcoal mt-4 mb-6"
                        >
                            Manufacturing at Scale
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-parasanth-grey-dark text-lg max-w-2xl mx-auto"
                        >
                            State-of-the-art facilities, rigorous quality control, and decades of expertise
                            make us the trusted choice for leading appliance brands.
                        </motion.p>
                    </div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-tesla-red mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-parasanth-grey-dark text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: 'Quality Assurance',
                                description: 'ISO certified processes with 100% quality checks at every stage of manufacturing.',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                ),
                                title: 'R&D Innovation',
                                description: 'Dedicated research team continuously improving product efficiency and design.',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                ),
                                title: 'Made in India',
                                description: 'Proudly supporting Atmanirbhar Bharat with world-class manufacturing facilities.',
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 border border-parasanth-grey-mid/20"
                            >
                                <div className="text-tesla-red mb-4">{feature.icon}</div>
                                <h3 className="text-parasanth-charcoal text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-parasanth-grey-dark">{feature.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="snap-section bg-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tesla-red/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-parasanth-charcoal mb-6"
                    >
                        Let's Build Partnership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-parasanth-grey-dark text-lg mb-10 max-w-2xl mx-auto"
                    >
                        From private labeling to custom product development, we're your complete
                        OEM partner for small domestic appliances.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/contact" className="btn-primary min-w-[200px]">
                            Partner with Us
                        </Link>
                        <Link href="/catalog" className="btn-secondary min-w-[200px]">
                            Download Catalog
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const timeline = [
    { year: '2008', title: 'Foundation', description: 'Parasanth Innovative Industries established with a vision to revolutionize small appliance manufacturing.' },
    { year: '2012', title: 'Expansion', description: 'Opened second manufacturing unit, doubling production capacity.' },
    { year: '2016', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification for quality management systems.' },
    { year: '2020', title: 'R&D Center', description: 'Launched dedicated Research & Development center for product innovation.' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading OEM manufacturer with 100+ brand partners.' },
]

const facilities = [
    { name: 'Manufacturing Floor', area: '50,000+ sq.ft', description: 'State-of-the-art production lines' },
    { name: 'Quality Lab', area: '5,000+ sq.ft', description: 'Advanced testing equipment' },
    { name: 'R&D Center', area: '3,000+ sq.ft', description: 'Innovation and prototyping hub' },
    { name: 'Warehouse', area: '25,000+ sq.ft', description: 'Climate-controlled storage' },
]

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-parasanth-grey-light to-white" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-parasanth-charcoal mt-4 mb-6">
                            Engineering Tomorrow's Appliances, Today
                        </h1>
                        <p className="text-parasanth-grey-dark text-xl leading-relaxed">
                            For over 15 years, Parasanth Innovative Industries has been at the forefront of
                            small domestic appliance manufacturing, combining traditional craftsmanship
                            with cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-parasanth-grey-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-10 shadow-soft border border-parasanth-grey-mid/20"
                        >
                            <div className="w-16 h-16 bg-tesla-red/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-parasanth-charcoal mb-4">Our Vision</h2>
                            <p className="text-parasanth-grey-dark leading-relaxed">
                                To be India's most trusted OEM partner for innovative, energy-efficient,
                                and sustainable small domestic appliances that enhance everyday living.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-10 shadow-soft border border-parasanth-grey-mid/20"
                        >
                            <div className="w-16 h-16 bg-tesla-red/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-parasanth-charcoal mb-4">Our Mission</h2>
                            <p className="text-parasanth-grey-dark leading-relaxed">
                                Deliver world-class manufacturing solutions with unwavering commitment
                                to quality, innovation, and customer satisfaction while championing
                                Made in India excellence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Manufacturing Section */}
            <section id="manufacturing" className="py-24 bg-parasanth-grey-light">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            Infrastructure
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-parasanth-charcoal mt-4 mb-6">
                            World-Class Manufacturing Facilities
                        </h2>
                        <p className="text-parasanth-grey-dark max-w-2xl mx-auto">
                            Our state-of-the-art facilities are designed for efficiency,
                            quality, and scalability.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={facility.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300 text-center border border-parasanth-grey-mid/20"
                            >
                                <div className="text-tesla-red font-bold text-lg mb-2">{facility.area}</div>
                                <h3 className="text-parasanth-charcoal font-semibold mb-2">{facility.name}</h3>
                                <p className="text-parasanth-grey-dark text-sm">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-tesla-red/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-parasanth-charcoal mb-6"
                    >
                        Partner with Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-parasanth-grey-dark text-lg mb-10"
                    >
                        Join 10+ brands who trust Parasanth Innovative Industries for their manufacturing needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/contact" className="btn-primary">
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

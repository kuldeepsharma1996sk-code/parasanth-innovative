'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const catalogSections = [
    {
        title: 'Cooling Solutions',
        products: ['Pedestal Fan', 'Table Fan', 'Wall Fan', 'Farrata Fan'],
        color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        title: 'Heating Solutions',
        products: ['Quartz Heater', 'Fan Heater', 'Room Heater', 'Blower Heater'],
        color: 'from-orange-500/20 to-red-500/20',
    },
    {
        title: 'Kitchen Essentials',
        products: ['Electric Kettle', 'Dry Iron', 'Steam Iron', 'Mixer Grinder', 'Immersion Rod'],
        color: 'from-green-500/20 to-emerald-500/20',
    },
]

export default function CatalogPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 to-charcoal" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            Product Catalog
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                            Complete Product Range
                        </h1>
                        <p className="text-white/60 text-xl leading-relaxed">
                            Download our comprehensive product catalog with specifications,
                            pricing guidelines, and OEM partnership details.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Catalog Download Section */}
            <section className="py-24 bg-charcoal-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Download Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl md:rounded-[40px] p-8 md:p-12 lg:p-16 shadow-2xl border border-parasanth-grey-mid/10 max-w-2xl mx-auto lg:mx-0"
                        >
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-red-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-red-400/5 transition-transform group-hover:scale-110"></div>
                                <svg className="w-8 h-8 md:w-12 md:h-12 text-tesla-red relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11v4m0 0l-2-2m2 2l2-2" />
                                </svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-parasanth-charcoal mb-4 md:mb-6 tracking-tight leading-tight">
                                Download Full Catalogue
                            </h2>
                            <p className="text-parasanth-grey-dark text-base md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed font-medium">
                                Get our complete product catalogue with detailed specifications,
                                available SKUs, MOQ information, and partnership guidelines.
                            </p>

                            <div className="space-y-4 md:space-y-6 mb-10 md:mb-16">
                                {[
                                    "50+ Product SKUs",
                                    "Complete Technical Specifications",
                                    "OEM Partnership Terms",
                                    "Private Label Options"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 md:gap-4 group">
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-parasanth-charcoal font-bold text-base md:text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-4 md:py-6 bg-tesla-red hover:bg-parasanth-charcoal text-white rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 md:gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download PDF Catalog
                            </button>

                            <p className="text-parasanth-grey-mid text-[0.6rem] md:text-xs font-bold text-center mt-6 md:mt-8 tracking-wider uppercase">
                                PDF • 15.2 MB • Last updated January 2024
                            </p>
                        </motion.div>

                        {/* Product Categories Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {catalogSections.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`bg-gradient-to-r ${section.color} rounded-xl p-6 border border-white/10`}
                                >
                                    <h3 className="text-white font-semibold text-lg mb-3">{section.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {section.products.map((product) => (
                                            <span
                                                key={product}
                                                className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm"
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-24 bg-charcoal">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Explore by Category
                        </h2>
                        <p className="text-white/60">
                            Browse our product range online or contact us for custom requirements.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'Cooling Solutions', href: '/products/cooling', icon: '❄️' },
                            { name: 'Heating Solutions', href: '/products/heating', icon: '🔥' },
                            { name: 'Kitchen Essentials', href: '/products/kitchen', icon: '🍳' },
                        ].map((category, index) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={category.href}
                                    className="block bg-white/5 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group"
                                >
                                    <span className="text-4xl mb-4 block">{category.icon}</span>
                                    <h3 className="text-white font-semibold text-lg group-hover:text-tesla-red transition-colors">
                                        {category.name}
                                    </h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link href="/contact" className="btn-secondary">
                            Request Custom Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

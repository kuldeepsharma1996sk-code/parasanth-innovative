'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const featuredProducts = [
    {
        id: 1,
        category: "COOLING SOLUTIONS",
        name: "Pedestal Fan",
        image: "/products/pedestal-fan-new.png",
        href: "/products/cooling/pedestal-fan"
    },
    {
        id: 2,
        category: "COOLING SOLUTIONS",
        name: "Table Fan",
        image: "/products/table-fan-new.png",
        href: "/products/cooling/table-fan"
    },
    {
        id: 3,
        category: "COOLING SOLUTIONS",
        name: "Wall Fan",
        image: "/products/wall-fan-new.png",
        href: "/products/cooling/wall-fan"
    },
    {
        id: 4,
        category: "HEATING SOLUTIONS",
        name: "Quartz Heater",
        image: "/products/quartz-heater-new.png",
        href: "/products/heating/quartz-heater"
    },
    {
        id: 5,
        category: "KITCHEN ESSENTIALS",
        name: "Electric Kettle",
        image: "/products/electric-kettle-new.png",
        href: "/products/kitchen/electric-kettle"
    },
    {
        id: 6,
        category: "KITCHEN ESSENTIALS",
        name: "Dry Iron",
        image: "/products/dry-iron-new.png",
        href: "/products/kitchen/dry-iron"
    }
]

export default function ProductSection() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden snap-section">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-tesla-red uppercase tracking-[0.3em] text-xs font-black mb-4 block">
                            Curated Collection
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parasanth-charcoal tracking-tight">
                            Digital <span className="font-bold">Showroom.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-parasanth-grey-dark text-lg max-w-md font-medium leading-relaxed"
                    >
                        Explore our flagship appliances, engineered for industrial-grade performance and high-end residential aesthetics.
                    </motion.p>
                </div>

                {/* Grid Layout (3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={product.href} className="group block h-full">
                                <div className="relative h-full bg-parasanth-grey-gallery rounded-4xl p-8 lg:p-10 flex flex-col transition-all duration-500 hover:shadow-gallery-card hover:-translate-y-3 cursor-pointer border border-transparent hover:border-parasanth-grey-mid/20">
                                    
                                    {/* Image Area - Lightweight rounded container */}
                                    <div className="aspect-square w-full bg-white rounded-[32px] mb-8 flex items-center justify-center relative overflow-hidden group-hover:shadow-inner transition-shadow duration-500">
                                        {/* Subtle Under-shadow */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-black/[0.04] blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        
                                        <motion.img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="max-h-[70%] w-auto object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="text-center mt-auto">
                                        <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-parasanth-grey-dark mb-3 block opacity-60">
                                            {product.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-parasanth-charcoal mb-8 tracking-tight group-hover:text-tesla-red transition-colors">
                                            {product.name}
                                        </h3>
                                        
                                        {/* Dynamic CTA Button */}
                                        <div className="flex justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                                <button className="px-10 py-3 bg-tesla-red text-white rounded-full text-[0.65rem] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-parasanth-charcoal hover:scale-105 active:scale-95 transition-all">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Industrial Polish Overlay */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

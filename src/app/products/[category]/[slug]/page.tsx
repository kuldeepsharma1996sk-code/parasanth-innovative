'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// This would normally come from a CMS or API, but for now we'll use a data mapping
const productSpecs: Record<string, {
    name: string
    description: string
    image: string
    category: string
    specs: { label: string; value: string }[]
}> = {
    'pedestal-fan': {
        name: 'High-Performance Pedestal Fan',
        description: 'Engineered for maximum air delivery and whisper-quiet operation. Our pedestal fans feature 100% copper motors and aerodynamic blades for industrial-grade longevity.',
        image: '/products/pedestal-fan-new.png',
        category: 'Cooling',
        specs: [
            { label: 'Model', value: 'PI-PF-450' },
            { label: 'Motor Type', value: '100% Pure Copper Winding' },
            { label: 'Blade Size', value: '450mm (18 inch)' },
            { label: 'Power Rating', value: '55 Watts' },
            { label: 'Input Voltage', value: '230V AC, 50Hz' },
            { label: 'Body Material', value: 'High-Grade Impact Resistant ABS' },
            { label: 'Air Delivery', value: '75 CMM' },
            { label: 'Compliance', value: 'IS 302-2-80 (BIS Certified)' },
        ]
    },
    'farrata-fan': {
        name: 'Heavy-Duty Farrata Fan',
        description: 'The flagship of our cooling range. Built for large spaces, this all-metal powerhouse delivers air throw of over 40 feet with unmatched air pressure.',
        image: '/products/farrata-fan-new.png',
        category: 'Cooling',
        specs: [
            { label: 'Model', value: 'PI-FF-500' },
            { label: 'Motor Type', value: 'Heavy Duty Industrial Motor' },
            { label: 'Blade Size', value: '500mm' },
            { label: 'Power Rating', value: '110 Watts' },
            { label: 'Air Throw', value: '45+ Feet' },
            { label: 'Construction', value: 'All-Metal Reinforced' },
            { label: 'Compliance', value: 'BIS Certified' },
        ]
    },
    'quartz-heater': {
        name: 'Quartz Safety Heater',
        description: 'Rapid heating with dual-quartz-tube technology. Features advanced safety cut-offs and a high-efficiency reflective grill for instant warmth.',
        image: '/products/quartz-heater-new.png',
        category: 'Heating',
        specs: [
            { label: 'Model', value: 'PI-QH-800' },
            { label: 'Heating Elements', value: 'Dual High-Grade Quartz' },
            { label: 'Power Settings', value: '400W / 800W' },
            { label: 'Safety Feature', value: 'Automatic Tip-Over Switch' },
            { label: 'Heating Area', value: 'Up to 150 sq.ft' },
            { label: 'Compliance', value: 'IS 302-2-30 Certified' },
        ]
    },
    'electric-kettle': {
        name: 'Stainless Elite Electric Kettle',
        description: 'Minimalist industrial design meets rapid-boil technology. Crafted with premium SS 304 grade steel for the ultimate durability and safety.',
        image: '/products/electric-kettle-new.png',
        category: 'Kitchen',
        specs: [
            { label: 'Model', value: 'PI-EK-150' },
            { label: 'Capacity', value: '1.5 Litres' },
            { label: 'Heating element', value: 'Concealed SS 304' },
            { label: 'Power Rating', value: '1500 Watts' },
            { label: 'Boil Time', value: 'Under 5 Minutes' },
            { label: 'Safety', value: 'Auto Shut-off & Dry Boil Protection' },
            { label: 'Compliance', value: 'BIS Certified' },
        ]
    }
}

export default function ProductDetailPage({ params }: { params: { category: string, slug: string } }) {
    const product = productSpecs[params.slug] || productSpecs['pedestal-fan'] // Fallback for demo

    return (
        <div className="pt-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link 
                        href={`/products/${params.category}`}
                        className="inline-flex items-center gap-2 text-parasanth-grey-dark hover:text-tesla-red transition-all group font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to {params.category} Collection
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Hero Product Shot */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative bg-parasanth-grey-light rounded-[3rem] p-12 lg:p-20 flex items-center justify-center aspect-square overflow-hidden group"
                    >
                        {/* Background Blueprint Watermark */}
                        <div className="absolute inset-x-0 bottom-0 opacity-[0.05] pointer-events-none select-none translate-y-1/4">
                            <img src="/logo.svg" className="w-full grayscale brightness-0" alt="" />
                        </div>

                        {/* Soft Ambient Shadow */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-black/10 blur-[60px] rounded-full"></div>
                        
                        <motion.img 
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            src={product.image} 
                            alt={product.name}
                            className="max-h-full w-auto object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                        />
                    </motion.div>

                    {/* Right Side: Technical Information */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-tesla-red text-xs font-black tracking-[0.3em] uppercase block mb-4">
                                {product.category} / Technical Model
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-parasanth-charcoal tracking-tight mb-6">
                                {product.name}
                            </h1>
                            <p className="text-parasanth-grey-dark text-lg leading-relaxed font-medium">
                                {product.description}
                            </p>
                        </motion.div>

                        {/* Tesla-Style Technical Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-parasanth-grey-light rounded-3xl p-8 border border-parasanth-grey-mid/20"
                        >
                            <h3 className="text-sm font-black uppercase tracking-widest text-parasanth-charcoal/40 mb-8 px-2">Technical Specifications</h3>
                            <div className="grid grid-cols-1 gap-px bg-parasanth-grey-mid/20 overflow-hidden rounded-xl border border-parasanth-grey-mid/20">
                                {product.specs.map((spec, idx) => (
                                    <div key={idx} className="grid grid-cols-2 bg-parasanth-grey-light p-4 items-center group hover:bg-white transition-colors">
                                        <span className="text-xs font-bold text-parasanth-grey-dark uppercase tracking-wider px-2">
                                            {spec.label}
                                        </span>
                                        <span className="text-sm font-bold text-parasanth-charcoal text-right lg:text-left px-2">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/contact" className="px-10 py-5 bg-parasanth-charcoal text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-xl hover:-translate-y-1 flex-1 text-center">
                                Request OEM Quote
                            </Link>
                            <button className="px-10 py-5 border-2 border-parasanth-grey-mid/40 text-parasanth-charcoal rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-parasanth-grey-light transition-all flex-1 text-center inline-flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Technical Datasheet
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

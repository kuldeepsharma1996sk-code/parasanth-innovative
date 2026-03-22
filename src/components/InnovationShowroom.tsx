'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const innovationPrototypes = [
    {
        id: 1,
        category: "PROPRIETARY TOOLING",
        name: "Quartz Heater: Mould System",
        image: "/products/rd-mould-heater.png",
        description: "In-house designed P20 steel injection moulds engineered for rapid-cycle heating efficiency.",
        specs: [
            { label: "Mould Life", value: "1M+ Strokes" },
            { label: "Precision", value: "10-Micron" }
        ]
    },
    {
        id: 2,
        category: "ELECTRONICS INNOVATION",
        name: "BLDC: Adaptive Fan Technology",
        image: "/products/rd-bldc-fan.png",
        description: "Intelligent brushless DC motor assembly with integrated IR logic and energy-saving efficiency.",
        specs: [
            { label: "Energy", value: "A+++ Rated" },
            { label: "Control", value: "10m Range" }
        ]
    }
]

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-3 border-b border-parasanth-grey-mid/10 last:border-0 hover:bg-white/50 transition-colors px-2">
        <span className="text-[9px] font-bold text-parasanth-grey-dark uppercase tracking-widest">{label}</span>
        <span className="text-[10px] font-black text-parasanth-charcoal uppercase tracking-tight">{value}</span>
    </div>
)

export default function InnovationShowroom() {
    const [activeDetail, setActiveDetail] = useState<number | null>(null)

    return (
        <section className="py-24 md:py-32 bg-parasanth-grey-light overflow-hidden snap-section border-t border-parasanth-grey-mid/20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 bg-tesla-red rounded-full animate-pulse"></span>
                            <span className="px-3 py-1 bg-tesla-red/10 text-tesla-red text-[10px] font-black uppercase tracking-widest rounded-full">
                                NEW
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parasanth-charcoal tracking-tighter">
                            New <span className="font-bold">Innovation.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-parasanth-grey-dark text-lg max-w-md font-medium leading-relaxed"
                    >
                        Explore our latest R&D breakthroughs, engineered for industrial-grade performance and high-end residential aesthetics.
                    </motion.p>
                </div>

                {/* Grid Layout (2 columns symmetrical) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
                    {innovationPrototypes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="group relative h-full bg-white rounded-4xl p-8 lg:p-10 flex flex-col transition-all duration-500 hover:shadow-gallery-card hover:-translate-y-3 border border-transparent hover:border-parasanth-grey-mid/20 overflow-hidden">
                                
                                {/* Image Area - Lightweight rounded container */}
                                <div className="aspect-square w-full bg-parasanth-grey-light rounded-[32px] mb-8 flex items-center justify-center relative overflow-hidden transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl rounded-full scale-110"></div>
                                    <motion.img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="max-h-[75%] w-auto object-contain relative z-10 transition-all duration-1000 ease-out group-hover:scale-110"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="text-center mt-auto">
                                    <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-parasanth-grey-dark mb-3 block opacity-60">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-parasanth-charcoal mb-4 tracking-tight group-hover:text-tesla-red transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-parasanth-grey-dark font-medium leading-relaxed mb-10 opacity-70">
                                        {item.description}
                                    </p>
                                    
                                    <div className="flex justify-center">
                                        <button 
                                            onClick={() => setActiveDetail(item.id)}
                                            className="px-10 py-5 bg-tesla-red text-white rounded-full text-[0.65rem] font-black uppercase tracking-[0.3em] shadow-lg hover:bg-parasanth-charcoal transition-all flex items-center gap-3 active:scale-95"
                                        >
                                            Specification
                                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                                <path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Technical Specs Overlay - Slide-up from constant-height container */}
                                    <AnimatePresence>
                                        {activeDetail === item.id && (
                                            <motion.div
                                                initial={{ y: '100%' }}
                                                animate={{ y: 0 }}
                                                exit={{ y: '100%' }}
                                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                                className="absolute inset-0 bg-white/98 backdrop-blur-md z-30 p-8 flex flex-col justify-start text-left"
                                            >
                                                <div className="flex justify-between items-center mb-8">
                                                    <div>
                                                        <span className="text-[10px] font-black text-tesla-red uppercase tracking-widest block mb-1">
                                                            Technical Registry
                                                        </span>
                                                        <h4 className="text-xl font-bold text-parasanth-charcoal">{item.name}</h4>
                                                    </div>
                                                    <button 
                                                        onClick={() => setActiveDetail(null)}
                                                        className="w-10 h-10 bg-parasanth-grey-light rounded-full flex items-center justify-center hover:bg-parasanth-grey-mid/20 transition-all group"
                                                    >
                                                        <svg className="w-4 h-4 text-parasanth-charcoal group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="space-y-1 flex-grow">
                                                    {item.specs.map((spec, sIdx) => (
                                                        <DetailRow key={sIdx} label={spec.label} value={spec.value} />
                                                    ))}
                                                    <div className="pt-8 space-y-4">
                                                        <span className="text-[8px] font-mono text-parasanth-grey-dark uppercase tracking-[0.3em] block border-t border-parasanth-grey-mid/20 pt-6"> Engineering Summary </span>
                                                        <p className="text-[11px] font-medium text-parasanth-charcoal leading-relaxed opacity-80">
                                                            This technology is part of the FY25 innovation roadmap. Optimized for multi-state industrial compliance and domestic reliability benchmarks.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-auto border-t border-parasanth-grey-mid/20 pt-6">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-tesla-red rounded-full animate-pulse"></span>
                                                        <span className="text-[9px] font-black text-tesla-red uppercase tracking-widest">Active R&D Cycle</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

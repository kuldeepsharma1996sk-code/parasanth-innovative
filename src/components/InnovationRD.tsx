'use client'

import React from 'react'
import { motion } from 'framer-motion'

const InnovationStamp = ({ text }: { text: string }) => (
    <div className="absolute -bottom-10 -left-10 w-40 h-40 z-20 pointer-events-none stamp-rotate">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <circle cx="50" cy="50" r="37" fill="none" stroke="#e5e5e5" strokeWidth="0.5" strokeDasharray="2 2" />
            <text className="text-[7px] font-mono fill-[#a1a1a1] uppercase tracking-[0.2em]">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                    {text} • {text} • {text} •
                </textPath>
            </text>
        </svg>
    </div>
)

export default function InnovationRD() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden snap-section border-t border-parasanth-grey-mid/20">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Text & Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-parasanth-grey-dark font-mono text-[10px] uppercase tracking-[0.4em] mb-8 block">
                            Innovation & R&D
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2d2d2d] leading-[1.1] tracking-tight mb-12">
                            Pioneering <span className="font-bold">Mould Design</span> & <span className="font-bold whitespace-nowrap">BLDC Technology</span>.
                        </h2>

                        <div className="space-y-12">
                            <div className="flex gap-6 group">
                                <div className="mt-1.5 w-3 h-3 border-2 border-parasanth-grey-mid/40 group-hover:border-tesla-red transition-colors flex-shrink-0"></div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold text-[#2d2d2d] uppercase tracking-wider">Quartz Heater Mould</h3>
                                    <p className="text-parasanth-grey-dark leading-relaxed font-medium">
                                        Engineering a new standard for thermal performance and safety integration. Precision-engineered steel tooling for rapid product scaling and industrial-grade reliability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="mt-1.5 w-3 h-3 border-2 border-parasanth-grey-mid/40 group-hover:border-tesla-red transition-colors flex-shrink-0"></div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold text-[#2d2d2d] uppercase tracking-wider">BLDC Pedestal Fan</h3>
                                    <p className="text-parasanth-grey-dark leading-relaxed font-medium">
                                        Direct drive efficiency meets advanced remote functionality. Silent operation, adaptive airflow, and smart integration designed for the next generation of domestic cooling.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-parasanth-grey-mid/20">
                            <button className="text-xs font-black uppercase tracking-[0.3em] text-[#2d2d2d] hover:text-tesla-red transition-all flex items-center gap-4 group">
                                Explore R&D Workflow
                                <span className="w-8 h-px bg-[#2d2d2d] group-hover:w-12 transition-all"></span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Imagery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Go-Live Stamp */}
                        <InnovationStamp text="Newly Developed • Go-Live • Parasanth" />

                        <div className="relative space-y-6">
                            {/* Artistic Image Container 1 */}
                            <div className="aspect-[4/5] bg-parasanth-grey-light rounded-2xl overflow-hidden shadow-soft-xl group relative">
                                <img 
                                    src="/products/rd-mould-tool.png" 
                                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" 
                                    alt="Quartz Heater Mould" 
                                />
                                <div className="absolute bottom-6 right-6 text-white text-[9px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    MOULD_REF: Q-2026-X1
                                </div>
                            </div>

                            {/* Artistic Image Container 2 */}
                            <div className="aspect-[16/9] bg-parasanth-grey-light rounded-2xl overflow-hidden shadow-soft-xl group relative">
                                <img 
                                    src="/products/rd-bldc-fan.png" 
                                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" 
                                    alt="BLDC Fan Development" 
                                />
                                <div className="absolute bottom-4 right-6 text-white text-[9px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                    BLDC_TECH: V3 Prototype
                                </div>
                            </div>
                        </div>

                        {/* Geometric Accents */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-[#e5e5e5] -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#e5e5e5] -z-10 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-4 border-b border-parasanth-grey-mid/10 last:border-0 group hover:bg-white/50 transition-colors px-2">
        <span className="text-[10px] font-bold text-parasanth-grey-dark uppercase tracking-widest">{label}</span>
        <span className="text-[11px] font-black text-parasanth-charcoal uppercase tracking-tight">{value}</span>
    </div>
)

export default function InnovationSplit() {
    const [activeDetail, setActiveDetail] = useState<number | null>(null)

    const items = [
        {
            id: 1,
            label: "PROPRIETARY TOOLING",
            title: "Quartz Heater: Proprietary Mould Design.",
            description: "Developed from the ground up. We own the P20 steel injection moulds, ensuring total quality control and faster OEM scaling.",
            image: "/products/rd-mould-heater.png",
            bgColor: "bg-white",
            specs: [
                { label: "Mould Origin", value: "100% In-House Designed" },
                { label: "Tooling Life", value: "1M+ Strokes" },
                { label: "Specialty", value: "Rapid-Cycle Cooling" }
            ]
        },
        {
            id: 2,
            label: "NEXT-GEN TECHNOLOGY",
            title: "BLDC Pedestal: Remote Integration.",
            description: "A new standard in airflow efficiency. Featuring our latest BLDC motor assembly and 10-meter IR remote logic for the modern home.",
            image: "/products/rd-bldc-fan.png",
            bgColor: "bg-[#f2f2f2]",
            specs: [
                { label: "Motor", value: "Brushless Direct Current (BLDC)" },
                { label: "Control", value: "10-Meter IR Range" },
                { label: "Efficiency", value: "A+++ Energy Rating" }
            ]
        }
    ]

    return (
        <section className="bg-white overflow-hidden snap-section border-t border-parasanth-grey-mid/20">
            {/* Architectural Header */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-[#2d2d2d]">
                            <span className="font-light block mb-2">New</span>
                            <span className="font-extrabold uppercase">Innovation.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md md:text-right"
                    >
                        <p className="text-parasanth-grey-dark text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide opacity-80">
                            Our R&D laboratory is focused on engineering products that balance industrial longevity with modern domestic intelligence.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Side-by-Side Industrial Cards */}
            <div className="grid lg:grid-cols-2">
                {items.map((item, idx) => (
                    <div key={item.id} className={`${item.bgColor} py-24 px-8 md:px-16 lg:px-24 flex flex-col items-center text-center group`}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="max-w-lg w-full"
                        >
                            <span className="text-[11px] font-bold text-parasanth-grey-dark tracking-[0.2em] uppercase block mb-8">
                                {item.label}
                            </span>
                            
                            <h3 className="text-3xl md:text-4xl font-light text-[#2d2d2d] leading-tight mb-8 tracking-tight">
                                {item.title}
                            </h3>

                            {/* Precise Image Container */}
                            <div className="aspect-[16/10] rounded-[40px] overflow-hidden mb-12 relative shadow-soft-xl group/img">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover/img:scale-105 group-hover/img:grayscale-0 group-hover/img:opacity-100"
                                />
                                {/* Subtle White Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 translate-x-[-100%] group-hover/img:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                            </div>

                            {/* Matte Dark Grey Button */}
                            <div className="inline-block relative">
                                <button 
                                    onClick={() => setActiveDetail(activeDetail === item.id ? null : item.id)}
                                    className="px-12 py-5 bg-[#333333] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all duration-300 shadow-xl flex items-center gap-4 group/btn mx-auto"
                                >
                                    {activeDetail === item.id ? 'Close Specifications' : 'View Technical Specs'}
                                    <svg className={`w-3 h-3 transition-transform duration-500 ${activeDetail === item.id ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>

                                {/* Technical Specs Overlay */}
                                <AnimatePresence>
                                    {activeDetail === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="mt-8 text-left bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-parasanth-grey-mid/20 shadow-2xl"
                                        >
                                            <div className="space-y-1">
                                                {item.specs.map((spec, sIdx) => (
                                                    <DetailRow key={sIdx} label={spec.label} value={spec.value} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

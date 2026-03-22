'use client'

import React from 'react'
import { motion } from 'framer-motion'

const InnovationStamp = ({ text }: { text: string }) => (
    <div className="absolute -top-6 -right-6 w-32 h-32 z-20 pointer-events-none stamp-rotate">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <circle cx="50" cy="50" r="37" fill="none" stroke="#d2d2d7" strokeWidth="0.5" strokeDasharray="2 2" />
            <text className="text-[8px] font-black tracking-[0.2em] fill-parasanth-grey-dark uppercase">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                    {text} • {text} • {text} •
                </textPath>
            </text>
        </svg>
    </div>
)

const innovationItems = [
    {
        title: "High-Efficiency BLDC Motor",
        status: "Testing Stage",
        progress: 85,
        progressLabel: "Field Testing",
        image: "/products/bldc-motor-proto.png",
        stamp: "NEWLY DEVELOPED",
        tags: ["Low Noise", "5-Star Efficiency", "IoT Ready"]
    },
    {
        title: "Smart Kettle with App Control",
        status: "Ready for OEM",
        progress: 95,
        progressLabel: "Final Certification",
        image: "/products/smart-kettle-proto.png",
        stamp: "GO-LIVE",
        tags: ["OLED Base", "Digital Temp", "App Sync"]
    }
]

export default function InnovationLive() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden snap-section border-t border-parasanth-grey-mid/20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="w-4 h-4 bg-tesla-red rounded-full"></div>
                            <div className="absolute inset-0 bg-tesla-red rounded-full animate-ping opacity-20"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-parasanth-charcoal tracking-tighter uppercase italic">
                            Innovation <span className="text-tesla-red">Live</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-parasanth-grey-light rounded-full border border-parasanth-grey-mid/30">
                        <span className="w-2 h-2 bg-tesla-red rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold text-parasanth-charcoal tracking-widest uppercase">Status: Active R&D</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {innovationItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* The "Newly Developed" Stamp */}
                            <InnovationStamp text={item.stamp} />

                            {/* Blueprint Card */}
                            <div className="relative bg-[#f2f2f2] rounded-4xl p-1 lg:p-1.5 overflow-hidden transition-all duration-700 hover:shadow-2xl">
                                {/* Blueprint Grid Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none" 
                                     style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}>
                                </div>
                                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none" 
                                     style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
                                </div>

                                <div className="relative bg-white rounded-[2.2rem] p-8 md:p-12 overflow-hidden h-full flex flex-col">
                                    {/* Image Section */}
                                    <div className="aspect-video relative mb-10 flex items-center justify-center">
                                        {/* Soft Technical Glow */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-parasanth-grey-mid/20 blur-xl scale-x-75"></div>
                                        
                                        <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 blur-3xl rounded-full transition-opacity duration-1000"></div>

                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="max-h-full w-auto object-contain relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {item.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="px-3 py-1 bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-md text-[9px] font-bold text-parasanth-grey-dark uppercase tracking-widest">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-end justify-between">
                                                <h3 className="text-2xl font-bold text-parasanth-charcoal tracking-tight max-w-[200px] leading-tight font-mono uppercase">
                                                    {item.title}
                                                </h3>
                                                <div className="text-right">
                                                    <span className="text-[10px] font-black text-tesla-red uppercase tracking-widest mb-1 block">Phase</span>
                                                    <span className="text-xs font-bold text-parasanth-charcoal uppercase tracking-widest">{item.status}</span>
                                                </div>
                                            </div>

                                            {/* Technical Progress Bar */}
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-[10px] font-bold text-parasanth-grey-dark uppercase tracking-widest">
                                                    <span>{item.progressLabel}</span>
                                                    <span>{item.progress}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-parasanth-grey-light rounded-full overflow-hidden border border-parasanth-grey-mid/10">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: "circOut" }}
                                                        className="h-full bg-tesla-red"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Blueprint Style Corner Markers */}
                                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-parasanth-grey-mid/30"></div>
                                    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-parasanth-grey-mid/30"></div>
                                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-parasanth-grey-mid/30"></div>
                                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-parasanth-grey-mid/30"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lab Note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[10px] font-medium text-parasanth-grey-dark uppercase tracking-[0.4em] max-w-lg mx-auto leading-relaxed">
                        Proprietary R&D in collaboration with international engineering partners. Prototypes shown are confidential until mass circulation.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

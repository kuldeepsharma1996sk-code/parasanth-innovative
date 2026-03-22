'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const snapshots = [
    {
        title: "Manufacturing area",
        value: "35,000 sq ft",
        detail: "(expandable state)",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: "Workforce",
        value: "Skilled Teams",
        detail: "Trained technicians & assembly specialists",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Industrial Support",
        value: "Power & Air",
        detail: "Power backup & compressed air infrastructure",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Quality Control",
        value: "QC Labs",
        detail: "On-site testing lab & dedicated benches",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
]

const equipmentList = [
    {
        name: "Electronics Assembly",
        points: ["SMT pick & place lines", "Reflow ovens", "Zero-defect soldering"]
    },
    {
        name: "Motor Engineering",
        points: ["Motor winding machines", "Rotor balancing", "Performance testing"]
    },
    {
        name: "Moulding & Finishing",
        points: ["Injection moulding support", "Coordination & finishing", "P20 Steel Maintenance"]
    },
    {
        name: "Quality Validation",
        points: ["Automated testing rigs", "Manual evaluation stations", "Compliance labs"]
    }
]

export default function InfrastructurePage() {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false)

    return (
        <main className="bg-white min-h-screen pt-20">
            {/* Facility Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden bg-parasanth-charcoal">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/infrastructure/bhiwadi-hero.png" 
                        alt="Bhiwadi Manufacturing Hub" 
                        className="w-full h-full object-cover grayscale brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-parasanth-charcoal/80 to-transparent"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <span className="text-tesla-red font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
                            Integrated Manufacturing Hub
                        </span>
                        <h1 className="text-6xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter mb-10">
                            The <span className="font-bold">Bhiwadi</span> <br />Ecosystem.
                        </h1>
                        <p className="text-white/70 text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-xl">
                            35,000 Sq. Ft. of Integrated Manufacturing Excellence.
                        </p>
                        
                        <div className="flex flex-wrap gap-6">
                            <button 
                                onClick={() => setIsVideoOpen(true)}
                                className="px-10 py-5 bg-white text-parasanth-charcoal rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-parasanth-grey-light transition-all flex items-center gap-4 group shadow-2xl"
                            >
                                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-125" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Watch Facility Tour
                            </button>
                            <Link href="#snapshot" className="px-10 py-5 border-2 border-white/20 text-white rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
                                Explore Capabilities
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Video Modal Background Overlay */}
                <AnimatePresence>
                    {isVideoOpen && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        >
                            <button 
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-8 right-8 text-white hover:text-tesla-red transition-colors group"
                            >
                                <svg className="w-10 h-10 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="w-full max-w-6xl aspect-video bg-parasanth-charcoal rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(232,33,39,0.2)]"
                            >
                                <iframe 
                                    src="https://drive.google.com/file/d/10OsYeo2_wKs6yzF8Kwtk1dTiVsV2k5vKEv-iuloEL-w/preview" 
                                    className="w-full h-full border-0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Snapshot Stats Grid */}
            <section id="snapshot" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#333333] tracking-tight">Factory Snapshot</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {snapshots.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#f2f2f2] p-10 rounded-[40px] border border-parasanth-grey-mid/10 group hover:bg-parasanth-charcoal transition-all duration-500"
                            >
                                <div className="text-parasanth-grey-dark mb-10 group-hover:text-tesla-red transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#333333] text-[9px] font-black uppercase tracking-[0.3em] mb-3 group-hover:text-white/60">
                                    {item.title}
                                </h3>
                                <div className="text-3xl font-bold text-parasanth-charcoal mb-4 tracking-tight group-hover:text-white">
                                    {item.value}
                                </div>
                                <p className="text-[#2d2d2d] text-xs font-semibold leading-relaxed group-hover:text-white/80">
                                    {item.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment & Processes Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-5xl font-light text-[#333333] tracking-tighter">
                            Equipment & <span className="font-bold">Processes</span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-y-16 gap-x-24">
                        {equipmentList.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col h-full"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="w-12 h-[1px] bg-[#e5e5e5]"></span>
                                    <h3 className="text-2xl font-bold text-parasanth-charcoal tracking-tight">{item.name}</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-4 pl-18">
                                    <ul className="space-y-4">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-center gap-4 text-[#2d2d2d] font-semibold text-sm">
                                                <span className="w-1.5 h-1.5 bg-tesla-red rounded-full"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 h-[1px] bg-[#e5e5e5] w-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logistics & Capacity Dual Tier */}
            <section className="py-24 md:py-32 bg-[#f2f2f2] rounded-t-[60px] md:rounded-t-[100px] border-t border-parasanth-grey-mid/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        
                        {/* Logistics Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-tesla-red font-black tracking-[0.4em] uppercase text-[9px] mb-6 block">Supply Chain Advantage</span>
                            <h2 className="text-4xl font-bold text-[#333333] mb-8 tracking-tighter leading-tight">Logistics Advantage</h2>
                            <p className="text-[#2d2d2d] text-lg font-medium leading-relaxed mb-10 max-w-xl">
                                Located near major highways and freight corridors — fast access to Delhi/NCR ports, suppliers and talent pool.
                            </p>
                            <div className="bg-white rounded-4xl p-2 shadow-soft hover:shadow-soft-lg transition-all duration-700 aspect-square md:aspect-video mb-12 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0">
                                <img 
                                    src="/infrastructure/logistics-map.png" 
                                    className="w-full h-full object-cover" 
                                    alt="Logistics Connectivity Map" 
                                />
                            </div>
                        </motion.div>

                        {/* Capacity Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 md:p-16 rounded-[40px] shadow-soft border border-parasanth-grey-mid/10"
                        >
                            <span className="text-parasanth-grey-dark font-black tracking-[0.4em] uppercase text-[9px] mb-6 block">Operational Velocity</span>
                            <h2 className="text-4xl font-bold text-[#333333] mb-8 tracking-tighter leading-tight">Capacity Planning</h2>
                            <div className="space-y-8">
                                <p className="text-[#2d2d2d] text-lg font-medium leading-relaxed italic">
                                    "We scale quickly for seasonal demand and large launches — flexible shifts and partnered supply chain."
                                </p>
                                <div className="h-px bg-parasanth-grey-mid/20 w-16"></div>
                                <p className="text-[#2d2d2d] font-medium leading-relaxed">
                                    Our operational strategy is built to absorb surge demand through a multi-shift model and direct-access logistics, ensuring your product launch benchmarks are met without compromise.
                                </p>
                                <div className="flex flex-col gap-4 pt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-tesla-red animate-pulse"></div>
                                        <span className="text-[10px] font-black text-parasanth-charcoal uppercase tracking-widest">Rapid Prototyping Active</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-tesla-red animate-pulse delay-75"></div>
                                        <span className="text-[10px] font-black text-parasanth-charcoal uppercase tracking-widest">Multi-Shift Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Partnerships CTA */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
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
        </main>
    )
}

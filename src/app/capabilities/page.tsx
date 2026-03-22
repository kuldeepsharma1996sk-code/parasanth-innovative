'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const capabilities = [
    {
        title: "Electromechanical Assembly",
        description: "Our core strength lies in precision motor engineering and high-volume assembly lines.",
        items: [
            { label: "Motor Winding", detail: "Automated stator and rotor winding." },
            { label: "Precision Balancing", detail: "High-speed dynamic rotor balancing for silent operation." },
            { label: "Sub-Assembly", detail: "Dedicated lines for fans, pumps, and domestic motors." },
            { label: "Final Build", detail: "Scalable conveyor systems for rapid product completion." }
        ]
    },
    {
        title: "PCB Electronics",
        description: "We manage the 'Brain' of your appliance with in-house electronics expertise.",
        items: [
            { label: "SMT Lines", detail: "High-speed pick & place for surface-mount components." },
            { label: "Through-Hole", detail: "Skilled manual assembly for robust power boards." },
            { label: "Firmware", detail: "Custom coding and logic development for smart controllers." },
            { label: "Conformal Coating", detail: "Protection for electronics against moisture and dust." }
        ]
    },
    {
        title: "Injection Moulding",
        description: "Total control over the structural integrity and finish of your products.",
        items: [
            { label: "Tooling", detail: "Coordination and maintenance of high-grade P20 steel moulds." },
            { label: "Production", detail: "Large-tonnage injection machines for housings and blades." },
            { label: "Finishing", detail: "Secondary processes including buffing, painting, and branding." },
            { label: "Rapid Prototyping", detail: "Quick-turnaround moulds for new product launches." }
        ]
    },
    {
        title: "Quality Testing",
        description: "Reliability is our signature. Every unit undergoes multi-stage validation.",
        items: [
            { label: "Safety Tests", detail: "High-voltage insulation and leakage current checks." },
            { label: "Life-Cycle", detail: "Continuous run-time testing to simulate years of usage." },
            { label: "Environmental", detail: "Performance validation under extreme heat and humidity." },
            { label: "Compliance", detail: "Verification against BIS, ISO, and brand-specific standards." }
        ]
    }
]

const projectVerticals = [
    { category: "Cooling", items: "Pedestal, Table, Wall, and Ceiling Fans." },
    { category: "Heating", items: "Quartz, Fan, and Halogen Heaters." },
    { category: "Kitchen", items: "Mixer Grinders, Electric Kettles, and Blenders." },
    { category: "Controls", items: "Custom PCBs for Smart Home integration." },
    { category: "Lighting", items: "Industrial LED Drivers and Housing." }
]

const reasons = [
    { title: "IP Protection", desc: "Strict NDAs to keep your designs confidential." },
    { title: "Cost Efficiency", desc: "Optimized supply chain and competitive OEM pricing." },
    { title: "Bhiwadi Advantage", desc: "Fast logistics to Delhi/NCR and major freight ports." },
    { title: "Flexible Scale", desc: "Capacity to ramp up production for seasonal demand." }
]

const splitHeader = (title: string) => {
    const words = title.split(' ')
    return (
        <h2 className="text-2xl md:text-3xl text-[#2d2d2d] mb-6 tracking-tight">
            <span className="font-light">{words[0]}</span>{" "}
            <span className="font-extrabold">{words.slice(1).join(' ')}</span>
        </h2>
    )
}

export default function CapabilitiesPage() {
    return (
        <main className="bg-white min-h-screen pt-20">
            {/* Intro Hero */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-tesla-red font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">
                            OEM Excellence
                        </span>
                        <h1 className="text-5xl md:text-7xl font-light text-parasanth-charcoal tracking-tighter mb-10 leading-[1.1]">
                            Integrated <br /><span className="font-bold">Manufacturing.</span>
                        </h1>
                        <p className="text-parasanth-grey-dark text-xl md:text-2xl font-medium leading-relaxed">
                            We provide end-to-end OEM solutions—from engineering and prototyping to mass assembly, rigorous testing, and global-standard packing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#f2f2f2] p-8 md:p-12 rounded-2xl border-t-[2px] border-tesla-red shadow-soft hover:shadow-xl transition-all duration-500"
                            >
                                {splitHeader(cap.title)}
                                <p className="text-parasanth-grey-dark text-sm md:text-base font-medium mb-10 leading-relaxed">
                                    {cap.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    {cap.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex gap-4">
                                            <div className="mt-1.5 w-2 h-2 bg-[#e11d48] flex-shrink-0"></div>
                                            <div>
                                                <h4 className="text-[#2d2d2d] font-bold text-sm mb-1">{item.label}</h4>
                                                <p className="text-parasanth-grey-dark text-[0.7rem] md:text-xs leading-relaxed font-medium">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OEM Projects Showreel */}
            <section className="py-24 bg-[#f2f2f2]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                        <div className="max-w-xl">
                            <span className="text-parasanth-charcoal/40 font-black tracking-[0.4em] uppercase text-[9px] mb-4 block">Deployment Scope</span>
                            <h2 className="text-4xl font-light text-[#2d2d2d] tracking-tighter leading-none">
                                OEM <span className="font-extrabold">Projects.</span>
                            </h2>
                        </div>
                        <div className="h-px bg-parasanth-grey-mid/20 flex-grow mx-8 hidden lg:block"></div>
                        <p className="text-parasanth-grey-dark text-sm font-medium max-w-xs">
                            Our cross-industry presence allows for Rapid Technology Transfer across different appliance sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {projectVerticals.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-8 rounded-2xl border border-parasanth-grey-mid/10 hover:border-tesla-red/30 transition-all group"
                            >
                                <h3 className="text-tesla-red font-black text-[10px] uppercase tracking-widest mb-4 group-hover:scale-110 transition-transform origin-left">
                                    {v.category}
                                </h3>
                                <div className="h-px bg-parasanth-grey-light w-8 mb-6"></div>
                                <p className="text-[#2d2d2d] text-xs font-bold leading-relaxed">
                                    {v.items}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Parasanth */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-tesla-red font-black tracking-[0.4em] uppercase text-[9px] mb-4 block">Strategic Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d] tracking-tighter">
                            Why <span className="font-extrabold">Parasanth.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((r, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="w-1.5 h-1.5 bg-[#e11d48] group-hover:scale-[3] transition-transform duration-500"></div>
                                </div>
                                <h3 className="text-[#2d2d2d] font-black text-xs uppercase tracking-[0.2em] mb-4">
                                    {r.title}
                                </h3>
                                <p className="text-parasanth-grey-dark text-sm leading-relaxed font-medium px-4">
                                    {r.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Visit CTA (Synced with Home) */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-parasanth-grey-mid/10">
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

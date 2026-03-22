'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const showcaseItems = [
    {
        id: '01',
        title: 'Cooling',
        headline: 'Engineered Airflow.',
        desc: 'From the heavy-duty Farrata Fan to the sleek Pedestal and Wall Fans, our cooling range is defined by high-torque performance and silent operation. Built with 100% copper motors for industrial-grade longevity.',
        img: '/products/pedestal-fan.jpg',
        bg: 'bg-white',
        href: '/products/cooling'
    },
    {
        id: '02',
        title: 'Heating',
        headline: 'Thermal Precision.',
        desc: 'Our Quartz and Fan Heaters provide rapid, consistent warmth. Designed with advanced safety cut-offs and high-efficiency coils, they represent the pinnacle of domestic heating safety.',
        img: '/products/quartz-heater.jpg',
        bg: 'bg-parasanth-grey-light',
        href: '/products/heating'
    },
    {
        id: '03',
        title: 'Kitchen',
        headline: 'Daily Efficiency.',
        desc: 'The Parasanth Electric Kettle and Mixer Grinders are the heart of the modern kitchen. Durable, rapid-boil technology meets high-RPM grinding power, encased in a minimalist, easy-to-clean shell.',
        img: '/products/electric-kettle.jpg',
        bg: 'bg-white',
        href: '/products/kitchen'
    },
    {
        id: '04',
        title: 'Household',
        headline: 'Ergonomic Care.',
        desc: 'Our Dry and Steam Irons are engineered for precision and fabric care. Featuring high-glide soleplates and balanced weight distribution for an effortless ironing experience.',
        img: '/products/dry-iron.jpg',
        bg: 'bg-parasanth-grey-light',
        href: '/products/household'
    }
]

export default function ProductShowcase() {
    return (
        <section className="w-full">
            {showcaseItems.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 py-20 lg:py-0 snap-section ${item.bg} relative overflow-hidden`}
                >
                    {/* Background Numerals Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                        <span className="text-[200px] md:text-[400px] font-black text-parasanth-charcoal/[0.03] tracking-tighter">
                            {item.id}
                        </span>
                    </div>

                    <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                        {/* Text Content */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-tesla-red font-bold text-xs tracking-[0.3em] uppercase">{item.id} / CATEGORY</span>
                                <div className="h-px w-12 bg-parasanth-grey-mid/50"></div>
                            </div>
                            
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium text-parasanth-charcoal/60 lowercase italic tracking-tight">{item.title} Solutions</h3>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-parasanth-charcoal tracking-tight">
                                    {item.headline.split('.')[0]}<span className="text-tesla-red">.</span>
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl text-parasanth-grey-dark max-w-md leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="pt-4">
                                <Link 
                                    href={item.href}
                                    className="inline-flex items-center gap-3 px-8 py-4 border border-parasanth-charcoal text-parasanth-charcoal hover:bg-parasanth-charcoal hover:text-white transition-all duration-500 rounded-full font-bold uppercase text-xs tracking-widest shadow-soft hover:shadow-lg active:scale-95 group"
                                >
                                    Explore Collection
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Product Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                            className={`flex justify-center items-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                        >
                            <div className="relative group">
                                {/* Soft Glow Backdrop */}
                                <div className="absolute inset-0 bg-parasanth-charcoal/5 rounded-full blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="max-h-[50vh] lg:max-h-[65vh] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_50px_50px_rgba(0,0,0,0.25)] transition-all duration-700" 
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    )
}

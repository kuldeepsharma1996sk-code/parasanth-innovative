'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProductCardProps {
    name: string
    category: string
    image: string
    href: string
}

export default function ProductCard({
    name,
    category,
    image,
    href,
}: ProductCardProps) {
    return (
        <Link href={href}>
            <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative bg-parasanth-grey-light rounded-[2.5rem] p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-parasanth-grey-mid/20"
            >
                {/* Product Image - Focus effect */}
                <div className="h-72 w-full flex items-center justify-center mb-8 relative">
                    {/* Subtle Shadow under image */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 blur-xl rounded-full opacity-60 group-hover:opacity-100 group-hover:w-40 transition-all duration-700"></div>
                    
                    <motion.img 
                        src={image} 
                        className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-10"
                        alt={name}
                    />
                </div>

                {/* Info Layer - Reveal logic */}
                <div className="text-center relative z-10">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-parasanth-grey-dark mb-3 font-bold opacity-70">
                        {category}
                    </p>
                    <h3 className="text-2xl font-bold text-parasanth-charcoal mb-6 tracking-tight group-hover:text-tesla-red transition-colors">
                        {name}
                    </h3>
                    
                    {/* Animated Button (Fades in & Slides up) */}
                    <div className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <button className="px-10 py-3 bg-parasanth-charcoal text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:shadow-lg transition-all active:scale-95">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Industrial Inner Glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
        </Link>
    )
}

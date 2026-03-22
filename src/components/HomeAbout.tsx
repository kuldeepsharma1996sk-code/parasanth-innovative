'use client'

import { motion } from 'framer-motion'

export default function HomeAbout() {
    return (
        <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white overflow-hidden snap-section">
            {/* High-Fashion Watermark Background */}
            <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                <span className="text-[200px] md:text-[350px] font-black text-parasanth-grey-light opacity-50 tracking-tighter mix-blend-multiply">
                    19XX
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content Left (Generational Precision Approach) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-tesla-red uppercase tracking-[0.2em] text-sm font-semibold mb-4 block drop-shadow-sm">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-parasanth-charcoal leading-[1.1] mb-8">
                            New Vision.<br />
                            <span className="font-bold">Deep Roots.</span>
                        </h2>
                        
                        <p className="text-lg text-parasanth-grey-dark leading-relaxed mb-6 font-medium">
                            Parasanth Innovation represents the next evolution of a family legacy in manufacturing. While our facility is new and equipped with the latest industrial technology, our foundation is built on decades of inherited manufacturing expertise.
                        </p>
                        <p className="text-lg text-parasanth-grey-dark leading-relaxed font-medium">
                            We combine the agility of a modern startup with the disciplined standards of a multi-generational manufacturing family.
                        </p>
                    </motion.div>

                    {/* Features Right (Video) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Cinematic Mini High-Def Loop */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-soft-xl border border-parasanth-grey-mid/20 bg-parasanth-charcoal">
                            <iframe
                                className="absolute w-full h-full object-cover scale-[1.1] pointer-events-none grayscale-[10%]"
                                src="https://www.youtube.com/embed/kXXjyZGNlGg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=kXXjyZGNlGg&modestbranding=1&playsinline=1"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; picture-in-picture"
                            ></iframe>
                            {/* Inner glow for glass premium feel */}
                            <div className="absolute inset-0 bg-parasanth-charcoal/5 box-inner-shadow rounded-3xl pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section (Moved below the narrative and video) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                >
                    {[
                        { title: 'Generational Wisdom', desc: 'Decades of passed-down material and assembly knowledge.' },
                        { title: 'Modern Engineering', desc: 'Precision automation meeting rigorous ISO standards.' },
                        { title: 'Uncompromising Ethics', desc: 'A deeply personal commitment to our partners and workforce.' },
                    ].map((value, idx) => (
                        <div key={idx} className="bg-parasanth-grey-light rounded-2xl p-6 border border-parasanth-grey-mid/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 group flex flex-col items-start min-h-[160px]">
                            <span className="w-10 h-10 rounded-full flex-shrink-0 bg-white border border-parasanth-grey-mid flex items-center justify-center text-tesla-red text-sm font-black shadow-sm group-hover:scale-110 group-hover:bg-tesla-red group-hover:text-white group-hover:border-transparent transition-all mb-4">
                                0{idx + 1}
                            </span>
                            <h3 className="text-parasanth-charcoal font-bold text-lg leading-tight mb-2">
                                {value.title}
                            </h3>
                            <p className="text-parasanth-grey-dark text-sm font-medium leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import TechSpecs from '@/components/TechSpecs'

// Product data organized by category
const productData: Record<string, {
    title: string
    description: string
    products: {
        name: string
        image: string
        href: string
        featured?: boolean
        specs: { label: string; value: string }[]
    }[]
}> = {
    cooling: {
        title: 'Cooling Solutions',
        description: 'Beat the heat with our range of high-performance fans designed for Indian summers. Quiet operation, powerful airflow, and built to last.',
        products: [
            {
                name: 'Pedestal Fan',
                image: '/products/pedestal-fan-new.png',
                href: '/products/cooling/pedestal-fan',
                featured: true,
                specs: [
                    { label: 'Blade Size', value: '400mm / 450mm' },
                    { label: 'Motor', value: 'Copper Winding' },
                    { label: 'Speed Settings', value: '3' },
                    { label: 'Power', value: '55W' },
                    { label: 'Air Delivery', value: '75 CMM' },
                    { label: 'RPM', value: '1350' },
                ],
            },
            {
                name: 'Table Fan',
                image: '/products/table-fan-new.png',
                href: '/products/cooling/table-fan',
                specs: [
                    { label: 'Blade Size', value: '300mm / 400mm' },
                    { label: 'Motor', value: 'Copper Winding' },
                    { label: 'Speed Settings', value: '3' },
                    { label: 'Power', value: '45W' },
                ],
            },
            {
                name: 'Wall Fan',
                image: '/products/wall-fan-new.png',
                href: '/products/cooling/wall-fan',
                specs: [
                    { label: 'Blade Size', value: '400mm / 450mm' },
                    { label: 'Motor', value: 'Copper Winding' },
                    { label: 'Oscillation', value: '90°' },
                    { label: 'Power', value: '55W' },
                ],
            },
            {
                name: 'Farrata Fan',
                image: '/products/farrata-fan-new.png',
                href: '/products/cooling/farrata-fan',
                specs: [
                    { label: 'Blade Size', value: '450mm' },
                    { label: 'Motor', value: 'Heavy Duty' },
                    { label: 'Power', value: '85W' },
                    { label: 'Air Throw', value: '40ft' },
                ],
            },
        ],
    },
    heating: {
        title: 'Heating Solutions',
        description: 'Stay warm with our energy-efficient heating range. From instant quartz heaters to powerful fan heaters, comfort in every corner.',
        products: [
            {
                name: 'Quartz Heater',
                image: '/products/quartz-heater-new.png',
                href: '/products/heating/quartz-heater',
                featured: true,
                specs: [
                    { label: 'Heating Elements', value: '2 Quartz Tubes' },
                    { label: 'Power', value: '400W / 800W' },
                    { label: 'Heat Settings', value: '2' },
                    { label: 'Safety', value: 'Tip-over Protection' },
                ],
            },
            {
                name: 'Fan Heater',
                image: '/products/fan-heater.jpg',
                href: '/products/heating/fan-heater',
                featured: true,
                specs: [
                    { label: 'Heating', value: 'PTC Ceramic' },
                    { label: 'Power', value: '1000W / 2000W' },
                    { label: 'Modes', value: 'Fan / Low / High' },
                    { label: 'Thermostat', value: 'Adjustable' },
                ],
            },
            {
                name: 'Room Heater',
                image: '/products/room-heater.jpg',
                href: '/products/heating/room-heater',
                specs: [
                    { label: 'Type', value: 'Oil-Filled Radiator' },
                    { label: 'Power', value: '1500W / 2500W' },
                    { label: 'Fins', value: '9 / 11 / 13' },
                    { label: 'Thermostat', value: 'Digital' },
                ],
            },
            {
                name: 'Blower Heater',
                image: '/products/blower-heater.jpg',
                href: '/products/heating/blower-heater',
                specs: [
                    { label: 'Power', value: '2000W' },
                    { label: 'Modes', value: 'Fan / Heat' },
                    { label: 'Coverage', value: '250 sq.ft' },
                    { label: 'Safety', value: 'Overheat Protection' },
                ],
            },
        ],
    },
    kitchen: {
        title: 'Kitchen Essentials',
        description: 'Essential appliances for the modern Indian kitchen. Quality craftsmanship meets everyday reliability.',
        products: [
            {
                name: 'Electric Kettle',
                image: '/products/electric-kettle-new.png',
                href: '/products/kitchen/electric-kettle',
                featured: true,
                specs: [
                    { label: 'Capacity', value: '1.5L / 1.8L / 2L' },
                    { label: 'Material', value: 'Stainless Steel' },
                    { label: 'Power', value: '1500W' },
                    { label: 'Features', value: 'Auto Shut-off' },
                ],
            },
            {
                name: 'Dry Iron',
                image: '/products/dry-iron-new.png',
                href: '/products/kitchen/dry-iron',
                specs: [
                    { label: 'Soleplate', value: 'Non-stick' },
                    { label: 'Power', value: '750W / 1000W' },
                    { label: 'Temperature', value: 'Adjustable' },
                    { label: 'Weight', value: '1kg / 1.5kg' },
                ],
            },
            {
                name: 'Steam Iron',
                image: '/products/steam-iron.jpg',
                href: '/products/kitchen/steam-iron',
                featured: true,
                specs: [
                    { label: 'Soleplate', value: 'Ceramic Coated' },
                    { label: 'Steam Output', value: '25g/min' },
                    { label: 'Water Tank', value: '200ml' },
                    { label: 'Power', value: '1600W' },
                ],
            },
            {
                name: 'Mixer Grinder',
                image: '/products/mixer-grinder.jpg',
                href: '/products/kitchen/mixer-grinder',
                specs: [
                    { label: 'Motor', value: '500W / 750W' },
                    { label: 'Jars', value: '3 Stainless Steel' },
                    { label: 'Speed', value: '3 + Pulse' },
                    { label: 'Blades', value: 'SS 304 Grade' },
                ],
            },
            {
                name: 'Immersion Rod',
                image: '/products/immersion-rod.jpg',
                href: '/products/kitchen/immersion-rod',
                specs: [
                    { label: 'Power', value: '1000W / 1500W' },
                    { label: 'Material', value: 'Copper Element' },
                    { label: 'Safety', value: 'Auto Cut-off' },
                    { label: 'Usage', value: 'Water Heating' },
                ],
            },
        ],
    },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = params.category
    const data = productData[category]

    if (!data) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-b from-parasanth-grey-light/50 to-white pointer-events-none" />
                
                {/* Subtle Background Numerals */}
                <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] select-none translate-x-1/4 translate-y-1/4">
                    <span className="text-[300px] md:text-[500px] font-black text-parasanth-charcoal uppercase tracking-tighter">
                        {category}
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <Link
                            href="/#products"
                            className="inline-flex items-center gap-2 text-parasanth-grey-dark hover:text-tesla-red mb-8 transition-all group font-bold text-xs uppercase tracking-[0.2em]"
                        >
                            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Collection
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-tesla-red text-xs font-black tracking-[0.3em] uppercase block">
                                Collection / {category}
                            </span>
                            <div className="h-px w-20 bg-parasanth-grey-mid/40"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light text-parasanth-charcoal mb-8 leading-tight">
                            {data.title.split(' ')[0]} <br />
                            <span className="font-bold">{data.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-parasanth-grey-dark text-xl leading-relaxed max-w-2xl font-medium">
                            {data.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard
                                    name={product.name}
                                    category={data.title}
                                    image={product.image}
                                    href={product.href}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-24 bg-white border-t border-parasanth-grey-mid/20">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-parasanth-charcoal">Technical Specifications</h2>
                        <p className="text-parasanth-grey-dark mt-4 font-medium">
                            Detailed specifications for each product in our {data.title.toLowerCase()} range.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {data.products.map((product, index) => (
                            <TechSpecs
                                key={product.name}
                                title={product.name}
                                specs={product.specs}
                                defaultOpen={index === 0}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-parasanth-grey-light">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-parasanth-charcoal mb-6"
                    >
                        Interested in Our {data.title}?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-parasanth-grey-dark text-lg mb-10 font-medium"
                    >
                        Get a customized quotation for your OEM requirements.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/contact" className="btn-primary min-w-[200px] shadow-lg">
                            Request Quote
                        </Link>
                        <Link href="/catalog" className="btn-secondary min-w-[200px]">
                            Download Catalog
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

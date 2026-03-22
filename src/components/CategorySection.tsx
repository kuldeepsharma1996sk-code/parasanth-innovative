'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CategorySectionProps {
    tag: string
    title: string
    description: string
    products: {
        name: string
        image: string
        href: string
    }[]
    reverse?: boolean
    bgColor?: string
}

export default function CategorySection({
    tag,
    title,
    description,
    products,
    reverse = false,
    bgColor = 'bg-white',
}: CategorySectionProps) {
    return (
        <section className={`snap-section ${bgColor} py-24 md:py-32`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={reverse ? 'lg:order-2' : ''}
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            {tag}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-parasanth-charcoal mt-4 mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-parasanth-grey-dark text-lg leading-relaxed mb-8">
                            {description}
                        </p>
                        <Link
                            href={`/products/${tag.toLowerCase()}`}
                            className="inline-flex items-center gap-2 text-parasanth-charcoal font-medium hover:text-tesla-red transition-colors group"
                        >
                            <span>View All {tag} Products</span>
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Product Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`grid grid-cols-2 gap-4 ${reverse ? 'lg:order-1' : ''}`}
                    >
                        {products.slice(0, 4).map((product, index) => (
                            <Link
                                key={product.name}
                                href={product.href}
                                className="group relative aspect-square overflow-hidden rounded-2xl bg-parasanth-grey-light shadow-soft hover:shadow-soft-xl transition-all duration-500"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-parasanth-charcoal/70 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white font-medium text-sm group-hover:text-tesla-red transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
                                <div className="absolute inset-0 border border-transparent group-hover:border-tesla-red/30 transition-colors rounded-2xl" />
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

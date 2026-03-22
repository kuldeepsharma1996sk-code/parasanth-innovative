'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Who we are', href: '/about' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Products', href: '/products', hasMegaMenu: true },
    { name: 'News & Events', href: '/news' },
    { name: 'Careers', href: '/careers' },
]

const productCategories = [
    {
        title: "Lighting",
        items: ["Consumer LED", "Luminaires", "Home Decor", "LED Lamps", "Solar Street Light", "Consumer Luminaires", "Door Bell", "Switches", "Torches"]
    },
    {
        title: "Motors",
        items: ["Universal Motor", "BLDC Motor", "Hand Blender (AC)", "Hand Mixer Motor", "Synchronous Motor", "Fan Blower Motor", "Shaded Pole Motor", "Hand Blender Motor (DC)", "FAN Motor - Maxx Air", "FAN Motors", "Induction Motor", "BLDC Chimney Motor", "Air Conditioner Motors", "Wet Grinder Motor"]
    },
    {
        title: "Home Comfort",
        items: ["OFR", "Fans", "Air Cooler"]
    },
    {
        title: "Kitchen Appliances",
        items: ["OTG", "Hand Blenders", "MG", "Hand Mixer", "Kettle", "Chimney", "Air Fryer", "Pop Up Toaster"]
    },
    {
        title: "GC",
        items: ["Iron", "Steam Iron Press"]
    },
    {
        title: "Personal Grooming",
        items: ["Trimmer", "Hair Dryer", "Hair Straightener"]
    },
    {
        title: "Home Entertainment",
        items: ["Sound Box", "Radio"]
    },
    {
        title: "Medical Diagnostic",
        items: ["Cartridge"]
    }
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-md'
                } border-b border-parasanth-grey-mid/20`}
            onMouseLeave={() => setIsMegaMenuVisible(false)}
        >
            <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 flex items-center justify-between relative ${isScrolled ? 'h-20' : 'h-[104px]'}`}>
                {/* Logo */}
                <Link href="/" className="z-10 flex flex-col justify-center max-w-[200px] md:max-w-none group">
                    <span className="text-lg md:text-xl font-bold tracking-tight text-parasanth-charcoal leading-none group-hover:text-tesla-red transition-colors">
                        PARASANTH
                    </span>
                    <span className="text-[0.55rem] md:text-[0.65rem] font-semibold tracking-widest text-parasanth-grey-dark mt-1">
                        INNOVATIVE INDUSTRIES PRIVATE LIMITED
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2 z-10">
                    {navLinks.map((link, index) => {
                        const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href)

                        return (
                            <div
                                key={link.name}
                                className="relative px-4 py-2 rounded-full cursor-pointer"
                                onMouseEnter={() => {
                                    setHoveredIndex(index)
                                    if (link.hasMegaMenu) setIsMegaMenuVisible(true)
                                    else setIsMegaMenuVisible(false)
                                }}
                            >
                                {/* Magnetic Hover Pill */}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        className="absolute inset-0 bg-parasanth-grey-light rounded-full -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <Link
                                    href={link.href}
                                    className={`relative z-10 text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isActive ? 'text-tesla-red' : 'text-parasanth-charcoal/70 hover:text-parasanth-charcoal'
                                        }`}
                                >
                                    {link.name}
                                    {link.hasMegaMenu && (
                                        <svg className={`w-3 h-3 transition-transform duration-300 ${isMegaMenuVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}

                                    {/* Active State Dot */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-active-dot"
                                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-tesla-red rounded-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            </div>
                        )
                    })}

                    {/* CTA Button - Red Pill */}
                    <div className="pl-4">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-tesla-red text-white text-sm font-bold rounded-full hover:bg-parasanth-charcoal transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-charcoal/20 active:scale-95"
                        >
                            Contact us
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-10"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-parasanth-charcoal transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-parasanth-charcoal transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-parasanth-charcoal transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    />
                </button>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {isMegaMenuVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-parasanth-grey-mid/20 shadow-2xl z-40 overflow-y-auto max-h-[80vh]"
                        onMouseEnter={() => setIsMegaMenuVisible(true)}
                        onMouseLeave={() => setIsMegaMenuVisible(false)}
                    >
                        <div className="max-w-7xl mx-auto px-8 py-10 md:py-12">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-10">
                                {productCategories.map((category) => (
                                    <div key={category.title} className="flex flex-col">
                                        <h3 className="text-parasanth-charcoal font-bold text-[0.8rem] mb-4 tracking-tight border-b border-parasanth-grey-mid/10 pb-2">
                                            {category.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {category.items.map((item) => (
                                                <li key={item}>
                                                    <Link 
                                                        href={`/products#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="text-parasanth-grey-dark text-[0.75rem] hover:text-tesla-red transition-colors duration-200 block truncate leading-relaxed"
                                                        onClick={() => setIsMegaMenuVisible(false)}
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Bottom Strip */}
                            <div className="mt-12 pt-6 border-t border-parasanth-grey-mid/10 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-parasanth-grey-dark text-[0.7rem] font-medium">
                                    Trusted by <span className="text-tesla-red font-bold">10+ Brands</span> for global manufacturing excellence.
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-tesla-red text-[0.7rem] font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
                                >
                                    Inquiry for OEM/ODM
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-parasanth-grey-mid/20 shadow-soft-lg overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href)

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center px-4 py-3 rounded-xl transition-colors font-medium text-lg ${isActive
                                            ? 'bg-tesla-red/5 text-tesla-red'
                                            : 'text-parasanth-charcoal/80 hover:bg-parasanth-grey-light hover:text-parasanth-charcoal'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contact"
                                className="mt-4 px-6 py-4 bg-tesla-red text-white text-base font-bold rounded-full text-center hover:bg-parasanth-charcoal transition-all active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

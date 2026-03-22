import Link from 'next/link'

const footerLinks = {
    products: [
        { name: 'Cooling Solutions', href: '/products#cooling' },
        { name: 'Heating Solutions', href: '/products#heating' },
        { name: 'Kitchen Essentials', href: '/products#kitchen' },
        { name: 'Motors & Components', href: '/products#motors' },
    ],
    company: [
        { name: 'Who we are', href: '/about' },
        { name: 'Infrastructure', href: '/infrastructure' },
        { name: 'Capabilities', href: '/capabilities' },
        { name: 'News & Events', href: '/news' },
        { name: 'Careers', href: '/careers' },
    ],
    support: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Request Quote', href: '/contact' },
        { name: 'Full Catalogue', href: '/catalog' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-parasanth-charcoal border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 flex flex-col">
                            <span className="text-2xl font-bold tracking-tight text-white leading-none">
                                PARASANTH
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-white/50 mt-2">
                                INNOVATIVE INDUSTRIES PRIVATE LIMITED
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Premium OEM manufacturer of small domestic appliances.
                            Engineering excellence, Made in India.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-sm">
                        © 2026 Parasanth Innovative Industries Private Limited. All rights reserved.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a href="mailto:hq@parasanth.in" className="text-white/40 hover:text-tesla-red text-sm transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            hq@parasanth.in
                        </a>
                        <Link href="/privacy" className="text-white/30 hover:text-white/50 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/30 hover:text-white/50 text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

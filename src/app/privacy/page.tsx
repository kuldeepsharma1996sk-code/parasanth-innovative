import Link from 'next/link'

export default function PrivacyPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-parasanth-grey-dark hover:text-tesla-red mb-12 transition-all group font-bold text-xs uppercase tracking-widest"
                    >
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-parasanth-charcoal mb-4 tracking-tighter">
                        Privacy <span className="text-tesla-red">Policy.</span>
                    </h1>
                    <p className="text-parasanth-grey-mid font-bold text-sm tracking-widest uppercase mb-16">
                        Last updated: February 2024
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <div className="space-y-16 text-parasanth-charcoal">
                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    1. Information We Collect
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    Parasanth Innovative Industries Private Limited collects information you provide directly
                                    to us, such as when you submit a request for quotation, contact us, or subscribe to our
                                    communications. This may include your name, email address, phone number, company name,
                                    and product requirements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    2. How We Use Your Information
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">We use the information we collect to:</p>
                                <ul className="mt-8 space-y-4 text-parasanth-grey-dark text-lg">
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-tesla-red rounded-full"></div>
                                        Respond to your inquiries and fulfill your requests
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-tesla-red rounded-full"></div>
                                        Send you technical information about our products
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-tesla-red rounded-full"></div>
                                        Communicate about orders, deliveries, and partnerships
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-tesla-red rounded-full"></div>
                                        Improve our website and customer service
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    3. Information Sharing
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties
                                    without your consent, except as required by law or to protect our rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    4. Data Security
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    We implement appropriate security measures to protect your personal information against
                                    unauthorized access, alteration, disclosure, or destruction.
                                </p>
                            </section>

                            <section className="pt-16 border-t border-parasanth-grey-mid/10">
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6">5. Contact Infrastructure</h2>
                                <p className="text-parasanth-grey-dark text-lg mb-8">
                                    If you have any questions about this Privacy Policy, please contact our headquarters:
                                </p>
                                <div className="p-8 bg-parasanth-grey-light rounded-2xl border border-parasanth-grey-mid/10">
                                    <strong className="text-parasanth-charcoal block mb-4 text-xl">Parasanth Innovative Industries Private Limited</strong>
                                    <div className="space-y-2 text-parasanth-grey-dark font-medium">
                                        <p>Plot No. G1-287, RIICO Industrial Area</p>
                                        <p>Khushkhera, Bhiwadi, Rajasthan 301018, India</p>
                                        <p className="mt-4 flex items-center gap-3">
                                            <span className="text-tesla-red font-bold uppercase text-xs tracking-widest">Email:</span>
                                            <a href="mailto:hq@parasanth.in" className="hover:text-tesla-red transition-colors">hq@parasanth.in</a>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <span className="text-tesla-red font-bold uppercase text-xs tracking-widest">Phone:</span>
                                            +91 80107 55191
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import Link from 'next/link'

export default function TermsPage() {
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
                        Terms of <span className="text-tesla-red">Service.</span>
                    </h1>
                    <p className="text-parasanth-grey-mid font-bold text-sm tracking-widest uppercase mb-16">
                        Last updated: February 2024
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <div className="space-y-16 text-parasanth-charcoal">
                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    By accessing and using the Parasanth Innovative Industries Private Limited website,
                                    you accept and agree to be bound by these Terms of Service. If you do not agree to
                                    these terms, please do not use our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    2. OEM Partnership Terms
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    All OEM partnerships and bulk orders are subject to separate commercial agreements.
                                    Pricing, minimum order quantities, and delivery terms are determined on a case-by-case
                                    basis during the quotation process.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    3. Product Information
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    While we strive to provide accurate product information, specifications may change
                                    without notice. Final specifications will be confirmed during the order process.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    4. Intellectual Property
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    All content on this website, including images, text, and designs, is the property of
                                    Parasanth Innovative Industries Private Limited and is protected by intellectual
                                    property laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6 flex items-center gap-4">
                                    <span className="w-8 h-px bg-tesla-red"></span>
                                    5. Quality Assurance
                                </h2>
                                <p className="text-parasanth-grey-dark text-lg leading-relaxed">
                                    All products manufactured by Parasanth Innovative Industries are subject to rigorous
                                    quality control processes. We are committed to delivering products that meet or exceed
                                    industry standards.
                                </p>
                            </section>

                            <section className="pt-16 border-t border-parasanth-grey-mid/10">
                                <h2 className="text-2xl font-black text-parasanth-charcoal mb-6">6. Contact Infrastructure</h2>
                                <p className="text-parasanth-grey-dark text-lg mb-8">
                                    For questions regarding these terms, contact our headquarters:
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

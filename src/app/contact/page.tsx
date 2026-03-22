'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const productCategories = [
    { value: 'cooling', label: 'Cooling Solutions' },
    { value: 'heating', label: 'Heating Solutions' },
    { value: 'kitchen', label: 'Kitchen Essentials' },
    { value: 'all', label: 'Full Product Range' },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        productInterest: '',
        quantity: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 to-charcoal" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-tesla-red text-sm font-medium tracking-widest uppercase">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                            Let's Build Together
                        </h1>
                        <p className="text-white/60 text-xl leading-relaxed">
                            Ready to partner with India's leading OEM manufacturer?
                            Get a quotation for your product requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-charcoal-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-tesla-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Manufacturing Unit</h3>
                                        <p className="text-white/50">
                                            Plot No. G1-287, RIICO Industrial Area<br />
                                            Khushkhera, Bhiwadi<br />
                                            Rajasthan 301018, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-tesla-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Email</h3>
                                        <p className="text-white/50">
                                            hq@parasanth.in
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-tesla-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                                        <p className="text-white/50">
                                            +91 80107 55191
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Download Catalog */}
                            <div className="mt-12 p-8 bg-white rounded-2xl shadow-xl border border-parasanth-grey-mid/10">
                                <h3 className="text-parasanth-charcoal font-bold text-xl mb-3">Download Full Catalogue</h3>
                                <p className="text-parasanth-grey-dark text-sm mb-6 leading-relaxed">
                                    Get our complete product catalogue with technical specifications,
                                    available SKUs, and partnership terms.
                                </p>
                                <Link href="/catalog" className="btn-primary w-full flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download PDF Catalog
                                </Link>
                            </div>
                        </motion.div>

                        {/* RFQ Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-parasanth-grey-mid/10">
                                <h2 className="text-3xl font-extrabold text-parasanth-charcoal mb-8 tracking-tight">Request for Quotation</h2>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-parasanth-charcoal text-xl font-bold mb-2">Request Submitted!</h3>
                                        <p className="text-parasanth-grey-dark">
                                            Thank you for your interest. Our team will get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Company Name *</label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Contact Name *</label>
                                                <input
                                                    type="text"
                                                    name="contactName"
                                                    value={formData.contactName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium"
                                                    placeholder="email@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Product Interest *</label>
                                                <select
                                                    name="productInterest"
                                                    value={formData.productInterest}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal focus:outline-none focus:border-tesla-red transition-all font-medium appearance-none"
                                                >
                                                    <option value="" className="text-parasanth-grey-mid">Select category</option>
                                                    {productCategories.map((cat) => (
                                                        <option key={cat.value} value={cat.value}>
                                                            {cat.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Expected Quantity</label>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={formData.quantity}
                                                    onChange={handleChange}
                                                    className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium"
                                                    placeholder="e.g., 10,000 units/month"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-parasanth-grey-dark font-bold text-xs uppercase tracking-widest mb-3">Additional Details</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full bg-parasanth-grey-light border border-parasanth-grey-mid/20 rounded-2xl px-4 py-4 text-parasanth-charcoal placeholder-parasanth-grey-mid focus:outline-none focus:border-tesla-red transition-all font-medium resize-none"
                                                placeholder="Describe your requirements, specifications, or any questions..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-6"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Submit Quotation Request'
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

'use client'

import { useState } from 'react'
import FadeInSection from '@/components/FadeInSection'

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormStatus('submitting')
        
        try {
            const form = e.target as HTMLFormElement
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <FadeInSection>
                <section className="relative px-6 md:px-16 py-32 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Have a question or business inquiry? Get in touch with our team.
                        </p>
                    </div>
                </section>
            </FadeInSection>

            <div className="max-w-6xl mx-auto px-6 md:px-16 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeInSection delay={0.2}>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} id="contactForm" className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Your Name *</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Company *</label>
                                    <input
                                        name="company"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Phone Number (Optional)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Your Message *</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Please describe your inquiry..."
                                        required
                                    ></textarea>
                                </div>

                                {formStatus === 'success' && (
                                    <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                                        Thank you for your message! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                                        There was an error sending your message. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                                        ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {formStatus === 'submitting' ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </FadeInSection>

                    {/* Contact Details */}
                    <FadeInSection delay={0.4}>
                        <div className="space-y-8">
                            {/* Office Locations */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-medium text-blue-600 mb-2">Communication Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            F-203, 2nd Floor, Nerul Station Complex (West),<br />
                                            Station Road, Sector 20,<br />
                                            Navi Mumbai, Maharashtra - 400706
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-blue-600 mb-2">Registered Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            F-505, Sai Galaxy, Plot No - 111,<br />
                                            Sector - 14, Taloja Phase - 1,<br />
                                            Raigarh, Panvel, Navi Mumbai,<br />
                                            Maharashtra - 410209
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Phone Numbers</h3>
                                            <p className="text-gray-600">+91 91561 71990</p>
                                            <p className="text-gray-600">+91 73218 99332</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Email</h3>
                                            <a href="mailto:info@scmcorporation.net" className="text-blue-600 hover:text-blue-700">
                                                info@esteemex.net
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-medium text-gray-900">GST Number</h3>
                                            <p className="text-gray-600">27ACAPF2887Q1Z2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </main>
    )
}

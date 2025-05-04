import FadeInSection from './FadeInSection'
import Link from 'next/link'

export default function Footer() {
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <FadeInSection delay={0.6}>
            <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-16">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold mb-4">EsteemEx</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your trusted partner in global trade and logistics solutions.
                            </p>
                            <div className="flex items-center space-x-2 mt-6">
                                <span className="text-gray-400 text-sm font-medium">GST :</span>
                                <span className="text-gray-300 text-sm">27ACAPF2887Q1Z2</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-3 text-gray-300">
                                <p className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    F-403, Thakur Castle, Taloja Phase-1, Raigarh, Navi Mumbai – India
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@esteemex.net
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91 91561 71990
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center"
                                        >
                                            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} EsteemEx. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </FadeInSection>
    )
}

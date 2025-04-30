'use client'
// Updated mobile navbar with enhanced styling and animations
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <>
            <nav className="w-full flex flex-wrap items-center justify-between px-6 md:px-12 py-5 bg-white shadow-lg fixed top-0 z-50 transition-all duration-300">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="EsteemEx Logo"
                            width={200}
                            height={200}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex gap-10 text-base font-semibold">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative py-2 transition-colors duration-300
                                ${pathname === link.href
                                    ? 'text-blue-600'
                                    : 'text-gray-800 hover:text-blue-600'
                                }
                                after:absolute after:left-0 after:bottom-0 after:h-0.5 
                                after:w-full after:origin-left after:scale-x-0 
                                after:bg-blue-600 after:transition-transform 
                                after:duration-300 hover:after:scale-x-100
                                ${pathname === link.href ? 'after:scale-x-100' : ''}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-800 hover:text-blue-600 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed right-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col py-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-6 py-3 transition-colors duration-300 border-l-4 ${pathname === link.href
                                    ? 'text-blue-600 border-blue-600 bg-blue-50 font-semibold'
                                    : 'text-gray-800 border-transparent hover:text-blue-600 hover:bg-blue-50 hover:border-blue-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

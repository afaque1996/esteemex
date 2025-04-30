'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white shadow-lg fixed top-0 z-50 transition-all duration-300">
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
                {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Services', href: '/services' },
                    { name: 'Products', href: '/products' },
                    { name: 'Contact', href: '/contact' },
                ].map((link) => (
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
            <button className="md:hidden text-gray-800 hover:text-blue-600 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    )
}

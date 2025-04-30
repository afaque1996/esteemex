import FadeInSection from '@/components/FadeInSection'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Products – EsteemEx',
    description: 'Discover EsteemEx\'s range of industrial export products across cement, steel, oil & gas, and construction industries.',
}

export default function ProductsPage() {
    const products = [
        { name: 'Conveyer Drum Pulley', image: '/products/scm-product-1.jpg' },
        { name: 'Head Pulley Conveyer System', image: '/products/scm-product-3.jpg' },
        { name: 'Tail Pulley', image: '/products/scm-product-4.jpg' },
        { name: 'Conveyer Belt', image: '/products/scm-product-5.jpg' },
        { name: 'Skirt Rubber for Conveyer System', image: '/products/scm-product-6.jpg' },
        { name: 'Chevron Belt', image: '/products/scm-product-7.jpg' },
        { name: 'Idler Roller', image: '/products/scm-product-8.jpg' },
        { name: 'Industrial Valves', image: '/products/scm-product-9.jpg' },
        { name: 'All Safety Item', image: '/products/scm-product-10.jpg' },
        { name: 'Chain Block Manual', image: '/products/scm-product-12.jpg' },
        { name: 'Minning All Equipment Part', image: '/products/scm-product-13.jpg' },
        { name: 'Nozzle Assembly', image: '/products/scm-product-14.jpg' },
        { name: 'Welding Electrod', image: '/products/scm-product-15.jpg' },
        { name: 'Bar Hollow Material', image: '/products/scm-product-16.jpg' },
        { name: 'All Type SS Material, Pipe, Sheet', image: '/products/scm-product-17.jpg' },
        { name: 'Carbon Pipe, Flange, Elbow', image: '/products/scm-product-18.jpg' },
        { name: 'Wire Mesh', image: '/products/scm-product-19.jpg' },
        { name: 'Safety Siren', image: '/products/scm-product-20.jpg' },
        { name: 'Pneumatic Cylinder', image: '/products/scm-product-21.jpg' },
        { name: 'Seamless Steel Tubes', image: '/products/scm-product-22.jpg' },
        { name: 'Nickle Round Bar', image: '/products/scm-product-23.jpg' },
        { name: 'Oil & Gas Spare Parts', image: '/products/scm-product-24.jpg' },
        { name: 'Face End Tube', image: '/products/scm-product-26.jpg' },
        { name: 'Expander', image: '/products/scm-product-27.jpg' },
        { name: 'Oil Filter', image: '/products/scm-product-28.jpg' },
        { name: 'Bag Filter', image: '/products/scm-product-29.jpg' },
        { name: 'Cage', image: '/products/scm-product-30.jpg' },
        { name: 'Sequential Timer', image: '/products/scm-product-31.jpg' },
        { name: 'Liner', image: '/products/scm-product-32.jpg' },
        { name: 'Cement Clinker', image: '/products/scm-product-33.jpg' },
        { name: 'Ball Mill Liner', image: '/products/scm-product-34.jpg' },
        { name: 'Liner bolt', image: '/products/scm-product-35.jpg' },
        { name: 'Wear Plate', image: '/products/scm-product-36.jpg' },
        { name: 'Shell Liner', image: '/products/scm-product-37.jpg' },
        { name: 'Grinding Medial Ball', image: '/products/scm-product-38.jpg' },
        { name: 'Conveyer Roller Guide', image: '/products/scm-product-39.jpg' },
        { name: 'Customized Liner Bolt', image: '/products/scm-product-40.jpg' },
        { name: 'Hammer Crusher', image: '/products/scm-product-41.jpg' },
        { name: 'Wear Plates', image: '/products/scm-product-42.jpg' },
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <FadeInSection>
                <section className="relative px-6 md:px-16 py-32 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Delivering quality industrial products and solutions across global markets
                        </p>
                    </div>
                </section>
            </FadeInSection>

            {/* Industries Section */}
            <FadeInSection delay={0.2}>
                <section className="px-6 md:px-16 py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: 'Cement Industry',
                                    icon: '🏭',
                                    desc: 'Essential machinery parts and materials for cement manufacturing'
                                },
                                {
                                    name: 'Chemical Industry',
                                    icon: '⚗️',
                                    desc: 'Specialized components for chemical processing plants'
                                },
                                {
                                    name: 'Steel Plant Materials',
                                    icon: '⚙️',
                                    desc: 'High-grade materials for steel manufacturing facilities'
                                },
                                {
                                    name: 'Oil & Gas Spare Parts',
                                    icon: '🛢️',
                                    desc: 'Critical components for oil and gas operations'
                                },
                                {
                                    name: 'Food & Beverage Industry',
                                    icon: '🏪',
                                    desc: 'Equipment and solutions for food processing facilities'
                                },
                                {
                                    name: 'Construction Industry',
                                    icon: '🏗️',
                                    desc: 'Quality materials for construction projects'
                                },
                            ].map((industry) => (
                                <div
                                    key={industry.name}
                                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <span className="text-4xl mb-4 block">{industry.icon}</span>
                                    <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                                    <p className="text-gray-600">{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* Products Grid */}
            <FadeInSection delay={0.3}>
                <section className="px-6 md:px-16 py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Product Range</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <FadeInSection key={product.name} delay={0.1 * (index % 3)}>
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                                {product.name}
                                            </h3>
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                                            >
                                                Learn More
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>
        </main>
    )
}

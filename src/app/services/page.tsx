import FadeInSection from '@/components/FadeInSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services – EsteemEx',
    description: 'EsteemEx offers end-to-end global trade services including freight forwarding, customs clearance, logistics, sourcing, consulting, and more.',
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <FadeInSection>
                <section className="relative px-6 md:px-16 py-32 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Comprehensive global trade solutions tailored to your business needs
                        </p>
                    </div>
                </section>
            </FadeInSection>

            {/* Overview Section */}
            <FadeInSection delay={0.2}>
                <section className="px-6 md:px-16 py-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            At EsteemEx, we simplify global trade with a comprehensive suite of import/export services tailored for businesses of all sizes—from small enterprises to multinational corporations.
                        </p>
                    </div>
                </section>
            </FadeInSection>

            {/* Services Grid */}
            <FadeInSection delay={0.3}>
                <section className="px-6 md:px-16 py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'International Freight Forwarding',
                                    icon: '🚢',
                                    description: 'Comprehensive freight solutions across air, sea, and land, ensuring your cargo reaches its destination efficiently and securely.',
                                    points: [
                                        'Air Freight: Fast, secure air transport for time-sensitive goods and perishables.',
                                        'Sea Freight: Cost-effective sea shipping for bulk cargo and containers.',
                                        'Land Freight: Reliable road transport for regional shipments and last-mile delivery.',
                                        'Multimodal Shipping: Combining air, sea, and land for flexible delivery options.',
                                        'Temperature-controlled shipping for sensitive materials.',
                                    ],
                                },
                                {
                                    title: 'Customs Clearance & Documentation',
                                    icon: '📋',
                                    description: 'Expert handling of all customs-related processes, ensuring smooth clearance and compliance with international trade regulations.',
                                    points: [
                                        'Customs Declaration: Accurate submission of documentation to authorities.',
                                        'Tariff & Duty Management: Classification for correct duties and taxes.',
                                        'Import/Export Licenses: Handling regulated goods and permits.',
                                        'Global Compliance: Adhering to trade laws, embargoes, and sanctions.',
                                        'Documentation review and verification services.',
                                    ],
                                },
                                {
                                    title: 'Logistics & Supply Chain Management',
                                    icon: '🔄',
                                    description: 'End-to-end supply chain solutions that optimize your logistics operations and improve efficiency.',
                                    points: [
                                        'Inventory Management: Stock optimization across global locations.',
                                        'Warehousing & Distribution: Safe, scalable storage and dispatch.',
                                        'Order Fulfillment: Timely and accurate order processing.',
                                        'Tracking & Reporting: Real-time updates and delivery analytics.',
                                        'Supply chain optimization and consulting.',
                                    ],
                                },
                                {
                                    title: 'Product Sourcing & Procurement',
                                    icon: '🔎',
                                    description: 'Strategic sourcing services to help you find the right suppliers and products at competitive prices.',
                                    points: [
                                        'Supplier Identification: Access to trusted global supplier network.',
                                        'Quality Assurance: Pre-shipment inspections and validation.',
                                        'Price Negotiation: Securing competitive terms and contracts.',
                                        'Sample Management: Handling product samples and testing.',
                                        'Supplier relationship management and monitoring.',
                                    ],
                                },
                                {
                                    title: 'Trade Consulting & Market Research',
                                    icon: '📊',
                                    description: 'Expert guidance on international trade strategies and market opportunities to help your business grow globally.',
                                    points: [
                                        'Market Entry Strategies: Regulatory, pricing, and risk planning.',
                                        'Trade Compliance Advisory: Navigating trade laws and changes.',
                                        'Risk Assessment: Identifying and mitigating trade risks.',
                                        'Market Analysis: Industry trends and competitor research.',
                                        'Growth strategy development and implementation.',
                                    ],
                                },
                                {
                                    title: 'Packaging & Labeling Services',
                                    icon: '📦',
                                    description: 'Professional packaging solutions that ensure your products are protected and compliant with international standards.',
                                    points: [
                                        'Secure Packaging: Durable, compliant materials for shipping.',
                                        'Customs Labeling: Country-specific regulatory labeling.',
                                        'Eco-Friendly Options: Sustainable packaging alternatives.',
                                        'Special handling for fragile or hazardous materials.',
                                        'Packaging design and optimization services.',
                                    ],
                                },
                                {
                                    title: 'Cargo Insurance',
                                    icon: '🛡️',
                                    description: 'Comprehensive insurance coverage to protect your shipments against all potential risks during transit.',
                                    points: [
                                        'All-risk Coverage: Protection against damage, loss, or theft.',
                                        'Tailored Policies: Based on shipment type and route.',
                                        'Claims Support: Expert guidance during claim processing.',
                                        'Risk Management: Preventive measures and best practices.',
                                        'Coverage for special cargo and high-value items.',
                                    ],
                                },
                                {
                                    title: 'Trade Finance & Payment Solutions',
                                    icon: '💳',
                                    description: 'Flexible financial solutions to facilitate international trade transactions and manage currency risks.',
                                    points: [
                                        'Letters of Credit: Secure payment assurance tools.',
                                        'Trade Credit Insurance: Protection against buyer default.',
                                        'Currency Hedging: Exchange rate risk management.',
                                        'Invoice Financing: Working capital solutions.',
                                        'Payment term optimization and consulting.',
                                    ],
                                },
                            ].map((service, index) => (
                                <FadeInSection key={service.title} delay={0.1 * (index % 4)}>
                                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-4xl">{service.icon}</span>
                                            <h2 className="text-2xl font-semibold">{service.title}</h2>
                                        </div>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <ul className="space-y-3 flex-grow">
                                            {service.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* CTA Section */}
            <FadeInSection delay={0.4}>
                <section className="px-6 md:px-16 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to discuss how we can help streamline your global trade operations.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </FadeInSection>
        </main>
    )
}

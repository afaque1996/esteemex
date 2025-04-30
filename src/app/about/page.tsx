import Head from 'next/head'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'

export default function AboutPage() {
    const missionPoints = [
        {
            icon: "🌐",
            title: "Global Connectivity",
            desc: "Connecting suppliers, manufacturers, and consumers across continents, facilitating trade and fostering business growth"
        },
        {
            icon: "✓",
            title: "Quality Assurance",
            desc: "Ensuring all products meet the highest industry standards, providing top-tier goods that clients can trust"
        },
        {
            icon: "👥",
            title: "Customer-Centric",
            desc: "Making international trade simple with personalized service and responsive communication"
        },
        {
            icon: "⚡",
            title: "Efficiency & Reliability",
            desc: "Streamlining supply chain processes and minimizing logistical challenges"
        },
        {
            icon: "🌱",
            title: "Sustainability",
            desc: "Supporting ethical trade practices and reducing environmental impact"
        },
        {
            icon: "💡",
            title: "Innovation",
            desc: "Embracing new technologies and continuously improving our processes"
        }
    ];

    const metrics = [
        { number: "34+", label: "Satisfied Clients" },
        { number: "8+", label: "Years of Experience" },
        { number: "79+", label: "Completed Projects" },
        { number: "12", label: "Countries Served" }
    ];

    const coreValues = [
        {
            title: 'Integrity',
            desc: 'We believe in doing business with honesty, transparency, and fairness. Integrity is at the core of our operations, we hold ourselves accountable to the highest ethical standards.'
        },
        {
            title: 'Customer Focus',
            desc: 'Our clients are at the heart of everything we do. We prioritize understanding their unique needs and challenges, we build strong, lasting relationships that go beyond transactional interactions.'
        },
        {
            title: 'Excellence in Service',
            desc: 'We strive for excellence in every aspect of our business. From ensuring on-time delivery of goods to maintaining the highest standards of product quality.'
        },
        {
            title: 'Innovation',
            desc: 'The global trade landscape is always changing, and we embrace innovation to stay ahead of the curve. We constantly look for ways to improve and offer creative solutions to the challenges our clients face.'
        },
        {
            title: 'Reliability',
            desc: 'In international trade, timing and accuracy are crucial. Our clients trust us to keep their supply chains running efficiently and to deliver results that meet their expectations.'
        },
        {
            title: 'Sustainability',
            desc: 'We are committed to responsible and sustainable practices in every aspect of our business. We work with suppliers who share our commitment to sustainability, helping our clients make eco-friendly choices wherever possible.'
        }
    ];

    return (
        <>
            <Head>
                <title>About Us – EsteemEx</title>
                <meta
                    name="description"
                    content="Learn about EsteemEx's mission, values, and commitment to global trade excellence."
                />
            </Head>

            <main className="min-h-screen bg-white text-gray-900">
                {/* Hero Section */}
                <FadeInSection>
                    <section className="relative px-6 md:px-16 py-32 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EsteemEx</h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                Bridging global markets through excellence in trade and logistics since 2015
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                {/* Mission Section */}
                <FadeInSection delay={0.2}>
                    <section className="px-6 md:px-16 py-20">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        At EsteemEx, our mission is to bridge global markets by providing seamless
                                        and reliable import/export services that empower businesses to thrive in an
                                        interconnected world. We are committed to delivering high-quality products and
                                        services, ensuring that our clients have access to the best goods, regardless
                                        of geographic boundaries.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {missionPoints.map((item) => (
                                            <div key={item.title} className="flex items-start">
                                                <span className="text-2xl mr-4">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                                    <p className="text-gray-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/import-icon.jpg"
                                        alt="Global Trade Operations"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Values Section */}
                <FadeInSection delay={0.3}>
                    <section className="px-6 md:px-16 py-20 bg-gray-50">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
                            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
                                Our values are the foundation of everything we do. In the dynamic and complex world of
                                international trade, we are committed to upholding the highest standards of integrity,
                                reliability, and innovation.
                            </p>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {coreValues.map((value, i) => (
                                    <div
                                        key={value.title}
                                        className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </FadeInSection>

                {/* Metrics Section */}
                <FadeInSection delay={0.4}>
                    <section className="px-6 md:px-16 py-20">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl py-16 px-8">
                                <h2 className="text-3xl font-bold text-center text-white mb-12">Our Impact in Numbers</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                    {metrics.map((metric) => (
                                        <div key={metric.label} className="text-white">
                                            <div className="text-4xl font-bold mb-2">{metric.number}</div>
                                            <div className="text-blue-100">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
            </main>
        </>
    )
}

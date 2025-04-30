import Head from 'next/head'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>EsteemEx – Global Import & Export Company</title>
        <meta name="description" content="Trusted global supplier and exporter for industrial sectors like cement, oil & gas, and construction." />
      </Head>

      <main className="pt-24 bg-white text-gray-900">
        {/* Hero Section */}
        <FadeInSection>
          <section className="relative px-6 md:px-16 py-32 text-center min-h-[90vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/home-section.jpg"
                alt="Global Trade Background"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/80 to-blue-900/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Empowering Global Trade Across Industries
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                EsteemEx delivers reliable import/export logistics to the cement, oil & gas, and manufacturing sectors globally.
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

        {/* Industries Preview */}
        <FadeInSection delay={0.2}>
          <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Industries We Serve</h2>
              <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-center text-lg">
                Delivering specialized solutions across key industrial sectors with expertise and reliability
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Cement',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    description: 'Supply of essential machinery parts and raw materials for cement manufacturing plants.',
                  },
                  {
                    name: 'Chemical',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 7h-6l-1-7z" />
                      </svg>
                    ),
                    description: 'Specialized chemical products and raw materials for industrial applications.',
                  },
                  {
                    name: 'Steel Plants',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ),
                    description: 'High-grade materials and equipment for steel manufacturing facilities.',
                  },
                  {
                    name: 'Oil & Gas',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 7V5c0-1.105.893-2 1.997-2h4.006c1.104 0 1.997.895 1.997 2v2m1 6h-6m-3 0H4m8 0h8" />
                      </svg>
                    ),
                    description: 'Critical equipment and spare parts for oil refineries and gas processing plants.',
                  },
                  {
                    name: 'Food & Beverage',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18v18H3V3zm4 10h2v5H7v-5zm4-3h2v8h-2v-8zm4-4h2v12h-2V6z" />
                      </svg>
                    ),
                    description: 'Processing equipment and packaging solutions for food production facilities.',
                  },
                  {
                    name: 'Construction',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    description: 'High-quality construction materials and equipment for infrastructure projects.',
                  },
                ].map((industry) => (
                  <div
                    key={industry.name}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-blue-600 mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <a
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-colors duration-300 text-sm font-medium"
                >
                  Explore Our Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Clients Preview */}
        <FadeInSection delay={0.4}>
          <section className="bg-gray-50 py-16 px-6 md:px-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Clients</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
              Trusted by leading companies across the industrial sector
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Al-Sana Cement', logo: '/client-logos/al-sana.jpg' },
                { name: 'Libyan Iron & Steel Co.', logo: '/client-logos/libyan-steel.png' },
                { name: 'Malbaza Cement', logo: '/client-logos/malbaza.jpg' },
                { name: 'Saptkoshi Cement', logo: '/client-logos/saptkoshi.jpg' },
                { name: 'Tabuk Cement', logo: '/client-logos/tabuk.png' },
                { name: 'YAF Trading', logo: '/client-logos/yaf-trading.jpg' },
              ].map((client) => (
                <div
                  key={client.name}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center"
                >
                  <div className="w-32 h-20 relative flex items-center justify-center mb-3">
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-gray-400 text-center font-medium">
                        {client.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  )
}

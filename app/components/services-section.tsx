import { ServiceCard } from "./mini-components/service-card"

const services = [
  {
    title: "HIV Testing And Treatment",
    image: "/std-clinic-service-image-1.webp",
    gradient: "from-pink-500 via-purple-500 to-blue-500",
  },
  {
    title: "HIV PrEP Options",
    image: "/std-clinic-service-image-2.webp",
    gradient: "from-orange-500 via-red-500 to-teal-500",
  },
  {
    title: "Hepatitis C Testing and Treatment",
    image: "/std-clinic-service-image-3.webp",
    gradient: "from-fuchsia-500 via-pink-500 to-cyan-500",
  },
  {
    title: "STI Testing and Treatment",
    image: "/std-clinic-service-image-4.webp",
    gradient: "from-rose-500 via-orange-500 to-pink-500",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gray-100 px-6 py-12 md:px-12 md:py-16">
          <div className="mb-12 flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-400 px-6 py-2 text-sm font-medium text-white">
              What We Offer
            </div>
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 md:text-4xl lg:text-5xl text-balance">
              Medical Care with Integrity
            </h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} image={service.image} gradient={service.gradient} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
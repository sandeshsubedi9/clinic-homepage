import { Mail, Phone } from "lucide-react"

export default function ContactBanner() {
  return (
    <div className="z-1 hidden md:block absolute top-0 right-0 w-1/2 max-w-2xl">
      <div
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-400 text-white pl-20 py-2.5 flex items-center justify-end gap-6 text-sm pr-10 sm:pr-16 lg:pr-24"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%)",
        }}
      >
        {/* Mail */}
        <a
          href="mailto:info@healthcaresunraysgroup.com"
          className="group flex items-center gap-2 transition-all duration-200"
        >
          <Mail
            className="
              w-4 h-4
              transition-all duration-200
              group-hover:text-pink-300
              group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.75)]
            "
          />
          <span className="opacity-90 transition-opacity group-hover:opacity-100">
            info@unitycareclinic.com
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+01234567890"
          className="group flex items-center gap-2 transition-all duration-200"
        >
          <Phone
            className="
              w-4 h-4
              transition-all duration-200
              group-hover:text-green-300
              group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.75)]
            "
          />
          <span className="opacity-90 transition-opacity group-hover:opacity-100">
            061-458909
          </span>
        </a>
      </div>
    </div>
  )
}

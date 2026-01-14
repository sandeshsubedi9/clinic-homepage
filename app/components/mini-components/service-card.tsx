"use client"

import { Button } from "./button"


interface ServiceCardProps {
  title: string
  image: string
  gradient: string
}

export function ServiceCard({ title, image, gradient }: ServiceCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-1`}>
      <div className="relative h-[220px] sm:h-[340px] overflow-hidden rounded-[calc(1.5rem-4px)] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/85 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-700 ease-out" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-transform duration-700 ease-out group-hover:-translate-y-4">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-2xl font-medium text-white text-balance">{title}</h3>
          {/* <Button
            className="w-fit border-2 border-white/80 bg-transparent text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300"
          >
            Learn More
          </Button> */}

          <Button className="w-fit px-4 py-2 rounded-md border-2 border-white/80 bg-transparent text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

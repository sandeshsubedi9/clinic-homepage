"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "./mini-components/button"

const images = [
  "std-clinic-image-1.jpg",
  "std-clinic-image-3.jpg",
  "std-clinic-image-4.webp",
  "std-clinic-image-5.jpg",
  "std-clinic-image-6.jpg",
  "std-clinic-image-7.jpg",
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  const leftInView = useInView(leftRef, { once: true, amount: 0.3 })
  const rightInView = useInView(rightRef, { once: true, amount: 0.3 })

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 py-12 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-red-400 shadow-lg">
                Respect Without Judgment
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-medium leading-tight tracking-tight">
                Your Trusted Sexual Health Clinic
              </h1>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Unity Care Clinic offers confidential sexual health services in Pokhara, including{" "}
                <span className="text-blue-600">STD testing, treatment</span>, and{" "}
                <span className="text-blue-600">private medical consultations</span>. We are committed to providing
                respectful, judgment-free care in a safe and trusted clinical environment. Your privacy, health, and
                well-being are always our priority.
              </p>
            </div>

            <div>
              <Button
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:scale-105 transition-transform text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-xl"
              >
                Book an appointment
              </Button>
            </div>
          </motion.div>

          {/* Right Section - Image Carousel */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-64 sm:h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Healthcare community ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
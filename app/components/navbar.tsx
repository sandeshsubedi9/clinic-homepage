"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const services = [
    "Free Rapid HIV Testing",
    "HIV Treatment",
    "STI Testing And Treatment",
    "Hepatitis C Testing and Treatment",
    "PEP",
  ]

  return (
    <nav className="w-full bg-white relative border-b border-gray-200">

      <div className="container mx-auto py-4 px-6 sm:px-16 lg:px-24">
        <div className="flex items-center justify-between md:pt-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Unity clinic logo.png"
              alt="Unity Clinic Logo"
              width={120}
              height={30}
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <div className="flex md:hidden items-center gap-4">
            <a href="mailto:info@healthcaresunraysgroup.com" className="text-blue-600">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+01234567890" className="text-blue-600">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-blue-600 text-white p-2 rounded"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="relative text-blue-600 font-medium transition-colors group">
              <span>Home</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-0.5 bg-blue-600"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group"
            >
              <span>About</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/meet-the-team"
              className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group"
            >
              <span>Meet The Team</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group flex items-center gap-1 cursor-pointer">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-6 py-3 text-gray-700 transition-colors cursor-pointer hover:bg-purple-600 hover:text-white"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/news"
              className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group"
            >
              <span>News</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/faqs"
              className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group"
            >
              <span>FAQs</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 font-medium transition-colors hover:text-blue-600 group"
            >
              <span>Contact</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-20 right-0 w-2/3 bg-white shadow-lg z-40 
          max-h-[calc(100vh-5rem)] overflow-y-auto
          transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <Link
            href="/"
            className="bg-purple-600 text-white px-6 py-4 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-6 py-4 font-medium text-gray-700 hover:bg-purple-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className={`px-6 py-4 font-medium flex items-center justify-between ${
              isMobileServicesOpen ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-purple-100"
            }`}
          >
            <span>Services</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`bg-white overflow-hidden scroll-auto transition-all duration-300 ease-in-out ${
              isMobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-8 py-3 text-gray-700 border-b hover:bg-purple-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service}
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="px-6 py-4 font-medium text-gray-700 hover:bg-purple-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/faqs"
            className="px-6 py-4 font-medium text-gray-700 hover:bg-purple-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="px-6 py-4 font-medium text-gray-700 hover:bg-purple-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
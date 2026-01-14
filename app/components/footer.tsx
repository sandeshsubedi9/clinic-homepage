
import { Phone, Mail, Clock, MapPin, Home, Info, Briefcase, HelpCircle, FileText, MessageSquare, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <img 
            src="/Unity_clinic_logo-removebg-preview.png" 
            alt="Company Logo" 
            className="mx-auto h-20 object-contain"
          />
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-600">
              Contact
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-200 flex items-center justify-center mr-4 group-hover:bg-gray-300 transition-colors duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base">061-458909</span>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-200 flex items-center justify-center mr-4 group-hover:bg-gray-300 transition-colors duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base">info@unitycareclinic.org</span>
              </div>
              
              <div className="flex items-start group cursor-pointer">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-200 flex items-center justify-center mr-4 mt-1 group-hover:bg-gray-300 transition-colors duration-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base">
                  <p>Mon-Thurs: 9AM-12PM, 1PM-5PM</p>
                  <p>Fri: 9AM-1PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-600">
              Quick Links
            </h3>
            <div className="space-y-3 mt-6">
              <a href="#" className="flex items-center group text-sm sm:text-base">
                <Home className="w-5 h-5 min-w-[1.25rem] mr-3 group-hover:text-purple-600 transition-colors" />
                <span className="group-hover:text-purple-600 transition-colors">Our Mission</span>
              </a>
              <a href="#" className="flex items-center group text-sm sm:text-base">
                <Briefcase className="w-5 h-5 min-w-[1.25rem] mr-3 group-hover:text-purple-600 transition-colors" />
                <span className="group-hover:text-purple-600 transition-colors">Services</span>
              </a>
              <a href="#" className="flex items-center group text-sm sm:text-base">
                <HelpCircle className="w-5 h-5 min-w-[1.25rem] mr-3 group-hover:text-purple-600 transition-colors" />
                <span className="group-hover:text-purple-600 transition-colors">FAQ</span>
              </a>
              <a href="#" className="flex items-center group text-sm sm:text-base">
                <FileText className="w-5 h-5 min-w-[1.25rem] mr-3 group-hover:text-purple-600 transition-colors" />
                <span className="group-hover:text-purple-600 transition-colors">Blog</span>
              </a>
              <a href="#" className="flex items-center group text-sm sm:text-base">
                <MessageSquare className="w-5 h-5 min-w-[1.25rem] mr-3 group-hover:text-purple-600 transition-colors" />
                <span className="group-hover:text-purple-600 transition-colors">Contact Us</span>
              </a>
            </div>
          </div>

          {/* Locations Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-600">
              Locations
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-200 flex items-center justify-center mr-4 group-hover:bg-gray-300 transition-colors duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base">Pokhara 1, Bagar</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-600">
              Social Media
            </h3>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-12 h-12 min-w-[3rem] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:shadow-lg group"
              >
                <Facebook className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 min-w-[3rem] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#1DA1F2] hover:shadow-lg group"
              >
                <Twitter className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 min-w-[3rem] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000] hover:shadow-lg group"
              >
                <Youtube className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 min-w-[3rem] rounded-lg bg-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-[linear-gradient(180deg,_#405DE6_0%,_#833AB4_25%,_#C13584_50%,_#FD1D1D_75%,_#FCAF45_100%)] hover:shadow-lg overflow-hidden group"
              >
                <Instagram className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8 text-center text-xs sm:text-sm text-gray-600">
          <p className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
            <span>Designed by O360® | Optimized360 LLC © 2020 All Rights Reserved</span>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Legal Notices</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
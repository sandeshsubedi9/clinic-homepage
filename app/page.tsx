import Footer from "./components/footer";
import { HeroSection } from "./components/hero-section";
import ContactBanner from "./components/mini-components/contact-banner";
import Navbar from "./components/navbar";
import { ServicesSection } from "./components/services-section";
import StatsSection from "./components/stat-section";
import WhyChoseUseSection from "./components/why-choose-use-section";
import ClinicSection from "./components/clinic-section";

export default function Home() {
  return (
    <>
    <ContactBanner />
      {/* <Navbar /> */}
    <div className="min-h-screen bg-white px-4 sm:px-16 lg:px-24 text-gray-800">
      <HeroSection />
      <ServicesSection />
      <WhyChoseUseSection />
      <ClinicSection />
      <StatsSection />
      
    </div>
      {/* <Footer /> */}
    </>
  );
}

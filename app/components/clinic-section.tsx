"use client";

import React from 'react';
import AppointmentForm from './mini-components/appointment-form';
import DoctorCard from './mini-components/doctor-card';

const ClinicSection: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Sagar Shah",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Specialist in chlamydia and gonorrhea testing, treatment, and follow-up care."
    },
    {
      name: "Dr. Anita Baral",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Specialist in HIV prevention, PrEP guidance, and early-stage management."
    }
  ];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-6 md:p-20">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <AppointmentForm />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          {/* Aligned Heading with the Form Heading */}
          <h2 className="text-3xl font-medium text-gray-800 mb-11 text-center lg:text-left leading-tight">Meet Our Team</h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center sm:items-start">
            {doctors.map((doc, index) => (
              <DoctorCard 
                key={doc.name} 
                {...doc} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ClinicSection;
// import React from 'react';
// import TestimonialCard from './mini-components/testimonial-card';

// const TestimonialSection: React.FC = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Patient",
//       role: "POKHARA",
//       image: "https://i.pravatar.cc/150?u=pokhara", 
//       quote: "The doctors were professional and made me feel comfortable from the first visit. Everything was handled with complete privacy."
//     },
//     {
//       id: 2,
//       name: "Patient",
//       role: "KASKI",
//       image: "https://i.pravatar.cc/150?u=kaski", 
//       quote: "I was nervous at first, but the staff explained everything clearly and without judgment. Truly supportive care."
//     }
//   ];

//   return (
//     <section className="bg-white py-24 px-6">
//       <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        
//         {/* 1. PILL BUTTON */}
//         <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-400 text-white px-10 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-100">
//           Reviews
//         </div>

//         {/* 2. HEADINGS - Using your requested JSX */}
//         <div className="flex flex-col items-center mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-black font-medium text-slate-900 mb-2 tracking-tight">
//             What Patients Are Saying
//           </h2>
//         </div>

//         {/* 3. THE GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-stretch">
//           {testimonials.map((t) => (
//             <TestimonialCard 
//               key={t.id}
//               name={t.name}
//               role={t.role}
//               image={t.image}
//               quote={t.quote}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Heart, Stethoscope } from 'lucide-react';
import WhyChooseUsCard from './mini-components/why-choose-us-card';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    { icon: ShieldCheck, title: "Confidential Care", description: "Your privacy is respected at every step — from consultation to treatment." },
    { icon: Heart, title: "LGBTQ+ Inclusive Care", description: "We provide respectful, affirming sexual health services for everyone." },
    { icon: Stethoscope, title: "Honest Guidance", description: "We explain test results and treatment options clearly, without fear." }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto w-full flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Triggers almost instantly
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-400 text-white px-10 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg">
          Why Choose Us?
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Safe. Private. Professional.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            /* We use a motion.div for the entrance fade, 
               but the card inside is now "hard-coded" to animate */
            <motion.div key={index} variants={itemVariants}>
              <WhyChooseUsCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
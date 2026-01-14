"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AppointmentForm: React.FC = () => {
  const fields = ['Name', 'Email', 'Phone', 'Message'];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md font-sans pt-1" // Added slight padding-top for pixel-perfect alignment
    >
      <h2 className="text-3xl font-medium text-gray-800 mb-1 leading-tight">Make An Appointment</h2>
      <p className="text-gray-500 mb-10 text-sm">And We will Contact you</p>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {fields.map((label) => (
          <div key={label} className="relative">
            <input 
              type={label === 'Email' ? 'email' : 'text'} 
              placeholder={label}
              className="w-full border-b border-gray-200 py-2 outline-none focus:border-blue-400 transition-colors bg-transparent placeholder-gray-400 italic text-sm font-light"
            />
          </div>
        ))}
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-8 px-10 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-medium shadow-md text-sm"
        >
          Book Now
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AppointmentForm;
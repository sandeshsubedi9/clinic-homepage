"use client";

import React from "react";
import { motion } from "framer-motion";

interface DoctorCardProps {
  name: string;
  image: string;
  description: string;
  delay?: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  image,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="relative w-[260px] h-[420px] overflow-hidden shadow-2xl bg-white rounded-sm group cursor-pointer"
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0">
        {/* 🔴 RED / ORANGE TOP SHAPE — UNTOUCHED */}
        <div className="absolute -top-12 -right-12 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-pink-500 to-orange-400 opacity-90" />

        {/* 🔵 BLUE / PURPLE MAIN SHAPE (EXTENDED BASE) */}
        <div className="absolute top-24 -left-28 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-95" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-10 text-white">
        {/* PROFILE IMAGE */}
        <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden mb-4 shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* NAME */}
        <h3 className="text-[16px] font-medium mb-3 tracking-wide">
          {name}
        </h3>

        {/* DESCRIPTION */}
        <div className="flex gap-2">
          <p className="text-[15px] leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>

      {/* SUBTLE HOVER GLOW */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
};

export default DoctorCard;

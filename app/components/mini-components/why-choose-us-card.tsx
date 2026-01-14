// import React from 'react';

// interface TestimonialProps {
//   image: string;
//   name: string;
//   role: string;
//   quote: string;
// }

// const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, role, quote }) => {
//   return (
//     <div className="relative group w-full max-w-[420px] mx-auto h-[340px]">
//       {/* FLIPPED LEAF: Top-Right and Bottom-Left are sharp points */}
//       <div className="relative p-[5px] overflow-hidden rounded-[4px_80px_4px_80px] bg-slate-100 h-full shadow-lg">
        
//         {/* STATIONARY GLOW: 
//            - Shifting color pattern at 3s for a noticeable "living" feel.
//            - Fades toward the bottom to stay clean.
//         */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(270deg, #2563eb, #9333ea, #f87171, #2563eb)',
//             backgroundSize: '400% 400%',
//             animation: 'stationary-glow 3s ease-in-out infinite',
//             WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
//             maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
//           }}
//         />

//         {/* INNER CONTENT BOX */}
//         <div className="relative z-10 bg-white rounded-[2px_76px_2px_76px] p-8 flex flex-col h-full">
          
//           <div className="flex items-center gap-4 mb-4 flex-shrink-0">
//             <img 
//               src={image} 
//               alt={name} 
//               className="w-16 h-16 rounded-full object-cover border-2 border-slate-50 shadow-sm" 
//             />
//             <div>
//               <h4 className="font-bold text-slate-800 leading-tight text-lg">{name}</h4>
//               <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">{role}</p>
//             </div>
//           </div>

//           <span className="text-5xl font-serif text-blue-50/50 leading-none h-6 select-none flex-shrink-0">“</span>
          
//           <div className="overflow-y-auto pr-2 custom-scrollbar flex-grow mt-2">
//             <p className="text-slate-600 text-[16px] leading-relaxed italic">
//               {quote}
//             </p>
//           </div>
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes stationary-glow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .custom-scrollbar::-webkit-scrollbar { width: 3px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #f1f5f9; border-radius: 10px; }
//       `}} />
//     </div>
//   );
// };

// export default TestimonialCard;

"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const WhyChooseUsCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => {
  const shadowVariants: Variants = {
    rest: { opacity: 0.3, scale: 0.95, y: 5 },
    hover: { opacity: 0.8, scale: 1.05, y: 15 }
  };

  return (
    <motion.div 
      className="relative group w-full max-w-[400px] mx-auto h-[360px]"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* 4px BORDER CONTAINER */}
      <div className="relative p-[4px] overflow-hidden rounded-[4px_80px_4px_80px] bg-slate-100 h-full shadow-sm">
        
        {/* THE INVOLUNTARY LAYER - Force start with inline animation-play-state */}
        <div 
          className="absolute inset-0 z-0 forced-sync-animation"
          style={{
            background: 'linear-gradient(270deg, #2563eb, #9333ea, #f87171, #2563eb)',
            backgroundSize: '400% 400%',
            WebkitMaskImage: 'linear-gradient(135deg, black 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
            maskImage: 'linear-gradient(135deg, black 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
            animationPlayState: 'running !important', // Force the browser to run it
          }}
        />

        {/* INNER CONTENT BOX */}
        <div className="relative z-10 bg-white rounded-[2px_76px_2px_76px] p-8 flex flex-col h-full items-center text-center justify-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-600/35 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-slate-50 p-5 rounded-2xl text-blue-600 border border-slate-50 transition-colors duration-300 group-hover:bg-blue-50/50">
              <Icon size={40} strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
          <p className="text-slate-500 text-[15px] leading-relaxed">{description}</p>
        </div>
      </div>

      <motion.div 
        variants={shadowVariants}
        className="absolute inset-0 bg-blue-600/10 blur-[30px] z-[-1] rounded-[4px_80px_4px_80px]"
      />

      <style jsx global>{`
        @keyframes stationary-glow-fixed {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        .forced-sync-animation {
          animation: stationary-glow-fixed 8s linear infinite !important;
          will-change: background-position;
        }
      `}</style>
    </motion.div>
  );
};

export default WhyChooseUsCard;



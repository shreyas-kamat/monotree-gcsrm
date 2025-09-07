import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaTags, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Integrations = () => {
  const integrationLogos = [
    'Planday', 'Quinyx', 'Samesystem', 'Workfeed', 'Flexybox', 'Caspeco', 
    'Titanplan', 'Lessor', 'Skello'
  ];

  const dataTypes = [
    { icon: <FaUsers className="text-2xl" /> },
    { icon: <FaBuilding className="text-2xl" /> },
    { icon: <FaTags className="text-2xl" /> },
    { icon: <FaCalendarAlt className="text-2xl" />}
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 py-16 max-w-6xl relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Fully automatic integrations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our system seamlessly integrates with major scheduling platforms, 
            allowing you to import your entire organization with one click.
          </p>
        </motion.div>

        {/* Central Integration Hub - Flex center container */}
        <div className="flex-1 flex items-center justify-center mb-16">
          <motion.div
            className="relative w-80 h-80 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Central Circle with Logo */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl relative z-20">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              </div>
            </div>

            {/* Data Type Circles positioned around center */}
            {dataTypes.map((type, index) => {
              // Position circles at cardinal directions: top, right, bottom, left
              const positions = [
                { x: 0, y: -140, label: { x: 0, y: -170 } }, // top
                { x: 140, y: 0, label: { x: 170, y: 0 } },   // right  
                { x: 0, y: 140, label: { x: 0, y: 170 } },   // bottom
                { x: -140, y: 0, label: { x: -170, y: 0 } }  // left
              ];
              
              const pos = positions[index];
              
              return (
                <React.Fragment key={index}>
                  {/* Connecting Line */}
                  <motion.div
                    className="absolute w-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    style={{
                      height: '120px',
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'top center',
                      transform: `translate(-50%, -50%) rotate(${Math.atan2(pos.y, pos.x) * 180 / Math.PI + 90}deg)`,
                    }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  />
                  
                  {/* Data Type Circle */}
                  <motion.div
                    className="absolute w-14 h-14 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-slate-600/80 transition-all duration-300"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {type.icon}
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="absolute text-white font-medium text-sm whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${pos.label.x}px)`,
                      top: `calc(50% + ${pos.label.y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    {type.title}
                  </motion.div>
                </React.Fragment>
              );
            })}

            {/* Subtle rotation animation around the center */}
            <motion.div
              className="absolute inset-0 border border-blue-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ width: '300px', height: '300px' }}
            />
          </motion.div>
        </div>

        {/* Integration Logos at Bottom */}
        <motion.div
          className="mt-auto pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;

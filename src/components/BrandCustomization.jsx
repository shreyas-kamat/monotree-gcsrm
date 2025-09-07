import { motion } from 'framer-motion';
import { FaPalette, FaMobile, FaCalendarAlt } from 'react-icons/fa';

const BrandCustomization = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We customize your app to look and feel like your brand.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Chat Interface */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm">Mon, 24 Apr</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Thomas message */}
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23059669'/%3E%3C/svg%3E" 
                    alt="Thomas" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Thomas</div>
                    <div className="text-gray-700">Everyone ready for a great shift today?</div>
                    <div className="text-xs text-gray-500 mt-1">1h ago</div>
                  </div>
                </motion.div>

                {/* Emilia response */}
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23dc2626'/%3E%3C/svg%3E" 
                    alt="Emilia" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Emilia</div>
                    <div className="text-gray-700">Always! See you at 10:00, could be a busy day.</div>
                    <div className="text-xs text-gray-500 mt-1">1h ago</div>
                  </div>
                </motion.div>

                {/* Third response */}
                <motion.div
                  className="text-right"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-3 inline-block">
                    I'm so ready, let's do it! 🥳
                  </div>
                  <div className="text-xs text-gray-500 mt-1">1h ago</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* First Phone - Activity View */}
              <motion.div
                className="bg-black rounded-[2rem] p-2 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  {/* Navigation */}
                  <div className="flex justify-around py-4 border-b border-gray-100">
                    {[
                      { icon: '📊', label: 'Activity', active: true },
                      { icon: '💬', label: 'Chat' },
                      { icon: '📰', label: 'Walls' },
                      { icon: '📢', label: 'News' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`text-center ${item.active ? 'text-blue-600' : 'text-gray-400'}`}
                      >
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="font-semibold text-blue-900 text-sm">Team Update</div>
                      <div className="text-blue-700 text-xs">Great work today everyone!</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-semibold text-green-900 text-sm">New Schedule</div>
                      <div className="text-green-700 text-xs">Next week's shifts are ready</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Phone - Calendar View */}
              <motion.div
                className="bg-black rounded-[2rem] p-2 shadow-2xl mt-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  {/* Calendar Header */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                        <div key={index}>{day}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {[11, 12, 13, 14, 15, 16, 17].map((date, index) => (
                        <div 
                          key={index}
                          className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${
                            date === 14 ? 'bg-blue-600 text-white' : 'text-gray-900'
                          }`}
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Schedule Details */}
                  <div className="p-4">
                    <div className="bg-blue-600 text-white rounded-lg p-3 mb-3">
                      <div className="text-sm font-semibold">SHIFT</div>
                      <div className="text-xs">10:00 to 18:00</div>
                      <div className="text-xs opacity-90">Copenhagen</div>
                    </div>
                    
                    <div className="bg-purple-100 text-purple-800 rounded-lg p-3">
                      <div className="text-sm font-semibold">CAMPAIGN</div>
                      <div className="text-xs">Nationwide 20% campaign</div>
                      <div className="text-xs opacity-90">March 8-15 Oslo</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating brand elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce opacity-30"></div>
          </motion.div>
        </div>

        {/* Brand Features */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            {
              icon: <FaPalette className="text-blue-600 text-2xl" />,
              title: "Custom Branding",
              description: "Your logo, colors, and visual identity throughout the entire app experience."
            },
            {
              icon: <FaMobile className="text-green-600 text-2xl" />,
              title: "Native App Feel",
              description: "Optimized mobile experience that feels like your own branded native application."
            },
            {
              icon: <FaCalendarAlt className="text-purple-600 text-2xl" />,
              title: "Personalized Content",
              description: "Tailored interface and content that matches your company culture and workflow."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCustomization;

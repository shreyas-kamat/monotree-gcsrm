import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gray-900">Where people and culture</span>
            <br />
            <span className="text-gray-900">meet </span>
            <span className="border-2 border-gray-900 px-4 py-1 rounded-lg">daily</span>
            <span className="text-gray-900"> operations</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            All our features are designed to be user-friendly, fast, and effective.
            <br />
            Clean and functional tech in the hands of everyone.
          </motion.p>

          {/* Interactive Elements */}
          <motion.div
            className="relative max-w-6xl mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Left notification */}
            <motion.div
              className="absolute left-0 top-20 bg-green-100 border border-green-200 rounded-2xl p-4 shadow-lg max-w-xs"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Shift</div>
                  <div className="text-xs text-gray-600">9:00 @ 16:00</div>
                </div>
              </div>
            </motion.div>

            {/* Center image */}
            <div className="flex justify-center">
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-80 h-56 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for team collaboration image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                      <div className="text-gray-600 text-sm">Team Collaboration</div>
                    </div>
                  </div>
                </div>
                {/* Quiz notification overlay */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-sm font-medium">Generate Quiz</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right notifications */}
            <motion.div
              className="absolute right-0 top-10 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🍸</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">The cocktail course</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-2xl p-3 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Check delivery</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <line x1="25%" y1="50%" x2="45%" y2="40%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="75%" y1="30%" x2="55%" y2="35%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

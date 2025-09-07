import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaHeart, FaTasks, FaArrowRight } from 'react-icons/fa';

const ProductHighlights = () => {
  const features = [
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      title: "Communication & Social",
      description: "A fully functional social network fosters collaboration and fun in your workplace community.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23dc2626'/%3E%3Ctext x='20' y='26' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EW%3C/text%3E%3C/svg%3E" 
              alt="Wesley Ackman avatar" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">Wesley Ackman</div>
              <div className="text-sm text-gray-500">May 24, 2025</div>
            </div>
          </div>
          
          {/* Post image */}
          <div className="mb-3">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='160' viewBox='0 0 280 160'%3E%3Crect width='280' height='160' fill='%23fbbf24' rx='8'/%3E%3Ctext x='140' y='85' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3ETeam Photo%3C/text%3E%3C/svg%3E" 
              alt="Team photo" 
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
          
          <p className="text-gray-700 mb-3">Thanks for a great shift today everyone! 🔥</p>
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1">🤩 8</span>
            <span className="flex items-center gap-1">❤️ 12</span>
          </div>
        </div>
      )
    },
    {
      icon: <FaGraduationCap className="text-green-600 text-2xl" />,
      title: "Onboarding, Information & Training",
      description: "Efficient, media rich and intuitive development of the people in your organization.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 shadow-lg relative">
          <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
            ONBOARDING
          </div>
          
          {/* Video preview with play button */}
          <div className="mb-4 relative">
            <div className="bg-gray-200 rounded-lg aspect-video mb-2 relative overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='160' viewBox='0 0 280 160'%3E%3Crect width='280' height='160' fill='%23f3f4f6'/%3E%3Cpath d='M140 60 L140 60 L160 80 L140 100 Z' fill='%2322c55e'/%3E%3C/svg%3E" 
                alt="Kitchen course video" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitchen course</h3>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4].map((step, index) => (
              <div 
                key={step} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index < 3 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index < 3 ? '✓' : step}
              </div>
            ))}
          </div>
          
          {/* Popular handbooks section */}
          <div className="absolute top-6 right-6 bg-white rounded-lg p-3 shadow-md">
            <div className="text-sm font-semibold text-gray-900 mb-2">Popular handbooks</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Coffee receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-xs text-gray-700">Hygiene policy</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <FaHeart className="text-pink-600 text-2xl" />,
      title: "Well-being & Retention",
      description: "Give everyone a voice, measure their well-being, and retain your talent.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
          {/* Chart area */}
          <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 relative">
            <div className="text-xs text-gray-500 mb-2">Retention metrics</div>
            {/* Simplified chart representation */}
            <div className="flex items-end justify-between h-16">
              {[30, 45, 38, 52, 48, 60, 55].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-purple-400 to-purple-600 w-2 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">8.4</div>
              <div className="text-xs text-gray-600">Well-being</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <FaTasks className="text-purple-600 text-2xl" />,
      title: "Daily Operations",
      description: "Streamline daily tasks, fill out forms and run department check ups.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
          {/* Form section */}
          <div className="border-l-4 border-red-400 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="font-semibold text-gray-900 text-sm">Equipment issue</div>
            </div>
            <div className="text-xs text-gray-500">FORM SUBMITTED TODAY</div>
          </div>
          
          {/* Checklist section */}
          <div>
            <div className="font-semibold text-gray-900 mb-3 text-sm">Morning checklist</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked readOnly className="text-green-500 accent-green-500" />
                <span className="line-through text-gray-500">Check coffee machine</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked readOnly className="text-green-500 accent-green-500" />
                <span className="line-through text-gray-500">Unlock entrance</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" readOnly className="accent-gray-400" />
                <span className="text-gray-700">Setup POS system</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" readOnly className="accent-gray-400" />
                <span className="text-gray-700">Check inventory</span>
              </label>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-sm font-semibold text-green-600">2/4 completed</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Product highlights
          </h2>
          <motion.a
            href="#features"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
            whileHover={{ x: 5 }}
          >
            See all features <FaArrowRight className="text-sm" />
          </motion.a>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Feature Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Feature Mockup */}
              <motion.div
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.mockup}
                
                {/* Decorative elements */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse"></div>
                )}
                {index === 1 && (
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
                )}
                {index === 2 && (
                  <div className="absolute -top-2 -left-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                )}
                {index === 3 && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce"></div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;

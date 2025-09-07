import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaTag, FaBell, FaArrowRight } from 'react-icons/fa';

const Targeting = () => {
  const departments = ['Copenhagen', 'Madrid', 'Stockholm', 'Oslo'];
  const roles = ['HR', 'Administration', 'Bartenders', 'Waiters', 'Chefs', 'Marketing'];

  const notifications = [
    {
      time: 'Now',
      title: 'New Course',
      message: '"Social Media" has just been published',
      color: 'blue'
    },
    {
      time: 'Now',
      title: 'New Handbook',
      message: '"Guest Policies" has just been published',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            The right information to the right people
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct your content precisely where it matters using our powerful targeting system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Targeting Interface */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Todo List Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">New To-do List</h3>
                <FaTasks className="text-blue-600 text-xl" />
              </div>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Friday Cleaning</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Locations</label>
                  <div className="flex flex-wrap gap-2">
                    {['Stockholm', 'Copenhagen'].map((location, index) => (
                      <motion.span
                        key={location}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {location}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Roles</label>
                  <div className="flex flex-wrap gap-2">
                    {['Bartenders', 'Chefs'].map((role, index) => (
                      <motion.span
                        key={role}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {role}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Publish
              </motion.button>
            </div>

            {/* Handbook Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">New Handbook</h3>
                <FaUsers className="text-purple-600 text-xl" />
              </div>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Guest Policies</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Locations</label>
                  <div className="flex flex-wrap gap-2">
                    {['Copenhagen', 'Madrid'].map((location, index) => (
                      <motion.span
                        key={location}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {location}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Roles</label>
                  <div className="flex flex-wrap gap-2">
                    {['Waiters'].map((role, index) => (
                      <motion.span
                        key={role}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {role}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Publish
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Mobile Notifications */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Phone mockup */}
            <div className="bg-black rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-sm">
                  <span className="font-semibold">24° Copenhagen 12:45</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-4 h-2 border border-black rounded-sm"></div>
                  </div>
                </div>
                
                {/* Notifications */}
                <div className="p-6 space-y-4">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">Monotree</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">
                          {notification.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {notification.message}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Targeting Visualization */}
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">All Locations</h4>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {departments.map((dept, index) => (
                        <div key={dept} className="text-xs bg-white rounded-lg p-2 text-center">
                          {dept}
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3">All Roles</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {roles.map((role, index) => (
                        <div key={role} className="text-xs bg-white rounded-lg p-2 text-center">
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Targeting;

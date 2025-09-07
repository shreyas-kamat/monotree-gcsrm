import { motion } from 'framer-motion';
import { FaRobot, FaShieldAlt, FaBrain, FaArrowRight } from 'react-icons/fa';

const AIChatBot = () => {
  const features = [
    {
      icon: <FaArrowRight className="text-blue-600" />,
      title: "Instant value",
      description: "No extra setup or training needed. It works immediately with the content you've already uploaded."
    },
    {
      icon: <FaShieldAlt className="text-green-600" />,
      title: "Smart and secure",
      description: "Delivers tailored responses based on each user's departments and groups - with strict content access controls."
    },
    {
      icon: <FaBrain className="text-purple-600" />,
      title: "Deep content understanding",
      description: "Reads all handbook and course content including PDFs, Word documents, Excel files - and even understands uploaded videos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            New feature
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            Our AI Chat Bot is here
            <span className="text-5xl">✨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You now have your own AI Chat Bot that answers employee questions in a fun, 
            intuitive way - saving valuable time for HR and operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Chat Bot Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Monotree Bot</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {/* User message */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                    How do I clean the coffee machine?
                  </div>
                </motion.div>

                {/* Bot response */}
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <div className="text-xs text-gray-500 mt-1">Monotree Bot</div>
                </motion.div>
                
                <motion.div
                  className="bg-gray-50 rounded-2xl px-4 py-3 max-w-sm ml-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="text-gray-900 mb-3">
                    Great question! It's an easy 3 step process:
                  </div>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-3">
                    <li>Empty the filter</li>
                    <li>Remove old water</li>
                    <li>Press the power button</li>
                  </ul>
                  <div className="text-gray-600 text-sm mb-3">
                    You can read the whole manual here:
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-sm">📄</span>
                    </div>
                    <div className="text-gray-700 text-sm font-medium">Coffee manual.pdf</div>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input */}
              <motion.div
                className="bg-gray-50 rounded-full px-4 py-3 flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <input
                  type="text"
                  placeholder="Ask our AI ✨"
                  className="flex-1 outline-none text-gray-700 bg-transparent placeholder-gray-500"
                  readOnly
                />
                <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <FaArrowRight className="text-white text-xs" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIChatBot;

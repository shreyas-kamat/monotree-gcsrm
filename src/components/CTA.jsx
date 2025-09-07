import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/5 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get your app in a few days.
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Let's get in touch!
            </span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We love demonstrating our platform. Please don't hesitate to contact us if you're interested.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a demo
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transform transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="mailto:contact@monotree.com"
              className="flex items-center justify-center gap-3 p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              <div className="text-left">
                <div className="font-semibold">Email us</div>
                <div className="text-blue-100">contact@monotree.com</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+4531110003"
              className="flex items-center justify-center gap-3 p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <FaPhone className="text-2xl group-hover:scale-110 transition-transform duration-200" />
              <div className="text-left">
                <div className="font-semibold">Call us</div>
                <div className="text-blue-100">+45 3111 0003</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Security Badge */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-2 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">ISAE 3000 certified by BDO Denmark</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
    </section>
  );
};

export default CTA;

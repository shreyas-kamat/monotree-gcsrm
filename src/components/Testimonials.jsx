import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight, FaPlay } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Monotree helped create a community across our restaurants. It's great to collaborate with Monotree; it's dynamic, and we brainstorm about features, possibilities, and the industry as a whole. I really like the mix of operational features with communication - that it becomes a social network.",
      author: "Mia Birk",
      role: "Restaurantchef, Madklubben",
      country: "Denmark",
      industry: "Food",
      employees: "1500+",
      departments: "46",
      videoThumbnail: "/api/placeholder/600/400",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Madklubben_logo.svg/200px-Madklubben_logo.svg.png"
    },
    {
      quote: "We launched our app in the autumn of 2021 and I honestly cannot understand how we could run our business beforehand. With the app, communication has not only become easier, but it has also been strengthened both within individual hotels and across the company.",
      author: "Karina Harbo Jensen",
      role: "CMO, Familien Bühlmann",
      country: "Denmark",
      industry: "Hospitality",
      employees: "800+",
      departments: "25",
      videoThumbnail: "/api/placeholder/600/400",
      companyLogo: "https://via.placeholder.com/120x40/6366f1/ffffff?text=Bühlmann"
    },
    {
      quote: "Switching to Monotree has been exclusively positive! The implementation process has been smooth, and the support from the entire team has exceeded expectations.",
      author: "Kristine Warp",
      role: "Head of HR, Dyreparken",
      country: "Norway",
      industry: "Entertainment",
      employees: "500+",
      departments: "18",
      videoThumbnail: "/api/placeholder/600/400",
      companyLogo: "https://via.placeholder.com/120x40/059669/ffffff?text=Dyreparken"
    },
    {
      quote: "Monotree has been a great tool for internal communication and it works flawlessly on mobile. We are also excited to have a platform where we can gather all handbooks and instructions in one place - where the information is easily accessible for everyone on their phone.",
      author: "Isak Fagerholm",
      role: "COO, Friends & Brgrs",
      country: "Sweden",
      industry: "Food & Beverage",
      employees: "300+",
      departments: "12",
      videoThumbnail: "/api/placeholder/600/400",
      companyLogo: "https://via.placeholder.com/120x40/dc2626/ffffff?text=Friends"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What do our
          </h2>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 relative">
            customers{' '}
            <span className="relative inline-block">
              say?
              <svg 
                className="absolute -bottom-2 left-0 w-full h-8" 
                viewBox="0 0 200 20" 
                fill="none"
              >
                <path 
                  d="M10 15 Q100 5 190 15" 
                  stroke="#000" 
                  strokeWidth="3" 
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <motion.a
            href="#cases"
            className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 text-lg"
            whileHover={{ x: 5 }}
          >
            Read all our cases <FaArrowRight className="text-sm" />
          </motion.a>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={testimonials[0].videoThumbnail} 
                alt="Video thumbnail"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Play Button */}
              <motion.button
                className="absolute inset-0 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:bg-gray-100 transition-colors duration-200">
                  <FaPlay className="text-2xl text-gray-800 ml-1" />
                </div>
              </motion.button>

              {/* Company Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black bg-opacity-60 rounded-2xl p-4 text-white">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-xs text-gray-300 mb-1">Country</div>
                      <div className="text-sm font-semibold">{testimonials[0].country}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-300 mb-1">Industry</div>
                      <div className="text-sm font-semibold">{testimonials[0].industry}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-300 mb-1">Employees</div>
                      <div className="text-sm font-semibold">{testimonials[0].employees}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-300 mb-1">Departments</div>
                      <div className="text-sm font-semibold">{testimonials[0].departments}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Quote */}
            <div className="relative">
              <FaQuoteLeft className="text-4xl text-gray-300 mb-4" />
              <blockquote className="text-2xl lg:text-3xl text-gray-900 leading-relaxed font-light">
                {testimonials[0].quote}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[0].author}
                </div>
                <div className="text-lg text-gray-600">
                  {testimonials[0].role}
                </div>
              </div>
              
              {/* Company Logo */}
              <div className="flex-shrink-0">
                {/* <img 
                  src={testimonials[0].companyLogo} 
                  alt="Company logo"
                  className="h-12 w-auto opacity-80"
                /> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index + 1}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <FaQuoteLeft className="text-2xl text-gray-300" />
              </div>

              {/* Testimonial Content */}
              <div className="space-y-4">
                <blockquote className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                  
                  {/* Company Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs">
                      <span className="text-gray-500">Industry:</span>
                      <div className="font-medium">{testimonial.industry}</div>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">Employees:</span>
                      <div className="font-medium">{testimonial.employees}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="absolute bottom-4 right-4">
                {/* <img 
                  src={testimonial.companyLogo} 
                  alt="Company logo"
                  className="h-6 w-auto opacity-60"
                /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-10"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;

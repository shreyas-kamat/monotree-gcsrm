import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import AIChatBot from './components/AIChatBot'
import ProductHighlights from './components/ProductHighlights'
import Testimonials from './components/Testimonials'
import Targeting from './components/Targeting'
import Integrations from './components/Integrations'
import BrandCustomization from './components/BrandCustomization'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CommunicationSocial from './components/CommunicationSocial'

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CommunicationSocial />
        <AIChatBot />
        <ProductHighlights />
        <Testimonials />
        {/* <Targeting /> */}
        <Integrations />
        {/* <BrandCustomization /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 border border-gray-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  )
}

export default App

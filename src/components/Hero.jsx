import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'

const Hero = () => {
  const stats = [
    { icon: FaChartLine, value: '500+', label: 'Projects Completed' },
    { icon: FaUsers, value: '200+', label: 'Happy Clients' },
    { icon: FaLightbulb, value: '15+', label: 'Years Experience' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-black/50"></div>

      <div className="container-custom relative z-10 section-padding">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 text-sm font-medium text-gray-300"
            >
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Trusted by Industry Leaders
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white">
                Strategic Consulting
                <span className="block mt-3 text-gray-400 text-5xl md:text-6xl lg:text-7xl">
                  for Modern Business
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light">
                Transform your business with data-driven strategies and innovative solutions that deliver measurable, sustainable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a 
                href="#contact" 
                className="btn-primary inline-flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="card p-6 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-800/50 group-hover:bg-gray-800 transition-colors">
                      <stat.icon className="text-gray-400 text-xl" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-1.5 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

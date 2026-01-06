import React from 'react'
import { motion } from 'framer-motion'
import {
  FaChartBar,
  FaCog,
  FaRocket,
  FaShieldAlt,
  FaNetworkWired,
  FaBrain,
  FaArrowRight,
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaChartBar,
      title: 'Strategic Planning',
      description:
        'Develop comprehensive business strategies aligned with your vision and market opportunities.',
    },
    {
      icon: FaRocket,
      title: 'Growth Consulting',
      description:
        'Accelerate your business growth with proven methodologies and innovative approaches.',
    },
    {
      icon: FaCog,
      title: 'Operations Optimization',
      description:
        'Streamline processes and improve efficiency across all areas of your organization.',
    },
    {
      icon: FaBrain,
      title: 'Digital Transformation',
      description:
        'Leverage cutting-edge technology to transform your business and stay ahead of competition.',
    },
    {
      icon: FaNetworkWired,
      title: 'Organizational Development',
      description:
        'Build high-performing teams and create a culture of excellence and innovation.',
    },
    {
      icon: FaShieldAlt,
      title: 'Risk Management',
      description:
        'Identify and mitigate risks while maximizing opportunities for sustainable growth.',
    },
  ]

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-sm font-medium text-gray-400 mb-6">
            Services
          </div>
          <h2 className="section-title mb-6">
            Comprehensive Solutions
          </h2>
          <p className="section-subtitle mx-auto">
            Tailored consulting services designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="card p-8 h-full flex flex-col cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 bg-gray-800/30 rounded-xl border border-gray-800/50 group-hover:bg-gray-800/50 group-hover:border-gray-700/50 transition-all duration-200">
                    <service.icon className="text-gray-300 text-2xl" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-gray-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-[15px]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-white text-sm font-medium group/link mt-auto"
                >
                  Learn more
                  <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

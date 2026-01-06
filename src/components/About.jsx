import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaAward,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and verticals',
    },
    {
      icon: FaHandshake,
      title: 'Client-Focused',
      description: 'Your success is our priority, every step of the way',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge strategies tailored to your unique challenges',
    },
    {
      icon: FaCheckCircle,
      title: 'Proven Results',
      description: 'Track record of delivering measurable business outcomes',
    },
  ]

  const values = [
    'Data-driven decision making',
    'Transparency and integrity',
    'Long-term partnership approach',
    'Continuous innovation',
    'Excellence in execution',
    'Sustainable growth strategies',
  ]

  return (
    <section id="about" className="section-padding bg-gray-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-sm font-medium text-gray-400">
                About Helvaris
              </div>
              <h2 className="section-title">
                Your Trusted Strategic Partner
              </h2>
            </div>
            
            <div className="space-y-5 text-lg text-gray-400 leading-relaxed">
              <p className="text-[17px]">
                With over <span className="text-white font-medium">15 years of experience</span>, we've helped hundreds of
                companies transform their businesses and achieve remarkable growth.
                Our team of expert consultants brings a unique blend of industry
                knowledge, analytical rigor, and creative problem-solving.
              </p>
              <p className="text-[17px]">
                We don't just provide advice – we <span className="text-white font-medium">partner with you</span> to implement
                solutions that drive real, measurable results. From startups to
                Fortune 500 companies, we've successfully delivered strategies that
                have transformed organizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-md bg-gray-800 border border-gray-800 flex items-center justify-center">
                    <FaCheckCircle className="text-gray-500 text-xs" />
                  </div>
                  <span className="text-gray-300 text-[15px]">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card p-6 cursor-pointer group"
                >
                  <div className="p-3 bg-gray-800/30 rounded-xl border border-gray-800/50 w-fit mb-5 group-hover:bg-gray-800/50 transition-colors">
                    <feature.icon className="text-gray-300 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2.5 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

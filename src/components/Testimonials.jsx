import React from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp Inc.',
      image: '👩‍💼',
      content:
        'Helvaris transformed our business strategy and helped us achieve 300% growth in just two years. Their expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupHub',
      image: '👨‍💻',
      content:
        'Working with Helvaris was a game-changer. They provided strategic insights that we couldn\'t have found anywhere else.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'COO, Global Manufacturing',
      image: '👩‍💼',
      content:
        'The team at Helvaris doesn\'t just consult – they become part of your team. Highly recommended for any business looking to scale.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'VP Strategy, FinancePlus',
      image: '👨‍💼',
      content:
        'Their data-driven approach helped us make decisions with confidence. The ROI from their consulting has been exceptional.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding relative bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-sm font-medium text-gray-400 mb-6">
            Testimonials
          </div>
          <h2 className="section-title mb-6">
            What Our Clients Say
          </h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it – hear from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="card p-8 h-full cursor-pointer">
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gray-600 text-sm" />
                  ))}
                </div>
                <div className="text-4xl text-gray-900 mb-6">
                  <FaQuoteLeft />
                </div>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed font-light">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50">
                  <div className="text-4xl bg-gray-900 border border-gray-800/50 rounded-2xl p-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-0.5 text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

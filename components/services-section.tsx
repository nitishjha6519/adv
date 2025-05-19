"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Legal Consultation",
    description: "Initial assessment of your legal situation with expert advice on the best course of action.",
    features: [
      "One-on-one meeting with specialized attorney",
      "Comprehensive case evaluation",
      "Strategic legal advice",
      "Clear explanation of legal options",
    ],
  },
  {
    title: "Court Representation",
    description: "Professional representation in all courts across Delhi NCR and Supreme Court of India.",
    features: [
      "Case preparation and documentation",
      "Court appearances and arguments",
      "Evidence collection and presentation",
      "Regular case status updates",
    ],
  },
  {
    title: "Legal Documentation",
    description: "Drafting, reviewing, and filing of all types of legal documents with meticulous attention to detail.",
    features: [
      "Contracts and agreements",
      "Wills and trusts",
      "Affidavits and declarations",
      "Legal notices and responses",
    ],
  },
  {
    title: "Corporate Legal Services",
    description: "Comprehensive legal support for businesses from startups to established corporations.",
    features: [
      "Company formation and compliance",
      "Contract drafting and negotiation",
      "Intellectual property protection",
      "Mergers and acquisitions advisory",
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="border-b-4 border-[#c25b5b] pb-2">Our Services</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-[#c25b5b]/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-300"></div>

              <h3 className="text-xl font-bold mb-3 text-[#c25b5b] relative z-10">{service.title}</h3>
              <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>

              <motion.ul className="space-y-3 relative z-10" variants={container} initial="hidden" animate="show">
                {service.features.map((feature, idx) => (
                  <motion.li key={idx} className="flex items-start" variants={featureItem}>
                    <div className="bg-[#c25b5b]/10 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover:bg-[#c25b5b]/20 transition-colors duration-300">
                      <Check className="h-4 w-4 text-[#c25b5b]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-6 pt-4 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/services"
                  className="text-[#c25b5b] font-medium hover:text-[#a04545] transition-colors inline-flex items-center"
                >
                  View details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

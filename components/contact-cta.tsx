"use client";

import { Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-400 to-[#c25b5b]/80 text-white relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 z-0"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Need Legal Assistance?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Our team of experienced attorneys is ready to help you navigate
                your legal challenges. Contact us today for a consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <motion.a
                  href="tel:+91 9582488924"
                  className="flex items-center gap-3 text-xl font-bold hover:text-white/90 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  +91 9582488924
                </motion.a>

                <span className="hidden sm:block text-white/50">or</span>

                <motion.a
                  href="/contact"
                  className="flex items-center gap-2 bg-white text-[#c25b5b] px-5 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  Schedule a Consultation
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                Quick Response Guarantee
              </h3>
              <p className="mb-4 text-white/90">
                We respond to all inquiries within 24 hours. Your legal matters
                deserve prompt attention.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center text-white font-medium group"
                whileHover={{ x: 5 }}
              >
                Contact us now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

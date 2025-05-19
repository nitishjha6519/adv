"use client";

import {
  Scale,
  Briefcase,
  Users,
  Building,
  FileText,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    icon: <Scale className="h-12 w-12 text-[#c25b5b]" />,
    title: "Family Law",
    description:
      "Divorce, child custody, maintenance, domestic violence, and matrimonial disputes handled with sensitivity and expertise.",
  },
  {
    icon: <Shield className="h-12 w-12 text-[#c25b5b]" />,
    title: "Criminal Law",
    description:
      "Robust defense strategies for all criminal matters including bail applications, trials, and appeals.",
  },
  {
    icon: <Building className="h-12 w-12 text-[#c25b5b]" />,
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses including contracts, compliance, and dispute resolution.",
  },
  {
    icon: <FileText className="h-12 w-12 text-[#c25b5b]" />,
    title: "Civil Litigation",
    description:
      "Expert representation in property disputes, recovery suits, injunctions, and other civil matters.",
  },
  {
    icon: <Users className="h-12 w-12 text-[#c25b5b]" />,
    title: "Labor & Employment",
    description:
      "Guidance on employment contracts, workplace disputes, and compliance with labor laws.",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-[#c25b5b]" />,
    title: "Intellectual Property",
    description:
      "Protection and enforcement of trademarks, copyrights, patents, and trade secrets.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
};

export default function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="border-b-4 border-[#c25b5b] pb-2">
            Our Expertise
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c25b5b] group relative overflow-hidden"
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#c25b5b]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>

              <motion.div
                className="mb-6 relative z-10"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {area.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#c25b5b] transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 relative z-10">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

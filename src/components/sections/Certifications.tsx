"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { Card } from "../ui/card";
import { FaAward } from "react-icons/fa6";

const certificationsData = [
  "AWS Cloud Practitioner Essentials — Amazon Web Services",
  "Google Digital Garage: Fundamentals of Digital Marketing",
  "Infosys Springboard: Introduction to Artificial Intelligence",
  "Shortlisted among top teams in Hackathon 2.0, Vasavi College of Engineering",
  "Organized coding and tech workshops under the Computer Science Club",
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="certifications"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className={`${nasalization.className} text-3xl md:text-4xl lg:text-5xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Certifications & Achievements
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 bg-card/40 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 flex flex-col gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaAward className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  {cert}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
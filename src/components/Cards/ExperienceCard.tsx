"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "../ui/card";

interface ExperienceCardProps {
  role: string;
  year: string;
  description: string[];
  company: string;
  technologies: string[];
  index: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="relative pl-12"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 transform -translate-x-1/2">
        <div className="w-10 h-10 rounded-full bg-card/60 border-2 border-primary/30 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
      </div>

      <Card
        className="p-6 bg-card/40 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-primary">{role}</h3>
          <span className="text-xs text-muted-foreground font-mono bg-primary/10 px-2 py-1 rounded">
            {year}
          </span>
        </div>
        <p className="text-md font-semibold text-foreground/90 mb-3">{company}</p>
        <div className="text-sm text-muted-foreground space-y-2">
          {description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
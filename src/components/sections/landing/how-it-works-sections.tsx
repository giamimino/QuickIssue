import { CardDescription, CardTitle } from "@/components/ui/card";
import { steps } from "@/constants/sections";
import { motion } from "motion/react";
import React from "react";

const HowItWorksSections = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 relative">
      {steps.map((item, i) => (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, delay: (i / 10) * 1.5 }}
          key={item.title}
          className="flex flex-col gap-2.5 items-center"
        >
          <div className="w-20 h-20 relative border rounded-xl border-card-foreground/10 flex items-center justify-center z-1 bg-background">
            <item.icon style={{ color: item.color }} />
            <span className="absolute -top-2.5 -right-2.5 text-xs w-6 h-6 text-white flex justify-center items-center rounded-full bg-linear-to-br from-indigo-500 to-violet-400">
              {i + 1}
            </span>
          </div>
          <CardTitle className="text-center font-medium text-xl">
            {item.title}
          </CardTitle>
          <CardDescription className="text-center">
            {item.description}
          </CardDescription>
        </motion.div>
      ))}
      <span className="absolute hidden lg:flex w-full h-px bg-linear-90 from-background from-3% via-foreground/20 to-97% to-background top-10 -z-1"></span>
    </div>
  );
};

export default HowItWorksSections;

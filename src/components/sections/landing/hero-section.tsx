import { motion } from "motion/react";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="px-18 py-24 flex flex-col items-start">
        <div className="flex flex-col gap-6">
          <p className="text-7xl text-muted-foreground flex flex-col font-bold">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              Create Better
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className="text-8xl bg-[linear-gradient(135deg,#A78BFA_0%,#818CF8_40%,#60A5FA_100%)] bg-clip-text text-transparent"
            >
              GitHub Issues
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            >
              in Seconds
            </motion.span>
          </p>

          <p className="w-full max-w-150 font-medium text-xl text-muted-foreground">
            Build a library of reusable issue templates, generate
            well-structured GitHub issues in one click, and share templates with
            the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

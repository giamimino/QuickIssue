import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const CTABanner = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-[#30363D] overflow-hidden text-center px-8 py-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(22,27,34,0.95) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(99, 102, 241, 0.3), transparent)",
            }}
          />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#E6EDF3] mb-4 tracking-tight">
              Start writing better issues today
            </h2>
            <p className="text-[#8B949E] text-lg mb-10 max-w-xl mx-auto">
              Join us to save hours of time with QuickIssue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white hover:opacity-90 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                Get started for free <ArrowRight className="w-4 h-4" />
              </div>
              <a className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-[#E6EDF3] border border-[#30363D] hover:border-[#6366f1]/40 transition-colors">
                Explore templates
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;

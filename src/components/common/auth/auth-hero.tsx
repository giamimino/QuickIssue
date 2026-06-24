import { CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const benefits = [
  "Free forever — no credit card required",
  "5 private templates + unlimited public",
  "GitHub OAuth integration included",
  "Access to the full template marketplace",
  "50 issue generations per month",
];

const AuthHero = () => {
  return (
    <div
      className="w-full relative hidden flex-col gap-6 lg:flex border-r border-muted-foreground/25 min-h-screen pt-32 p-18"
      style={{
        background: "linear-gradient(135deg, #0D1117 0%, #161B22 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)",
        }}
      />

      <h1 className="font-semibold text-3xl flex flex-col">
        <span>Built for developers</span>
        <span className="bg-linear-to-br from-lavender via-periwinkle to-sky-500 bg-clip-text text-transparent">
          who care about better issues
        </span>
      </h1>
      <CardDescription>
        Your free account includes everything you need to get started.{" "}
      </CardDescription>

      <div>
        <ul className="space-y-3">
          {benefits.map((item, i) => (
            <motion.li
              key={item}
              className="flex gap-3"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(63, 185, 80, 0.15)",
                  border: "1px solid rgba(63, 185, 80, 0.3)",
                }}
              >
                <Check className="w-3 h-3 text-[#3FB950]" />
              </div>
              <span className="text-muted-foreground text-sm">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthHero;

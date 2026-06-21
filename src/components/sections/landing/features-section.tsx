import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/constants/sections";
import { motion } from "motion/react";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="mt-10">
      <div className="grid gap-8 grid-cols-3 items-stretch max-md:gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {features.map((feature, i) => {
          const Icon = feature.icon as React.ComponentType<any>;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                opacity: { duration: 0.3, delay: i / 10 + 0.15 },
                y: {
                  duration: 0.3,
                  delay: features.length / 10 + (i % 3) / 10,
                },
              }}
              whileHover={{
                y: -6,
                borderColor: feature.border,
                boxShadow: `-10px 10px 20px ${feature.border}`,
              }}
              className="border h-full rounded-[min(var(--radius-4xl),24px)]"
            >
              <Card className="h-full">
                <CardContent>
                  <div
                    className={`w-10 h-10 flex items-center justify-center mb-5 rounded-xl`}
                    style={{
                      background: feature.bg,
                      border: `1px solid ${feature.border}`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;

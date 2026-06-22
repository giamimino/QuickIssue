import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { benefits } from "@/constants/sections";
import { motion } from "motion/react";
import React from "react";

const BenefitsSection = () => {
  return (
    <div className="flex gap-6 mt-10">
      {benefits.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: i / 10 }}
        >
          <Card className="bg-[#161B22] border border-accent hover:border-accent-foreground/20 transition-all duration-300">
            <CardHeader>
              <div
                className="w-10 h-10 rounded-xl flex justify-center items-center"
                style={{ backgroundColor: `${item.color}14` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3.5">
              <div>
                <h1
                  className="text-3xl font-semibold"
                  style={{ color: item.color }}
                >
                  {item.metric}
                </h1>
                <CardDescription className="text-base text-muted-foreground">
                  {item.metricLabel}
                </CardDescription>
              </div>
              <div className="flex flex-col gap-1.5">
                <CardTitle className="text-[18px]">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsSection;

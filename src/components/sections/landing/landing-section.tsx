import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import React from "react";

const LandingSection = ({
  children,
  title,
  description,
  tag,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  tag: string;
}) => {
  return (
    <section
      className="flex flex-col gap-3"
      id={tag.toLowerCase().replace(/\s+/g, "-")}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-2.5 items-center"
      >
        <Button variant={"outline"} className={"text-muted-foreground"}>
          {tag}
        </Button>
        <CardTitle className="text-4xl text-center">{title}</CardTitle>
        {description && (
          <CardDescription className="text-[18px] w-full max-w-200 text-center">
            {description}
          </CardDescription>
        )}
      </motion.div>
      <div>{children}</div>
    </section>
  );
};

export default LandingSection;

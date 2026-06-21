import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

const LandingSection = ({
  children,
  title,
  description,
  tag,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}) => {
  return (
    <section
      className="flex flex-col gap-3"
      id={tag.toLowerCase().replace(/\s+/g, "-")}
    >
      <div className="flex flex-col gap-2.5 items-center">
        <Button variant={"outline"} className={"text-muted-foreground"}>
          {tag}
        </Button>
        <CardTitle className="text-4xl text-center">{title}</CardTitle>
        <CardDescription className="text-[18px] w-full max-w-200 text-center">
          {description}
        </CardDescription>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default LandingSection;

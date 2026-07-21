import React from "react";
import { Alert, AlertDescription, AlertTitle, alertVariants } from "../alert";
import { CheckCircle2Icon } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

const AlertContainer = ({
  title,
  description,
  className,
  ...props
}: {
  title: string;
  description: string;
} & React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants>) => {
  return (
    <Alert className={clsx("max-w-md")} {...props}>
      <CheckCircle2Icon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertContainer;

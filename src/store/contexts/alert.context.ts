"use client";
import { createContext, useContext } from "react";

export const AlertContext = createContext<AlertContextType | null>(null);

export const useAlertContext = () => {
  const ctx = useContext(AlertContext);

  if (!ctx)
    throw new Error(
      `useAlertContext should be wrapped in AlertContext provider`,
    );

  return ctx;
};

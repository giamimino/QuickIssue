"use client";
import { AlertContext } from "@/store/contexts/alert.context";
import React, { useEffect, useState } from "react";
import AlertContainer from "../ui/alerts/alert-container";
import { AnimatePresence, motion } from "motion/react";

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<AlertContextType["alerts"] | null>(null);

  const values = {
    setAlert,
    alerts: alert,
  } as AlertContextType;

  useEffect(() => {
    if (!alert) return;

    const duration = 2000;
    const timer = setTimeout(() => {
      setAlert(null);
    }, duration);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AlertContext.Provider value={values}>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <AlertContainer
                title={alert.title}
                description={alert.description}
                variant={alert.variant ? alert.variant : "default"}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

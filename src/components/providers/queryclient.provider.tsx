"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const QueryclientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default QueryclientProvider;

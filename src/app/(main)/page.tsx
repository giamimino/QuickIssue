"use client";
import FeaturesSection from "@/components/sections/landing/features-section";
import HeroSection from "@/components/sections/landing/hero-section";
import LandingSection from "@/components/sections/landing/landing-section";
import React from "react";

const LandingPage = () => {
  return (
    <div className="px-8 max-md:px-6">
      <HeroSection />
      <LandingSection
        tag="Features"
        title="Everything you need to issue better"
        description="From individual developers to large engineering teams — QuickIssue makes issue management faster, more consistent, and collaborative."
      >
        <FeaturesSection />
      </LandingSection>
    </div>
  );
};

export default LandingPage;

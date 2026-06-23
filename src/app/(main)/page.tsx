"use client";
import BenefitsSection from "@/components/sections/landing/benefits-section";
import CTABanner from "@/components/sections/landing/CTA-banner";
import FeaturesSection from "@/components/sections/landing/features-section";
import HeroSection from "@/components/sections/landing/hero-section";
import HowItWorksSections from "@/components/sections/landing/how-it-works-sections";
import LandingSection from "@/components/sections/landing/landing-section";
import React from "react";

const LandingPage = () => {
  return (
    <div className="px-8 max-md:px-6 flex flex-col gap-56 max-lg:gap-46 max-md:gap-28">
      <HeroSection />
      <LandingSection
        tag="Features"
        title="Everything you need to issue better"
        description="From individual developers to large engineering teams — QuickIssue makes issue management faster, more consistent, and collaborative."
      >
        <FeaturesSection />
      </LandingSection>
      <LandingSection
        tag="How it works"
        title="From zero to better issues in minutes"
        description="Four simple steps to transform how your team reports bugs and requests features."
      >
        <HowItWorksSections />
      </LandingSection>
      <LandingSection
        tag="Benefits"
        title="Why engineering teams choose QuickIssue"
      >
        <BenefitsSection />
      </LandingSection>
      <CTABanner />
      <div className="h-screen"></div>
    </div>
  );
};

export default LandingPage;

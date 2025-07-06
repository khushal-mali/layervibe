import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import BillingToggle from "./BillingToggle";

const PricingSection = () => {
  return (
    <div className="container mx-auto max-w-[1250px] py-11 max-xl:px-6">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-center text-2xl leading-[120%] font-semibold tracking-[-1%] text-[#1A1C1E]">
            Our prices
          </h3>
          <p className="font-inter text-center leading-[150%] text-[#292C2E]">
            We have the ideal plan for your needs, whether by subscription or
            one-time purchases.
          </p>
        </div>

        {/* Tabs (Subscriptions/Tokens_packs) */}
        <AnimatedTabs />

        {/* Billing Toggle (Monthly/Yearly) */}
        <BillingToggle />
      </div>
    </div>
  );
};

export default PricingSection;

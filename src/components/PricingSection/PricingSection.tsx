"use client";
import { useState } from "react";
import AnimatedTabs from "./AnimatedTabs";
import BillingToggle from "./BillingToggle";
import PricingCards from "./PricingCards";
import TokensPricing from "./TokensPricing";

const tabs = [
  { id: "subscriptions", label: "Subscriptions" },
  { id: "tokens_packs", label: "Tokens packs" },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="container mx-auto max-w-[1250px] pt-11 pb-2 max-xl:px-6">
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
        <AnimatedTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Billing Toggle (Monthly/Yearly) */}
        {activeTab === "subscriptions" && (
          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        )}

        {/* <PricingCards1 /> */}

        <PricingCards activeTab={activeTab} isYearly={isYearly} />

        {/* Token Pricing */}
        <TokensPricing />
      </div>
    </div>
  );
};

export default PricingSection;

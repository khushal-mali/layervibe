"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SubscriptionPlans = [
  {
    id: 1,
    name: "Basic plan",
    price: "$ 3",
    priceBeforeDiscount: "$ 5",
    priceColored: false,
    period: "Per month",
    description: "Ideal for light users.",
    features: ["30 Tokens", "4 Masks by image", "8 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: false,
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: false,
    borderGradient: false,
    tokenExpiry: "Tokens expire in 30 days",
  },
  {
    id: 2,
    name: "Standard plan",
    price: "$ 5,99",
    priceColored: false,
    priceBeforeDiscount: "$ 12,99",
    period: "One time only",
    description: "Ideal for regular creators.",
    features: ["60 Tokens", "4 Masks by image", "10 Quick rendering free"],
    icon: "/pricing-subscription-standard-plan.svg",
    badge: false,
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: false,
    borderGradient: false,
    tokenExpiry: "Tokens expire in 30 days",
  },
  {
    id: 3,
    name: "Premium plan",
    price: "$ 8,99",
    priceColored: true,
    priceBeforeDiscount: "$ 18",
    period: "One time only",
    description: "For professionals and high-volume users.",
    features: ["150 Tokens", "4 Masks by image", "20 Quick rendering free"],
    icon: "/pricing-subscription-premium-plan.svg",
    badge: "Best value",
    gradient: true,
    buttonText: "Buy now",
    buttonfilled: true,
    borderGradient: true,
    tokenExpiry: "Tokens expire in 30 days",
  },
];

const tokenPackPlans = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    priceColored: false,
    priceBeforeDiscount: false,
    period: "One time only",
    description: "Initial plan for testing.",
    features: ["5 Tokens", "2 Masks by image", "1 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: false,
    gradient: false,
    buttonText: "Get starter now",
    buttonfilled: false,
    borderGradient: false,
    tokenExpiry: "Tokens expire in 15 days",
  },
  {
    id: 2,
    name: "Pack of 6 tokens",
    price: "$ 2",
    priceColored: false,
    period: "One time only",
    priceBeforeDiscount: false,
    description: "Initial plan for testing.",
    features: ["6 Tokens", "2 Masks by image", "1 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: false,
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: true,
    borderGradient: false,
    tokenExpiry: "Tokens expire in 15 days",
  },
  {
    id: 3,
    name: "Pack of 10 tokens",
    description: "Ideal for specific needs.",
    price: "$ 4",
    priceColored: false,
    period: "One time only",
    priceBeforeDiscount: false,
    features: ["10 Tokens", "2 Masks by image", "4 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: false,
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: true,
    borderGradient: false,
    tokenExpiry: "Tokens expire in 15 days",
  },
  {
    id: 4,
    name: "Pack of 20 tokens",
    price: "$ 6",
    priceColored: false,
    period: "One time only",
    priceBeforeDiscount: false,
    description: "Ideal for specific needs.",
    features: ["30 Tokens", "3 Masks by image", "8 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: "Best value",
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: true,
    borderGradient: true,
    tokenExpiry: "Tokens expire in 15 days",
  },
];

interface PricingCardsProps {
  isYearly: boolean;
  activeTab: string;
}

const PricingCards: React.FC<PricingCardsProps> = ({ isYearly, activeTab }) => {
  const plans =
    activeTab === "subscriptions" ? SubscriptionPlans : tokenPackPlans;

  return (
    <>
      <style jsx>{`
        @keyframes animatedBorder {
          0% {
            background-position: 0% 100%;
          }
          50% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }

        .animated-border {
          position: relative;
          z-index: 0;
        }

        .animated-border::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          border-radius: 0.75rem;
          padding: 1px;
          background: linear-gradient(to top, #c7eb00, #1a1c1e, #c7eb00);
          background-size: 100% 200%;
          background-position: 0% 100%;
          animation: animatedBorder 6s ease-in-out infinite;
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
        }
      `}</style>
      <div className="flex justify-center gap-3 max-[1050px]:flex-wrap">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex w-full min-w-[200px] flex-col gap-4 overflow-hidden rounded-[8px] bg-[#F1F3F3] p-6",
              plan.borderGradient
                ? "animated-border max-w-[408px] rounded-[0.75rem]"
                : "max-w-[409px] border-[1px] border-[#E6E8EA]",
            )}
          >
            <div className="flex flex-col gap-4 rounded-[12px] bg-[#F1F3F3] backdrop-blur-3xl">
              {/* Logo & Badge */}
              <div className="flex items-center justify-between">
                <div className="relative rounded-[8px] bg-[#DEE1E3] p-2">
                  <Image
                    src={plan.icon}
                    alt={`${plan.name} icon`}
                    height={24}
                    width={24}
                  />
                </div>

                {plan.badge && (
                  <div className="flex items-center justify-center rounded-[4px] bg-[#F8FF90] px-2 py-1">
                    <span className="font-inter text-xs leading-[150%] font-medium text-[#809E00]">
                      {plan.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Plan Info */}
              <div className="flex flex-col gap-0.5">
                <h4 className="font-inter leading-[150%] font-medium">
                  {plan.name}
                </h4>
                <p className="font-inter text-sm leading-[130%] font-normal">
                  {plan.description}
                </p>
              </div>

              {/* Price Info */}
              <div
                className={cn(
                  "flex flex-col",
                  isYearly && plan?.priceBeforeDiscount ? "py-0" : "py-[9px]",
                )}
              >
                {isYearly && plan?.priceBeforeDiscount && (
                  <div className="font-inter text-xs leading-[150%] font-normal text-[#5E686E] line-through">
                    {plan.priceBeforeDiscount}
                  </div>
                )}
                <div
                  className={cn(
                    "font-inter text-3xl leading-[150%] font-bold",
                    plan.priceColored ? "text-[#809E00]" : "text-[#131416]",
                  )}
                >
                  {plan.price}
                </div>
                <div className="font-inter text-xs leading-[150%] font-normal text-[#5E686E]">
                  {plan.period}
                </div>
              </div>

              <div className="flex flex-col gap-3 pb-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Image
                      src={"/pricing-tick-icon.svg"}
                      alt="tick"
                      width={20}
                      height={20}
                    />
                    <p className="font-inter text-sm leading-[130%] font-normal text-[#292C2E]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className={cn(
                  "font-inter cursor-pointer rounded-[8px] py-3 text-base leading-[150%] font-medium transition-colors duration-200",
                  plan.buttonfilled
                    ? "bg-[#C7EB00] text-black hover:bg-[#edff50]"
                    : "border-[1px] border-[#708B00] bg-[#F1F3F3] text-[#708B00] hover:bg-[#f7f8f8]",
                )}
              >
                {plan.buttonText}
              </button>

              <div className="font-inter text-sm leading-[130%] font-normal text-[#292C2E]">
                {plan.tokenExpiry}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingCards;

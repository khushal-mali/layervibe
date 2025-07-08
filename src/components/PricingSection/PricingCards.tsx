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
    borderGradient: true, // Added animated border to this plan too
    tokenExpiry: "Tokens expire in 15 days",
  },
];

const PricingCards = ({
  isYearly,
  activeTab,
}: {
  isYearly: boolean;
  activeTab: string;
}) => {
  const plans =
    activeTab === "subscriptions" ? SubscriptionPlans : tokenPackPlans;

  return (
    <div className="flex justify-center gap-3 max-[1050px]:flex-wrap">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            "relative flex w-full max-w-[408px] min-w-[200px] flex-col gap-4 overflow-hidden rounded-[12px] border-[1px] border-[#E6E8EA] bg-[#F1F3F3] p-6",
            plan.borderGradient ? "relative" : "",
          )}
        >
          {/* Animated border background for premium cards */}
          {/* {plan.borderGradient && (
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D8FF00_0%,#C7EB00_25%,#A8D600_50%,#8BAC00_75%,#708B00_100%)]" />
          )} */}

          {plan.borderGradient && (
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FAFFD1_0%,#F4FFC2_5%,#ECFF99_10%,#E6F98D_15%,#DCFF45_20%,#D8FF00_25%,#CFF000_30%,#C7EB00_35%,#B9E000_40%,#B2D800_45%,#A6CC00_50%,#9ABE00_55%,#8BAC00_60%,#7F9F00_65%,#7A9800_70%,#708B00_75%,#6A7F00_80%,#637600_85%,#5F7300_90%,#586A00_95%,#FAFFD1_100%)]" />
          )}

          <div
            className={cn(
              "flex flex-col gap-4 rounded-[10px] bg-[#F1F3F3] backdrop-blur-3xl",
            )}
          >
            {/* Logo & Badge */}
            <div className="flex items-center justify-between">
              <div className="relative rounded-[8px] bg-[#DEE1E3] p-2">
                <Image
                  src={plan.icon}
                  alt="basic plan"
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

          <div
            className={cn(
              "absolute inset-[1px] flex flex-col gap-4 rounded-[10px] bg-[#F1F3F3] p-6 backdrop-blur-3xl",
            )}
          >
            {/* Logo & Badge */}
            <div className="flex items-center justify-between">
              <div className="relative rounded-[8px] bg-[#DEE1E3] p-2">
                <Image
                  src={plan.icon}
                  alt="basic plan"
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
  );
};

export default PricingCards;

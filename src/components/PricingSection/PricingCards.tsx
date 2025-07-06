import { cn } from "@/lib/utils";
import Image from "next/image";

const SubscriptionPlans = [
  {
    id: 1,
    name: "Basic plan",
    price: "$ 3",
    priceBeforeDiscount: "$ 5",
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
    period: "One time only",
    priceBeforeDiscount: false,
    description: "Ideal for specific needs.",
    features: ["30 Tokens", "3 Masks by image", "8 Quick rendering free"],
    icon: "/pricing-subscription-basic-plan.svg",
    badge: "Best value",
    gradient: false,
    buttonText: "Buy now",
    buttonfilled: true,
    borderGradient: false,
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
    <div className="flex justify-center gap-3 max-lg:flex-wrap">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="flex w-full max-w-[408px] min-w-[200px] flex-col gap-4 rounded-[12px] border-[1px] border-[#E6E8EA] bg-[#F1F3F3] p-6"
        >
          {/* Logo & Badge */}
          <div className="flex items-center justify-between">
            <div className="relative rounded-[8px] bg-[#DEE1E3] p-2">
              <Image src={plan.icon} alt="basic plan" height={24} width={24} />
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
          <div className="flex flex-col">
            {isYearly && plan?.priceBeforeDiscount && (
              <div className="font-inter text-xs leading-[150%] font-normal text-[#5E686E] line-through">
                {plan.priceBeforeDiscount}
              </div>
            )}
            <div className="font-inter text-3xl leading-[150%] font-bold text-[#131416]">
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
              "font-inter cursor-pointer rounded-[8px] border-[1px] py-3 text-base leading-[150%] font-medium",
              plan.buttonfilled
                ? "border-[#C7EB00] bg-[#C7EB00] text-black hover:bg-[#cceb00b7]"
                : "border-[#708B00] bg-[#F1F3F3] text-[#708B00] hover:bg-[#f0f3f3]",
            )}
          >
            Buy now
          </button>

          <div className="font-inter text-sm leading-[130%] font-normal text-[#292C2E]">
            {plan.tokenExpiry}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;

import React from "react";
import { Check, Star, Zap, Crown, Clock } from "lucide-react";

const plans = [
  {
    name: "Basic plan",
    price: 3,
    period: "month",
    description: "Ideal for light users.",
    features: ["30 Tokens", "4 Masks by image", "8 Quick rendering free"],
    icon: <Star className="h-6 w-6" />,
    popular: true,
    badge: "Best value",
    gradient: "from-emerald-500 to-teal-600",
    buttonText: "Buy now",
  },
  {
    name: "Standard plan",
    price: 5.99,
    period: "one time",
    description: "Ideal for regular creators.",
    features: ["60 Tokens", "4 Masks by image", "10 Quick rendering free"],
    icon: <Zap className="h-6 w-6" />,
    popular: false,
    badge: null,
    gradient: "from-blue-500 to-purple-600",
    buttonText: "Buy now",
  },
  {
    name: "Premium plan",
    price: 8.99,
    period: "one time",
    description: "For professionals and high-volume users.",
    features: ["150 Tokens", "4 Masks by image", "20 Quick rendering free"],
    icon: <Crown className="h-6 w-6" />,
    popular: false,
    badge: null,
    gradient: "from-purple-500 to-pink-600",
    buttonText: "Buy now",
  },
];

const PricingCards1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Plan
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Flexible pricing for creators of all levels
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative w-full ${
                plan.popular ? "lg:-translate-y-4 lg:scale-105" : ""
              } transition-transform duration-300`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform">
                  <div className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-4 py-2 text-sm font-bold text-white shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition-all duration-300 hover:bg-white/15 hover:lg:scale-105 ${
                  plan.popular ? "ring-2 ring-emerald-400/50" : ""
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-5`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${plan.gradient} mb-6 text-white`}
                  >
                    {plan.icon}
                  </div>

                  {/* Plan Name */}
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-gray-300">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">$</span>
                      <span className="text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="ml-2 text-gray-300">
                        {plan.period === "month"
                          ? "Per month"
                          : "One time only"}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div
                          className={`h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r ${plan.gradient} mr-3 flex items-center justify-center`}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full transform rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-emerald-500/25`
                        : "border border-white/20 bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Expiry Notice */}
                  <div className="mt-4 flex items-center justify-center text-sm text-gray-400">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Tokens expire in 30 days</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-gray-300">Need a custom solution?</p>
          <button className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards1;

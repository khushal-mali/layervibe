"use client";
import React from "react";

const SwapProductFeature = () => {
  const features = [
    {
      id: 1,
      title: "Feature One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Feature Two",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Feature Three",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-[1250px]">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us?</h2>
        <div className="flex min-h-[200px] flex-col gap-8 md:flex-row">
          {/* Sticky Sidebar */}
          <div className="sticky top-4 h-[200px] rounded-lg bg-white p-6 shadow-md md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold">Sticky Sidebar</h3>
            <p className="text-gray-600">
              This section remains fixed while you scroll through the features
              on the right.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-8 md:w-2/3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="sticky top-4 h-[200px] rounded-lg bg-white p-6 shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapProductFeature;

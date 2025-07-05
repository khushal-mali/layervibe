"use client";
import Image from "next/image";
import React from "react";

const SwapProductFeature = () => {
  const features = [
    {
      id: 1,
      title: "Brown box",
      imageUrl: "/swap-product-box-brown.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Green box",
      imageUrl: "/swap-product-box-green.svg",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Blue box",
      imageUrl: "/swap-product-box-blue.svg",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section id="features" className="mx-auto mb-20 max-w-[1250px] md:mb-30">
      <div className="container mx-auto">
        <div className="flex min-h-[200px] flex-col justify-between gap-8 max-md:px-6 md:flex-row">
          {/* Sticky Sidebar */}
          <div className="sticky -top-1 h-fit w-full max-w-[500px] pt-[87px] max-md:top-20 max-md:self-center">
            <p className="font-inter mb-4 w-fit rounded-full border-[1px] border-[#C7EB00] px-2 py-[2px] text-sm leading-[130%] font-medium text-[#809E00]">
              PERFECT FOR YOUR STORE
            </p>
            <p className="font-montserrat mb-4 text-[32px] leading-[140%] font-semibold tracking-[-1%] text-[#1A1C1E]">
              Swap products. <br />
              Keep the model details.
              <br />
              Consistency made simple.
            </p>
            <p className="font-inter text-base leading-[150%] font-normal text-[#292C2E]">
              Upload one image of your model, then replace only the product, a
              shirt, shoes, or accessory, while keeping everything else intact.
              Perfect for e-commerce, stores, lookbooks, or A/B testing product
              visuals.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="max-w-[614px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="sticky -top-1 flex h-[494px] w-full flex-col rounded-lg pt-12 max-md:top-[308px]"
              >
                {/* <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p> */}
                <div className="flex h-full w-full">
                  <div className="h-full w-full rounded-br-md"></div>

                  <div className="relative ml-auto flex h-full min-w-[151px] flex-1 items-center justify-center rounded-t-md">
                    <div className="absolute inset-0 z-10 h-full w-full bg-transparent"></div>
                    <div className="relative z-20 flex h-full w-full items-center justify-center rounded-t-md bg-white">
                      <span className="font-inter text-sm leading-[130%] font-semibold">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[612/407] h-full max-w-full rounded-md rounded-tr-none bg-white">
                  <Image src={feature.imageUrl} alt={feature.title} fill />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapProductFeature;

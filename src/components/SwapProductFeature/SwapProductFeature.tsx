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
    <section
      id="features"
      className="mx-auto max-w-[1250px] pt-0 pb-24 md:pt-32 md:pb-[180px]"
    >
      {/* <div className="container mx-auto"> */}
      <div className="flex min-h-[200px] flex-col justify-between gap-8 max-[1280px]:px-6 max-md:px-6 md:flex-row">
        {/* Sticky Sidebar */}
        <div className="sticky -top-1 h-fit w-full max-w-[500px] pt-[87px] max-[550px]:flex max-[550px]:flex-col max-[550px]:items-center max-md:self-center min-[1050px]:h-[494px]">
          <p className="font-inter mb-4 w-fit rounded-full border-[1px] border-[#C7EB00] px-2 py-[2px] text-xs leading-[130%] font-medium text-[#809E00] max-[550px]:text-center lg:text-sm">
            PERFECT FOR YOUR STORE
          </p>
          <p className="font-montserrat mb-4 text-lg leading-[140%] font-semibold tracking-[-1%] text-[#1A1C1E] max-[550px]:text-center max-[483px]:mb-6 min-[850px]:text-xl md:text-base lg:text-[28px] xl:text-[32px]">
            Swap products. <br />
            Keep the model details.
            <br />
            Consistency made simple.
          </p>
          <p className="font-inter max-w-[311px] text-sm leading-[150%] font-normal text-[#292C2E] max-[550px]:text-center min-[420px]:max-w-[373px] min-[550px]:max-w-[435px] lg:text-base">
            Upload one image of your model, then replace only the product, a
            shirt, shoes, or accessory, while keeping everything else intact.
            Perfect for e-commerce, stores, lookbooks, or A/B testing product
            visuals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-md:mx-auto min-[420px]:max-w-[373px] min-[483px]:max-w-[435px] min-[550px]:max-w-[498px] min-[1050px]:max-w-[614px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="sticky top-36 mx-auto flex aspect-[614/494] h-[250px] max-w-full flex-col rounded-lg pt-12 min-[420px]:h-[300px] min-[483px]:top-30 min-[483px]:h-[350px] min-[550px]:h-[400px] min-[1050px]:-top-1 min-[1050px]:h-[494px] md:top-9"
            >
              <div className="flex h-full w-full">
                <div className="h-full w-full rounded-br-md"></div>

                <div className="relative ml-auto flex h-full min-w-[100px] flex-1 items-center justify-center rounded-t-md min-[1050px]:min-w-[151px] min-[1050px]:p-0">
                  <div className="absolute inset-0 z-10 h-full w-full bg-transparent"></div>
                  <div className="relative z-20 flex h-full w-full items-center justify-center rounded-t-md bg-white max-[900px]:px-2 max-[900px]:py-1">
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
      {/* </div> */}
    </section>
  );
};

export default SwapProductFeature;

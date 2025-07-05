import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const imageVariation = [
  { imageUrl: "/features-image-variation-1.svg", text: "Original" },
  { imageUrl: "/features-image-variation-2.svg", text: "Regatta color" },
  { imageUrl: "/features-image-variation-3.svg", text: "Background" },
  { imageUrl: "/features-image-variation-4.svg", text: "Clothes type" },
];

const FeatureSection = () => {
  return (
    <div className="font-montserrat mb-20 flex items-center justify-center px-6 text-2xl leading-[120%] font-semibold tracking-[-1]">
      <div className="flex-1 space-y-8 min-[1000px]:max-w-[1250px]">
        <p className="mx-auto max-[800px]:text-center">
          More than images, time optimization.
        </p>

        <div className="mx-auto flex h-fit w-full gap-4 max-[900px]:flex-col min-[900px]:h-[589px]">
          <div className="flex h-full flex-1 overflow-hidden rounded-md bg-white shadow-sm max-[460px]:flex-col min-[900px]:max-w-[416px] min-[900px]:flex-col">
            <div className="relative aspect-[416/449] h-[449px] w-[416px] max-[900px]:aspect-[312/336] max-[900px]:h-[336px] max-[900px]:w-[312px] max-[600px]:aspect-[208/224] max-[600px]:h-[224px] max-[600px]:w-[208px] max-[460px]:aspect-[416/449] max-[460px]:h-full max-[460px]:w-full">
              <Image
                fill
                src={"/features-section-1-image.svg"}
                alt="Edit with surgical precision."
              />
            </div>

            <div className="my-auto flex h-full flex-col justify-center gap-1.5 p-6">
              <h2 className="font-inter text-[20px] leading-[150%] font-semibold text-[#131416]">
                Edit with surgical precision.
              </h2>
              <p className="font-inter text-sm leading-[130%] font-normal text-[#292C2E]">
                Make specific changes in seconds, like changing the color of a
                piece of clothing or removing objects, without having to master
                complex tools.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4">
            <div className="flex h-full w-full overflow-hidden rounded-md shadow-sm">
              <div className="flex w-1/2 flex-1 items-center justify-center bg-[#1A1C1E] max-[900px]:h-[288px]">
                <div className="mx-2 flex h-full flex-col justify-center space-y-2 min-[1000px]:max-w-[250px] min-[1100px]:max-w-[300px] xl:max-w-[343px]">
                  <h5 className="font-inter leading-[150%] font-semibold text-white max-sm:text-base lg:text-lg xl:text-xl">
                    Turn images into engaging videos.
                  </h5>
                  <p className="font-inter text-sm leading-[130%] font-normal tracking-normal text-[#E6E8EA] max-sm:text-[12px]">
                    Automatically create short videos from edited images,
                    perfect for social media, ads, or ynamic catalogues.
                  </p>
                </div>
              </div>

              <div className="relative h-[288px] w-full max-w-[409px] flex-1 bg-gradient-to-r from-[#1A1C1E00] to-[#1A1C1E]">
                <Image
                  height={290}
                  width={409}
                  className="z-10 h-full w-full object-cover"
                  src="/features-section-2-image.svg"
                  alt="Edit with surgical precision"
                />
                <Image
                  height={56}
                  width={56}
                  className="absolute top-1/2 right-1/2 z-30 translate-x-1/2 -translate-y-1/2"
                  src="/features-section-3-pause.svg"
                  alt="Edit with surgical precision"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1A1C1E] to-[#1A1C1E00]"></div>
              </div>
            </div>
            <div className="h-full w-full rounded-md bg-white shadow-sm">
              <div className="mx-auto flex h-full max-w-[550px] flex-col gap-8 py-4">
                <div className="flex flex-col gap-2 px-2">
                  <h3 className="font-inter text-center text-[20px] leading-[150%] font-semibold text-[#131416]">
                    Test multiple variations with masks.
                  </h3>
                  <p className="font-inter text-center text-sm leading-[130%] font-normal text-[#363B3F]">
                    Generate variations of the same image at once by creating
                    different masks. Create the mask you want, write your
                    prompt, and you’re done.
                  </p>
                </div>

                <div className="mx-auto flex flex-wrap justify-center gap-3 px-2">
                  {imageVariation.map(({ imageUrl, text }, i) => (
                    <div
                      key={i}
                      className="flex h-[136px] w-[88px] flex-col gap-2.5"
                    >
                      <div
                        className={cn(
                          "relative aspect-[88/108] overflow-hidden rounded-[10px]",
                          i === 2 && "bg-[#ECB006]",
                        )}
                      >
                        <Image
                          fill
                          src={imageUrl}
                          alt={text}
                          className="object-cover"
                        />
                      </div>

                      <div
                        className={cn(
                          "font-inter mx-auto h-[19px] rounded-xl border-[1px] px-2 py-[2px] text-center text-[10px] leading-[150%] font-medium tracking-wide",
                          text === "Original"
                            ? "border-[#EDFF50] bg-[#F8FF90] text-[#708B00]"
                            : "border-[#DEE1E3] bg-[#E6E8EA] text-[#363B3F]",
                        )}
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

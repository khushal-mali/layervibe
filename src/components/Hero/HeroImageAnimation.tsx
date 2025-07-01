"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, useAnimate, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const animationSteps = [
  "1. Select image",
  "2. Edit image",
  "3. Turn into video",
] as const;

const HeroImageAnimation = () => {
  const [currentStep, setCurrentStep] = useState<
    (typeof animationSteps)[number]
  >(animationSteps[0]);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animationSequence = async () => {
      while (true) {
        // Reset all elements to initial state
        await animate([
          ["#hero-animation-1", { opacity: 0, y: 0, x: 0 }, { duration: 0 }],
          [
            "#hero-animation-image-preprocessed",
            { opacity: 0, x: 0, y: 0 },
            { duration: 0 },
          ],
          [
            "#hero-animation-image-postprocessed",
            { opacity: 0, x: 0, y: 0 },
            { duration: 0 },
          ],
        ]);

        setCurrentStep(() => "1. Select image");
        await animate([
          [
            "#hero-animation-1",
            { opacity: [0, 1], y: [0, -200], x: [0, -170] },
            { duration: 0.4 },
          ],
          [
            "#hero-animation-image-preprocessed",
            { opacity: [0, 1] },
            { duration: 0.4 },
          ],
          ["#hero-animation-1", { opacity: 0 }],
        ]);

        await animate([
          [
            "#hero-animation-image-preprocessed",
            { x: -140 },
            { duration: 0.4, ease: "easeInOut" },
          ],
        ]);

        setCurrentStep(() => "2. Edit image");
        animate([
          [
            "#hero-animation-image-preprocessed",
            { opacity: 0 },
            { duration: 0.4, delay: 0.6 + 0.2 },
          ], // Waits 0.5s (move) + 0.2s (stay)
        ]);
        await animate([
          [
            "#hero-animation-image-postprocessed",
            { opacity: 1 },
            { duration: 0.4 },
          ],
        ]);

        await animate([
          [
            "#hero-animation-image-postprocessed",
            { x: -140 },
            { duration: 0.4, delay: 0.4 + 0.2 },
          ],
        ]);
        await new Promise((resolve) => setTimeout(resolve, 500));

        setCurrentStep(() => "3. Turn into video");

        // Pause before restarting
        await new Promise((resolve) => setTimeout(resolve, 2500));
        // setCurrentStep("1. Select image");
      }
    };

    animationSequence();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="relative flex h-full w-[500px] items-center justify-center"
    >
      <span className="absolute top-[107px] left-[314px] z-20 h-8 w-8 rounded-full border-[3px] border-[#292C2E]" />
      <div className="relative flex h-[322px] w-[322px] items-center justify-center rounded-full bg-[#C7EB00]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {currentStep === "1. Select image" ? (
            <Image
              height={32}
              width={32}
              src={"/hero-animation-center-1.svg"}
              alt="Drop your image file"
            />
          ) : (
            <Image
              height={20}
              width={20}
              src={"/arrow-to-right.svg"}
              alt="Drop your image file"
            />
          )}
        </div>
        <AspectRatio
          ratio={290 / 229}
          className="z-20 h-[290px] w-[229px] translate-x-12 -translate-y-4 overflow-hidden rounded-md opacity-0"
          id="hero-animation-image-preprocessed"
        >
          <Image
            fill
            src={"/hero-animation-image-preprocessed.jpg"}
            alt="Drop your image file"
          />
        </AspectRatio>

        <AnimatePresence>
          {currentStep !== "3. Turn into video" ? (
            <AspectRatio
              ratio={290 / 229}
              key="postprocessed-image"
              className="z-20 h-[290px] w-[229px] translate-x-7 -translate-y-4 overflow-hidden rounded-md opacity-0"
              id="hero-animation-image-postprocessed"
            >
              <Image
                fill
                src={"/hero-animation-image-postprocessed.png"}
                alt="Drop your image file"
              />
            </AspectRatio>
          ) : (
            // ratio={290 / 229}
            <AspectRatio
              key="postprocessed-video"
              ratio={290 / 229}
              className="z-20 h-[290px] w-[229px] -translate-x-28 -translate-y-4 overflow-hidden rounded-md"
            >
              <video
                autoPlay
                muted
                loop
                src="/hero-animation-image-postprocessed-mp4.mp4"
                className="h-full w-full object-cover"
                onError={() => console.error("Failed to load video")}
                aria-label="Post-processed animation video"
              ></video>
            </AspectRatio>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute right-1/2 bottom-0 z-20 flex translate-x-1/2 items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm shadow-[#1015770D]">
        {animationSteps.map((step, index) => (
          <React.Fragment key={index}>
            <p
              className={cn(
                "font-inter text-sm leading-[130%] font-medium text-nowrap transition-colors duration-300 ease-in-out",
                currentStep === step ? "text-[#C7EB00]" : "text-[#363B3F]",
              )}
            >
              {step}
            </p>
            {index + 1 !== animationSteps.length && (
              <span className="h-3 w-[2px] rounded-full bg-[#BAC0C4]" />
            )}
          </React.Fragment>
        ))}
      </div>

      <Image
        src={"/hero-animation-drop-image-cursor.svg"}
        alt="drop image"
        id="hero-animation-1"
        height={88}
        width={103}
        className="absolute right-2 bottom-0 z-10 opacity-0"
      />
    </div>
  );
};

export default HeroImageAnimation;

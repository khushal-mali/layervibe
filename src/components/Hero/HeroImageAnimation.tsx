"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import useWindowSize from "@/hooks/useWindowSize";

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
  const { width } = useWindowSize();

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
          ["#hero-animation-pause", { opacity: 0 }, { duration: 0 }],
        ]);

        setCurrentStep(() => "1. Select image");
        await animate([
          [
            "#hero-animation-1",
            {
              opacity: [0, 1],
              y: [0, width! > 1200 ? -200 : width! > 1000 ? -170 : -150],
              x: [0, width! > 1200 ? -170 : width! > 1000 ? -130 : -80],
            },
            { duration: 0.4 },
          ],
          [
            "#hero-animation-image-preprocessed",
            { opacity: [0, 1] },
            { duration: 0.4 },
          ],
          ["#hero-animation-1", { opacity: 0 }],
        ]);

        setCurrentStep(() => "2. Edit image");

        await animate([
          [
            "#hero-animation-image-preprocessed",
            { x: width! > 1200 ? -120 : -95 },
            { duration: 0.4, ease: "easeIn" },
          ],
        ]);

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
            { x: width! > 1200 ? -140 : -100 },
            { duration: 0.4, delay: 0.4 + 0.2 },
          ],
        ]);

        setCurrentStep(() => "3. Turn into video");
        await animate([
          ["#hero-animation-pause", { opacity: 1 }, { delay: 0.1 }],
        ]);

        // Pause before restarting
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
    };

    animationSequence();
  }, [animate, width]);

  return (
    <div
      ref={scope}
      className="relative flex h-full w-[500px] items-center justify-center"
    >
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[#C7EB00] min-[1200px]:h-[322px] min-[1200px]:w-[322px]">
        <span className="absolute top-2 right-8 z-20 h-8 w-8 rounded-full border-[3px] border-[#292C2E] min-[1200px]:right-18" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence mode="sync" initial={false}>
            {currentStep === "1. Select image" && (
              <motion.div
                key="select-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <Image
                  height={32}
                  width={32}
                  src="/hero-animation-center-1.svg"
                  alt="Drop your image file"
                  priority
                />
              </motion.div>
            )}
            {currentStep === "2. Edit image" && (
              <motion.div
                key="edit-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <Image
                  height={20}
                  width={20}
                  priority
                  src="/arrow-to-right.svg"
                  alt="Drop your image file"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AspectRatio
          ratio={290 / 229}
          className="z-20 h-[200px] w-[158px] translate-x-8 -translate-y-4 overflow-hidden rounded-md opacity-0 min-[1200px]:h-[290px] min-[1200px]:w-[229px] min-[1200px]:translate-x-12"
          id="hero-animation-image-preprocessed"
        >
          <Image
            fill
            priority
            src={"/hero-animation-image-preprocessed.jpg"}
            alt="Drop your image file"
          />
        </AspectRatio>

        <div
          id="hero-animation-image-postprocessed"
          className="z-20 h-[200px] w-[158px] -translate-y-1 rounded-md opacity-0 min-[1200px]:h-[290px] min-[1200px]:w-[229px]"
        >
          <AnimatePresence mode="sync">
            {currentStep !== "3. Turn into video" ? (
              <AspectRatio
                ratio={290 / 229}
                key="postprocessed-image"
                className="h-[200px] w-[158px] rounded-md min-[1200px]:h-[290px] min-[1200px]:w-[229px]"
              >
                <Image
                  fill
                  src={"/hero-animation-image-postprocessed.png"}
                  alt="Drop your image file"
                  priority
                  className="rounded-md"
                />
              </AspectRatio>
            ) : (
              <AspectRatio
                key="postprocessed-video"
                ratio={290 / 229}
                className="relative h-[200px] w-[158px] min-[1200px]:h-[290px] min-[1200px]:w-[229px]"
              >
                <video
                  autoPlay
                  muted
                  loop
                  src="/hero-animation-image-postprocessed-mp4.mp4"
                  className="h-full w-full rounded-md object-cover"
                  onError={() => console.error("Failed to load video")}
                  aria-label="Post-processed animation video"
                ></video>

                <div
                  id="hero-animation-pause"
                  className="absolute right-3 bottom-3 z-30 h-8 w-8"
                >
                  <Image
                    src={"/hero-animation-pause.svg"}
                    fill
                    priority
                    style={{
                      opacity: currentStep === "3. Turn into video" ? 1 : 0,
                    }}
                    alt="Pause symbol"
                  />
                </div>
              </AspectRatio>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute right-0 bottom-5 z-40 h-20 w-full bg-[#F7F8F8]"></div>

      <div className="absolute right-1/2 bottom-0 z-50 flex translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-[#1015770D] min-[1200px]:gap-3">
        {animationSteps.map((step, index) => (
          <React.Fragment key={index}>
            <p
              className={cn(
                "font-inter text-xs leading-[130%] font-medium text-nowrap transition-colors duration-300 ease-in-out min-[1200px]:text-sm",
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

      <div
        id="hero-animation-1"
        className="absolute right-2 bottom-0 z-10 h-[88px] w-[103px] opacity-0"
      >
        <Image
          src={"/hero-animation-drop-image-cursor.svg"}
          alt="drop image"
          fill
        />
      </div>
    </div>
  );
};

export default HeroImageAnimation;

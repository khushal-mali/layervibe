"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { width } = useWindowSize();

  const screenWidth = width!;

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
        await new Promise((resolve) => setTimeout(resolve, 1500));

        await animate([
          [
            "#hero-animation-1",
            {
              opacity: [0, 1],
              y: [
                0,
                screenWidth > 1200 ? -200 : screenWidth > 1000 ? -170 : -150,
              ],
              x: [
                0,
                screenWidth > 1200 ? -170 : screenWidth > 1000 ? -130 : -80,
              ],
            },
            { duration: 0.4 },
          ],
          ["#hero-animation-1", { opacity: 0 }, { duration: 0.2, delay: 0.5 }],
          [
            "#hero-animation-image-preprocessed",
            { opacity: [0, 1] },
            { duration: 0.4 },
          ],
        ]);

        setCurrentStep(() => "2. Edit image");

        animate([
          [
            "#hero-animation-image-preprocessed",
            {
              x: screenWidth > 1200 ? -135 : -95,
            },
            { duration: 0.4, ease: "easeIn" },
          ],
        ]);

        await animate([
          [
            "#hero-animation-image-postprocessed",
            { opacity: 1 },
            { duration: 0.4, delay: 0.1, ease: "easeIn" },
          ],
        ]);

        animate([
          [
            "#hero-animation-image-postprocessed",
            { x: screenWidth > 1200 ? -140 : -100 },
            { duration: 0.4, delay: 0.3, ease: "easeIn" },
          ],
        ]);

        new Promise(() =>
          setTimeout(() => {
            setCurrentStep(() => "3. Turn into video");
          }, 500),
        );

        await animate([
          [
            "#hero-animation-image-preprocessed",
            { opacity: 0 },
            { duration: 0.4, delay: 0.3, ease: "easeIn" },
          ], // Waits 0.4s (move)
        ]);

        if (videoRef.current) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          videoRef?.current.play();
        }

        // Pause before restarting
        await new Promise((resolve) => setTimeout(resolve, 6000));
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.pause();
        }
      }
    };

    animationSequence();
  }, [animate, screenWidth]);

  return (
    <div
      ref={scope}
      className="relative order-2 flex h-[400px] w-[300px] items-center justify-center min-[800px]:order-1 min-[800px]:h-full min-[800px]:w-[500px]"
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
          className="z-20 h-[200px] w-[158px] translate-x-8 -translate-y-4 overflow-hidden rounded-md opacity-0 shadow-md min-[1200px]:h-[290px] min-[1200px]:w-[229px] min-[1200px]:translate-x-12"
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
          className="z-20 h-[200px] w-[158px] -translate-y-1 rounded-md opacity-100 shadow-md min-[1200px]:h-[290px] min-[1200px]:w-[229px] min-[1200px]:-translate-y-0"
        >
          <AspectRatio
            ratio={290 / 229}
            className="pointer-events-none relative h-[200px] w-[158px] rounded-md min-[1200px]:h-[290px] min-[1200px]:w-[229px]"
          >
            {/* Image Layer */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: currentStep !== "3. Turn into video" ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: currentStep === "3. Turn into video" ? 0.4 : 0, // adjust delay as needed
              }}
              className="absolute inset-0"
            >
              <Image
                fill
                src="/hero-animation-image-postprocessed.png"
                alt="Drop your image file"
                priority
                className="rounded-md"
              />
            </motion.div>

            {/* Video Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentStep === "3. Turn into video" ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: currentStep === "3. Turn into video" ? 0.4 : 0, // adjust delay as needed
              }}
              className="absolute inset-0"
            >
              <video
                muted
                ref={videoRef}
                preload="none"
                playsInline
                controls={false}
                src="/hero-animation-image-postprocessed-mp4.mp4"
                className="pointer-events-none h-full w-full rounded-md object-cover"
                onError={() => console.error("Failed to load video")}
                aria-label="Post-processed animation video"
              />
            </motion.div>

            {/* Pause Icon */}
            <motion.div
              id="hero-animation-pause"
              className="absolute right-3 bottom-3 z-30 h-8 w-8"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentStep === "3. Turn into video" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/hero-animation-pause.svg"
                fill
                priority
                alt="Pause symbol"
              />
            </motion.div>
          </AspectRatio>
        </div>
      </div>

      <div className="absolute right-0 bottom-5 z-40 flex h-14 w-full items-center justify-around bg-[#F7F8F8] min-[800px]:h-20">
        <AnimatePresence mode="wait">
          {currentStep === "2. Edit image" && (
            <>
              <motion.div
                key={"step 2.1"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                className="font-inter self-start rounded-full border-[1px] border-[#DEE1E3] px-[10px] py-1 text-sm leading-[130%] min-[800px]:-translate-y-2 min-[800px]:self-auto min-[1200px]:text-base"
              >
                Before
              </motion.div>
              <motion.div
                key={"step 2.2"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                className="font-inter self-start rounded-full border-[1px] border-[#DEE1E3] px-[10px] py-1 text-sm leading-[130%] min-[800px]:-translate-y-2 min-[800px]:self-auto min-[1200px]:text-base"
              >
                After
              </motion.div>
            </>
          )}

          {currentStep === "3. Turn into video" && (
            <motion.div
              key={"step 3"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="font-inter self-start rounded-full border-[1px] border-[#DEE1E3] px-[10px] py-1 text-sm leading-[130%] font-medium min-[800px]:-translate-y-2 min-[800px]:self-auto min-[1200px]:text-base"
            >
              Video created by image edited ✨
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute right-1/2 bottom-0 z-50 flex translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md shadow-[#1015770D] min-[1200px]:gap-3">
        {animationSteps.map((step, index) => (
          <React.Fragment key={index}>
            <p
              className={cn(
                "font-inter text-xs leading-[130%] font-medium text-nowrap transition-colors duration-100 ease-in-out min-[1200px]:text-sm",
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

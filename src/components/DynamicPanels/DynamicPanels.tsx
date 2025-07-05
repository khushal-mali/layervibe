"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

const DynamicPanels = () => {
  const [clickedPanel, setClickedPanel] = useState<null | number>(null);

  const panels = [
    {
      id: 1,
      title: "Edit packages",
      imageUrl: "/dynamic-panal-1.png",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Edit casual photography",
      imageUrl: "/dynamic-panal-2.png",
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      title: "Edit mockups",
      imageUrl: "/dynamic-panal-3.png",
      bgColor: "bg-blue-700",
    },
    {
      id: 4,
      title: "Edit clothes",
      imageUrl: "/dynamic-panal-4.png",
      bgColor: "bg-blue-800",
    },
    {
      id: 5,
      title: "Edit backgrounds",
      imageUrl: "/dynamic-panal-5.png",
      bgColor: "bg-blue-900",
    },
    {
      id: 6,
      title: "Edit products",
      imageUrl: "/dynamic-panal-6.png",
      bgColor: "bg-indigo-600",
    },
  ];

  const handleClick = (panelId: number) => {
    // Toggle clicked panel: if same panel is clicked, collapse it; otherwise, expand the new one
    setClickedPanel((prev) => (prev === panelId ? null : panelId));
  };

  return (
    <section
      id="dynamic"
      className="container mx-auto mb-20 max-w-[1250px] space-y-10 max-[1280px]:px-6 min-[800px]:mb-30"
    >
      <div className="mb-12 space-y-2.5 text-center">
        <h2 className="font-montserrat text-center text-2xl leading-[120%] font-semibold tracking-[-1%] text-[#1A1C1E]">
          Never spend hours looking for a photo again.
        </h2>
        <p className="font-inter text-center text-base leading-[150%] font-normal">
          Edit yours without losing the context of your photo, we only change
          what you select.
        </p>
      </div>

      <div
        className="flex h-auto w-full flex-col gap-3 md:h-[500px] md:flex-row"
        id="dynamic-panels"
      >
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={cn(
              "relative flex flex-1 items-end justify-start overflow-hidden rounded-[8px] p-6 text-white transition-all duration-300",
              "md:hover:flex-[2]",
              clickedPanel === panel.id
                ? "min-h-[200px] flex-[2]"
                : "min-h-[150px] flex-1",
              "max-md:h-20 max-md:w-full md:min-h-0",
              // "bg-cover bg-center",
            )}
            // style={{ backgroundImage: `url(${panel.imageUrl})` }}
            onMouseEnter={() =>
              window.innerWidth >= 768 && setClickedPanel(panel.id)
            }
            onMouseLeave={() =>
              window.innerWidth >= 768 && setClickedPanel(null)
            }
            onClick={() => window.innerWidth < 768 && handleClick(panel.id)}
          >
            {/* ✅ Full-cover rotated image */}
            <Image
              src={panel.imageUrl}
              alt="panel background"
              fill
              className={cn(
                "absolute inset-0 object-cover object-center transition-transform duration-300",
                // "rotate-90 md:rotate-0", // enlarge slightly when rotated to fill space
              )}
            />

            {clickedPanel === panel.id && (
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="z-30 text-lg font-semibold transition-all duration-300 ease-in"
              >
                {panel.title}
              </motion.h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicPanels;

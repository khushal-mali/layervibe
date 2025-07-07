"use client";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

function AnimatedTabs({
  activeTab,
  setActiveTab,
  tabs,
}: {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  tabs: {
    id: string;
    label: string;
  }[];
}) {
  return (
    <div className="mx-auto flex max-w-[250px] space-x-1 rounded-[8px] bg-[#E6E8EA] px-1 py-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id
              ? "text-[#0C0D0E]"
              : "text-[#292C2E] hover:text-[#0C0D0E]"
          } relative cursor-pointer rounded-[8px] px-4 py-1.5 text-sm leading-[130%] font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-0 rounded-[8px] bg-white shadow-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabs;

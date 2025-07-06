"use client";
import { useState } from "react";

export default function BillingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <div className="relative mx-auto flex items-center space-x-2">
      {/* Labels */}
      <div className="font-inter text-sm leading-[150%] font-medium sm:text-base">
        Monthly
      </div>

      {/* Toggle */}
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isYearly}
          onChange={handleToggle}
        />
        <div className="peer h-5 w-10 rounded-full bg-[#E4F65A] peer-checked:bg-[#C7EB00] after:absolute after:start-[2px] after:top-[2px] after:h-[15.5px] after:w-4.5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
      </label>

      {/* Labels */}
      <div className="font-inter text-sm leading-[150%] font-medium sm:text-base">
        Yearly
      </div>

      <div className="font-inter absolute inset-y-0 -right-16 flex items-center rounded-sm border-[1px] border-[#DEE1E3] bg-[#E6E8EA] px-1 py-0.5 text-[12px] leading-[150%] font-medium text-[#586D07]">
        (10% off)
      </div>
    </div>
  );
}

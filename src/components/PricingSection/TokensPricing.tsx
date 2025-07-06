import Image from "next/image";
import React from "react";

const TokensPricing = () => {
  return (
    <div className="mt-18 flex flex-col md:flex-row">
      <div className="w-full space-y-1 pb-10 md:max-w-[330px] lg:max-w-[500px]">
        <h4 className="font-inter text-center text-xl leading-[150%] font-semibold text-[#131416] md:text-start">
          Tokens princing
        </h4>
        <p className="font-inter text-center text-sm leading-[150%] font-normal text-[#363B3F] min-[450px]:text-base md:text-start">
          Tokens power the generative features of Mask Image AI. Understand the
          costs.
        </p>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex justify-between border-y-[1px] border-[#DEE1E3] px-2 py-4 min-[450px]:py-8 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/token-pricing-edited-image.svg"}
              height={20}
              width={20}
              alt="icon"
            />
            <div className="font-inter text-xs leading-[150%] font-medium text-[#131416] min-[450px]:text-sm sm:text-base">
              Edited image
            </div>
          </div>

          <p className="font-inter text-xs leading-[150%] font-normal text-[#292C2E] min-[450px]:text-sm sm:text-base">
            2 tokens p/ image
          </p>
        </div>
        <div className="flex justify-between border-b-[1px] border-[#DEE1E3] px-2 py-4 min-[450px]:py-8 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/token-pricing-edited-image.svg"}
              height={20}
              width={20}
              alt="icon"
            />
            <div className="font-inter text-xs leading-[150%] font-medium text-[#131416] min-[450px]:text-sm sm:text-base">
              Apply quick rendering
            </div>
          </div>

          <p className="font-inter text-xs leading-[150%] font-normal text-[#292C2E] min-[450px]:text-sm sm:text-base">
            1 Token p/ image
          </p>
        </div>
        <div className="flex justify-between border-b-[1px] border-[#DEE1E3] px-2 py-4 min-[450px]:py-8 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/token-pricing-edited-image.svg"}
              height={20}
              width={20}
              alt="icon"
            />
            <div className="font-inter text-xs leading-[150%] font-medium text-[#131416] min-[450px]:text-sm sm:text-base">
              Masks using
            </div>
          </div>

          <p className="font-inter text-xs leading-[150%] font-normal text-[#292C2E] min-[450px]:text-sm sm:text-base">
            0 Tokens
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokensPricing;

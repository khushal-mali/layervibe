import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 border-t-1 border-[#E6E8EA] py-10 max-[1250px]:px-6 min-[820px]:mt-24">
      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-6 min-[820px]:flex-row min-[820px]:gap-0">
        <Image src={"/logo.svg"} alt="logo" width={133} height={20} />

        <div className="flex flex-col items-center gap-4 min-[820px]:flex-row">
          <p className="font-inter text-sm leading-[130%] font-normal text-[#363B3F]">
            All rights reserved. 2025
          </p>
          <span className="hidden h-1 w-1 rounded-full bg-[#DEE1E3] min-[820px]:inline-block" />
          <p className="font-inter text-sm leading-[130%] font-normal text-[#363B3F] underline">
            Terms of Use & Privacy Policy
          </p>
          <span className="hidden h-1 w-1 rounded-full bg-[#DEE1E3] min-[820px]:inline-block" />
          <p className="font-inter text-sm leading-[130%] font-normal text-[#363B3F]">
            Contact us
          </p>
        </div>

        <div className="flex gap-2.5">
          <div className="cursor-pointer rounded-[8px] border-1 border-[#DEE1E3] bg-[#E6E8EA] p-2">
            <Image
              src="/footer-x-icon.svg"
              height={16}
              width={15}
              alt="X Link"
            />
          </div>
          <div className="cursor-pointer rounded-[8px] border-1 border-[#DEE1E3] bg-[#E6E8EA] p-2">
            <Image
              src="/footer-insta-icon.svg"
              height={16}
              width={15}
              alt="X Link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

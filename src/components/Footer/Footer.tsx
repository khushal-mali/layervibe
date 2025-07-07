import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-20 border-t-1 border-[#E6E8EA] py-10 max-[1250px]:px-6 min-[820px]:mt-30">
      <div className="absolute -top-8 right-0 z-40 h-[80px] w-[80px] translate-x-1/2 animate-[skew-glow_4s_ease-in_infinite] rounded-full bg-[#DFFF19] opacity-95 blur-[25px] min-[800px]:-top-24 min-[800px]:bottom-10 min-[800px]:h-[124px] min-[800px]:w-[124px]"></div>

      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-6 min-[820px]:flex-row min-[820px]:gap-0">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={133} height={20} />
        </Link>

        <div className="flex flex-col items-center gap-4 min-[820px]:flex-row">
          <p className="font-inter text-sm leading-[130%] font-normal text-[#363B3F]">
            © 2025. All rights reserved.
          </p>
          <span className="hidden h-1 w-1 rounded-full bg-[#DEE1E3] min-[820px]:inline-block" />
          <Link
            href={"/privacy-policy"}
            className="font-inter cursor-pointer text-sm leading-[130%] font-normal text-[#363B3F] underline"
          >
            Terms of Use & Privacy Policy
          </Link>
          <span className="hidden h-1 w-1 rounded-full bg-[#DEE1E3] min-[820px]:inline-block" />
          <p className="font-inter cursor-pointer text-sm leading-[130%] font-normal text-[#363B3F]">
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

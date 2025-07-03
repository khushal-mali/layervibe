import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavMenu from "./NavMenu";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "#pricing" },
  { title: "Explore", href: "/explore" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-4 right-[50%] z-[999] mx-auto flex w-[300px] translate-x-1/2 items-center justify-between rounded-lg border-[1px] border-white bg-white px-6 py-4 font-medium text-gray-800 shadow-sm min-[400px]:w-[350px] min-[550px]:w-[500px] sm:w-[630px] md:w-[700px]">
      <div className="flex items-center">
        <Image src={"/logo.svg"} alt="logo" width={133} height={20} />
      </div>
      <div className="hidden items-center space-x-5 sm:flex">
        <div className="flex items-center gap-x-1">
          {navLinks.map((link, i) => (
            <Link href={link.href} className="px-2.5" key={i}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="space-x-2">
          <Button
            size={"sm"}
            className="border border-[#E6E8EA] bg-[#F1F3F3] hover:bg-[#dadcdc]"
          >
            Log in
          </Button>
          <Button
            size={"sm"}
            className="rounded-[8px] border-[#E6E8EA] bg-[#292C2E] text-white hover:bg-[#3c4044]"
          >
            Get started
          </Button>
        </div>
      </div>

      <NavMenu navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;

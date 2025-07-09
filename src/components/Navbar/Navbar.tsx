"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import NavMenu from "./NavMenu";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "/#pricing" },
  { title: "Explore", href: "/explore" },
];

// Custom smooth scroll function with adjustable duration
export const smoothScroll = (targetY: number, duration: number): void => {
  const startY: number = window.scrollY;
  const distance: number = targetY - startY;
  let startTime: number | null = null;

  const animation = (currentTime: number): void => {
    if (!startTime) startTime = currentTime;
    const timeElapsed: number = currentTime - startTime;
    const progress: number = Math.min(timeElapsed / duration, 1); // Cap progress at 1
    const ease = (t: number): number => t * t * (3 - 2 * t); // Ease-in-out function

    window.scrollTo(0, startY + distance * ease(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <nav className="fixed top-4 right-[50%] z-[999] mx-auto flex w-[300px] translate-x-1/2 items-center justify-between rounded-lg border-[1px] border-white bg-white px-6 py-4 font-medium shadow-sm min-[400px]:w-[350px] min-[550px]:w-[500px] sm:w-[630px] md:w-[700px]">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={133} height={20} />
        </Link>
      </div>
      <div className="hidden items-center space-x-5 sm:flex">
        <div className="flex items-center gap-x-1">
          {navLinks.map((link, i) => (
            <span
              onClick={() => {
                if (link.href.includes("#")) {
                  if (pathName === "/") {
                    const sectionId = link.href.replace("/#", "");
                    const section: HTMLElement | null =
                      document.getElementById(sectionId);
                    if (section) {
                      const targetY: number =
                        section.getBoundingClientRect().top + window.scrollY;
                      smoothScroll(targetY, 1500); // 1.5 seconds for slow scroll
                    }
                  } else {
                    router.push(link.href);
                  }
                } else if (link.href === "/") {
                  if (pathName === "/") {
                    smoothScroll(0, 1500); // Slow scroll to top
                  } else {
                    router.push("/");
                  }
                } else {
                  router.push(link.href);
                }
              }}
              className="cursor-pointer px-2.5 text-[#292C2E] hover:text-[#292C2E]/85"
              key={i}
            >
              {link.title}
            </span>
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

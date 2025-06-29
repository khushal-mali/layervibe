"use client";
import { MenuIcon, MenuSquareIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";

const NavMenu = ({
  navLinks,
}: {
  navLinks: {
    title: string;
    href: string;
  }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // Handle clicks outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative sm:hidden">
      <div>
        {isMenuOpen ? (
          <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
        ) : (
          <MenuSquareIcon onClick={toggleMenu} className="cursor-pointer" />
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute top-8 -right-2 z-10 flex min-h-52 w-60 flex-col rounded-md bg-[#eeecec] p-8"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{
              opacity: 1,
              scaleY: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <ul className="flex flex-1 flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.2 },
                  }}
                >
                  <Link href={link.href} className="hover:underline">
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: navLinks.length * 0.1, duration: 0.2 },
              }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;

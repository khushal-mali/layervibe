"use client";

import { ReactLenis } from "lenis/react";
import { FC, ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Smoothness factor (lower is smoother)
        duration: 1.5, // Scroll duration in seconds
        smoothWheel: true, // Enable smooth scrolling for mouse wheel
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;

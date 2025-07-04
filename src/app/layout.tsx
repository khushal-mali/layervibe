import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import LenisProvider from "@/components/Lenis/LenisProvider";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body
          className={`${fontInter.variable} ${fontMontserrat.variable} antialiased`}
        >
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}

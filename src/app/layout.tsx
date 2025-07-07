import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import LenisProvider from "@/components/Lenis/LenisProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
          className={`${fontInter.variable} bg-[#F7F8F8] ${fontMontserrat.variable} antialiased`}
        >
          <Navbar />

          {children}
          <div className="overflow-x-hidden">
            <Footer />
          </div>
        </body>
      </LenisProvider>
    </html>
  );
}

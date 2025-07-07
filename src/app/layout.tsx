import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { constructMetadata } from "@/lib/utils";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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
      {/* <LenisProvider> */}
      <body
        className={`${fontInter.variable} bg-[#F7F8F8] ${fontMontserrat.variable} antialiased`}
      >
        <Navbar />

        {children}
        <div className="overflow-x-hidden">
          <Footer />
        </div>
        <Toaster />
      </body>
      {/* </LenisProvider> */}
    </html>
  );
}

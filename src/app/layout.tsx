import { Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";

const geistSans = Inter({
  variable: "--font-inter",
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
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

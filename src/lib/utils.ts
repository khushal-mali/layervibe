import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Layervibe - Transform images without losing details.",
  description = "Upload a photo, describe what you want — our AI does the rest. We edit images and transform them into videos without lost the importante details.",
  image = "/logo.svg",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      // creator: "@khushalmali_x",
    },
    icons,
    metadataBase: new URL("https://layervibe.vercel.app/"),
  };
}

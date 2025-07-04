import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import VideoSection from "@/components/VideoSection/VideoSection";
import { cn } from "@/lib/utils";
import Image from "next/image";

const imageVariation = [
  { imageUrl: "/features-image-variation-1.svg", text: "Original" },
  { imageUrl: "/features-image-variation-2.svg", text: "Regatta color" },
  { imageUrl: "/features-image-variation-3.svg", text: "Background" },
  { imageUrl: "/features-image-variation-4.svg", text: "Clothes type" },
];

const Home = () => {
  return (
    <div className="mb-80 min-h-screen overflow-hidden bg-[#F7F8F8]">
      <Navbar />
      <Hero />
      <VideoSection />

      <div className="font-montserrat mb-20 flex items-center justify-center px-6 text-2xl leading-[120%] font-semibold tracking-[-1]">
        <div className="flex-1 space-y-8 min-[1000px]:max-w-[1250px]">
          <p className="mx-auto max-[800px]:text-center">
            More than images, time optimization.
          </p>

          <div className="mx-auto flex h-[589px] w-full gap-4 bg-amber-400">
            <div className="h-full max-w-[416px] flex-1 overflow-hidden rounded-md bg-sky-300">
              <div className="relative aspect-[416/449] bg-emerald-400">
                <Image
                  fill
                  src={"/features-section-1-image.svg"}
                  alt="Edit with surgical precision."
                />
              </div>

              <div className="h-full gap-1.5 p-6">
                <h2 className="font-inter text-[20px] leading-[150%] font-semibold text-[#131416]">
                  Edit with surgical precision.
                </h2>
                <p className="font-inter text-sm leading-[130%] font-normal text-[#292C2E]">
                  Make specific changes in seconds, like changing the color of a
                  piece of clothing or removing objects, without having to
                  master complex tools.
                </p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 bg-pink-400">
              <div className="flex h-full w-full overflow-hidden rounded-md bg-stone-400">
                <div className="flex h-full w-1/2 items-center justify-center bg-[#1A1C1E]">
                  <div className="max-w-[343px] space-x-2">
                    <h5 className="font-inter text-[20px] leading-[150%] font-semibold text-white">
                      Turn images into engaging videos.
                    </h5>
                    <p className="font-inter text-sm leading-[130%] font-normal tracking-normal text-[#E6E8EA]">
                      Automatically create short videos from edited images,
                      perfect for social media, ads, or ynamic catalogues.
                    </p>
                  </div>
                </div>

                <div className="relative h-[288px] w-full max-w-[409px] bg-gradient-to-r from-[#1A1C1E00] to-[#1A1C1E]">
                  <Image
                    height={290}
                    width={409}
                    className="z-10 h-full w-full object-cover"
                    src="/features-section-2-image.svg"
                    alt="Edit with surgical precision"
                  />
                  <Image
                    height={56}
                    width={56}
                    className="absolute top-1/2 right-1/2 z-30 translate-x-1/2 -translate-y-1/2"
                    src="/features-section-3-pause.svg"
                    alt="Edit with surgical precision"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1A1C1E] to-[#1A1C1E00]"></div>
                </div>
              </div>

              <div className="mx-auto flex h-full max-w-[550px] flex-col gap-8 rounded-md bg-cyan-400 py-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-inter text-center text-[20px] leading-[150%] font-semibold text-[#131416]">
                    Test multiple variations with masks.
                  </h3>
                  <p className="font-inter text-center text-sm leading-[130%] font-normal text-[#363B3F]">
                    Generate variations of the same image at once by creating
                    different masks. Create the mask you want, write your
                    prompt, and you’re done.
                  </p>
                </div>

                <div className="mx-auto flex gap-3">
                  {imageVariation.map(({ imageUrl, text }, i) => (
                    <div
                      key={i}
                      className="flex h-[136px] w-[88px] flex-col gap-2.5 bg-indigo-400"
                    >
                      <div className="relative aspect-[88/108] overflow-hidden rounded-[10px] bg-[#ECB006]">
                        <Image
                          fill
                          src={imageUrl}
                          alt={text}
                          className="object-cover"
                        />
                      </div>

                      <div
                        className={cn(
                          "font-inter mx-auto h-[19px] rounded-xl border-[1px] px-2 py-[2px] text-center text-[10px] leading-[150%] font-medium tracking-wide",
                          text === "Original"
                            ? "border-[#EDFF50] bg-[#F8FF90] text-[#708B00]"
                            : "border-[#DEE1E3] bg-[#E6E8EA] text-[#363B3F]",
                        )}
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

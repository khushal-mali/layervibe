"use client";

import Image from "next/image";
import React, { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReplay = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0; // Reset to start
      video.play(); // Play again even if looping
    }
  };

  return (
    <div className="relative mb-20 flex flex-col items-center justify-center px-6 py-8 min-[1000px]:mb-40">
      {/* Yellow Circle Top */}
      <div className="absolute -top-10 right-0 z-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-[#DFFF19] min-[800px]:-top-32 min-[800px]:h-[124px] min-[800px]:w-[124px]">
        <div className="absolute top-3 left-1 h-6 w-6 rounded-full border-[2px] border-black max-md:top-1 max-md:left-0"></div>
      </div>

      {/* Video Box */}
      <div className="relative h-fit w-fit">
        <div className="relative z-10 aspect-[1230/683] h-full w-full max-w-[1230px] rounded-2xl border border-[#0000000D] bg-[#F1F3F380] p-2.5">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            controls
            className="relative z-20 h-full w-full rounded-xl object-cover"
            src="/Image To Video Ai Free Tool.mp4"
          />
        </div>

        <div className="absolute -bottom-10 left-0 z-[-1] h-[80px] w-[80px] -translate-x-1/2 rounded-full bg-[#DFFF19] min-[800px]:h-[100px] min-[800px]:w-[100px] min-[800px]:-translate-x-1/3"></div>
      </div>

      {/* Replay Button */}
      <div
        onClick={handleReplay}
        className="absolute bottom-0 flex translate-y-8 cursor-pointer items-center justify-center gap-1 rounded-md border border-[#363B3F] px-3 py-2 text-[#363B3F] transition-shadow duration-300 hover:shadow-md active:shadow-none max-sm:translate-y-4"
      >
        <Image
          width={18}
          height={18}
          src="/replay-btn-icon.svg"
          alt="Replay icon"
        />
        Replay
      </div>
    </div>
  );
};

export default VideoSection;

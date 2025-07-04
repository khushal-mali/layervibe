import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <div className="relative mb-20 flex flex-col items-center justify-center px-6 py-8 min-[1000px]:mb-40">
      <div className="absolute -top-10 right-0 z-0 h-[80px] w-[80px] translate-x-1/2 animate-[skew-glow_4s_ease-in_infinite] rounded-full bg-[#DFFF19] opacity-95 blur-[25px] min-[800px]:-top-32 min-[800px]:bottom-10 min-[800px]:h-[124px] min-[800px]:w-[124px]"></div>

      <div className="absolute -bottom-10 left-0 z-0 h-[100px] w-[100px] -translate-x-1/2 translate-y-1/2 animate-[skew-glow_4s_ease-in_infinite] rounded-full bg-[#DFFF19] opacity-95 blur-[15px] max-[800px]:-translate-y-1/4 min-[800px]:bottom-10 min-[800px]:h-[124px] min-[800px]:w-[124px] min-[1300px]:left-16 min-[1400px]:left-24 min-[1480px]:left-36"></div>

      <div className="relative z-10 aspect-[1230/683] w-full max-w-[1230px] rounded-2xl border border-[#0000000D] bg-[#F1F3F380] p-2.5">
        <video
          autoPlay
          muted
          loop
          controls
          className="relative z-20 h-full w-full rounded-xl object-cover"
          src="/Image To Video Ai Free Tool.mp4"
        />
      </div>

      <div className="absolute bottom-0 flex translate-y-8 items-center justify-center rounded-md border-[1px] border-[#363B3F] px-3 py-2 text-[#363B3F] max-sm:translate-y-4">
        <Image
          width={18}
          height={18}
          src="/replay-btn-icon.svg"
          alt="button icon"
        />
        Replay
      </div>
    </div>
  );
};

export default VideoSection;

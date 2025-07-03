import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F8] px-6">
      <Navbar />
      <Hero />
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-8">
        <div className="aspect-[1230 / 683] relative z-20 w-full max-w-[1230px] rounded-2xl border border-[#0000000D] bg-[#F1F3F380] p-2.5">
          {/* <div className="relative h-full w-full"> */}
          <video
            autoPlay
            muted
            loop
            controls
            className="h-full w-full rounded-xl object-cover"
            src="/Image To Video Ai Free Tool.mp4"
          />
          <div className="absolute -bottom-10 -left-2 z-10 h-[100px] w-[100px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#DFFF19] min-[800px]:bottom-0 min-[800px]:h-[124px] min-[800px]:w-[124px]"></div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

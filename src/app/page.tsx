import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F8] px-6">
      <Navbar />
      <Hero />

      <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center py-8">
        <div className="absolute -bottom-10 left-32 z-0 h-[100px] w-[100px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#DFFF19] min-[800px]:bottom-10 min-[800px]:h-[124px] min-[800px]:w-[124px]"></div>
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
      </div>
    </div>
  );
};

export default Home;

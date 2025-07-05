import DynamicPanels from "@/components/DynamicPanels/DynamicPanels";
import FeatureSection from "@/components/FeatureSeaction/FeatureSection";
import Hero from "@/components/Hero/Hero";
import SwapProductFeature from "@/components/SwapProductFeature/SwapProductFeature";
import VideoSection from "@/components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div className="mb-[1000px] min-h-screen bg-[#F7F8F8]">
      {/* <Navbar /> */}
      <div className="min-h-screen overflow-hidden">
        <Hero />
        <VideoSection />
      </div>

      <FeatureSection />
      <DynamicPanels />
      <SwapProductFeature />
    </div>
  );
};

export default Home;

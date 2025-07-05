import DynamicPanels from "@/components/DynamicPanels/DynamicPanels";
import FeatureSection from "@/components/FeatureSeaction/FeatureSection";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import VideoSection from "@/components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div className="mb-80 min-h-screen overflow-hidden bg-[#F7F8F8]">
      <Navbar />
      <Hero />
      <VideoSection />
      <FeatureSection />
      <DynamicPanels />
    </div>
  );
};

export default Home;

import DynamicPanels from "@/components/DynamicPanels/DynamicPanels";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import PricingSection from "@/components/PricingSection/PricingSection";
import SwapProductFeature from "@/components/SwapProductFeature/SwapProductFeature";
import VideoSection from "@/components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div className="mb-[1000px] min-h-screen bg-[#F7F8F8]">
      <Navbar />
      <div className="min-h-screen overflow-hidden">
        <Hero />
        <VideoSection />
      </div>

      <FeatureSection />
      <DynamicPanels />
      <SwapProductFeature />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Home;

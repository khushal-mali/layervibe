import DynamicPanels from "@/components/DynamicPanels/DynamicPanels";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Hero from "@/components/Hero/Hero";
import PricingSection from "@/components/PricingSection/PricingSection";
import SwapProductFeature from "@/components/SwapProductFeature/SwapProductFeature";
import VideoSection from "@/components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen overflow-hidden">
        <Hero />
        <VideoSection />
      </div>

      <FeatureSection />
      <DynamicPanels />
      <SwapProductFeature />
      <div className="overflow-x-hidden">
        <PricingSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;

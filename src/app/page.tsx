import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import VideoSection from "@/components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F8F8]">
      <Navbar />
      <Hero />
      <VideoSection />
    </div>
  );
};

export default Home;

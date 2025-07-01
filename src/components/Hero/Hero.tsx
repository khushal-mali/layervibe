import { Button } from "../ui/button";
import HeroImageAnimation from "./HeroImageAnimation";

const Hero = () => {
  return (
    <div className="h-screen w-full px-6 pt-[100px] pb-22">
      <div className="mx-auto flex h-[524px] max-w-[1250px] gap-14 px-[10px]">
        <HeroImageAnimation />

        <div className="flex h-full flex-col justify-center gap-4 pl-8">
          <h1 className="font-montserrat text-[56px] leading-[125%] font-semibold tracking-[-2%] text-[#292C2E]">
            Transform images <br /> without losing details.
          </h1>
          <p className="font-inter max-w-[600px] text-lg leading-[150%] tracking-[0]">
            Upload a photo, describe what you want — our AI does the rest. We
            edit images and transform them into videos without lost the
            importante details.
          </p>
          <Button className="w-fit cursor-pointer rounded-[10px] bg-[#C7EB00] px-6 py-3 uppercase">
            GET STARTED FREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

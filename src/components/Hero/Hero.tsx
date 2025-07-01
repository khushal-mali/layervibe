import { Button } from "../ui/button";
import HeroImageAnimation from "./HeroImageAnimation";

const Hero = () => {
  return (
    <div className="h-screen w-full px-6 pt-[100px] pb-22">
      <div className="mx-auto flex h-[450px] max-w-[1250px] gap-14 px-[10px] min-[1200px]:h-[524px]">
        <HeroImageAnimation />

        <div className="flex h-full flex-col justify-end gap-6 pl-6 min-[1200px]:justify-center min-[1200px]:pl-8">
          <h1 className="font-montserrat text-[42px] leading-[125%] font-semibold tracking-[-2%] text-[#292C2E] min-[1000px]:text-[46px] min-[1200px]:text-[56px]">
            Transform images <br /> without losing details.
          </h1>

          <p className="font-inter max-w-[600px] text-base leading-[150%] tracking-[0] min-[1000px]:text-lg">
            Upload a photo, describe what you want — our AI does the rest. We
            edit images and transform them into videos without lost the
            importante details.
          </p>

          <Button className="w-fit cursor-pointer rounded-[10px] bg-[#C7EB00] px-6 py-3 leading-[150%] font-medium uppercase">
            GET STARTED FREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import HeroImageAnimation from "./HeroImageAnimation";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden overflow-x-hidden pt-[120px] pb-10 min-[800px]:h-screen min-[800px]:pt-[100px]">
      <div className="mx-auto flex flex-col items-center min-[500px]:px-[10px] min-[800px]:h-[450px] min-[800px]:max-w-[1250px] min-[800px]:flex-row min-[800px]:gap-14 min-[1200px]:h-[524px]">
        <HeroImageAnimation />

        <div className="order-1 flex h-full flex-col items-center justify-end gap-6 max-[800px]:px-2 min-[800px]:order-2 min-[800px]:items-start min-[800px]:pl-6 min-[1200px]:justify-center min-[1200px]:pl-8">
          <h1 className="font-montserrat text-center text-[28px] leading-[125%] font-semibold tracking-[-2%] text-[#292C2E] min-[400px]:text-[32px] min-[500px]:text-[36px] min-[800px]:text-start min-[900px]:text-[40px] min-[1000px]:text-[46px] min-[1200px]:text-[56px]">
            Transform images <br /> without losing details.
          </h1>

          <p className="font-inter max-w-[700px] text-center text-sm leading-[150%] tracking-[0] min-[500px]:text-base min-[800px]:max-w-[600px] min-[800px]:text-start min-[1000px]:text-lg">
            Upload a photo, describe what you want — our AI does the rest. We
            edit images and transform them into videos without lost the
            importante details.
          </p>

          <button className="w-fit cursor-pointer rounded-[10px] bg-[#C7EB00] px-6 py-3 leading-[150%] font-medium uppercase hover:bg-[#edff50]">
            GET STARTED FREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

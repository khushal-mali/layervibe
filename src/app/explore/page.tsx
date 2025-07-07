"use client";
import MasonryGrid from "@/components/Explore/MasonryGrid";
import ExploreSearchComponent from "./ExploreSearchComponent";

const ExplorePage = () => {

  return (
    <div className="container mx-auto max-w-[1250px] pt-35 pb-10 max-xl:px-6 sm:pb-20 md:pt-45">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-montserrat text-center text-2xl leading-[120%] font-semibold tracking-[-1%] text-[#1A1C1E]">
            Explore ideas
          </h2>
          <p className="font-inter text-center text-base leading-[150%] font-normal text-[#292C2E]">
            Discover our gallery of images edited with Layervibe.
          </p>
        </div>

        <ExploreSearchComponent />

        <MasonryGrid />
      </div>
    </div>
  );
};

export default ExplorePage;

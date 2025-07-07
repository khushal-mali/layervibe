import MasonryGrid from "@/components/Explore/MasonryGrid";
import ExploreSearchComponent from "@/components/Explore/ExploreSearchComponent";

const imageUrls: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

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

        <MasonryGrid imageUrls={imageUrls} />
      </div>
    </div>
  );
};

export default ExplorePage;

import React from "react";

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

const MasonryGrid: React.FC = () => {
  return (
    <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index}`}
          className="mb-4 w-full break-inside-avoid rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.02]"
        />
      ))}
    </div>
  );
};

export default MasonryGrid;

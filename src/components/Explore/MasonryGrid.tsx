import React from "react";

const MasonryGrid: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
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

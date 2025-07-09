import React from "react";

const MasonryGrid: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  return (
    <div className="columns-2 gap-1 space-y-1 md:columns-3">
      {imageUrls.map((url, index) => (
        <div
          className="group relative mb-1 overflow-hidden rounded-md"
          key={url || index}
        >
          <img
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="z-0 w-full break-inside-avoid rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {/* <div className="absolute bottom-0 flex h-1/3 w-full translate-y-full items-end truncate bg-gradient-to-b from-transparent to-[#000] text-sm opacity-60 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <div className="flex items-center gap-1 px-4 pb-4">
              <p className="font-inter text-sm text-[#eaeced]">Prompt: </p>{" "}
              <p className="w-2/5 truncate text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quas tenetur
              </p>
              <Button
                size={"icon"}
                className="border-[#999] bg-transparent"
                variant={"outline"}
              >
                <Star className="text-white" />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className="border-[#999] bg-transparent"
              >
                <SquarePen className="text-white" />
              </Button>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

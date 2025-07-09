import { SquarePen, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const MasonryGrid: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  return (
    <div className="bg-gray-50 p-4">
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

            <div className="absolute right-0 bottom-0 left-0 h-1/3 translate-y-full bg-gradient-to-b from-transparent to-black opacity-60 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <div className="absolute right-0 bottom-0 left-0 p-3">
                <div className="flex w-full items-end justify-between gap-2">
                  {/* Text content - takes up available space */}
                  <div className="min-w-0 flex-1 pr-2">
                    <p className="mb-1 text-xs text-gray-300">Prompt:</p>
                    <p className="line-clamp-2 text-sm break-words text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur quas tenetur
                    </p>
                  </div>

                  {/* Buttons - fixed width */}
                  <div className="flex flex-shrink-0 gap-1">
                    <Button
                      size="icon"
                      className="border-gray-400 bg-transparent hover:bg-white/10 max-sm:size-7"
                      variant="outline"
                    >
                      <Star className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-gray-400 bg-transparent hover:bg-white/10 max-sm:size-7"
                    >
                      <SquarePen className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;

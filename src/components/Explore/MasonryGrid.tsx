import { SquarePen, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const MasonryGrid: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  return (
    <div className="bg-gray-50">
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
                    <p className="font-inter mb-1 text-xs text-[#eee]">
                      Prompt:
                    </p>
                    <p className="font-inter line-clamp-2 text-sm break-words text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur quas tenetur
                    </p>
                  </div>

                  {/* Buttons - fixed width */}
                  <div className="flex flex-shrink-0 gap-1">
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          size="icon"
                          className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 max-sm:size-7"
                          variant="outline"
                        >
                          <Star className="h-4 w-4 text-white" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="font-inter mb-1.5 bg-white text-black">
                        <p className="font-inter text-sm max-sm:text-xs">
                          Favorite Image
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          size="icon"
                          className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 max-sm:size-7"
                          variant="outline"
                        >
                          <SquarePen className="h-4 w-4 text-white" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="mb-1.5 bg-white text-black">
                        <p className="font-inter text-sm max-sm:text-xs">
                          Edit Image
                        </p>
                      </TooltipContent>
                    </Tooltip>
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

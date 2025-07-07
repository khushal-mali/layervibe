import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const ExploreSearchComponent = () => {
  const [exploreQuery, setExploreQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Query Submit.");
    setExploreQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto max-w-[350px]">
      <input
        type="text"
        value={exploreQuery}
        onChange={(e) => setExploreQuery(e.target.value)}
        className="font-inter rounded-[8px] border-[1px] border-[#DEE1E3] py-3 pr-4 pl-8 text-base leading-[150%] text-[#292C2E]"
      />
      <Image
        src={"/explore-search-icon.svg"}
        height={16}
        width={16}
        alt="search icon"
        className="absolute top-1/3 left-2.5"
      />
    </form>
  );
};

export default ExploreSearchComponent;

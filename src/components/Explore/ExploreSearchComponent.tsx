"use client";
import { SearchIcon } from "lucide-react";
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
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-[380px]"
    >
      <div className="relative">
        <input
          type="text"
          value={exploreQuery}
          onChange={(e) => setExploreQuery(e.target.value)}
          className="peer w-full rounded-[8px] border border-[#DEE1E3] py-3 pr-4 pl-10 text-base leading-[150%] text-[#292C2E] focus:outline-[#708b00]"
        />
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-[#444]" />
      </div>
    </form>
  );
};

export default ExploreSearchComponent;

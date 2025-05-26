import CabinCard from "@/app/_components/CabinCard";
import { cabinsMock, delayData } from "@/app/utills";
import React from "react";

const CabinsList = async ({ filter }) => {
  // CHANGE
  const cabins = await delayData(cabinsMock);

  let filteredData = [...cabins];

  if (filter && filter.capacity === "small") {
    filteredData = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }

  if (filter && filter.capacity === "medium") {
    filteredData = cabins.filter((cabin) => cabin.maxCapacity >= 4);
  }

  if (filter && filter.capacity === "large") {
    filteredData = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredData.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinsList;

import CabinCard from "@/app/_components/CabinCard";
import { cabinsMock, delayData } from "@/app/utills";
import React from "react";


const CabinsList = async () => {
  // CHANGE
  const cabins = await delayData(cabinsMock);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinsList;

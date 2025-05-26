"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleFilter(filter) {
    const sParams = new URLSearchParams(searchParams);
    sParams.set("capacity", filter);
    router.replace(`${pathname}?${sParams.toString()}`);
  }

  const activeFilter = searchParams.get(`capacity`) || "all";
  return (
    <div className="flex justify-end mb-3">
      {" "}
      <div className="border border-primary-800 flex">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All cabins
        </Button>
        <Button
          filter="small"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          2&mdash;3 guests
        </Button>
        <Button
          filter="medium"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          4&mdash;7 guests
        </Button>
        <Button
          filter="large"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          8&mdash;12 guests
        </Button>
      </div>
    </div>
  );
};

export default Filter;

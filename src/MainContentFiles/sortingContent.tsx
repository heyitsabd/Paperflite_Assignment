import React, { JSX } from "react";
import add from "../../public/images/add-2.png";
import list from "../../public/images/list.png";
import { LuChevronsUpDown } from "react-icons/lu";
import { useCollectionPopup } from "../CollectionPopupContext";
import data from "../data.json";

function SortingContent(): JSX.Element {
  const { activeType, setActiveType } = useCollectionPopup();

  const types = data.sorting.options;
  const sortBy = data.sorting.sortBy;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-1 gap-4 w-full">
      {/* Left side: Add & Filters */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-3">
        <button className="rounded-full border border-[#DBDBDB] p-2.5 h-10 w-10 flex items-center justify-center">
          <img src={add} alt="Add" />
        </button>

        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => setActiveType(type.value)}
            className={`rounded-full px-4 py-2 text-sm lg:text-base transition
              ${
                activeType === type.value
                  ? "bg-[#E51058] text-white"
                  : "border border-[#DBDBDB] text-gray-700"
              }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Right side: Sort & List view */}
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-700">Sort by</p>
          <div className="flex items-center gap-1 text-sm font-medium">
            <p>{sortBy}</p>
            <LuChevronsUpDown className="text-gray-500" />
          </div>
        </div>

        <div className="flex h-10 w-10 border border-[#DBDBDB] justify-center items-center rounded-lg cursor-pointer hover:bg-gray-100 transition">
          <img src={list} alt="List View" />
        </div>
      </div>
    </div>
  );
}

export default SortingContent;

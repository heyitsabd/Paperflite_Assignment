import React, { JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { useCollectionPopup } from "../CollectionPopupContext";
import data from "../data.json";

function HeadingAndSearchContent(): JSX.Element {
  const { openPopup, searchQuery, setSearchQuery } = useCollectionPopup();
  const { heading, images } = data;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900">{heading.title}</h1>
          <h4 className="text-[16px] text-[#717274]">{heading.subtitle}</h4>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="flex flex-row gap-2 w-full">
            <div className="relative w-full">
              <CiSearch
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder={heading.searchPlaceholder}
                className="pl-8 pr-2 py-1 rounded border border-[#DBDBDB] focus:outline-none w-full"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <img
              src={images.headingIcons.fanLike}
              alt="Search"
              className="cursor-pointer p-2 border-[1px] border-[#DBDBDB] rounded-md"
              onClick={() => {
                console.log("Search triggered");
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-2 w-full items-center justify-between">
            <div className="flex flex-row gap-2">
              <img
                src={images.headingIcons.textSize}
                className="cursor-pointer p-2 border border-[#E0E0E0] rounded-lg object-contain"
                alt="Text Size"
              />
              <img
                src={images.headingIcons.bin}
                className="cursor-pointer p-2 border border-[#E0E0E0] rounded-lg object-contain"
                alt="Delete"
              />
              <img
                src={images.headingIcons.copy}
                className="cursor-pointer p-2 border border-[#E0E0E0] rounded-lg object-contain"
                alt="Copy"
              />
            </div>
            <button
              type="button"
              onClick={openPopup}
              className="flex items-center gap-2 border border-[#E0E0E0] rounded-full px-4 py-2 text-gray-800 font-small hover:bg-gray-100 transition"
            >
              <img src={images.headingIcons.add} alt="Add" />
              {heading.createButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingAndSearchContent;

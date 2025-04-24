import React, { JSX } from "react";
import add from "../../public/images/add-2.png";
import list from "../../public/images/list.png";
import { LuChevronsUpDown } from "react-icons/lu";
import { useCollectionPopup } from "../CollectionPopupContext";
import data from "../data.json";
import "../css/SortingContent.css";

function SortingContent(): JSX.Element {
  const { activeType, setActiveType } = useCollectionPopup();

  const types = data.sorting.options;
  const sortBy = data.sorting.sortBy;

  return (
    <div className="sorting-container">
      {/* Left side: Add & Filters */}
      <div className="add-filter-buttons">
        <button className="add-button">
          <img src={add} alt="Add" />
          <span className="add-text">Add folder</span>{" "}
          {/* Add this text span */}
        </button>
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => setActiveType(type.value)}
            className={`filter-button ${
              activeType === type.value ? "active" : "inactive"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Right side: Sort & List view */}
      <div className="sort-and-view-container">
        <div className="flex flex-col items-end">
          <p className="sort-by-text">Sort by</p>
          <div className="sort-by-details">
            <p>{sortBy}</p>
            <LuChevronsUpDown className="text-gray-500" />
          </div>
        </div>

        <div className="list-view-button">
          <img src={list} alt="List View" />
        </div>
      </div>
    </div>
  );
}

export default SortingContent;

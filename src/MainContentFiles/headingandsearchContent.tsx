import React, { JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { useCollectionPopup } from "../CollectionPopupContext";
import data from "../data.json";
import "../css/HeadingAndSearchContent.css";

function HeadingAndSearchContent(): JSX.Element {
  const { openPopup, searchQuery, setSearchQuery } = useCollectionPopup();
  const { heading, images } = data;

  return (
    <div>
      <div className="heading-container">
        <div className="heading-title-container" >
          <h1 className="heading-title">{heading.title}</h1>
          <h4 className="heading-subtitle">{heading.subtitle}</h4>
        </div>

        <div className="search-section">
          <div className="search-bar-wrapper">
            <div className="search-input-wrapper">
              <CiSearch className="search-icon" size={18} />
              <input
                type="text"
                placeholder={heading.searchPlaceholder}
                className="search-input"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <img
              src={images.headingIcons.fanLike}
              alt="Search"
              className="icon-button"
              onClick={() => {
                console.log("Search triggered");
              }}
            />
          </div>
          <div className="options-and-button">
            <div className="options-icons">
              <img
                src={images.headingIcons.textSize}
                className="icon-style"
                alt="Text Size"
              />
              <img
                src={images.headingIcons.bin}
                className="icon-style"
                alt="Delete"
              />
              <img
                src={images.headingIcons.copy}
                className="icon-style"
                alt="Copy"
              />
            </div>
            <button
              type="button"
              onClick={openPopup}
              className="create-button"
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

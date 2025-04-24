import React, { JSX } from "react";
import "./css/mainContent.css";
import HeadingAndSearchContent from "./MainContentFiles/headingandsearchContent";
import SortingContent from "./MainContentFiles/sortingContent";
import MainContentDisplay from "./MainContentFiles/MainContentDisplay";

function MainContent(): JSX.Element {
  return (
    <div className="main-content-wrapper">
      <HeadingAndSearchContent />
      <div>
        <SortingContent />
      </div>
      <div>
        <MainContentDisplay />
      </div>
    </div>
  );
}

export default MainContent;
``

import React, { JSX } from "react";
import HeadingAndSearchContent from "./MainContentFiles/headingandsearchContent";
import SortingContent from "./MainContentFiles/sortingContent";
import MainContentDisplay from "./MainContentFiles/MainContentDisplay";

function MainContent(): JSX.Element {
  return (
    <div className="w-full h-full overflow-y-auto">
      <HeadingAndSearchContent />
      <div>
        <SortingContent />
      </div>
      <div>
        <MainContentDisplay/>
      </div>
    </div>
  );
}

export default MainContent;

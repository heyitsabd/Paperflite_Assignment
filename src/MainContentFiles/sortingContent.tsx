import React, { JSX } from "react";
import add from "../../public/images/add-2.png";
import list from "../../public/images/list.png";
import { LuChevronsUpDown } from "react-icons/lu";


function SortingContent(): JSX.Element {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row items-center gap-3">
        <button className="rounded-[50px] border-[1px] border-[#DBDBDB] pt-[10px] pr-[12px] pb-[10px] pl-[12px] h-[40px] w-[40px] ">
          <img src={add} alt="Add" />
        </button>
        <button className="rounded-[50px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] bg-[#E51058] text-white">
          All files
        </button>
        <button className="rounded-[50px] border-[1px] border-[#DBDBDB] pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
          Photos
        </button>
        <button className="rounded-[50px] border-[1px] border-[#DBDBDB] pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
          Document
        </button>
      </div>
      <div className="flex flex-row items-center gap-2" >
        <div className="flex flex-col items-end">
            <p>Sort by</p>
            <div className="flex flex-row justify-center items-center">
            <p>Created date </p>
            <LuChevronsUpDown/>
            </div>
        </div>
        <div className="flex h-[40px] w-[40px] border-[1px] justify-center items-center border-[#DBDBDB] rounded-[10px]" >
            <img src={list} className="" />
        </div>
      </div>
    </div>
  );
}

export default SortingContent;

import { useState } from "react";
import Itemlist from "./Itemlist";

const RestarantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handelClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-lg">
            {data.titel}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestarantCategory;

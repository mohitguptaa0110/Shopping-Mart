import { useState } from "react";
import ListOfItem from "./ListOfItem";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data)
  // Uncontrolled component
  // const[showItems,setShowItems] = useState()
  const handleShowItems = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 shadow-lg mx-auto my-4 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleShowItems}
      >
        <span className="font-extrabold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span className="font-extrabold">{showItems ? "∧" : "∨"}</span>
      </div>
      {showItems && <ListOfItem items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;

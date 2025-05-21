import { FOOD_URL } from "../utils/constants";
const ListOfItem = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start border-b border-gray-200 py-10"
        >
          <div className="text-left mt-8 pr-8">
            <div className="font-bold text-lg">{item.card.info.name}</div>
            <div>₹{item.card.info.price / 100}</div>
            <div>{item.card.info.description}</div>
          </div>
          <div className="relative w-32 h-34 min-w-[9rem]">
            <img
              src={FOOD_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
            />
            {/* Add Button */}
            <button className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold py-2 px-8 rounded-md shadow-md text-lg
             hover:bg-gray-200 transition-colors duration-100">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListOfItem;

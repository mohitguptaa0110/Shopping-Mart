import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
    locality,
  } = resData.info;

  return (
    <div
      className="res-card w-[300px] h-[300px] m-2 p-2 transition-transform duration-300 
    hover:scale-105 hover:shadow-xl rounded-lg relative overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-[170px] mb-3">
        <img
          className="rounded-lg w-full h-full object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded">
          ITEMS AT ₹{costForTwo.replace(/[^\d]/g, "")}
        </span>
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="font-semibold">
            ⭐{avgRating} - {sla.deliveryTime} mins
          </span>
        </div>
        <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600">{locality}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;

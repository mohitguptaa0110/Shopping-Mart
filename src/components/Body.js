import ResturantCard from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shinner from "./ShinnerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredlistOfResturant, setfilteredlistOfResturant] = useState([]);
  const [textWritten, settextWritten] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6339793&lng=74.8722642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data)
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setlistOfResturant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistOfResturant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) return <h1>Yours Internet is not Working</h1>;

  const { name,setUserName } = useContext(UserContext);
  // Conditional Rendering
  return listOfResturant.length === 0 ? (
    <Shinner />
  ) : (
    <div className="body">
      <div className="flex gap-4 mx-30 my-3 pl-20 ">
        <div className="px-4 py-1 m-1 border border-gray-300 rounded-full shadow-sm">
          <input
            type="text"
            data-testid="searchInput"
            className="outline-none pr-6"
            value={textWritten}
            onChange={(e) => {
              settextWritten(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // console.log(textWritten);
              const filteredList = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(textWritten.toLowerCase())
              );
              setfilteredlistOfResturant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition"
          onClick={() => {
            const updatelist = listOfResturant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredlistOfResturant(updatelist);
          }}
        >
          Top Rated Resturants
        </button>
        <div className="px-4 m-1">
          <label>UserName: </label>
          <input
            type="text"
            className="outline-none pr-6 py-2 px-2 border rounded-full"
            value={name}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-27 px-20 justify-around">
        {filteredlistOfResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

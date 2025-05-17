import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shinner from "./ShinnerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  // Conditional Rendering
  return listOfResturant.length === 0 ? (
    <Shinner />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-text">
          <input
            type="text"
            className="search-box"
            value={textWritten}
            onChange={(e) => {
              settextWritten(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(textWritten);
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
          className="filter-btn"
          onClick={() => {
            const updatelist = listOfResturant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredlistOfResturant(updatelist);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
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

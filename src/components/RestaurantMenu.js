import { useEffect, useState } from "react";
import Shinner from "./ShinnerCard";
import { ITEM_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);
  if (resInfo === null) return <Shinner />;

  const { areaName, costForTwoMessage, name, avgRating } =
    resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="restaurant">
      <h1 className="name">{name}</h1>
      <div className="restaurant-details">
        <p className="rating">⭐{avgRating}</p>
        <p>{costForTwoMessage}</p>
        <p>{areaName}</p>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <div className="whats-new">
          <div className="header-sec">
            <h3>Whats New</h3>
            <button className="toggle-button">▼</button>
          </div>
          <div className="item-details">
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name}
                  <img
                    className="img"
                    alt="res"
                    src={ITEM_URL + item.card.info.imageId}
                  ></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;

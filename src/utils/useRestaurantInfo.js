import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantInfo;

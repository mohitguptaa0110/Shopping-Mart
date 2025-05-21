import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnState, setBtnState] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const {name} = useContext(UserContext);
  return (
    <div className="flex justify-between items-center shadow-md p-4">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Fast Burger Logo"></img>
      </div>
      <div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li className="text-green-600">
            Online : {onlineStatus? '✅' : '🔴'}
          </li>
          <li className="hover:text-red-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-red-500 transition">Cart</li>
          <button
            className="px-4 rounded-md py-1 bg-green-300"
            onClick={() => {
              btnState == "Login"
                ? setBtnState("Logout")
                : setBtnState("Login");
            }}
          >
            {btnState}
          </button>
          <li className="hover:text-red-500 transition">{name}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

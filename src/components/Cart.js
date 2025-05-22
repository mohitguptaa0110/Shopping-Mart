import { useDispatch, useSelector } from "react-redux";
import ListOfItem from "./ListOfItem"
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-lg font-bold">Cart</h1>
      <button className="bg-black text-white rounded-lg m-2 p-2" onClick={handleClearCart}>Clear Cart</button>
      {/* this is wrong as it display cart items but also we can add to cart from this bcz of button */}
      <div className="w-6/12 mx-auto">
        <ListOfItem items={cartItems}></ListOfItem>
      </div>
    </div>
  );
};
export default Cart;

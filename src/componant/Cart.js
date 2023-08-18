import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const CartItems = useSelector((store) => store.Cart.items);

  const dispatch = useDispatch();
  const handelClearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handelClearcart}
        >
          Clear
        </button>
        {CartItems.length === 0 && <h1>Cart is Empty Add Items to The Cart</h1>}
        <Itemlist items={CartItems} />
      </div>
    </div>
  );
};
export default Cart;


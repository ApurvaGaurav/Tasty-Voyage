import { useDispatch, useSelector } from "react-redux";
import CartEmptyMessage from "./CartEmptyMessage";
import CartItems from "./CartItems";
import Bill from "./Bill";

const Cart = () => {
  // console.log(cartItems.card.info.id);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return <CartEmptyMessage />;
  }

  return (
    <div className="flex  mt-24 gap-2 mx-5">
      <CartItems />
      <Bill />
    </div>
  );
};

export default Cart;

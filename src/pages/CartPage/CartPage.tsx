import { useSelector } from "react-redux";
import { CartTotal, CartItem } from "../../entities/Cart/ui";
import styles from "./CartPage.module.scss";


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface RootState {
  cart: CartState;
}

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className={styles.content}>
      <h1>Ваша корзина</h1>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <CartTotal />
        </div>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
};

export default CartPage;

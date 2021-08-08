import { useContext } from "react";
import { CartCard } from "../../components/cartcard";
import { Header } from "../../components/Header";
import { cartContext } from "../../provider/cartProvider/cartProvider";

export const Cart = () => {
  const { state } = useContext(cartContext);
  const priceArr = state.cartlist.map((product) => product.price);
  // console.log(priceArr);

  function sum(total, acc) {
    return total + acc;
  }

  const total = priceArr.reduce(sum, 0);
  console.log(state);
  const discount = 50;
  return (
    <div className="cart">
      <Header />
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cart-main">
        <div className="cart-item-list">
          <h2>My Cart</h2>

          {state.cartlist.length === 0 ? (
            <h1 className="product-cart-card">YOUR CART IS EMPTY</h1>
          ) : (
            state.cartlist.map((product) => (
              <CartCard key={product.id} product={product} />
            ))
          )}
        </div>
        <div>
          <h2>Product Details</h2>

          <div className="cart-calculation">
            <div className="cart-calculation-item">
              {state.cartlist.map((product) => (
                <div className="item-name-price">
                  <h4>{product.productName}</h4> <h4>{product.price} Rs.</h4>
                </div>
              ))}
            </div>

            <div className="cart-calculation-total">
              {" "}
              <div className="discount">
                <h4>Discount:</h4> <h4>-{discount} Rs.</h4>
              </div>
              <div className="total-price">
                <h4>Total:</h4>{" "}
                <h4>
                  {state.cartlist.length === 0 ? 0 : total - discount} Rs.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

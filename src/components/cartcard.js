import { useContext } from "react";
import { cartContext } from "../provider/cartProvider/cartProvider";

export const CartCard = ({ product }) => {
  const { state, dispatch } = useContext(cartContext);
  // console.log(product);
  return (
    <div className="product-cart-card">
      <img className="cart-card-img" src={product.productImage} />
      <div className="cart-card-content">
        <div className="cart-card-name-div">
          <p className="product-name">{product.productName}</p>
          <h4>{product.price}</h4>
          <p>{product.size}</p>{" "}
        </div>

        <div className="quantity-btn-div">
          <button
            onClick={() =>
              dispatch({
                type: "QUANTITY_PLUS",
                payload: product
              })
            }
            className="add-to-cart-card-btn"
          >
            +
          </button>{" "}
          {product.quantity}
          <button
            onClick={() =>
              dispatch({
                type: "QUANTITY_MINUS",
                payload: product
              })
            }
            disabled={product.quantity < 1}
            className="add-to-cart-card-btn"
          >
            -
          </button>
        </div>

        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product
            })
          }
          className="add-to-cart-card-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

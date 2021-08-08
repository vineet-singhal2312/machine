import { useContext } from "react";
import { cartContext } from "../provider/cartProvider/cartProvider";

export const ProductCard = ({ product }) => {
  // console.log(product);

  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="product-card">
      <img className="card-img" src={product.productImage} />
      <div className="card-content">
        <div className="card-name-div">
          <p className="product-name">{product.productName}</p>
          <h4>{product.price}</h4>
          <p>{product.size}</p>{" "}
        </div>

        {state.cartlist.includes(product) ? (
          <button className="add-to-cart-btn">Added to cart</button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
            className="add-to-cart-btn"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./Cart.css";
import ToggleQuantity from "../ToggleQuantity";
import {MdDelete} from 'react-icons/md'

function Cart() {
  const { cart } = useCartContext();
  const { setDecress, setIncress,removeItem,cart_total,fee } = useCartContext();

  return (
    <>
      <div className="cart-container">
        <p className="cart-headings">Product</p>
        <p className="cart-headings">Name</p>
        <p className="cart-headings">Quantity</p>
        <p className="cart-headings">Price</p>
        <p className="cart-headings">Remove</p>
      </div>
      {cart.map((Element) => {
        return (
          <div className="cart-product" key={Element.id}>
            <img
              src={Element.image}
              alt={Element.title}
              className="product-img"
            />
            <p className="cart-title item">{Element.title}</p>
            <div className="cart-stock item">
              <ToggleQuantity
                setDecress={() => setDecress(Element.id)}
                quantity={Element.quantity}
                setIncress={() => setIncress(Element.id)}
              />
            </div>
            <p className="cart-price item ">${Element.price * Element.quantity}</p>
            <div className="cart-remove item"><MdDelete onClick={()=> removeItem(Element.id)}/></div>
          </div>
        );
      })}

      <div className="total_price">
        <div>
        <p>Total Price: </p>
        <p>Delivery  fee</p>
        <hr/>
        <p>Pay:</p>
        </div>
        <div>
        <p>{cart_total}$ </p>
        <p>{fee}$</p>
        <hr/>
        <p>{fee + cart_total}$</p>
        </div>
      </div>
    </>
  );
}

export default Cart;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { useEffect } from "react";
import "./singleproducts.css";
import ToggleQuantity from "../ToggleQuantity";
import { useCartContext } from "../../Context/CartContext";

const API = "https://dummyjson.com/products/";

function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const { singleproduct, singleProduct_loading, getSingleProduct } =
    useProductContext();
  const {
    brand,
    category,
    description,
    discountPercentage,
    images = [],
    price,
    rating,
    stock,
    title,
  } = singleproduct;

  const [img, setImg] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (singleProduct_loading) {
    return <h3>...LOADING</h3>;
  }

  const setDecress = () => {
    return quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  const setIncress = () => {
    return quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  return (
    <div className="singleproduct-container">
      <div className="single-img">
        <div className="img-container">
          {images?.map((image, i) => {
            return (
              <img
                className="toggle-img"
                src={image}
                alt={title}
                key={i}
                onClick={() => setImg(images[i])}
              />
            );
          })}
        </div>
        <div className="img-box">
          <img src={img} alt={title} />
        </div>
      </div>
      <div className="single-info">
        <h2>{title}</h2>
        <div className="flex">
          <p>Rating: {rating}</p>
          <h4>Discount: {discountPercentage}%</h4>
        </div>
        <h3>Price: ${price}</h3>
        <p>{description}</p>
        <hr />
        <p>
          Brand: <span>{brand}</span>
        </p>
        <p>
          Stock left: <span>{stock}</span>
        </p>
        <p>
          Category: <span>{category}</span>
        </p>
        <ToggleQuantity
          quantity={quantity}
          setIncress={setIncress}
          setDecress={setDecress}
        />
        <NavLink to="/cart">
          <button onClick={()=> addToCart(quantity, singleproduct)}>Add To Cart</button>
        </NavLink>
      </div>
    </div>
  );
}

export default SingleProduct;

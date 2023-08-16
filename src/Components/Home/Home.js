import React from "react";
import "./Home.css";
import FeatureProduct from "../FeatureProducts/FeatureProduct"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="web-info">
          <p>WELLCOME TO</p>
          <h2>LXELANE</h2>
          <p>
            "Unlock a world of shopping delights! Explore our curated collection
            of must-haves. Elevate your style and shop smart today!"
          </p>
          <NavLink to="/products">
          <button>Get Deals</button>
          </NavLink>
        </div>
        <div className="WEB-IMG">
          <img
            className="img-web"
            src="https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?w=996&t=st=1691512935~exp=1691513535~hmac=3833361a105d5eb033b7cf7528bd026c4ebd25575335557ac65d1da9d455a27f"
            alt="web-img"
          />
          <div className="box"></div>
        </div>
      </div>
      <FeatureProduct />
    </>
  );
}

export default Home;

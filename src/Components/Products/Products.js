import React, { useState } from "react";
import "./Products.css";
import { useFilterContex } from "../../Context/FilterContext";
import { NavLink } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Listview from "../ListView/Listview";
import Searchbar from "../Searchbar";
import Category from "../Category";

function Products() {
  const { filter_product, getFiltervalue,handleCategoryValue } = useFilterContex();
  const [view, setView] = useState(true);

  return (
    <div className="products-container">
      <div className="category-container">
        <div>
          <Searchbar />
          <div className="category-list">
            <Category />
          </div>
        </div>
      </div>
      <div className="product-filter">
        <div className="filter-section">
          <div className="view">
            <BsGridFill
              size={20}
              className="grid"
              onClick={() => setView(true)}
            />
            <FaList  className="list" onClick={() => setView(false)} />
          </div>
          <div className="filter-product-sort phone">
            <label htmlFor="products"></label>
            <select name="products" id="products" onClick={handleCategoryValue}>
              <option value="All">All</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="fragrances">Fragrances</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">Home-decoration</option>
            </select>
          </div>
          <div className="filter-product-sort">
            <label htmlFor="products"></label>
            <select name="products" id="products" onClick={getFiltervalue}>
              <option value="higher">Higher</option>
              <option value="lower">Lower</option>
              <option value="popular">Popularity</option>
              <option value="a-z">A-z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
        {view ? (
          <div className="product-section">
            {filter_product &&
              filter_product.map((product, index) => {
                return (
                  <div className="filter-card" key={product.id}>
                    <NavLink
                      className="nav"
                      to={`/singleproduct/${product.id}`}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="filter-card-img"
                        key={index}
                      />
                      <div className="filter-card-data">
                        <h5>{product.title}</h5>
                        <h5>${product.price}</h5>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        ) : (
          <Listview />
        )}
      </div>
    </div>
  );
}

export default Products;

import React from 'react'
import './listview.css'
import { useFilterContex } from "../../Context/FilterContext";
import { NavLink } from "react-router-dom";

function Listview() {
  const { filter_product } = useFilterContex();
  return (
    <div className="list-section">
    {filter_product?.map((product, index) => {
      return (
        <div className="filter-list-card" key={product.id}>
          <NavLink className="list-nav" to={`/singleproduct/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="filter-list-card-img"
              key={index}
            />
            <div className="filter-list-card-data">
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <p>{product.description}</p>
              <button>Read more</button>
            </div>
          </NavLink>
        </div>
      );
    })}
  </div>
  )
}

export default Listview
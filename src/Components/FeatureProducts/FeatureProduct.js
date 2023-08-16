import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import './FeatureProducts.css'
import {NavLink} from 'react-router-dom'

function FeatureProduct() {
  const {feature_products, isLoading, isError } = useProductContext();

  if(isLoading){
   return <h4>...LOADING</h4>
  }
  if(isError){
   return <h4>...ERROR</h4>
  }
  return (
   <>
      <h3 className="feature-title">Feature Products</h3>
     <div className="feature-container" key={Math.random()}>
      {feature_products.map((Element, index)=>{
        return (
          <NavLink className='nav' to={`/singleproduct/${Element.id}`} key={Math.random()}>
          <div className="card" key={index}>
            <div className="card-img">
              <img src={Element.thumbnail} alt="img" className="img-card" />
            </div>
            <div className="card-data">
              <p>{Element.title.slice(0,15)}</p>
              <p>${Element.price}</p>
            </div>
          </div>
          </NavLink>
        )
      })}
    </div>
   </>
  );
}

export default FeatureProduct;

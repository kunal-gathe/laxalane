import React from "react";
import { useFilterContex , } from "../Context/FilterContext";


function Category() {
  const {all_product,handleCategoryValue } = useFilterContex();

  const uniqueCategoryList =(data, proprty)=>{
      let newval = data.map(Element=>{
        return Element[proprty]
      })

     return  newval = ["All",...new Set(newval)]
  }


  const getCategoryList = uniqueCategoryList(all_product, "category");
  return (
    <div className="category-container" key={Math.random()}>
      {
        getCategoryList.map((category, index) => {
          return (
            <button onClick={handleCategoryValue} value={category} className="category-item" key={index}>
              {category}
            </button>
          );
        })
      }
    </div>
  );
}

export default Category;

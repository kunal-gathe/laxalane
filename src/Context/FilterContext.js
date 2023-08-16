import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContex = createContext();

const initialstate = {
  filter_product: [],
  all_product: [],
  filter_value: "z-a",
  filters: {
    text: "",
    category: "All",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getFiltervalue = (e) => {
    dispatch({ type: "SELECT_VALUE", payload: e.target.value });
  };

  const getsearchvalue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_SEARCH_VALUE", payload: { name, value } });
  };

  const handleCategoryValue = (e)=>{
    console.log(e.target.value);
    dispatch({type: "GET_CATEGORY_VICE_PRODUCT", payload: e.target.value});
  }

  useEffect(() => {
    dispatch({ type: "SORTING-PRODDUCT", payload: products });
  }, [products, state.filter_value]);


  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT", payload: products });
    dispatch({ type: "SEARCH_PRODUCT" });
  }, [products, state.filters, state.CategpryList, state.categoryItem]);

  return (
    <FilterContex.Provider
      value={{
        ...state,
        getFiltervalue,
        getsearchvalue,
        handleCategoryValue
      }}
    >
      {children}
    </FilterContex.Provider>
  );
};

//custome hook
export const useFilterContex = () => {
  return useContext(FilterContex);
};

import { useReducer, useContext, createContext } from "react";
import reducer from "../Reducer/ProductReducer";
import { useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  feature_products: [],
  singleproduct: {},
  singleProduct_loading: false,
};

const API = "https://dummyjson.com/products";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (API) => {
    dispatch({ type: "SET_FEATURED_LOADING" });
    try {
      const res = await axios.get(API);
      const products = await res.data.products;
      dispatch({ type: "SET_FEATURED_PRODUCT", payload: products });
    } catch (error) {
      dispatch({ type: "SET_FEATURED_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: products });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };


import reducer from "../Reducer/CartReducer";
const { useContext, useReducer, createContext, useEffect } = require("react");

const getLocalCartData =()=>{
  let newCartData = localStorage.getItem("Storage")

  if(newCartData === [] ){
    return []
  }else{
    return  JSON.parse(newCartData)
  }
}

const initialState = {
  cart:getLocalCartData(),
  cart_total: 0,
  fee:1.49
};

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (quantity, singleproduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { quantity, singleproduct } });
  };

  const setDecress = (id) => {
    dispatch({ type: "SETDCRESS", payload: id });
  };
  const setIncress = (id) => {
    dispatch({ type: "SETINCRESS", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };

  useEffect(()=>{
      localStorage.setItem("Storage", JSON.stringify(state.cart))
      dispatch({type: "CART_TOTAL_VALUE"})
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, setDecress, setIncress, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

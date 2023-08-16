function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let { quantity, singleproduct } = action.payload;
      const { id, title, price, thumbnail, stock } = singleproduct;

      let cartData = {
        id: id,
        title: title,
        price: price,
        image: thumbnail,
        stock: stock,
        quantity: quantity,
      };
      return {
        ...state,
        cart: [...state.cart, cartData],
      };
    case "SETDCRESS":
      let updateCart = state.cart.map((Element) => {
        if (Element.id === action.payload) {
          let decrement = Element.quantity - 1;

          if (decrement <= 1) {
            return {
              ...Element,
              quantity: 1,
            };
          }
          return {
            ...Element,
            quantity: decrement,
          };
        } else {
          return Element;
        }
      });

      return {
        ...state,
        cart: updateCart,
      };
    case "SETINCRESS":
      let updateCartIn = state.cart.map((Element) => {
        if (Element.id === action.payload) {
          let increment = Element.quantity + 1;

          if (increment >= Element.stock) {
            return {
              ...Element,
              increment: Element.stock,
            };
          }
          return {
            ...Element,
            quantity: increment,
          };
        } else {
          return Element;
        }
      });

      return {
        ...state,
        cart: updateCartIn,
      };

    case "REMOVEITEM":
      let remove = state.cart.filter(
        (Element) => Element.id !== action.payload
      );
      return {
        ...state,
        cart: remove,
      };

    case "CART_TOTAL_VALUE":
      let value = 0;
      state.cart.map(
        (Element) => (value = value + Element.quantity * Element.price)
      );
      return {
        ...state,
        cart_total: value,
      };

    default:
      return state;
  }
}

export default CartReducer;

const filterReducer = (state, action) => {
  if (action.type === "FILTER_PRODUCT") {
    return {
      ...state,
      filter_product: [...action.payload],
      all_product: [...action.payload],
    };
  }
  if (action.type === "SELECT_VALUE") {
    return {
      ...state,
      filter_value: action.payload,
    };
  }
  if (action.type === "SORTING-PRODDUCT") {
    let newSortingData;
    let tempSortproduct = [...action.payload];

    if (state.filter_value === "lower") {
      const sortingProduct = (a, b) => {
        return a.price - b.price;
      };
      console.log(state.filter_value);
      newSortingData = tempSortproduct.sort(sortingProduct);
    }
    if (state.filter_value === "higher") {
      const sortingProduct = (a, b) => {
        return b.price - a.price;
      };
      newSortingData = tempSortproduct.sort(sortingProduct);
    }
    if (state.filter_value === "popular") {
      const sortingProduct = (a, b) => {
        return b.rating - a.rating;
      };
      newSortingData = tempSortproduct.sort(sortingProduct);
    }
    if (state.filter_value === "a-z") {
      newSortingData = tempSortproduct.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
    if (state.filter_value === "z-a") {
      newSortingData = tempSortproduct.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return {
      ...state,
      filter_product: newSortingData,
    };
  }

  if (action.type === "UPDATE_SEARCH_VALUE") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  if (action.type === "GET_CATEGORY_VICE_PRODUCT") {
    const category = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        category: category,
      },
    };
  }

  if (action.type === "SEARCH_PRODUCT") {
    let { all_product } = state;
    let tempFilterProduct = [...all_product];

    const { text, category } = state.filters;

    if (text) {
      tempFilterProduct = tempFilterProduct.filter((Element) => {
        return Element.title.toLowerCase().includes(text);
      });
    }
    if (category !== "All")
      tempFilterProduct = tempFilterProduct.filter((Element) => {
        return Element.category === category;
      });
    return {
      ...state,
      filter_product: tempFilterProduct,
    };
  }

  return state;
};

export default filterReducer;

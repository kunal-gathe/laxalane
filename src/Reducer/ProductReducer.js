    const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_FEATURED_LOADING":
        return {
            ...state,
            isLoading: true,
        };
        case "SET_FEATURED_PRODUCT":
            const featureData =  action.payload.filter((Element)=>{
                return Element.rating >= 4.85
            })
            
        return {
            ...state,
            products: action.payload,
            feature_products: featureData,
            isLoading: false
        };
        case "SET_FEATURED_ERROR":
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
        case "SET_SINGLE_PRODUCT_LOADING":
        return {
            ...state,
            singleProduct_loading: true,
        };

        case "SET_SINGLE_PRODUCT":
           
        return {
            ...state,
            singleProduct_loading: false,
            singleproduct: action.payload,
        };

        default:
        return state;
    }


    };

    export default ProductReducer;

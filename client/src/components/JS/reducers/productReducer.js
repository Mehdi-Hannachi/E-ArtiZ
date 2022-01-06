const {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILED,
} = require("../actionsTypes/productsAcionsTypes");

const initialState = {
  loading: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    case GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    default:
      return state;
  }
};

export default productReducer;

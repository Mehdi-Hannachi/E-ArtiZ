const {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILED,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} = require("../actionsTypes/productsAcionsTypes");

const initialState = {
  loading: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
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

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    case DELETE_PRODUCT_SUCCESS:
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

    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    case DELETE_PRODUCT_FAILED:
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

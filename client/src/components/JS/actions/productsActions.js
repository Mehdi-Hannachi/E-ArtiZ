const { default: axios } = require("axios");
const {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILED,
} = require("../actionsTypes/productsAcionsTypes");

exports.getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS });

  try {
    const res = await axios.get("/product/getAllProducts");

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAILED, payload: error.res.data });
  }
};

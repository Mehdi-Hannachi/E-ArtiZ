const { default: axios } = require("axios");
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

exports.getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS });

  try {
    const res = await axios.get("/product/getAllProducts");

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAILED, payload: error.response.data });
  }
};


exports.addProduct=(newProduct)=>   async(dispatch) =>{

   dispatch({type : ADD_PRODUCT})

   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

   try {
    const res = await axios.post("/product/addProduct", newProduct ,config);

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILED, payload: error.response.data });
  }

}


exports.deleteProduct = (idUser , idProduct)=> async(dispatch)=> {

  dispatch({type : DELETE_PRODUCT})

 try {

  const res = await axios.delete(`/product/deleteProduct/${idUser}/${idProduct}`)


  dispatch({type : DELETE_PRODUCT_SUCCESS , payload :res.data})
   
 } catch (error) {

  console.log("delet error" , error)

  dispatch({type : DELETE_PRODUCT_FAILED , payload : error.response.data})

   
 }

}
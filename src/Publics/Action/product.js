import axios from "axios";

// Products
export const getProduct = () => {
  return {
    type: "GET_PRODUCTS",
    payload: axios.get(`http://localhost:8080/product`
    )
  };
};

export const getProductsDetail = id => {
  return {
    type: "GET_PRODUCTS_DETAIL",
    payload: axios.get(`http://localhost:8080/product?field=id&search=${id}`)
  };
};

export const addProduct = data => {
  return {
    type: "ADD_PRODUCTS",
    payload: axios.post(`http://localhost:8080/product`, data, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
  };
};

export const editProduct = (id, data) => {
  return {
    type: "EDIT_PRODUCTS",
    payload: axios.patch(`http://localhost:8080/product/${id}`, data, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
  };
};

export const deleteProduct = id => {
  return {
    type: "DELETE_PRODUCTS",
    payload: axios.delete(`http://localhost:8080/product/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
  };
};

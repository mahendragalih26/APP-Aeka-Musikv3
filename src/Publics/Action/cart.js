import axios from "axios";

// Products
export const getCart = () => {
  return {
    type: "GET_CART",
    payload: axios.get(`http://localhost:8080/cart`)
  };
};

export const getCartDetail = id => {
  return {
    type: "GET_CART_DETAIL",
    payload: axios.get(`http://localhost:8080/cart?field=id_user&search=${id}`)
  };
};

export const addCart = data => {
  return {
    type: "ADD_CART",
    payload: axios.post(`http://localhost:8080/cart`, data)
  };
};

export const editCart = (id, data) => {
  return {
    type: "EDIT_CART",
    payload: axios.patch(`http://localhost:8080/cart/${id}`, data)
  };
};

export const deleteCart = id => {
  return {
    type: "DELETE_CART",
    payload: axios.delete(`http://localhost:8080/cart/${id}`)
  };
};

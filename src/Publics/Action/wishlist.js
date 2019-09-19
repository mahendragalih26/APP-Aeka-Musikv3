import axios from "axios";

// Products
export const getWishlist = () => {
  return {
    type: "GET_WISHLIST",
    payload: axios.get(`http://localhost:8080/wishlist`)
  };
};

export const getWishlistDetail = id => {
  return {
    type: "GET_WISHLIST_DETAIL",
    payload: axios.get(
      `http://localhost:8080/wishlist?field=id_product&search=${id}`
    )
  };
};

export const addWishlist = data => {
  return {
    type: "ADD_WISHLIST",
    payload: axios.post(`http://localhost:8080/wishlist`, data)
  };
};

// export const editwishlist = (id, data) => {
//   return {
//     type: "EDIT_WISHLIST",
//     payload: axios.patch(`http://localhost:8080/wishlist/${id}`, data)
//   };
// };

export const deleteWishlist = id => {
  return {
    type: "DELETE_WISHLIST",
    payload: axios.delete(`http://localhost:8080/wishlist/${id}`)
  };
};

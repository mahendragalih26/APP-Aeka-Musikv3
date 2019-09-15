import axios from "axios";

// Categorys
export const getCategory = () => {
  return {
    type: "GET_CATEGORYS",
    payload: axios.get(`http://localhost:8080/category`)
  };
};

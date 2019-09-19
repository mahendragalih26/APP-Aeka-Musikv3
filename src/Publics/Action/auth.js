import axios from "axios";

// Categorys
export const login = data => {
  return {
    type: "LOGIN",
    payload: axios.post(`http://localhost:8080/auth/login`, data)
  };
};

export const register = data => {
  return {
    type: "REGISTER",
    payload: axios.post(`http://localhost:8080/auth/register`, data)
  };
};

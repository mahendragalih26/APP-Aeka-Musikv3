import axios from "axios";

// Branches
export const getBranch = () => {
  return {
    type: "GET_BRANCHES",
    payload: axios.get(`http://localhost:8080/branch`)
  };
};

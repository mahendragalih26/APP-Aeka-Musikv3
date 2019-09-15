const initialState = {
  productsList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PRODUCTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCTS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    case "GET_PRODUCTS_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PRODUCTS_DETAIL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCTS_DETAIL_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    case "ADD_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_PRODUCTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_PRODUCTS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    case "EDIT_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "EDIT_PRODUCTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "EDIT_PRODUCTS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    case "DELETE_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_PRODUCTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_PRODUCTS_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        productsList: action.payload.data.values
      };
    default:
      return state;
  }
};

export default products;

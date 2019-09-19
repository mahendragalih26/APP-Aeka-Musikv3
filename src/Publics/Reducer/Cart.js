const initialState = {
  cartList: [],
  cartDetail: [],
  cartAdd: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CART_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        cartList: action.payload.data.values
      };
    case "GET_CART_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_CART_DETAIL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CART_DETAIL_FULFILLED":
      console.log("detail cart ", action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        cartDetail: action.payload.data.values
      };
    case "ADD_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_CART_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        cartAdd: action.payload.data.values
      };
    case "EDIT_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "EDIT_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "EDIT_CART_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        wishlistList: action.payload.data.values
      };
    case "DELETE_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_CART_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        wishlistList: action.payload.data.values
      };
    default:
      return state;
  }
};

export default products;

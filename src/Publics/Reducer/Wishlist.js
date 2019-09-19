const initialState = {
  wishlistList: [],
  wishlistDetail: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_WISHLIST_FULFILLED":
      console.log("reduce wishlist = ", action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        wishlistList: action.payload.data.values
      };
    case "GET_WISHLIST_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_WISHLIST_DETAIL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_WISHLIST_DETAIL_FULFILLED":
      console.log(action.payload.data.values);
      if (action.payload.data.status !== 404) {
        return {
          // ...state,
          isLoading: false,
          isFulfilled: true,
          wishlistDetail: action.payload.data.values[0]
        };
      }
    case "ADD_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_WISHLIST_FULFILLED":
      console.log(action.payload.data.values);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        wishlistList: action.payload.data.values
      };
    // case "EDIT_WISHLIST_PENDING":
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isFulfilled: false,
    //     isRejected: false
    //   };
    // case "EDIT_WISHLIST_REJECTED":
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isRejected: true
    //   };
    // case "EDIT_WISHLIST_FULFILLED":
    //   console.log(action.payload.data.values);
    //   return {
    //     // ...state,
    //     isLoading: false,
    //     isFulfilled: true,
    //     wishlistList: action.payload.data.values
    //   };
    case "DELETE_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_WISHLIST_FULFILLED":
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

const initialState = {
  dataUser: [],
  dataRegister: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "LOGIN_FULFILLED":
      console.log("data tanpa token = ", action.payload.data.data);
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        dataUser: action.payload.data.data
      };
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_FULFILLED":
      return {
        // ...state,
        isLoading: false,
        isFulfilled: true,
        dataRegister: action.payload.data
      };
    default:
      return state;
  }
};

export default Auth;

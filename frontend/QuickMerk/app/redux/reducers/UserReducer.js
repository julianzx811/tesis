const initialState = {
  logged: false,
  productsList: [],
  token: "",
  category: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
        token: action.payload,
      };
    case "logout":
      return {
        ...initialState,
      };
    case "New_product":
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };
    case "CurrentCategory":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

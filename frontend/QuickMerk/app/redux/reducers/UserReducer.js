const initialState = {
  logged: false,
  productsList: [],
  token: "",
  category: 1,
  correo: "",
  nombre: "",
  usuarioId: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
        token: action.payload[0],
        usuarioId: action.payload[1],
        correo: action.payload[3],
        nombre: action.payload[2],
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
      case "CurrentProducts":
      return {
        ...state.productsList
      };
    default:
      return state;
  }
};

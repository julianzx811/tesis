const initialState = {
  logged: false,
  productsList: [],
  Recomendations: [],
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
        productsList: [...state.productsList, { ProductName: action.payload }],
      };
    case "CurrentCategory":
      return {
        ...state,
        category: action.payload,
      };
    case "DeleteProduct":
      const updatedProductsList = [...state.productsList];
      updatedProductsList.splice(action.payload, 1);
      console.log("debug", updatedProductsList);
      return {
        ...state,
        productsList: updatedProductsList,
      };

    case "UpdateProduct":
      const [index, updatedProduct] = action.payload;
      const UpdatedProductsList = [...state.productsList];
      updatedProductsList[index] = updatedProduct;
      return {
        ...state,
        productsList: UpdatedProductsList,
      };
    default:
      return state;
  }
};

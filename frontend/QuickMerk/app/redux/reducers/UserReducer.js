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
      const [updatedProduct, index] = action.payload;
      console.log("omg", index, updatedProduct);

      // Initialize updatedProductsList as an empty array if it doesn't exist.
      const UpdatedProductsList = [...state.productsList];

      // Check if the index is within the bounds of the array.
      if (index >= 0 && index < UpdatedProductsList.length) {
        UpdatedProductsList[index] = { ProductName: updatedProduct };

        // Return the updated state.
        return {
          ...state,
          productsList: UpdatedProductsList,
        };
      } else {
        // Handle an invalid index or other error condition, possibly by returning the original state.
        return state;
      }

    default:
      return state;
  }
};

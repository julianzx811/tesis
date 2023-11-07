export const login = (Token) => {
  return {
    type: "login",
    payload: Token,
  };
};

export const logout = () => {
  return {
    type: "logout",
  };
};

export const newProducts = (item) => {
  return {
    type: "New_product",
    payload: item,
  };
};

export const CurrentCategory = (Category) => {
  return {
    type: "CurrentCategory",
    payload: Category,
  };
};

export const DeleteProduct = (index) => {
  console.log(index);
  return {
    type: "DeleteProduct",
    payload: index,
  };
};

export const UpdateProduct = (Product, index) => {
  return {
    type: "UpdateProduct",
    payload: (Product, index),
  };
};

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
    type: "logout",
    payload: item.id,
  };
};

export const CurrentCategory = (Category) => {
  return {
    type: "CurrentCategory",
    payload: Category,
  };
};

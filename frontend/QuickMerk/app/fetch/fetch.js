import {
  EXPO_PUBLIC_LOGIN_URL,
  EXPO_PUBLIC_REGISTER_DOCUMENTS_URL,
  EXPO_PUBLIC_REGISTER_URL,
  EXPO_PUBLIC_PRODUCTS_URL,
  EXPO_PUBLIC_CATEGORIES_URL,
  EXPO_PUBLIC_CATEGORIES_PRODUCTS,
  EXPO_PUBLIC_PRODUCTS_NAME,
} from "@env";
import axios from "axios";

async function onLogin(correo, contrasena, dispatch, login, router) {
  const logmein = (array) => {
    dispatch(login(array));
  };

  await axios({
    method: "post",
    url: EXPO_PUBLIC_LOGIN_URL,
    data: {
      // correo: correo,
      // password: password,
      correo: "yulicorreo",
      password: "1234",
    },
  }).then(
    (response) => {
      if (response.status == 200) {
        logmein([response.data["token"], response.data["cuentaId"]]);
        router.replace("/account");
      }
    },
    (error) => {
      console.log(error);
    }
  );
}

async function GetDocuments({ setDocumentosArray }) {
  await axios({
    method: "get",
    url: EXPO_PUBLIC_REGISTER_DOCUMENTS_URL,
  }).then(
    (response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          setDocumentosArray((prevArray) => [...prevArray, element]);
        });
      }
    },
    (error) => {
      console.log(error);
    }
  );
}

async function registro({ setHandlerError, setModalVisible, router, usuario }) {
  axios({
    method: "post",
    url: EXPO_PUBLIC_REGISTER_URL,
    data: usuario,
  }).then(
    (response) => {
      if (response.status == 200) {
        router.replace("/");
      }
    },
    (error) => {
      console.log(error);
      setHandlerError(error);
      setModalVisible(true);
    }
  );
}

async function GetCategory({ setCategoryArray, setLoadingCategory }) {
  console.log("xd1" + setCategoryArray);
  console.log("xd2" + setLoadingCategory);
  await axios({
    method: "get",
    url: EXPO_PUBLIC_CATEGORIES_URL,
  }).then(
    (response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          setCategoryArray((prevArray) => [...prevArray, element]);
        });
      }
    },
    (error) => {
      console.log(error);
    }
  );
  setLoadingCategory(false);
}

async function GetProducts({
  Urlproducts,
  setProductsArray,
  setloadingProducts,
}) {
  await axios({
    method: "get",
    url: Urlproducts,
  }).then(
    (response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          setProductsArray((prevArray) => [...prevArray, element]);
        });
      }
    },
    (error) => {
      console.log(error);
    }
  );
  setloadingProducts(false);
}

export { onLogin, GetDocuments, registro, GetCategory, GetProducts };

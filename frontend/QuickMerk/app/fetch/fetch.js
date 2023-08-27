import {
  EXPO_PUBLIC_LOGIN_URL,
  EXPO_PUBLIC_GET_USUARIO,
  EXPO_PUBLIC_GET_CUENTA,
  EXPO_PUBLIC_REGISTER_DOCUMENTS_URL,
  EXPO_PUBLIC_REGISTER_URL,
  EXPO_PUBLIC_PRODUCTS_URL,
  EXPO_PUBLIC_CATEGORIES_URL,
  EXPO_PUBLIC_CATEGORIES_PRODUCTS,
  EXPO_PUBLIC_PRODUCTS_NAME,
} from "@env";
import axios from "axios";

async function onLogin({ correo, contrasena, dispatch, login, router, user }) {
  try {
    const response = await axios({
      method: "post",
      url: EXPO_PUBLIC_LOGIN_URL,
      data: {
        correo: "yulicorreo",
        password: "1234",
      },
    });

    if (response.status === 200) {
      var url1 = EXPO_PUBLIC_GET_USUARIO + `=${response.data["cuentaId"]}`;
      var url2 = EXPO_PUBLIC_GET_CUENTA + `=${response.data["cuentaId"]}`;
      const requests = [
        axios.get(url1, {
          headers: {
            usuarioId: user.usuarioId,
            Authorization: `Bearer ${response.data["token"]}`,
          },
        }),
        axios.get(url2, {
          headers: {
            usuarioId: user.usuarioId,
            Authorization: `Bearer ${response.data["token"]}`,
          },
        }),
      ];

      const results = await Promise.allSettled(requests);

      var userarray = [
        response.data["token"],
        response.data["cuentaId"],
        "",
        "",
      ];

      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          if (index === 0) {
            userarray[2] = result.value.data["nombre"];
          } else {
            userarray[3] = result.value.data["correo"];
          }
        }
      });

      console.log(userarray);
      dispatch(login(userarray));
      router.replace("/account");
    }
  } catch (error) {
    console.log(error);
  }
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

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
  EXPO_PUBLIC_GET_PRODUCTO,
  EXPO_PUBLIC_PATCH_CORREO,
  EXPO_PUBLIC_PATCH_CONTRASENA,
} from "@env";
import axios from "axios";
import base64 from 'react-native-base64';

async function UpdateCorreoPasword({
  lastWord,
  setLoading,
  change,
  id,
  autorisacion,
  setModalVisible,
  modalVisible,
}) {
  var Url = "";
  var Params;
  if (lastWord === "Correo") {
    Url = EXPO_PUBLIC_PATCH_CORREO + `correo=${change}&usuarioId=${id}`;
    Params = {
      correo: change,
      usuarioId: id,
    };
  } else {
    Url = EXPO_PUBLIC_PATCH_CONTRASENA + `contrasena=${change}&usuarioId=${id}`;
    Params = {
      contrasena: change,
      usuarioId: id,
    };
  }
  try {
    const response = await axios.put(Url, null, {
      params: { ...Params },
      headers: {
        Authorization: `Bearer ${autorisacion}`,
      },
    });

    if (response.status === 200) {
      setLoading(false);
      setModalVisible(!modalVisible);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getProduct({ name, setLoading }) {
  const authHeader = 'Basic ' + base64.encode(`${'yulianfromcali'}:${'diosesgrande7878'}`);
  var Url = 'https://quickmerkrecomendatioai.azurewebsites.net/api/Products/' + `${name}`;
console.log(Url)
  try {
    
    const response = await axios.get(Url, {
    headers: { 'Authorization': authHeader }
    })

    if (response.status === 200) {
      setLoading(false);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function onLogin({ correo, contrasena, dispatch, login, router, user }) {
  try {
    console.log("llego")
    const response = await axios({
      method: "post",
      url: 'https://quickmerkapi20231023180634.azurewebsites.net/Login',
      data: {
        correo: 'string',
        password: 'string',
      },
    });
    console.log("llego")

    if (response.status === 200) {
      var url1 = 'https://quickmerkapi20231023180634.azurewebsites.net/GetUsuario?usuarioId' + `=${response.data["cuentaId"]}`;
      var url2 = 'https://quickmerkapi20231023180634.azurewebsites.net/GetCuenta?usuarioId' + `=${response.data["cuentaId"]}`;
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

const authHeader = 'Basic ' + base64.encode(`${'yulianfromcali'}:${'diosesgrande7878'}`);
  axios.get('https://quickmerkrecomendatioai.azurewebsites.net/api/Products/categoria/', {
    headers: { 'Authorization': authHeader }
}).then(
    (response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          setCategoryArray((prevArray) => [...prevArray, element]);
        });
      }
    },
    (error) => {
      console.log('get products error'+error);
    }
  );
  setLoadingCategory(false);
}

async function GetProducts({
  Urlproducts,
  setProductsArray,
  setloadingProducts,
}) {
  const authHeader = 'Basic ' + base64.encode(`${'yulianfromcali'}:${'diosesgrande7878'}`);
  axios.get(Urlproducts, {
    headers: { 'Authorization': authHeader }
}).then(
    (response) => {
      if (response.status == 200) {
        response.data.forEach((element) => {
          setProductsArray((prevArray) => [...prevArray, element]);
        });
      }
    },
    (error) => {
      console.log('get products error'+error);
    }
  );
  setloadingProducts(false);
}

export {
  onLogin,
  GetDocuments,
  registro,
  GetCategory,
  GetProducts,
  getProduct,
  UpdateCorreoPasword,
};

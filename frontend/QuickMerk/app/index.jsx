import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { store } from "../app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../app/redux/actions/UserActions";
import styles from "./components/loginComponents/styles"
import {GoToRegister,Logmein,Input} from "./components/loginComponents"

export default function Page() {
  console.log(GoToRegister);
  const router = useRouter();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const dispatch = useDispatch();

  const count = useSelector((store) => store.user);

  const onLogin = () => {
    let user = {
      correo: correo,
      password: contrasena,
    };

    const logmein = (token) => {
      dispatch(login(token));
    };

    axios({
      method: "post",
      url: "https://quickmerkapi.azurewebsites.net/Login",
      data: {
        // correo: user.correo,
        // password: user.password,
        correo: "yulicorreo",
        password: "1234",
      },
    }).then(
      (response) => {
        if (response.status == 200) {
          logmein(response.data["token"]);
          router.replace("/account");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Quick Merk</Text>
        <Text style={styles.subtitle}>El mejor producto solo para ti!!</Text>
      </View>
      <Input nombre={"Email"} set={setCorreo} />
      <Input nombre={"Contraseña"} set={setContrasena} />
      <Logmein onLogin={onLogin} />
      <GoToRegister router={router} />
    </View>
  );
}
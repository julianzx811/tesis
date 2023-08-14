import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { store } from "../app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../app/redux/actions/UserActions";
import { containers, text } from "./styles";
import { GoToRegister, Logmein, Input } from "./components/loginComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {EXPO_PUBLIC_LOGIN_URL} from "@env"
export default function Page() {
  console.log(GoToRegister);
  const router = useRouter();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

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
      url: EXPO_PUBLIC_LOGIN_URL,
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
    <View style={containers({ insets }).containerLogin}>
      <View style={containers({ insets }).mainLogin}>
        <Text style={text({ insets }).title}>Quick Merk</Text>
        <Text style={text({ insets }).subtitle}>
          El mejor producto solo para ti!!
        </Text>
      </View>
      <Input nombre={"Email"} set={setCorreo} insets={insets} />
      <Input nombre={"Contraseña"} set={setContrasena} insets={insets} />
      <Logmein onLogin={onLogin} insets={insets} />
      <GoToRegister router={router} insets={insets} />
    </View>
  );
}

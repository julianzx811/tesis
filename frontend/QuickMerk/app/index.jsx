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
import { onLogin } from "./fetch/fetch";

export default function Page() {
  console.log(GoToRegister);
  const router = useRouter();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

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
      <Logmein
        onLogin={() => {
          onLogin(correo, contrasena, dispatch, login, router);
        }}
        insets={insets}
      />
      <GoToRegister router={router} insets={insets} />
    </View>
  );
}

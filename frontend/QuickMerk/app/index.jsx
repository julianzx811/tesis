import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/redux/actions/UserActions";
import { containers, text } from "./styles";
import { GoToRegister, Logmein, Input } from "./components/loginComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { onLogin } from "./fetch/fetch";
// import { store } from "../redux/store";
import { useSelector } from "react-redux";

export default function Page() {
  console.log(GoToRegister);
  const router = useRouter();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const user = useSelector((store) => store.user);
  const [userarray, setuserarray] = useState([]);

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
          onLogin({
            correo,
            contrasena,
            dispatch,
            login,
            router,
            user,
          });
        }}
        insets={insets}
      />
      <GoToRegister router={router} insets={insets} />
    </View>
  );
}

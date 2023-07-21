import { StyleSheet, Text, View, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();

  const onLogin = () => {
    let user = {
      correo: correo,
      password: contrasena,
    };
    axios({
      method: "post",
      url: "https://quickmerkapi.azurewebsites.net/Login",
      data: {
        correo: user.correo,
        password: user.password,
      },
    }).then(
      (response) => {
        if (response.status == 200) {
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

const Input = ({ nombre, set }) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={nombre}
        placeholderTextColor="#003f5c"
        onChangeText={(text) => set(text)}
      />
    </View>
  );
};

const Logmein = ({ onLogin }) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin()}>
      <Text style={styles.normalText}>LOGIN</Text>
    </TouchableOpacity>
  );
};

const GoToRegister = ({ router }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.normalText}>no tienes cuenta? </Text>
      <TouchableOpacity>
        <Text
          style={styles.register}
          onPress={() => {
            router.replace("/register");
          }}
        >
          Registrate!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#003f5c",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#fb5b5a",
  },
  subtitle: {
    fontSize: 22,
    color: "orange",
    paddingLeft: 10,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 300,
  },
  normalText: {
    color: "white",
    fontSize: 11,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  register: {
    color: "#bb0000",
    fontSize: 12,
  },
});

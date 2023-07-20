import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles/containers";
import { useRouter } from "expo-router";

const Register = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [edad, setEdad] = useState();
  const [nacimiento, setNacimiento] = useState(new Date());
  const [sexo, seSexo] = useState();
  const [direcion, setDirecion] = useState();
  const [ciudad, setCiudad] = useState();
  const [documento, setdocumento] = useState();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const [tipo_Documento_id, set_tipo_Documento_id] = useState();

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Quick Merk</Text>
          <Text style={styles.subtitle}>Registro!!</Text>
        </View>
        <View style={styles.registerContainer}>
          <Input nombre="nombre.." set={setNombre} />
          <Input nombre="apellido.." set={setApellido} />
          <Input nombre="direcion.." set={setDirecion} />
          <Input nombre="ciudad.." set={setCiudad} />
          <Input nombre="documento.." set={setdocumento} />
          <Input nombre="correo.." set={setCorreo} />
          <Input nombre="contraseña.." set={setContrasena} />
        </View>
        <BackToLogin router={router} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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

const BackToLogin = ({ router }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.normalText}>tienes cuenta? </Text>
      <TouchableOpacity>
        <Text
          style={styles.register}
          onPress={() => {
            router.replace("/");
          }}
        >
          Logueate!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

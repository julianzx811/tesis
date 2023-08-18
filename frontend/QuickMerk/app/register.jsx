import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import styles from "./styles/containers";
import { useRouter } from "expo-router";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Input,
  InputBig,
  BackToLogin,
  Datepicker,
  AgePicker,
  GenderPicker,
  RegisterButton,
  DocumentoPicker,
  Error,
} from "./components/RegisterComponents";
import {EXPO_PUBLIC_REGISTER_DOCUMENTS_URL,EXPO_PUBLIC_REGISTER_URL} from "@env"

const Register = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [edad, setEdad] = useState(8);
  const [nacimiento, setNacimiento] = useState(new Date());
  const [sexo, setSexo] = useState(1);
  const [telefono, setTelefono] = useState();
  const [direcion, setDirecion] = useState();
  const [ciudad, setCiudad] = useState();
  const [documento, setdocumento] = useState();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const [tipo_Documento_id, set_tipo_Documento_id] = useState(0);
  const insets = useSafeAreaInsets();
  const [documentosArray, setDocumentosArray] = useState([]);

  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [handlerError, setHandlerError] = useState();

  useEffect( () => {
    async function GetDocuments(){
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
    GetDocuments();
  }, []);

  const registrame = () => {
    var usuario = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      nacimiento: nacimiento,
      sexo: sexo,
      telefono: telefono,
      direcion: direcion,
      ciudad: ciudad,
      documento: documento,
      correo: correo,
      contrasena: contrasena,
      tipo_Documento_id: tipo_Documento_id,
    };
    console.log(usuario);
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
  };

  return (
    <SafeAreaView style={styles({ insets }).container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* error handler */}
        <Error
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          insets={insets}
        />
        <View style={styles({ insets }).main}>
          <Text style={styles({ insets }).title}>Quick Merk</Text>
          <Text style={styles({ insets }).subtitle}>Registro!!</Text>
        </View>
        <View style={styles({ insets }).registerContainer}>
          <View style={styles({ insets }).row}>
            <Input nombre="nombre.." set={setNombre} insets={insets} />
            <Input nombre="apellido.." set={setApellido} insets={insets} />
          </View>
          <View style={styles({ insets }).row}>
            <Text style={styles({ insets }).addsome}>Edad: </Text>
            <AgePicker setEdad={setEdad} Edad={edad} />
          </View>
          <View style={styles({ insets }).row}>
            <Text style={styles({ insets }).addsome}>Nacimiento: </Text>
            <Datepicker
              Date={setNacimiento}
              Nacimiento={nacimiento}
              insets={insets}
            />
          </View>
          <View style={styles({ insets }).row}>
            <Text style={styles({ insets }).addsome}>Genero:</Text>
            <GenderPicker sex={sexo} SetSexo={setSexo} />
          </View>
          <InputBig nombre="telefono.." set={setTelefono} insets={insets} />
          <InputBig nombre="direcion.." set={setDirecion} insets={insets} />
          <InputBig nombre="ciudad.." set={setCiudad} insets={insets} />
          <InputBig nombre="correo.." set={setCorreo} insets={insets} />
          <InputBig nombre="contraseña.." set={setContrasena} insets={insets} />
          <View style={styles({ insets }).row}>
            <DocumentoPicker
              documento={tipo_Documento_id}
              setDocumento={set_tipo_Documento_id}
              documentos={documentosArray}
            />
            <Input nombre="documento.." set={setdocumento} insets={insets} />
          </View>
          <RegisterButton registrame={registrame} insets={insets} />
        </View>
        <BackToLogin router={router} insets={insets} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

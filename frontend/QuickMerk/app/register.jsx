import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import styles from "./styles/containers";
import { useRouter } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InputSpinner from "react-native-input-spinner";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

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

  const [documentosArray, setDocumentosArray] = useState([]);

  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [handlerError, setHandlerError] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://quickmerkapi.azurewebsites.net/GetDocumentos",
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
      url: "https://quickmerkapi.azurewebsites.net/CreateUsuario",
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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* error handler */}
        <Error modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <View style={styles.main}>
          <Text style={styles.title}>Quick Merk</Text>
          <Text style={styles.subtitle}>Registro!!</Text>
        </View>
        <View style={styles.registerContainer}>
          <Input nombre="nombre.." set={setNombre} />
          <Input nombre="apellido.." set={setApellido} />
          <AgePicker setEdad={setEdad} Edad={edad} />
          <Datepicker Date={setNacimiento} Nacimiento={nacimiento} />
          <GenderPicker sex={sexo} SetSexo={setSexo} />
          <Input nombre="telefono.." set={setTelefono} />
          <Input nombre="direcion.." set={setDirecion} />
          <Input nombre="ciudad.." set={setCiudad} />
          <Input nombre="documento.." set={setdocumento} />
          <Input nombre="correo.." set={setCorreo} />
          <Input nombre="contraseña.." set={setContrasena} />
          <DocumentoPicker
            documento={tipo_Documento_id}
            setDocumento={set_tipo_Documento_id}
            documentos={documentosArray}
          />
          <RegisterButton registrame={registrame} />
        </View>
        <BackToLogin router={router} />
      </ScrollView>
    </SafeAreaView>
  );
};

const DocumentoPicker = ({ documento, setDocumento, documentos }) => {
  console.log(documentos);
  return (
    <View>
      <Picker
        selectedValue={documento}
        onValueChange={(itemValue, itemIndex) => setDocumento(itemIndex + 1)}
      >
        {documentos.map((element, index) => (
          <Picker.Item key={index + 1} label={element} value={index} />
        ))}
      </Picker>
    </View>
  );
};

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

const Datepicker = ({ Date, Nacimiento }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    Date(date);
    hideDatePicker();
  };
  return (
    <View>
      <Button title={Nacimiento.toDateString()} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const AgePicker = ({ setEdad, edad }) => {
  return (
    <View>
      <InputSpinner
        max={100}
        min={10}
        step={2}
        colorMax={"#f04048"}
        colorMin={"#40c5f4"}
        value={edad}
        onChange={(num) => {
          setEdad(num);
        }}
      />
    </View>
  );
};

const GenderPicker = ({ sex, SetSexo }) => {
  return (
    <View>
      <Picker
        // style={styles.picker}
        selectedValue={sex}
        onValueChange={(itemValue) => SetSexo(itemValue)}
      >
        <Picker.Item label="Femenino" value="1" />
        <Picker.Item label="Masculino" value="2" />
      </Picker>
    </View>
  );
};

const RegisterButton = ({ registrame }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          registrame();
        }}
      >
        <Text style={styles.normalText}>Registrame!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Error = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Algo salio mal :o</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Volver al registro</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Register;

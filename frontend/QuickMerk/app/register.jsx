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
          <View style={styles.row}>
            <Input nombre="nombre.." set={setNombre} />
            <Input nombre="apellido.." set={setApellido} />
          </View>
          <View style={styles.row}>
            <Text style={styles.addsome}>Edad: </Text>
            <AgePicker setEdad={setEdad} Edad={edad} />
          </View>
          <View style={styles.row}>
            <Text style={styles.addsome}>Nacimiento: </Text>
            <Datepicker Date={setNacimiento} Nacimiento={nacimiento} />
          </View>
          <View style={styles.row}>
            <Text style={styles.addsome}>Genero:</Text>
            <GenderPicker sex={sexo} SetSexo={setSexo} />
          </View>
          <InputBig nombre="telefono.." set={setTelefono} />
          <InputBig nombre="direcion.." set={setDirecion} />
          <InputBig nombre="ciudad.." set={setCiudad} />
          <InputBig nombre="correo.." set={setCorreo} />
          <InputBig nombre="contraseña.." set={setContrasena} />
          <View style={styles.row}>
            <DocumentoPicker
              documento={tipo_Documento_id}
              setDocumento={set_tipo_Documento_id}
              documentos={documentosArray}
            />
            <Input nombre="documento.." set={setdocumento} />
          </View>
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
        style={{ width: 130, marginLeft: 20 }}
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

const InputBig = ({ nombre, set }) => {
  return (
    <View style={styles.inputViewBig}>
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
    <View style={styles.row2}>
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
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text>{Nacimiento.toDateString()}</Text>
      </TouchableOpacity>
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
        shadow={true}
        colorLeft={"grey"}
        colorRight={"grey"}
        width={130}
        height={35}
        skin="square"
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
        style={{ width: 160 }}
        selectedValue={sex}
        onValueChange={(itemValue) => SetSexo(itemValue)}
      >
        <Picker.Item label="Femenino" value="0" />
        <Picker.Item label="Masculino" value="1" />
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

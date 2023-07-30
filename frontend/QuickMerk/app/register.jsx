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
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

  const insets = useSafeAreaInsets();
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

const Input = ({ nombre, set, insets }) => {
  return (
    <View style={styles({ insets }).inputView}>
      <TextInput
        style={styles({ insets }).inputText}
        placeholder={nombre}
        placeholderTextColor="#003f5c"
        onChangeText={(text) => set(text)}
      />
    </View>
  );
};

const InputBig = ({ nombre, set, insets }) => {
  return (
    <View style={styles({ insets }).inputViewBig}>
      <TextInput
        style={styles({ insets }).inputText}
        placeholder={nombre}
        placeholderTextColor="#003f5c"
        onChangeText={(text) => set(text)}
      />
    </View>
  );
};

const BackToLogin = ({ router, insets }) => {
  return (
    <View style={styles({ insets }).row2}>
      <Text style={styles({ insets }).normalText}>tienes cuenta? </Text>
      <TouchableOpacity>
        <Text
          style={styles({ insets }).register}
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

const Datepicker = ({ Date, Nacimiento, insets }) => {
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
      <TouchableOpacity
        style={styles({ insets }).button}
        onPress={showDatePicker}
      >
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

const RegisterButton = ({ registrame, insets }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles({ insets }).loginBtn}
        onPress={() => {
          registrame();
        }}
      >
        <Text style={styles({ insets }).normalText}>Registrame!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Error = ({ modalVisible, setModalVisible, insets }) => {
  return (
    <View style={styles({ insets }).centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles({ insets }).centeredView}>
          <View style={styles({ insets }).modalView}>
            <Text style={styles({ insets }).modalText}>Algo salio mal :o</Text>
            <Pressable
              style={[
                styles({ insets }).button,
                styles({ insets }).buttonClose,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles({ insets }).textStyle}>
                Volver al registro
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Register;

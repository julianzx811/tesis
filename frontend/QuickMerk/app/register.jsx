import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
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
  const [tipo_Documento_id, set_tipo_Documento_id] = useState();

  const [documentosArray, setDocumentosArray] = useState([]);

  const router = useRouter();

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Input nombre="direcion.." set={setDirecion} />
          <Input nombre="direcion.." set={setDirecion} />
          <Input nombre="ciudad.." set={setCiudad} />
          <Input nombre="documento.." set={setdocumento} />
          <Input nombre="correo.." set={setCorreo} />
          <Input nombre="contraseña.." set={setContrasena} />
          <DocumentoPicker
            documento={documentosArray[0]}
            setDocumento={set_tipo_Documento_id}
            documentos={documentosArray}
          />
          <RegisterButton />
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

const RegisterButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
        <Text style={styles.normalText}>Registrame!</Text>
      </TouchableOpacity>
    </View>
  );
};

const DocumentoPicker = ({ documento, setDocumento, documentos }) => {
  console.log(documentos);
  return (
    <View>
      <Picker
        // style={styles.picker}
        selectedValue={documento}
        onValueChange={(itemValue) => setDocumento(itemValue)}
      >
        {documentos.map((element, index) => (
          <Picker.Item
            key={index + 1}
            label={element.label}
            value={element.value}
          />
        ))}
      </Picker>
    </View>
  );
};

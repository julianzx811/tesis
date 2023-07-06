import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import styles from "../styles/register";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-gesture-handler";
import { Touchable } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Register = ({ navigation }) => {
  //Fecha
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (fecha) => {
    setDate(fecha);
    hideDatePicker();
  };
  //Edad
  const [edad, setEdad] = useState(8);
  //lista
  const [selectedLanguage, setSelectedLanguage] = useState();
  //icon
  const icon = <FontAwesome5 name={"comments"} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      {/* nombre */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="nombre"
          placeholderTextColor="#003f5c"
          textAlign="center"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mi appellido es"
          placeholderTextColor="#003f5c"
          textAlign="center"
        ></TextInput>
      </View>
      {/* edad */}
      <View style={styles.row}>
        <Text style={styles.text}>cuantos años tienes?</Text>
        <NumericInput
          type="up-down"
          minValue={8}
          maxValue={100}
          onChange={(value) => setEdad(value)}
          rounded={true}
          totalWidth={50}
          totalHeight={25}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>en que fecha naciste</Text>
        <View>
          <Button title={date.toLocaleDateString()} onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>como te identificas</Text>
        <Picker
          style={{ height: 0, width: 140 }}
          itemStyle={{ color: "black" }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          enabled={true}
          mode="dialog"
        >
          <Picker.Item label="hombre" value="hombre" />
          <Picker.Item label="mujer" value="mujer" />
        </Picker>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Telefono"
          placeholderTextColor="#003f5c"
          textAlign="center"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Direcion en donde vives"
          placeholderTextColor="#003f5c"
          textAlign="center"
        ></TextInput>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>en que ciudad vives</Text>
        <Picker
          style={{ height: 0, width: 140 }}
          itemStyle={{ color: "black" }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          enabled={true}
          mode="dialog"
        >
          <Picker.Item label="Cali" value="Cali" />
          <Picker.Item label="Bogota" value="Bogota" />
          <Picker.Item label="Medellin" value="Medellin" />
        </Picker>
      </View>
      <View style={styles.row}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Documento de identidad"
            placeholderTextColor="#003f5c"
            textAlign="center"
          ></TextInput>
          <Picker
            style={{ height: 0, width: 140 }}
            itemStyle={{ color: "black" }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            enabled={true}
            mode="dialog"
          >
            <Picker.Item label="CC" value="CC" />
            <Picker.Item label="TI" value="TI" />
            <Picker.Item label="chamo" value="chamo" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.replace("Menu")}>
          Registrame
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

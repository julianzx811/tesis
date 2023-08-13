import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function GenderPicker ({ sex, SetSexo }) {
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
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function DocumentoPicker ({ documento, setDocumento, documentos }) {
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
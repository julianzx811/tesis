import { TextInput, View,  } from "react-native";
import styles from "./styles";

export default function Input ({ nombre, set })  {
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
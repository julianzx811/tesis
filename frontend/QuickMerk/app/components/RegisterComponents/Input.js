import { View, TextInput } from "react-native";
import styles from "../../styles/containers";

export default function Input ({ nombre, set, insets }) {
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
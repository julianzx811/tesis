import { View, TextInput } from "react-native";
import { containers, text } from "../../styles";

export default function Input({ nombre, set, insets }) {
  return (
    <View style={containers({ insets }).inputView}>
      <TextInput
        style={text({ insets }).inputText}
        placeholder={nombre}
        placeholderTextColor="#003f5c"
        onChangeText={(text) => set(text)}
      />
    </View>
  );
}

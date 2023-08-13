import { View, TouchableOpacity, Text } from "react-native";
import { buttons, text } from "../../styles";

export default function RegisterButton({ registrame, insets }) {
  return (
    <View>
      <TouchableOpacity
        style={buttons({ insets }).RegisterBtn}
        onPress={() => {
          registrame();
        }}
      >
        <Text style={text({ insets }).normalText}>Registrame!</Text>
      </TouchableOpacity>
    </View>
  );
}

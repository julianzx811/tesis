import { TouchableOpacity, Text, View } from "react-native";
import { containers, text } from "../../styles";

export default function GoToRegister({ router, insets }) {
  return (
    <View style={containers({ insets }).row}>
      <Text style={text({ insets }).normalText}>no tienes cuenta? </Text>
      <TouchableOpacity>
        <Text
          style={text({ insets }).register}
          onPress={() => {
            router.replace("/register");
          }}
        >
          Registrate!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

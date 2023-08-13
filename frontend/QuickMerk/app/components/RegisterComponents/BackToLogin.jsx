import { View, Text, TouchableOpacity } from "react-native";
import { containers, text } from "../../styles";

export default function BackToLogin({ router, insets }) {
  return (
    <View style={containers({ insets }).row2}>
      <Text style={text({ insets }).normalText}>tienes cuenta? </Text>
      <TouchableOpacity>
        <Text
          style={text({ insets }).register}
          onPress={() => {
            router.replace("/");
          }}
        >
          Logueate!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

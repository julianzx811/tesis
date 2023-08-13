import { TouchableOpacity, Text } from "react-native";
import { buttons, text } from "../../styles";

export default function Logmein({ onLogin, insets }) {
  return (
    <TouchableOpacity
      style={buttons({ insets }).loginBtn}
      onPress={() => onLogin()}
    >
      <Text style={text({ insets }).normalText}>LOGIN</Text>
    </TouchableOpacity>
  );
}

import { TouchableOpacity , Text} from "react-native";
import styles from "./styles";

export default function Logmein ({ onLogin }) {
    return (
      <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin()}>
        <Text style={styles.normalText}>LOGIN</Text>
      </TouchableOpacity>
    );
  };


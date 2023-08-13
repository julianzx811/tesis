import { TouchableOpacity , Text, View,  } from "react-native";
import styles from "./styles";

export default function GoToRegister  ({ router }) {
    return (
      <View style={styles.row}>
        <Text style={styles.normalText}>no tienes cuenta? </Text>
        <TouchableOpacity>
          <Text
            style={styles.register}
            onPress={() => {
              router.replace("/register");
            }}
          >
            Registrate!
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
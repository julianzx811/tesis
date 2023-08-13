import { View, TouchableOpacity , Text} from "react-native";
import styles from "../../styles/containers";

export default function RegisterButton ({ registrame, insets }) {
    return (
      <View>
        <TouchableOpacity
          style={styles({ insets }).loginBtn}
          onPress={() => {
            registrame();
          }}
        >
          <Text style={styles({ insets }).normalText}>Registrame!</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
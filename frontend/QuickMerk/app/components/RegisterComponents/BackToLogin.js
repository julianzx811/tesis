import { View , 
Text, TouchableOpacity} from "react-native";
import styles from "../../styles/containers";

export default function BackToLogin ({ router, insets }) {
    return (
      <View style={styles({ insets }).row2}>
        <Text style={styles({ insets }).normalText}>tienes cuenta? </Text>
        <TouchableOpacity>
          <Text
            style={styles({ insets }).register}
            onPress={() => {
              router.replace("/");
            }}
          >
            Logueate!
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
import { View ,Modal,Pressable, Text} from "react-native";
import styles from "../../styles/containers";

export default function Error ({ modalVisible, setModalVisible, insets }) {
    return (
      <View style={styles({ insets }).centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles({ insets }).centeredView}>
            <View style={styles({ insets }).modalView}>
              <Text style={styles({ insets }).modalText}>Algo salio mal :o</Text>
              <Pressable
                style={[
                  styles({ insets }).button,
                  styles({ insets }).buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles({ insets }).textStyle}>
                  Volver al registro
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
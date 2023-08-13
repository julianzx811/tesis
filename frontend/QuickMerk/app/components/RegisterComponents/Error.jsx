import { View, Modal, Pressable, Text } from "react-native";
import { containers, text, buttons } from "../../styles";

export default function Error({ modalVisible, setModalVisible, insets }) {
  return (
    <View style={containers({ insets }).centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={containers({ insets }).centeredView}>
          <View style={containers({ insets }).modalView}>
            <Text style={text({ insets }).modalText}>Algo salio mal :o</Text>
            <Pressable
              style={[
                buttons({ insets }).button,
                buttons({ insets }).buttonClose,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={text({ insets }).textStyle}>Volver al registro</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

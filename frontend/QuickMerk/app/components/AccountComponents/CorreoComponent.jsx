import { Alert, Modal, Text, Pressable, View } from "react-native";
import { modals } from "../../styles";

export default function CorreoComponent({
  modalVisible,
  setModalVisible,
  insets,
}) {
  return (
    <View style={modals({ insets }).centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modals({ insets }).centeredView}>
          <View style={modals({ insets }).modalView}>
            <Text style={modals({ insets }).modalText}>Hello World!</Text>
            <Pressable
              style={[
                modals({ insets }).button,
                modals({ insets }).buttonClose,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modals({ insets }).textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

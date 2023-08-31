import { Alert, Modal, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { ButtonGroup } from "@rneui/themed";
import { Input } from "../loginComponents";
import { useState } from "react";
import { modals } from "../../styles";
import { useEffect } from "react";
import { UpdateCorreoPasword } from "../../fetch/fetch";
import { useSelector } from "react-redux";

export default function ModalComponent({
  modalVisible,
  setModalVisible,
  insets,
  change,
  newchange,
  lastWord,
}) {
  const [input, setinput] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const id = useSelector((store) => store.user.usuarioId);
  const autorisacion = useSelector((store) => store.user.token);
  useEffect(() => {
    setSelectedIndex(0);
  }, []);
  const update = async () => {
    await UpdateCorreoPasword({
      setLoading,
      lastWord,
      change: input,
      id,
      autorisacion,
      setModalVisible,
      modalVisible,
    });
  };
  return (
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
        <View
          style={[modals({ insets }).modalView, { backgroundColor: "#393a3b" }]}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <View>
              <Text style={modals({ insets }).modalText}>{newchange}</Text>
              <Input nombre={change} set={setinput} insets={insets} />
              <ButtonGroup
                buttons={[change, "Cancelar"]}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                  setSelectedIndex(value);
                  if (value == 1) {
                    setModalVisible(!modalVisible);
                  } else {
                    setLoading(true);
                    update();
                  }
                }}
                containerStyle={{ marginBottom: 20 }}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { containers } from "../../styles";
import ModalComponent from "./ModalComponent";
import { modals } from "../../styles";

export default function CorreoComponent({
  modalVisible,
  setModalVisible,
  insets,
  lastWord,
}) {
  var change = `Cambiar ${lastWord}`;
  var newchange = `Nuevo ${lastWord}`;

  return (
    <View style={modals({ insets }).centeredView}>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        insets={insets}
        change={change}
        newchange={newchange}
        lastWord={lastWord}
      />
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../../styles/containers";
import React from "react";
import CorreoComponent from "./CorreoComponent";
import { useState } from "react";

export default function ItemComponent({ label, icon, insets }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
      style={{ backgroundColor: "#01283b", borderRadius: 10 }}
    >
      <CorreoComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        insets={insets}
      />
      <View style={styles({ insets }).row}>
        <Text style={styles({ insets }).rowLabel}>{label}</Text>

        <View style={styles({ insets }).rowSpacer} />
        <Ionicons color="#ababab" name="caret-forward-outline" size={22} />
      </View>
    </TouchableOpacity>
  );
}

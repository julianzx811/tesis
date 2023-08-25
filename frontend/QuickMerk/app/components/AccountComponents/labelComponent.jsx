import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../../styles/containers";
import React from "react";

export default function ItemComponent({ label, icon, insets }) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles({ insets }).row}>
        <Text style={styles({ insets }).rowLabel}>{label}</Text>

        <View style={styles({ insets }).rowSpacer} />
        <Ionicons color="#ababab" name="caret-forward-outline" size={22} />
      </View>
    </TouchableOpacity>
  );
}

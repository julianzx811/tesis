import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../styles/containers";
import MapView from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Maps = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: "#003f5c" }}>
      <MapView style={styles.map} />
    </View>
  );
};

export default Maps;

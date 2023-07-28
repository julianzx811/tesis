import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../styles/containers";
import MapView from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Maps = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles({ insets }).container}>
      <MapView style={styles({ insets }).map} />
    </View>
  );
};

export default Maps;

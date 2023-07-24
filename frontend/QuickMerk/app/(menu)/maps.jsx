import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../styles/containers";
import MapView from "react-native-maps";
const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

export default Maps;

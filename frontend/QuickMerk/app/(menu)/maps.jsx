import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { containers } from "../styles";
import MapView from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Maps = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={containers({ insets }).container}>
      <MapView style={containers({ insets }).map} />
    </View>
  );
};

export default Maps;

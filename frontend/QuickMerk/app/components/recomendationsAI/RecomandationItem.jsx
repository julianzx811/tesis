import { View, Text } from "react-native";
import React from "react";

export default function RecomandationProduct({ producto, index }) {
  return (
    <View>
      <Text>{producto.ProductName}</Text>
      <Text>{index}</Text>
    </View>
  );
}

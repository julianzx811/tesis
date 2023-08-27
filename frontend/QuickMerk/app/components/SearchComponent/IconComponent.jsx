import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IconComponent({
  Categoria,
  icono,
  UpdateProducts,
  id,
}) {
  return (
    <View style={{ paddingLeft: 10, alignItems: "center" }}>
      <Ionicons
        color="#ababab"
        name={icono}
        size={50}
        onPress={() => {
          console.log(id);
          UpdateProducts(id);
        }}
      />
      <Text>{Categoria}</Text>
    </View>
  );
}

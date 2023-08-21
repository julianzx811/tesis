import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IconComponent({
  Categoria,
  icono,
  id,
  updateProducts,
  setcategory,
}) {
  return (
    <View>
      <Ionicons
        color="#ababab"
        name={icono}
        size={50}
        onPress={() => {
          setcategory(id);
          updateProducts();
        }}
      />
      <Text>{Categoria}</Text>
    </View>
  );
}

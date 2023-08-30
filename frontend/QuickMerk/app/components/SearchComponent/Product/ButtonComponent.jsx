import React from "react";
import { Button } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ButtonComponent() {
  return (
    <Button
      title="LOG IN"
      buttonStyle={{
        backgroundColor: "green",
        borderWidth: 2,
        borderColor: "green",
        borderRadius: 30,
      }}
      containerStyle={{
        padding: 15,
      }}
      titleStyle={{ fontWeight: "bold" }}
    >
      Añadir al carrito
      <Ionicons
        name="cart"
        color="white"
        size={25}
        style={{ paddingLeft: 5 }}
      />
    </Button>
  );
}

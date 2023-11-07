import { View, ScrollView } from "react-native";
import React from "react";
import { containers, text } from "../../styles";
import { useSelector } from "react-redux";
import { TextInputComponent, ProductsComponent } from "./index";

export default function RecomendationComponent({ insets }) {
  const RecomendationList = useSelector((store) => store.user.Recomendations);
  console.log("recomendaciones", RecomendationList);
  return (
    <View style={containers({ insets }).simpleContainer}>
      <ScrollView>
        {RecomendationList.map(
          (precio, ProductName, categoria, link, Descripcion, Imagen) => (
            <TextInputComponent insets={insets} />
          )
        )}
      </ScrollView>
    </View>
  );
}

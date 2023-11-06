import { View, ScrollView } from "react-native";
import React from "react";
import { containers, text } from "../../styles";
import { useSelector } from "react-redux";
import { TextInputComponent, ProductsComponent } from "./index";

export default function RecomendationComponent({ insets }) {
  const ProductsList = useSelector((store) => store.user.productsList);
  return (
    <View style={containers({ insets }).simpleContainer}>
      <ProductsComponent />
      <ScrollView>
        {ProductsList.map(
          (precio, ProductName, categoria, link, Descripcion, Imagen) => (
            <TextInputComponent insets={insets} />
          )
        )}
      </ScrollView>
    </View>
  );
}

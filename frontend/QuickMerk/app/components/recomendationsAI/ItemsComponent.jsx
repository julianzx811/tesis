import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { TextInputComponent, ProductsComponent } from "./index";
import { RecomendationComponent, AddProductComponent } from "./index";
import { containers } from "../../styles";
import { useSelector } from "react-redux";

export default function ItemsComponent({ insets }) {
  const ProductsList = useSelector((store) => store.user.productsList);
  console.log(ProductsList);
  return (
    <View style={containers({ insets }).simpleContainer}>
      <ProductsComponent />
      <ScrollView>
        {ProductsList.map((ProductName) => (
          <TextInputComponent insets={insets} />
        ))}
      </ScrollView>
      <AddProductComponent AddProduct={insets} />
    </View>
  );
}

import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { TextInputComponent, ProductsComponent } from "./index";
import { AddProductComponent } from "./index";
import { containers } from "../../styles";

export default function ItemsComponent({
  insets,
  ProductsList,
  deleteProduct,
}) {
  return (
    <View style={containers({ insets }).simpleContainer}>
      <ProductsComponent
        insets={insets}
        deleteProduct={deleteProduct}
        ProductsList={ProductsList}
      />
      <AddProductComponent />
    </View>
  );
}

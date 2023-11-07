import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TextInputComponent } from "./index";

export default function ProductsComponent({
  insets,
  deleteProduct,
  ProductsList,
}) {
  console.log("ProductsList", ProductsList);
  return (
    <ScrollView>
      {ProductsList.map((Product, index) => (
        <TextInputComponent
          insets={insets}
          ProductName={Product.ProductName}
          key={index}
          index={index}
          deleteProduct={deleteProduct}
        />
      ))}
    </ScrollView>
  );
}

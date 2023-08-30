import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

export default function imageSlider() {
  const image = [
    require("../../../assets/carrito.png"),
    require("../../../assets/product.png"),
    require("../../../assets/avatar.png"),
  ];
  return <SliderBox images={image} sliderBoxHeight={500} />;
}

const styles = StyleSheet.create({});

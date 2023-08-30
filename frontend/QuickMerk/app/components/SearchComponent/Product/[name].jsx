import {
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers, buttons, text } from "../../../styles";
import { getProduct } from "../../../fetch/fetch";
import { useState, useEffect } from "react";
import { ButtonComponent, DetailsComponent, ImageSlider } from "./";

export default function Product({}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { name } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const images = [
    require("../../../assets/carrito.png"),
    require("../../../assets/avatar.png"),
    require("../../../assets/product.png"),
  ];
  var precio = `$ ${product.precio}`;
  const GettingDaProduct = async (productName) => {
    try {
      const productResponse = await getProduct({
        name: productName,
        setLoading,
      });
      console.log("productResponse" + productResponse.ProductName);
      setProduct(productResponse);
      console.log("productResponse1" + product.ProductName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GettingDaProduct(name);
  }, []);
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      {loading ? (
        <ActivityIndicator style={containers({ insets }).simpleContainer} />
      ) : (
        <View>
          <Appbar.BackAction
            onPress={() => {
              router.push("/Search");
            }}
          />
          <Appbar.Content />
          <View style={{ alignItems: "center" }}>
            <Text style={text({ insets }).title}>{product.ProductName}</Text>
          </View>
          <ImageSlider />
          <DetailsComponent Descripcion={product.Descripcion} precio={precio} />
          <ButtonComponent />
        </View>
      )}
    </SafeAreaView>
  );
}

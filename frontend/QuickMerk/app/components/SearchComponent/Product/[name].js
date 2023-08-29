import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers, buttons, text } from "../../../styles";
import { getProduct } from "../../../fetch/fetch";
import { useState } from "react";
import { useEffect } from "react";
export default function Product({}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { name } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const GettingDaProduct = async (productName) => {
    try {
      const productResponse = await getProduct({
        name: productName,
        setLoading,
      });
      console.log("productResponse" + productResponse.ProductName);
      setProduct(productResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GettingDaProduct(name);
  }, []);
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            router.push("/Search");
          }}
        />
        <Appbar.Content title={name} />
      </Appbar.Header>

      {loading ? (
        <ActivityIndicator style={containers({ insets }).simpleContainer} />
      ) : (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#495b63",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#003f5c",
              paddingBottom: 100,
              borderRadius: 20,
            }}
          >
            <View style={{ borderRadius: 20 }}>
              <Image source={require("../../../assets/carrito.png")} />
            </View>
            <View style={{ borderRadius: 20 }}>
              <Text>{product.ProductName}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={buttons({ insets }).loginBtn}
            onPress={() => {}}
          >
            <Text style={text({ insets }).normalText}>Añadir al carrito</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers, buttons, text } from "../../../styles";

export default function Product({}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { name } = useSearchParams();
  return (
    <View>
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              router.push("/Search");
            }}
          />
          <Appbar.Content title={name} />
        </Appbar.Header>
      </View>
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
            <Text>wtfff</Text>
          </View>
        </View>

        <TouchableOpacity
          style={buttons({ insets }).loginBtn}
          onPress={() => {}}
        >
          <Text style={text({ insets }).normalText}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

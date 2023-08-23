import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

export default function Product({}) {
  const { name } = useSearchParams();
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

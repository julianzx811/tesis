import { Stack, useSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Id = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `bienvenido ${id}` }} />
      <Text>usuario dinosaurio {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Id;

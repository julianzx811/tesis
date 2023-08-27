import { Text, Card, Button, Icon } from "@rneui/themed";
import { Link } from "expo-router";
import React from "react";
import { containers } from "../../styles";
import { Pressable } from "react-native";

export default function ProductsComponent({
  productName,
  ProductId,
  href,
  Descripcion,
  insets,
}) {
  console.log(href);
  return (
    <Card key={ProductId}>
      <Card.Title>{productName}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
        }}
      />
      <Text style={{ marginBottom: 10 }}>{Descripcion}</Text>
      <Link href={href} style={containers({ insets }).button}>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </Card>
  );
}

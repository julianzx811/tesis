import { Text, Card, Button, Icon } from "@rneui/themed";
import { Link } from "expo-router";
import React from "react";

export default function ProductsComponent({
  productName,
  ProductId,
  href,
  Descripcion,
}) {
  console.log(href);
  return (
    <Link href={href}>
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

        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    </Link>
  );
}

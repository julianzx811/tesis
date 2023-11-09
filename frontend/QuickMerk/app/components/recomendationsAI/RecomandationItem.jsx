import { View } from "react-native";
import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function RecomandationProduct({ producto }) {
  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">{producto.ProductName}</Text>
        <Text variant="bodyMedium">{producto.Descripcion}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
}

import { ListItem } from "@rneui/themed";
import React from "react";

export default function DetailsComponent({ Descripcion, precio }) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title c>Descripcion</ListItem.Title>
        <ListItem.Subtitle>{Descripcion}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content>
        <ListItem.Title>precio</ListItem.Title>
        <ListItem.Subtitle>{precio}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

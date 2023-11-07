import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { containers, text } from "../../styles";
import { useSelector } from "react-redux";
export default function TextInputComponent({
  insets,
  ProductName,
  index,
  deleteProduct,
}) {
  const [text, setText] = React.useState(ProductName);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={containers({ insets }).inputcontainer}
        outlineStyle={{ borderRadius: 10 }}
      />
      <TouchableOpacity onPress={() => deleteProduct(index)}>
        <Button
          icon="delete"
          mode="contained"
          color="red"
          labelStyle={{ color: "white" }}
        />
      </TouchableOpacity>
    </View>
  );
}

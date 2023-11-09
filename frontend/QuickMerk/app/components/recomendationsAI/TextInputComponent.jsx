import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { containers } from "../../styles";
import { useDispatch } from "react-redux";
import { UpdateProduct } from "../../redux/actions/UserActions";

export default function TextInputComponent({
  insets,
  ProductName,
  index,
  deleteProduct,
}) {
  const [text, setText] = React.useState(ProductName);
  const dispatch = useDispatch();
  const changetext = async (text) => {
    setText(text);
    await dispatch(UpdateProduct(text, index));
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        value={text}
        onChangeText={(text) => changetext(text)}
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

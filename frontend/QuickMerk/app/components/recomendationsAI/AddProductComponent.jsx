import React, { useState } from "react";
import { Searchbar, Button } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { newProducts } from "../../redux/actions/UserActions";

export default function AddProductComponent({ getRecomendations }) {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearchIconPress = () => {
    dispatch(newProducts(searchQuery));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
      }}
    >
      <Searchbar
        placeholder="Añade un producto"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={"plus"}
        onIconPress={handleSearchIconPress}
        style={{ flex: 1 }} // Para que la barra de búsqueda ocupe todo el espacio disponible
      />
      <TouchableOpacity onPress={() => getRecomendations()}>
        <Button
          icon="send"
          mode="contained"
          labelStyle={{ color: "white" }}
          label="Delete"
        />
      </TouchableOpacity>
    </View>
  );
}

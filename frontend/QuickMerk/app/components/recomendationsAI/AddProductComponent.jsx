import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { newProducts } from "../../redux/actions/UserActions";
export default function AddProductComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearchIconPress = () => {
    dispatch(newProducts(searchQuery));
  };

  return (
    <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20 }}>
      <Searchbar
        placeholder="Añade un producto"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={"plus"}
        onIconPress={handleSearchIconPress} // Usar la función de manejo en lugar de la llamada directa
      />
    </View>
  );
}

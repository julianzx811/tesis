import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

export default function AddProductComponent({ AddProduct }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearchIconPress = () => {
    AddProduct(searchQuery);
  };

  return (
    <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={handleSearchIconPress} // Usar la función de manejo en lugar de la llamada directa
      />
    </View>
  );
}

import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export default function SearchBarComponent({ UpdateProducts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearchIconPress = () => {
    // Llamar a la función UpdateProducts con el valor de búsqueda
    UpdateProducts(searchQuery);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={handleSearchIconPress} // Usar la función de manejo en lugar de la llamada directa
    />
  );
}

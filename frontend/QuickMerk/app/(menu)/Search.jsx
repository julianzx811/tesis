import React from "react";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers } from "../styles";

const Search = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={containers({ insets }).simpleContainer}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default Search;

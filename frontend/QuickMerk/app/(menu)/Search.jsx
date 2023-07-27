import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import styles from "../styles/containers";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Search = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ paddingTop: insets.top, backgroundColor: "#003f5c" }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default Search;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SearchBar } from "@rneui/themed";
import styles from "../styles/containers";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Search = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles({ insets }).simpleContainer}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default Search;

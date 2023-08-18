import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers } from "../styles";
import {SearchBarComponent,Categories,Products} from "../components/SearchComponent"
import { SafeAreaView} from "react-native";

const Search = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <SearchBarComponent/>
      <Categories/>
      <Products/>
    </SafeAreaView>
  );
};

export default Search;

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers } from "../styles";
import {
  SearchBarComponent,
  Categories,
  Products,
} from "../components/SearchComponent";
import { SafeAreaView, ActivityIndicator } from "react-native";
import {
  EXPO_PUBLIC_CATEGORIES_PRODUCTS,
  EXPO_PUBLIC_CATEGORIES_URL,
} from "@env";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const insets = useSafeAreaInsets();
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingProducts, setloadingProducts] = useState(true);
  const [category, setcategory] = useState(1);

  const [CategoryArray, setCategoryArray] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  async function GetCategory() {
    await axios({
      method: "get",
      url: EXPO_PUBLIC_CATEGORIES_URL,
    }).then(
      (response) => {
        if (response.status == 200) {
          response.data.forEach((element) => {
            setCategoryArray((prevArray) => [...prevArray, element]);
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    setLoadingCategory(false);
  }

  async function GetProducts() {
    setProductsArray([]);
    setloadingProducts(true);
    var Urlproducts = EXPO_PUBLIC_CATEGORIES_PRODUCTS + `${category}`;
    console.log(Urlproducts);
    await axios({
      method: "get",
      url: Urlproducts,
    }).then(
      (response) => {
        if (response.status == 200) {
          response.data.forEach((element) => {
            setProductsArray((prevArray) => [...prevArray, element]);
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    setloadingProducts(false);
  }

  useEffect(() => {
    GetCategory();
    GetProducts();
  }, []);
  console.log(CategoryArray);
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <SearchBarComponent />
      {loadingCategory ? (
        <ActivityIndicator />
      ) : (
        <Categories
          CategoryArray={CategoryArray}
          updateProducts={GetProducts}
          setcategory={setcategory}
        />
      )}

      {loadingProducts ? (
        <ActivityIndicator style={containers({ insets }).simpleContainer} />
      ) : (
        <Products productsArray={productsArray} />
      )}
    </SafeAreaView>
  );
};

export default Search;

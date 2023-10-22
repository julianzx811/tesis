import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers, text } from "../styles";
import {
  SearchBarComponent,
  Categories,
  Products,
} from "../components/SearchComponent";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  ScrollView,
} from "react-native";
import {
  EXPO_PUBLIC_CATEGORIES_PRODUCTS,
  EXPO_PUBLIC_PRODUCTS_NAME,
} from "@env";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentCategory } from "../redux/actions/UserActions";
import { GetCategory, GetProducts } from "../fetch/fetch";

const Search = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingProducts, setloadingProducts] = useState(true);
  const categoria = useSelector((store) => store.user.category);
  const [CategoryArray, setCategoryArray] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  async function getCategory() {
    try {
      await GetCategory({ setCategoryArray, setLoadingCategory });
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts(id) {
    setProductsArray([]);
    setloadingProducts(true);
    dispatch(CurrentCategory(id));

    var Urlproducts = EXPO_PUBLIC_CATEGORIES_PRODUCTS  + `/${id}`;
    console.log(Urlproducts)
    try {
      await GetProducts({
        Urlproducts,
        setProductsArray,
        setloadingProducts,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function GetProductsName(Name) {
    setProductsArray([]);
    setloadingProducts(true);
    dispatch(CurrentCategory(categoria));
    var Urlproducts = EXPO_PUBLIC_PRODUCTS_NAME + `${Name}`;
    try {
      await GetProducts({
        Urlproducts,
        setProductsArray,
        setloadingProducts,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory();
    getProducts(categoria);
  }, []);

  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <SearchBarComponent UpdateProducts={GetProductsName} />

      {loadingCategory ? (
        <ActivityIndicator style={containers({ insets }).simpleContainer} />
      ) : (
        <Categories
          CategoryArray={CategoryArray}
          UpdateProducts={getProducts}
          insets={insets}
        />
      )}

      <View style={containers({ insets }).section}>
        <View style={containers({ insets }).sectionHeader}>
          <Text style={text({ insets }).sectionHeaderText}>Categorias</Text>
        </View>
      </View>
      {loadingProducts ? (
        <ActivityIndicator style={containers({ insets }).simpleContainer} />
      ) : (
        <ScrollView>
          <Products productsArray={productsArray} insets={insets} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Search;

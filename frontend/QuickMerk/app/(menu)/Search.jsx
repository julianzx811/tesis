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
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { CurrentCategory } from "../redux/actions/UserActions";

const Search = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingProducts, setloadingProducts] = useState(true);
  const categoria = useSelector((store) => store.user.category);
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

  async function GetProducts(id) {
    setProductsArray([]);
    setloadingProducts(true);
    setTimeout(() => {
      dispatch(CurrentCategory(id));
    }, 1000);
    console.log(categoria);
    var Urlproducts = EXPO_PUBLIC_CATEGORIES_PRODUCTS + `${id}`;
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
    GetProducts(categoria);
  }, []);
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <SearchBarComponent />
      {loadingCategory ? (
        <ActivityIndicator />
      ) : (
        <Categories
          CategoryArray={CategoryArray}
          UpdateProducts={GetProducts}
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

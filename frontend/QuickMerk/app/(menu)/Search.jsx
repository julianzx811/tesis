import { useSafeAreaInsets } from "react-native-safe-area-context";
import { containers } from "../styles";
import {SearchBarComponent,Categories,Products} from "../components/SearchComponent"
import { SafeAreaView,ActivityIndicator} from "react-native";
import {EXPO_PUBLIC_CATEGORIES_URL,EXPO_PUBLIC_PRODUCTS_URL} from "@env"
import { useState ,useEffect} from "react";
import axios from "axios";

const Search = () => {
  const insets = useSafeAreaInsets();
  const [loadingCategory,setLoadingCategory] = useState(true);
  const [loadingProducts,setloadingProducts] = useState(true);
  const [category,setcategory] = useState(1);

  const [CategoryArray, setCategoryArray] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

    async function GetCategory (){
    await axios({
        method: "get",
        url: EXPO_PUBLIC_CATEGORIES_URL,
    }).then(
        (response) => {
        if (response.status == 200) {
            response.data.forEach((element) => {
              setCategoryArray((prevArray) => [...prevArray, element]);
            })
        }
        },
        (error) => {
        console.log(error);
        }
    );
    setLoadingCategory(false);
    }

    async function GetProducts (){
      await axios({
          method: "get",
          url: EXPO_PUBLIC_PRODUCTS_URL,
      }).then(
          (response) => {
          if (response.status == 200) {
              response.data.forEach((element) => {
              setProductsArray((prevArray) => [...prevArray, element]);
              })
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
   
  return (
    <SafeAreaView style={containers({ insets }).simpleContainer}>
      <SearchBarComponent/>
      {loadingCategory ? (
        <ActivityIndicator />
      ) : (
      <Categories CategoryArray={CategoryArray}/>
      )}

      
      {loadingProducts ? (
        <ActivityIndicator />
      ) : (
        <Products productsArray={productsArray}/>
      )}

    </SafeAreaView>
  );
};

export default Search;

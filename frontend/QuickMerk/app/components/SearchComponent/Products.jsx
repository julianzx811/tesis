import { View , ScrollView} from 'react-native'
import ProductsComponent from "./ProductsComponent"
import {EXPO_PUBLIC_PRODUCTS_URL} from "@env"
import { useState ,useEffect} from "react";
import axios from "axios";

export default function Products() {
    const [productsArray, setProductsArray] = useState([]);

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
    }

    useEffect(() => {
    GetProducts();
    }, []);
    
    return (
    <View>
        <ScrollView >
        {productsArray.map(({ ProductId ,ProductName,info}) => (
        <ProductsComponent productName={ProductName} ProductId={ProductId} key={ProductId}/>
        ))}
        
        </ScrollView>
        </View>
    )
}
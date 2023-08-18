import { View , ScrollView} from 'react-native'
import IconComponent from "./IconComponent"
import {EXPO_PUBLIC_CATEGORIES_URL} from "@env"
import { useState ,useEffect} from "react";
import axios from "axios";

export default function Categories() {
    const [productsArray, setProductsArray] = useState([]);

    async function GetProducts (){
    await axios({
        method: "get",
        url: EXPO_PUBLIC_CATEGORIES_URL,
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
        <ScrollView horizontal={true}>
        {productsArray.map(({ Categoria, icono,CategoriaID}) => (
        <IconComponent Categoria={Categoria} key={CategoriaID} icono={icono}/>
        ))}
        
        </ScrollView>
    </View>
    )
}
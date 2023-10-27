import { View, ScrollView, Text } from "react-native";
import ProductsComponent from "./ProductsComponent";
import { containers, text } from "../../styles/";
import { FAB } from "react-native-paper";

export default function Products({ productsArray, insets }) {
  //console.log("productos:"+productsArray);

  // Create pairs of products for rendering in rows
  const productPairs = [];
  for (let i = 0; i < productsArray.length; i += 2) {
    const pair = productsArray.slice(i, i + 2);
    productPairs.push(pair);
  }

  return (
    <View style={containers({ insets }).section}>
      {productPairs.map((pair, rowIndex) => (
        <View key={rowIndex} style={[containers({ insets }).row]}>
          {pair.map(({ ProductId, ProductName, Descripcion, precio }) => (
            <ProductsComponent
              key={ProductId}
              href={`components/SearchComponent/Product/${ProductId}`}
              productName={ProductName}
              ProductId={ProductId}
              Descripcion={Descripcion}
              insets={insets}
              precio={precio}
            />
          ))}
        </View>
        
      ))}
      
    </View>
  );
}

import { View, ScrollView } from "react-native";
import ProductsComponent from "./ProductsComponent";
import { containers } from "../../styles/";

export default function Products({ productsArray, insets }) {
  console.log(productsArray);
  return (
    <View>
      <ScrollView style={containers.productContainer}>
        {productsArray.map(
          ({ ProductId, ProductName, Descripcion, precio }) => (
            <View key={ProductId} style={{ padding: 10 }}>
              <ProductsComponent
                href={`components/SearchComponent/Product/${ProductName}`}
                productName={ProductName}
                ProductId={ProductId}
                Descripcion={Descripcion}
                insets={insets}
                precio={precio}
              />
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

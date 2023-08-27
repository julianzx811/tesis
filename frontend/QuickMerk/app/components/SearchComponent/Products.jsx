import { View, ScrollView } from "react-native";
import ProductsComponent from "./ProductsComponent";
import { containers } from "../../styles/";

export default function Products({ productsArray, insets }) {
  return (
    <View>
      <ScrollView style={containers.productContainer}>
        {productsArray.map(({ ProductId, ProductName, Descripcion }) => (
          <ProductsComponent
            href={`components/SearchComponent/Product/${ProductName}`}
            productName={ProductName}
            ProductId={ProductId}
            key={ProductId}
            Descripcion={Descripcion}
            insets={insets}
          />
        ))}
      </ScrollView>
    </View>
  );
}

import { View, ScrollView } from "react-native";
import ProductsComponent from "./ProductsComponent";
import { containers } from "../../styles/";

export default function Products({ productsArray, insets }) {
  console.log(productsArray);

  // Create pairs of products for rendering in rows
  const productPairs = [];
  for (let i = 0; i < productsArray.length; i += 2) {
    const pair = productsArray.slice(i, i + 2);
    productPairs.push(pair);
  }

  return (
    <View>
      <ScrollView style={containers.productContainer}>
        {productPairs.map((pair, rowIndex) => (
          <View
            key={rowIndex}
            style={[containers({ insets }).row, { paddingLeft: 20 }]}
          >
            {pair.map(({ ProductId, ProductName, Descripcion, precio }) => (
              <ProductsComponent
                key={ProductId}
                href={`components/SearchComponent/Product/${ProductName}`}
                productName={ProductName}
                ProductId={ProductId}
                Descripcion={Descripcion}
                insets={insets}
                precio={precio}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

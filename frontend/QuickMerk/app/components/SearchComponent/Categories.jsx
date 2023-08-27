import { View, ScrollView } from "react-native";
import IconComponent from "./IconComponent";

export default function Categories({ CategoryArray, UpdateProducts }) {
  return (
    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {CategoryArray.map(({ Categoria, icono, CategoriaID }) => (
          <IconComponent
            Categoria={Categoria}
            key={CategoriaID}
            icono={icono}
            id={CategoriaID}
            UpdateProducts={UpdateProducts}
          />
        ))}
      </ScrollView>
    </View>
  );
}

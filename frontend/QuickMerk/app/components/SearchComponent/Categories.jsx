import { View, ScrollView, Text } from "react-native";
import IconComponent from "./IconComponent";
import { containers, text } from "../../styles";
export default function Categories({ CategoryArray, UpdateProducts, insets }) {
  return (
    <View style={containers({ insets }).section}>
      <View style={containers({ insets }).sectionHeader}>
        <Text style={text({ insets }).sectionHeaderText}>Categorias</Text>
      </View>
      <View
        style={[
          containers({ insets }).rowWrapper,
          { borderTopWidth: 0 },
          { backgroundColor: "#003f5c" },
        ]}
      >
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
    </View>
  );
}

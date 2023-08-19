import { View , ScrollView} from 'react-native'
import IconComponent from "./IconComponent"

export default function Categories({CategoryArray}) {
    
    return (
    <View>
        <ScrollView horizontal={true}>
        {CategoryArray.map(({ Categoria, icono,CategoriaID}) => (
        <IconComponent Categoria={Categoria} key={CategoriaID} icono={icono}/>
        ))}
        
        </ScrollView>
    </View>
    )
}
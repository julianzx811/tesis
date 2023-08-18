import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IconComponent({Categoria,icono}) {
  return (
    <View>
      <Ionicons
      color="#ababab"
      name={icono}
      size={50}
    />
    <Text>{Categoria}</Text>
    </View>
  )
}
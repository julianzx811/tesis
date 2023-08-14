import { View, Text } from 'react-native'
import React from 'react'
import {containers,text} from "../../styles"

export default function Tittle({tittle,insets}) {
  return (
    <View style={containers({ insets }).header}>
      <Text style={text({ insets }).menutitle}>{tittle}</Text>
    </View>
  )
}
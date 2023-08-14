import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import {containers,text} from "../../styles"

export default function UnsingButton({dispatch,logout,tittle,insets}) {
  return (
    <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => dispatch(logout())}
        >
          <View style={containers({ insets }).row}>
            <Text style={text({ insets }).textContainer}>
              <Ionicons
                style={{ marginTop: 10 }}
                color="#ababab"
                name="log-out-outline"
                size={22}
              />
              {tittle}
            </Text>
          </View>
        </TouchableOpacity>
  )
}
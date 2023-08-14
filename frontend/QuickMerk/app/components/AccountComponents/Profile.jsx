import React from 'react'
import { View, Text, Image } from 'react-native'
import {containers,text} from "../../styles"

export default function profile({insets, name, email}) {
  return (
    <View style={containers({ insets }).section}>
          <View style={containers({ insets }).sectionHeader}>
            <Text style={text({ insets }).sectionHeaderText}>Account</Text>
          </View>
          <View style={containers({ insets }).profile}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={containers({ insets }).profileAvatar}
            />

            <View style={containers({ insets }).profileBody}>
              <Text style={text({ insets }).profileName}>{name}</Text>

              <Text style={text({ insets }).profileHandle}>
                {email}
              </Text>
            </View>
          </View>
        </View>
  )
}

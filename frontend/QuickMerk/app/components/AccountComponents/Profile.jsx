import React from "react";
import { View, Text, Image } from "react-native";
import { containers, text } from "../../styles";

export default function profile({ insets, name, email }) {
  return (
    <View style={containers({ insets }).section}>
      <View style={containers({ insets }).sectionHeader}>
        <Text style={text({ insets }).sectionHeaderText}>Account</Text>
      </View>
      <View style={containers({ insets }).profile}>
        <Image
          alt=""
          source={require("../../assets/avatar.png")}
          style={containers({ insets }).profileAvatar}
        />

        <View style={containers({ insets }).profileBody}>
          <Text style={text({ insets }).profileName}>{name}</Text>

          <Text style={text({ insets }).profileHandle}>{email}</Text>
        </View>
      </View>
    </View>
  );
}

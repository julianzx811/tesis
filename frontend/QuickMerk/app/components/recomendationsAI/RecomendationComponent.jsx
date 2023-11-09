import { View, ScrollView } from "react-native";
import React from "react";
import { containers, text } from "../../styles";
import { useSelector } from "react-redux";
import { RecomandationProduct } from "./index";

export default function RecomendationComponent({ insets }) {
  const RecomendationList = useSelector((store) => store.user.Recomendations);
  //console.log("recomendaciones", RecomendationList);
  return (
    <View style={containers({ insets }).simpleContainer}>
      <ScrollView>
        {RecomendationList.map((producto, index) => (
          <RecomandationProduct producto={producto} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

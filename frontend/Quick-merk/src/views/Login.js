import React from "react";
import { View, TouchableOpacity, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../redux/actions/countActions";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const login = useSelector((store) => store);
  const LoginIn = () => {
    dispatch(LogIn());
    console.log(login);
    //navigation.navigate("Home");
  };

  return (
    <View>
      <Button onPress={LoginIn} title="log" />
    </View>
  );
}

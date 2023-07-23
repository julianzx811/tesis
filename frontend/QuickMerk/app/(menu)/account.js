import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions/UserActions";
import { useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Settings</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: "900",
    margin: 15,
  },
  btn: {
    backgroundColor: "#086972",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: "#fff",
  },
});

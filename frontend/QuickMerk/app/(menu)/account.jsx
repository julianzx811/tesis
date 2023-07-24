import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions/UserActions";
import { useDispatch } from "react-redux";
import styles from "../styles/containers";

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

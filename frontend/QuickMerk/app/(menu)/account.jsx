import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions/UserActions";
import { useDispatch } from "react-redux";
import styles from "../styles/containers";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Account = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: "#003f5c" }}>
      <Text style={styles.title_text}>Settings</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../styles/containers";

const Account = () => {
  return (
    <View style={styles.container}>
      <Link href="/account/1">tu cuenta</Link>
    </View>
  );
};

export default Account;

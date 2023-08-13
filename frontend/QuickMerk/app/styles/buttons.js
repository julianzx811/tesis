import { StyleSheet } from "react-native";

const buttons = (props) =>
  StyleSheet.create({
    loginBtn: {
      width: "90%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 19,
    },
  });

export default buttons;
import { StyleSheet } from "react-native";

const buttons = (props) =>
  StyleSheet.create({
    loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 300,
    },
    RegisterBtn: {
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: "100%",
      alignItems: "center",
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
  });

export default buttons;

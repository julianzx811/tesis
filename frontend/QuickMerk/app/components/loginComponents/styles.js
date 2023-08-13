import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: "#003f5c",
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
      paddingBottom: 10,
      color: "#fb5b5a",
    },
    subtitle: {
      fontSize: 22,
      color: "orange",
      paddingLeft: 10,
    },
    inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
    },
    inputText: {
      height: 50,
      color: "white",
    },
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
    normalText: {
      color: "white",
      fontSize: 11,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    register: {
      color: "#bb0000",
      fontSize: 12,
    },
  });

  export default styles;
  
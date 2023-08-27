import { StyleSheet } from "react-native";

const text = (props) =>
  StyleSheet.create({
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
    text: {
      fontSize: 42,
    },
    register: {
      color: "#bb0000",
      fontSize: 12,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    menutitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#1f1f1f",
    },
    sectionHeaderText: {
      fontSize: 13,
      fontWeight: "500",
      color: "#adadad",
      textTransform: "uppercase",
    },
    addsome: {
      fontSize: 22,
      color: "orange",
      paddingLeft: 0,
      paddingHorizontal: 72,
      marginLeft: 15,
    },
    profileName: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffffff",
    },
    profileName: {
      fontSize: 18,
      fontWeight: "600",
      color: "#292929",
    },
    profileHandle: {
      marginTop: 2,
      fontSize: 16,
      fontWeight: "400",
      color: "#858585",
    },
    profileActionText: {
      marginRight: 8,
      fontSize: 15,
      fontWeight: "600",
      color: "#fff",
    },
    rowLabel: {
      fontSize: 17,
      color: "#000",
    },
    rowValue: {
      fontSize: 17,
      color: "#ababab",
    },
    inputText: {
      height: 50,
      color: "white",
    },
    normalText: {
      color: "white",
      fontSize: 11,
    },
  });

export default text;

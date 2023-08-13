import { StyleSheet } from "react-native";

const inputs = (props) =>
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
  });

export default inputs;
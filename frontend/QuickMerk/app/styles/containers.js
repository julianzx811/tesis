import { StyleSheet } from "react-native";

const styles = (props) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#003f5c",
      paddingTop: props.insets.top,
    },
    simpleContainer: {
      backgroundColor: "#003f5c",
      paddingTop: props.insets.top,
    },
    scrollView: {
      backgroundColor: "#096c99",
      marginHorizontal: 20,
    },
    main: {
      flex: 1,
      alignItems: "center",
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
      width: "40%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      marginHorizontal: 16,
      marginTop: 5,
    },
    inputViewBig: {
      width: "90%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      marginHorizontal: 16,
      marginTop: 5,
    },
    inputText: {
      height: 50,
      color: "white",
    },
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
    normalText: {
      color: "white",
      fontSize: 11,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingBottom: 15,
    },
    row2: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      marginLeft: 120,
      paddingBottom: 20,
    },
    registerContainer: {
      paddingTop: 10,
    },
    text: {
      fontSize: 42,
    },
    containerxd: {
      backgroundColor: "#f8f8f8",
      flex: 1,
      paddingTop: props.insets.top,
    },
    register: {
      color: "#bb0000",
      fontSize: 12,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
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
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    addsome: {
      fontSize: 22,
      color: "orange",
      paddingLeft: 0,
      paddingHorizontal: 72,
      marginLeft: 15,
    },
    map: {
      width: "100%",
      height: "100%",
    },
    view: {
      margin: 10,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 12,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#1f1f1f",
    },
    section: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    sectionHeader: {
      padding: 8,
      paddingLeft: 12,
    },
    sectionHeaderText: {
      fontSize: 13,
      fontWeight: "500",
      color: "#adadad",
      textTransform: "uppercase",
    },
    sectionBody: {
      borderRadius: 12,
      shadowColor: "rgba(0,0,0,0.25)",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    profile: {
      padding: 12,
      backgroundColor: "#fff",
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    profileAvatar: {
      width: 60,
      height: 60,
      borderRadius: 9999,
      marginRight: 12,
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
    profileAction: {
      marginTop: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#007bff",
      borderRadius: 12,
    },
    profileActionText: {
      marginRight: 8,
      fontSize: 15,
      fontWeight: "600",
      color: "#fff",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 12,
      paddingRight: 12,
      paddingBottom: 12,
      paddingLeft: 0,
    },
    rowFirst: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    rowLast: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    rowWrapper: {
      paddingLeft: 16,
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderColor: "#f0f0f0",
    },
    rowLabel: {
      fontSize: 17,
      color: "#000",
    },
    rowValue: {
      fontSize: 17,
      color: "#ababab",
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    textContainer: {
      flexDirection: "column", // Align children vertically
    },
  });

export default styles;

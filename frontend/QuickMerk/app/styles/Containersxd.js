import { StyleSheet } from "react-native";

const containers = (props) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#003f5c",
    },
    containerLogin: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: "#003f5c",
    },
    mainLogin: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    simpleContainer: {
      backgroundColor: "#003f5c",
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
    inputViewLogin: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
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
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingBottom: 15,
    },
    rowlogin: {
      flexDirection: "row",
      flexWrap: "wrap",
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
    containerxd: {
      backgroundColor: "#f8f8f8",
      flex: 1,
      paddingTop: props.insets.top,
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
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
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
    section: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    sectionHeader: {
      padding: 8,
      paddingLeft: 12,
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
    textContainer: {
      flexDirection: "column", // Align children vertically
    },
  });

export default containers;

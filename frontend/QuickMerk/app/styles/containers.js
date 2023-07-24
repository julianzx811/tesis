import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#003f5c",
    paddingTop: StatusBar.currentHeight,
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
    marginLeft: 100,
  },
  registerContainer: {
    paddingTop: 10,
  },
  text: {
    fontSize: 42,
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
});

export default styles;

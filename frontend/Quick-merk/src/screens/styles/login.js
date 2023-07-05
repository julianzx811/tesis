import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
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
  forgot: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    color: "orange",
    fontFamily: "BebasNeue-Regular",
    fontSize: 55,
    marginBottom: 20,
  },
  subtitle: {
    color: "#805916",
    fontFamily: "JosefinSans-Italic",
    fontSize: 25,
    marginBottom: 30,
  },
  FaceButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 25,
    backgroundColor: "#3B5998",
    color: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "37%",
    textAlign: "center",
  },
  GoogleButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 25,
    backgroundColor: "#dd4b39",
    color: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "37%",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  register: {
    color: "#bb0000",
    fontSize: 12,
  },
  normalText: {
    color: "white",
    fontSize: 11,
  },
});

export default styles;

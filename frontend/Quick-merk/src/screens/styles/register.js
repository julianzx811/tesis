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
    width: "85%",
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
    fontSize: 35,
    marginBottom: 20,
    textAlign: "left",
    paddingRight: 10,
  },
  text: {
    color: "orange",
    fontFamily: "BebasNeue-Regular",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "left",
    paddingRight: 10,
  },
  subtitle: {
    color: "#805916",
    fontFamily: "JosefinSans-Italic",
    fontSize: 25,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  register: {
    color: "#bb0000",
    fontSize: 12,
  },
  normalText: {
    color: "white",
    fontSize: 11,
  },
  container2: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  RegisterBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styles;

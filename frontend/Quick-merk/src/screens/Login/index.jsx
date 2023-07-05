import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { login } from "../../actions/auth";
import styles from "../styles/login";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator } from "react-native";

const Login = ({ navigation }) => {
  //loding fonts
  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("../../../assets/fonts/BebasNeue-Regular.ttf"),
    "JosefinSans-Italic": require("../../../assets/fonts/JosefinSans-Italic.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      await SplashScreen.preventAutoHideAsync();
      await SplashScreen.hideAsync();
    };

    if (fontsLoaded) {
      loadFonts();
    }
  }, [fontsLoaded]);

  //login
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const onLogin = () => {
    let user = {
      username: username,
      password: password,
    };

    dispatch(login(user))
      .then((response) => {
        if (response.status == "success") {
          navigation.replace("Menu");
        }
      })
      .catch((error) => {
        navigation.replace("LoginScreen");
      });
  };

  if (!fontsLoaded) {
    <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>QUICK-MERK</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin()}>
          <Text style={styles.normalText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.FaceButton}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.GoogleButton}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>olvidates tu contraseña?</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.normalText}>no tienes cuenta?</Text>
          <TouchableOpacity>
            <Text
              style={styles.register}
              onPress={() => navigation.replace("register")}
            >
              Registrate!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Login;

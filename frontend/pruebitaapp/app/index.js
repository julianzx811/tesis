import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UpdateTodoScreenProps } from "../View/UpdateTodoScreen";

const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="UpdateTodoScreenProps"
      component={UpdateTodoScreenProps}
      options={{ title: "Welcome" }}
    />
  </Stack.Navigator>
</NavigationContainer>;

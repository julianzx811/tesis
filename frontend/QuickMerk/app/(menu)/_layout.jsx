import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Selector } from "react-redux";

export default () => {
  const router = useRouter();
  const user = useSelector((store) => store.user.logged);

  //console.log(useSelector((store) => store.user));

  useEffect(() => {
    if (user === false) {
      router.replace("/");
    }
  }, [user]);

  if (user) {
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="maps"
          options={({ navigation }) => ({
            tabBarIcon: () => (
              <Ionicons name="map-outline" size={24} color="black" />
            ),
          })}
        />
        <Tabs.Screen
          name="Search"
          options={({ navigation }) => ({
            tabBarIcon: () => (
              <Ionicons name="search" size={24} color="black" />
            ),
          })}
        />

        <Tabs.Screen
          name="account"
          options={({ navigation }) => ({
            tabBarIcon: () => (
              <Ionicons name="settings" size={22} color="black" />
            ),
            // tabBarActiveBackgroundColor: "#096c99",
            // tabBarInactiveBackgroundColor: "#99094a",
          })}
        />
      </Tabs>
    );
  }
};

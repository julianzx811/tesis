import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

export default () => {
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
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
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
};

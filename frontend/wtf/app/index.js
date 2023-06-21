import { useState } from "react";
import { View,Text,ScrollView,SafeAreaView} from "react-native";
import { Stack,useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from "../constants"
import {Nearbyjbos, Popularjobs,ScreenHeaderBtn,Welcome} from "../components"

export default function Home(){
  const router = useRouter();

  return(
    <SafeAreaView style={{flex: 1, backgroundColors: COLORS.secondary}}>
      <Stack.Screen
      options={{
        headerStyle:{backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () =>(
          <ScreenHeaderBtn iconUrl={icons.menu}
            dimension="60%"
          ></ScreenHeaderBtn>
        ),
        headerRight: () =>(
          <ScreenHeaderBtn iconUrl={images.profile}
            dimension="100%"
          ></ScreenHeaderBtn>
        ),
        headerTitle:"inicio",
        headerTitleAlign: "center"
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, padding: SIZES.medium}}>
            <Welcome

            />
            <Popularjobs/>
            <Nearbyjbos/>
          </View>
        </ScrollView>
      </Stack.Screen>
    </SafeAreaView>
  );
}
import { Stack } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { FONTS, COLORS, SIZES, images } from "../constants";
import { ScreenHeaderBtn, WelcomePage } from "../components";

function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.darkNavy,
        flex: 1,
        padding: SIZES.medium,
      }}
    >
      <Stack.Screen
        options={{
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} />,
          headerTitle: "",
        }}
      />
      <WelcomePage />
    </SafeAreaView>
  );
}

export default Home;

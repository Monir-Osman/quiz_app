import { Stack, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View, SafeAreaView } from "react-native";
import { COLORS, SIZES, icons } from "../constants";
import { ArrowBack, StartPageComponent } from "../components";

function StartPage() {
  const router = useRouter();
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
          headerTitle: "",
          headerLeft: () => <ArrowBack handlePress={() => router.back()} />,
        }}
      />
      <StartPageComponent />
    </SafeAreaView>
  );
}

export default StartPage;

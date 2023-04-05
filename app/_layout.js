import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { COLORS } from "../constants";
import { Provider } from "../context/useContext";
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    SNRegular: require("../assets/fonts/SignikaNegative-Regular.ttf"),
    SNMedium: require("../assets/fonts/SignikaNegative-Medium.ttf"),
    SNBold: require("../assets/fonts/SignikaNegative-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <Provider>
      <Stack
        onLayout={onLayoutRootView}
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.darkNavy },
          headerShadowVisible: false,
        }}
      />
    </Provider>
  );
}

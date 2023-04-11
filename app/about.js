import { Stack, useRouter } from "expo-router";
import { Text, View, SafeAreaView } from "react-native";
import { ArrowBack } from "../components";
import AboutComponent from "../components/About/AboutComponent";
import { COLORS, FONTS, SIZES } from "../constants";
function About() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkNavy,
        padding: SIZES.small,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "About",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONTS.bold,
            fontSize: SIZES.xxLarge,
            color: COLORS.gold,
          },
          headerLeft: () => <ArrowBack handlePress={() => router.back()} />,
        }}
      />
      <AboutComponent />
    </SafeAreaView>
  );
}

export default About;

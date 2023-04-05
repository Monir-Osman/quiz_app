import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { ArrowBack, QuestionPageComponent } from "../components";
import { COLORS, SIZES } from "../constants";

const Queztion = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.darkNavy,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "",
          headerLeft: () => <ArrowBack handlePress={() => router.back()} />,
        }}
      />
      <QuestionPageComponent />
    </SafeAreaView>
  );
};

export default Queztion;

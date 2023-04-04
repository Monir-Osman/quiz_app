import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./welcomePage.style";

function WelcomePage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/images/quiz.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Quizzles</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnPlay}
          onPress={() => router.push("/startPage")}
        >
          <Text style={styles.btnTextPlay}>Play Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnAbout}
          onPress={() => router.push("/about")}
        >
          <Text style={styles.btnTextAbout}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomePage;

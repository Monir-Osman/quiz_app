import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";
import { styles } from "./arrowBack.style";

function ArrowBack({ handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={icons.arrowBack}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ArrowBack;

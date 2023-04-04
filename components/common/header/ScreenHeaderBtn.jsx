import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./ScreenHeaderBtn.style";

function ScreenHeaderBtn({ iconUrl }) {
  return (
    <View style={styles.container}>
      <Image source={iconUrl} style={styles.image} resizeMode="cover" />
    </View>
  );
}

export default ScreenHeaderBtn;

import { View, Text } from "react-native";
import React from "react";
import { styles } from "./about.style";

const AboutComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Our application offers a variety of multiple choice questions across
          different categories and difficulty levels.
        </Text>
        <Text style={styles.text}>
          You can select the preferred category and level, and attempt 10
          questions each round. At the end of each round you can view the
          results, and start new round if you like.
        </Text>
      </View>
    </View>
  );
};

export default AboutComponent;

import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.xxLarge,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge + 10,
  },
});

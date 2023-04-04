import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightNavy,
    padding: SIZES.small / 2,
    borderRadius: SIZES.medium / 1.25,
    marginTop: SIZES.small,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
  },
  itemContainerStyle: {
    backgroundColor: COLORS.lightNavy,
  },
  itemTextStyle: {
    color: "white",
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },
  containerStyle: {
    backgroundColor: COLORS.lightNavy,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    overflow: "hidden",
    borderWidth: 4,
  },
  placeholderStyle: {
    fontSize: SIZES.large,
    color: "white",
    fontFamily: FONTS.medium,
  },
  selectedTextStyle: {
    fontSize: SIZES.large,
    color: "white",
    fontFamily: FONTS.medium,
  },
});

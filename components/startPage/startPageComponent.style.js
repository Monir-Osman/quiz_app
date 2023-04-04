import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    marginTop: "10%",
  },
  text: {
    color: "white",
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.xxLarge,
    flex: 1,
    position: "relative",
  },
  btn: {
    backgroundColor: "gold",
    width: "80%",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
    position: "absolute",
    top: 100,
  },
  btnText: {
    color: COLORS.darkNavy,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
    textAlign: "center",
  },
});

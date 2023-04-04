import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    paddingTop: SIZES.xLarge * 2,
  },
  text: {
    color: "white",
    fontFamily: FONTS.bold,
    fontSize: SIZES.xxLarge * 1.5,
  },
  btnContainer: {
    marginTop: SIZES.xxLarge * 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnPlay: {
    backgroundColor: "gold",
    width: "80%",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
  },
  btnTextPlay: {
    textAlign: "center",
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: COLORS.darkNavy,
  },
  btnAbout: {
    marginTop: SIZES.medium,
    width: "80%",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
    borderColor: "gold",
    borderWidth: 3,
  },
  btnTextAbout: {
    textAlign: "center",
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: "gold",
  },
});

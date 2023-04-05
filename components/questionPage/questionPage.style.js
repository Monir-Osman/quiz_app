import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: COLORS.gold,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xxLarge,
    textAlign: "center",
  },
  questionText: {
    marginTop: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
  answersContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAnswer: {
    backgroundColor: COLORS.lightNavy,
    paddingVertical: SIZES.small,
    marginTop: SIZES.large,
    borderRadius: SIZES.xxLarge,
  },
  btnAnswerText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: SIZES.large,
  },
  indexContainer: {
    position: "absolute",
    bottom: 0,
    top: -4,
    left: 7,
    backgroundColor: COLORS.secondary,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium * 1.2,
  },
  index: {
    textAlign: "center",
    color: COLORS.lightNavy,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  btnNextContainer: {
    marginTop: SIZES.xxLarge * 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnNext: (isAnswered) => ({
    backgroundColor: "gold",
    width: "80%",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
    opacity: isAnswered ? 1 : 0.2,
  }),
  btnNextText: {
    textAlign: "center",
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: COLORS.darkNavy,
  },
});

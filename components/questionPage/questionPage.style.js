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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnAnswer: (answer, currentSelectedItem) => ({
    backgroundColor:
      answer === currentSelectedItem ? COLORS.primary : COLORS.lightNavy,
    paddingVertical: SIZES.small,
    marginTop: SIZES.large,
    borderRadius: SIZES.xxLarge,
  }),
  btnAnswerText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: SIZES.large,
    maxWidth: 240,
  },
  indexContainer: {
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
    marginTop: SIZES.xxLarge,
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
  imgCon: {
    width: 40,
    height: 40,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalView: {
    width: "80%",
    backgroundColor: COLORS.darkNavy,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },
  modalText: {
    color: COLORS.gold,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xxLarge,
    marginBottom: 20,
  },
  modalScoreNum: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xxLarge,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.gold,
    width: "70%",
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: SIZES.xLarge,
  },
});

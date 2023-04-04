import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    marginTop: 10,
    backgroundColor: COLORS.lightNavy,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.small / 1.25,
  },
});

import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: Sizes.width,
    paddingTop: Sizes.paddingTop,
  },
  contentCont: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    flex: 0.82,
    backgroundColor: Colors.warmWhite,
  },
  btnContainer: {
    padding: 5,
    borderColor: Colors.deepDarkGray,
    borderBottomWidth: 0.2,
    flexDirection: "row",
    width: "96%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  },
  badge: {
    ...Fonts.body4,
    backgroundColor: "green",
    borderRadius: Sizes.radius,
    color: Colors.white,
    textAlign: "center",
    width: 23,
    height: 23,
  },
  name: {
      ...Fonts.body2,
      color: Colors.darkgray,
      fontSize: 19
  },
  message: {
      ...Fonts.body3,
      color: Colors.deepDarkGray
  },
  time: {
      paddingBottom: 2,
      color: Colors.deepDarkGray
  }
});

import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: Colors.warmWhite,
        width: Sizes.width,
    },
header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
  headerText: {
    ...Fonts.body2,
    fontSize: 24,
    color: Colors.darkgray,
  },
  contentCot: {
      width: "100%",
  }
})
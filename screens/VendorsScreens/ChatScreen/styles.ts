import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.warmWhite,
        width: Sizes.width,
        paddingTop: 24,
    },
header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  headerText: {
    ...Fonts.body2,
    fontSize: 24,
    color: Colors.darkgray,
  },
    contentCont: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
})
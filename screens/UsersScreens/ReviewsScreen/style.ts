import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Sizes.width,
        paddingTop: Sizes.paddingTop,
        backgroundColor: Colors.primary,
    },
    nav: {
        flex: 0.1,
        backgroundColor: Colors.white,
        flexDirection: "row",
        elevation: 2
    },
    navText: {
      ...Fonts.h4,
      color: Colors.darkgray,
      borderColor: Colors.primary,
      height: 51,
      width: Sizes.width /2,
     textAlign: "center",
     padding: 10

    },
    contentCont: {
        flex: 0.8,
        backgroundColor: Colors.warmWhite

    }
})
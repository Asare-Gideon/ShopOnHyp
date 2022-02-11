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
        justifyContent: "space-evenly",
        paddingTop: 10
    },
    navText: {
      ...Fonts.h4,
      color: Colors.darkgray,
      paddingBottom: 4,
      borderColor: Colors.primary
    },
    contentCont: {
        flex: 0.8,
        backgroundColor: Colors.white

    }
})
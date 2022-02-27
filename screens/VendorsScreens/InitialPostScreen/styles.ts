import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        paddingTop: Sizes.paddingTop,
        backgroundColor: Colors.warmWhite,
    },
  header: {
   width: "100%",
   alignItems: "center",
  },
  headerText: {
      ...Fonts.body2,
      color: Colors.deepDarkGray,
      marginLeft: 10,
  },
  viewedProducts: {
      width: Sizes.width,
      marginTop: -10,
  },
  lovedText: {
      ...Fonts.body2,
      color: Colors.deepDarkGray,
      marginTop: 5,
  },
  loader: {
      width: Sizes.width,
      justifyContent: "center",
      height: "100%"

  }
})
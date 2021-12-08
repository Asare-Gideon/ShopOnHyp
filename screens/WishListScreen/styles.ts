import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        padding: 10,
        paddingTop: 24,
        backgroundColor: Colors.warmWhite

    },
 bellCont: {
    paddingRight: 20,
  },
  header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 40,
      paddingTop: 10,
     paddingLeft: 12 
  },
  headerText: {
      ...Fonts.body2,
      color: Colors.deepDarkGray
  },
  viewedProducts: {
      width: Sizes.width,
      marginTop: 14,
  },
  lovedText: {
      ...Fonts.body2,
      color: Colors.deepDarkGray,
      marginTop: 5,
  }
})
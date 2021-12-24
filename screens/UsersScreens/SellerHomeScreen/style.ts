import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    paddingTop: 24,
    backgroundColor: Colors.warmWhite,
    flex: 1,
  },
  sellerDetail: {
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: Colors.white,
      padding: 5,
      marginTop: -10,
  },
  sellerFollowerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: Colors.deepDarkGray,
  },
  followerBtn: {
    backgroundColor: Colors.primary,
    padding: 5,
    width: 80,
    alignItems: "center",
    borderRadius: 4,
  },
  followerText: {
    color: Colors.white,
  },
  starCont: {
      flexDirection: "row",
      marginTop :10,
  },
  headerText: {
      ...Fonts.body2,
      color: Colors.darkgray,
      borderBottomWidth: 0.3,
      paddingBottom: 5
  },
  itemCont: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 20,
  },
  itemHeader: {
      ...Fonts.body2,
      color: Colors.deepDarkGray,
  }
});

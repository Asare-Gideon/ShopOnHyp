import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    flex: 1,
    backgroundColor: Colors.warmWhite,
    paddingTop: 23,
  },
  searchCont: {
    width: Sizes.width,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "space-around",
  },
  searchInputCont: {
    flexDirection: "row",
    padding: 8,
  },
  searchInput: {
    paddingBottom: 0,
    borderBottomWidth: 0,
    borderRadius: Sizes.radius,
    paddingLeft: 7,
    paddingTop: 0,
  },
  inputCont: {
    width: "90%",
    backgroundColor: Colors.white,
    alignItems: "center",
    borderColor: Colors.white,
    paddingLeft: 10,
    borderRadius: Sizes.radius,
    marginTop: 5,
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
  },
  bellCont: {
    marginTop: -20,
    paddingRight: 20,
  },
  categoriesCont: {
      marginTop: -26,
      paddingLeft: 15,
      paddingRight: 15
  },
  mainContent: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  contentHeader: {
    ...Fonts.body2,
    color: Colors.deepDarkGray,
  },
  itemsContainer: {
    alignSelf: "center",
    paddingBottom: 40
  },

});

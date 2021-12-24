import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  main: {
    width: Sizes.width,
    paddingTop: 24,
    backgroundColor: Colors.primary,
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 10,
    flexDirection: "row",
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    ...Fonts.body2,
    color: Colors.white,
  },
  contentCont: {
    flex: 0.9,
    width: "100%",
    backgroundColor: Colors.warmWhite,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  backBtn: {
    position: "absolute",
    left: 20,
  },
  inputCont: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: Colors.white
  },
  receivedMessage: {
    maxWidth: "85%",
    flexDirection: "row",
    paddingTop :10,
    paddingBottom: 16,
  },
  receivedMessageText: {
    borderRadius: 10,
    borderBottomLeftRadius: 40,
    padding: 7,
    paddingLeft: 17,
    paddingBottom: 13,
    borderTopLeftRadius: 0,
    backgroundColor: Colors.white,
  },
  receivedTime: {
      position: "absolute",
      bottom: 0,
      left :30,
      fontSize :11,
      color: Colors.deepDarkGray
  },
sentMessage: {
    maxWidth: "85%",
    flexDirection: "row",
    paddingTop :10,
    paddingBottom: 16,
    alignSelf: "flex-end"
  },
  sentMessageText: {
    borderRadius: 10,
    borderBottomRightRadius: 40,
    padding: 7,
    paddingRight: 17,
    paddingBottom: 13,
    borderTopLeftRadius: 0,
    backgroundColor: Colors.primary,
    color: Colors.white
  },
sentTime: {
      position: "absolute",
      bottom: 0,
      right :30,
      fontSize :11,
      color: Colors.deepDarkGray
  },
  space: {
      height: 80
  }
});

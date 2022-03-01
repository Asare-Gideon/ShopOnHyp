import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Sizes.width,
        height: Sizes.height,
        backgroundColor: Colors.primary,
        paddingTop: Sizes.paddingTop
    },
    contentCont: {
        height: "100%",
        backgroundColor: Colors.warmWhite,
        padding: 10,
        marginTop: 10
    },
ratingCont: {
    flexDirection: "row",
   justifyContent: "space-between"
},
headerText: {
    ...Fonts.body2,
    color: Colors.darkgray,
},
text: {
    color: Colors.deepDarkGray,
    ...Fonts.body3,
    textAlign: "left"
},
mainContent: {
backgroundColor: Colors.white,
padding: 6
},
date: {
    ...Fonts.body3,
    color: Colors.darkgray
}

})
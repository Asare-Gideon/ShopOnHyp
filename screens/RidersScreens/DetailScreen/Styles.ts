import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: Colors.primary,
        width: Sizes.width,
    },
    contentContainer: {
        flex:0.82,
        backgroundColor: Colors.white,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10
    },
    profileCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center"
    },
    text: {
        ...Fonts.h1,
        color: Colors.darkgray,
    },
    ratingCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
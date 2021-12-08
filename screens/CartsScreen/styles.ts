import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        paddingTop: 24,
        backgroundColor: Colors.warmWhite
    },
    header: {
        width: "100%",
        padding: 10,
        paddingBottom: 15
    },
    headerText: {
        textAlign: "center",
        ...Fonts.body1,
        fontSize: 23,
        color: Colors.deepDarkGray,
            
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    bottomContainer: {
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    total: {
        ...Fonts.body2,
        color: Colors.deepDarkGray
    },
    amount: {
        ...Fonts.body2,
        color: Colors.darkgray
    },
    proceedBtn: {
        backgroundColor: Colors.primary,
        width: "45%",
        paddingTop: 8,
        paddingBottom: 8,
        elevation : 2,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    proceedText: {
        textAlign: "center",
        ...Fonts.body3,
        color: Colors.white
    }
})
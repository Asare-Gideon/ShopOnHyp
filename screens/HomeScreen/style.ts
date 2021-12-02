import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../constants/Layout";

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
        paddingRight: 5
    },
    searchInputCont: {
        flexDirection: "row",
        padding: 8
    },
    searchInput: {
        paddingBottom: 3,
        borderBottomWidth: 0,
        borderRadius: Sizes.radius,
        paddingLeft: 7

    },
    inputCont: {
        width: "90%",
        backgroundColor: Colors.white,
        alignItems: "center",
        borderColor: Colors.white,
        paddingLeft: 10,
        borderRadius: Sizes.radius,
        marginTop: 5
    },
categoriesCont: {
    marginTop: -20,
    paddingLeft:4
}
})
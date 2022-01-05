import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Sizes.width,
        paddingTop: 24,
        backgroundColor: Colors.primary,
    },
    contentCont: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    inputCont: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
})
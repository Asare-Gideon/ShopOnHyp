import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        paddingTop: 24,
        backgroundColor: Colors.primary
    },
    contentCont: {
        flex: 0.8,
        backgroundColor: Colors.white,
    }
})
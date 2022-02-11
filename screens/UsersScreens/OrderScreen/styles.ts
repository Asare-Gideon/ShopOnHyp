import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.primary,
        width: Sizes.width,
        paddingTop: Sizes.paddingTop,
    },
    contentContainer: {
        flex: 0.82,
        backgroundColor: Colors.warmWhite,
    }
})
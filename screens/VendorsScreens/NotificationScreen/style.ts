import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Sizes.width,
        backgroundColor: Colors.primary,
        paddingTop: Sizes.paddingTop,
    },
    mainContent: {
        flex: 0.92,
        backgroundColor: Colors.white
    }
})
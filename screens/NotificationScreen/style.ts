import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: Sizes.width,
        backgroundColor: Colors.primary,
        paddingTop: 24,
    },
    mainContent: {
        flex: 0.92,
        backgroundColor: Colors.white
    }
})
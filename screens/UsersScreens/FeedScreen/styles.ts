import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        backgroundColor: Colors.warmWhite,
        paddingTop: Sizes.paddingTop,
    },
ContentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -20
},
headerTitle: {
 ...Fonts.h2,
 color: Colors.deepDarkGray,
 marginBottom: 15,
}
})
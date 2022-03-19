import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Sizes.paddingTop,
        backgroundColor: Colors.primary,
        width: Sizes.width,
    },
    contentCont: {
        flex: 1,
        backgroundColor: Colors.warmWhite,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
headerText: {
...Fonts.body3,
marginBottom: 20,
},
rating: {
    backgroundColor: Colors.warmWhite
},
input: {
    marginTop: 30,
    marginBottom: 40
}
})
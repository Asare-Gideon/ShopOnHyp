import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.warmWhite,
        width: Sizes.width,
        paddingTop: Sizes.paddingTop,
    },
    header: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop:10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10
    },
    headerTitle: {
        ...Fonts.body1,
        color: Colors.darkgray
    },
contentCont: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
},
analyticeContainer: {
 paddingLeft: 10,
 paddingRight: 10,
 paddingTop: 5
},
analyticeHeader:{
    ...Fonts.body2,
    color: Colors.darkgray,
    marginBottom: 10,
},
cardsContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start"
}
})
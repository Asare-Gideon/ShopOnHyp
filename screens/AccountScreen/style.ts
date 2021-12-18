import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles =StyleSheet.create({
    main: {
        width: Sizes.width,
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 24
    },
    headerCont: {
        width: "100%",
        flex: 0.24,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },
    mainContent: {
        flex: 0.76,
        backgroundColor: Colors.warmWhite,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerContent:{
     flexDirection: "row",
     justifyContent: "space-between",
     marginTop: 5,
     alignItems: "center"
    },
    headerText: {
        ...Fonts.body2,
        color: Colors.white,
        marginBottom: 10,
    },
    welcomeCont: {
        marginTop: 10,
    },
    welcomeText: {
        ...Fonts.body3,
        color: "#742f07",
    },
    welcomeEmail: {
        ...Fonts.body4,
        color: Colors.darkgray
    },
contentHeaderText: {
    marginTop: 20,
    marginLeft :10,
    ...Fonts.body2,
    color: Colors.deepDarkGray
},
content: {
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
},
logBtn: {
    alignItems: "center",
    justifyContent : "center"
}
})
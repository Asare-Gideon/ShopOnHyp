import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";


export const styles = StyleSheet.create({
    main: {
        width: Sizes.width,
        height: Sizes.height,
        flex: 1,
    },
    background: {
        width : "100%",
        height: "100%",
    },
    top: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center"
    },
    bottom: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: "center",
        width: "100%"
    },
    btnCont: {
        width: "70%",
        paddingTop: 8,
        paddingBottom: 8,
        alignContent: "center",
        backgroundColor: Colors.white,
        justifyContent: "center",
        borderRadius: Sizes.radius,
        marginBottom: 30,
        
    },
    btnText : {
        ...Fonts.body3,
        color: Colors.darkgray,
        textAlign: "center",
    },
    topContent: {
        height: "40%",
        width: "100%",
        alignItems: "center"
    },
    topHeaderText: {
        ...Fonts.h1,
        color:Colors.warmWhite,
        paddingBottom:10
    },
    topText: {
        ...Fonts.body4,
        color: Colors.white,
    }
})
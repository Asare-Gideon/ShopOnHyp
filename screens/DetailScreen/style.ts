import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";


export const styles = StyleSheet.create({
    main: {
        paddingTop: 24,
        width: Sizes.width,
        flex: 1,
        zIndex:666,
        backgroundColor: Colors.primary
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.08,
        paddingBottom: 14
    },
    headerText: {
        textAlign: "center",
        ...Fonts.h2,
        fontSize: 23,
        color: Colors.white
    },
    headerBtn: {
        position:"absolute",
        left: 14,
        paddingBottom: 5
    },
    slider: {
        width: Sizes.width,
       marginTop: -9 
    },
    mainContent:{
      flex: 0.92,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    textContainer: {
        marginTop: 30,
        paddingTop : 10,
        paddingLeft: 15,
        paddingRight:15
    },
    descriptionHearderText: {
        ...Fonts.body2,
    },
    descriptionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 5,
        marginBottom: 10
    },
    descriptionText: {
        ...Fonts.body3
    },
    price: {
      ...Fonts.body2,
      marginTop: 10,
      color: Colors.deepDarkGray,
      marginRight: 10
    },
    priceCont: {
        flexDirection: "row",
        alignItems: "center"
    },
    amount: {
      ...Fonts.body2,
      marginTop: 10,
      color: Colors.primary,
      fontSize: 17,
    },
    cartsBtn: {
        alignSelf: "center",
        marginTop: 20,
        width: "80%",
        backgroundColor: Colors.primary,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10

    },
    cartsBtnText:{
        textAlign: "center",
        ...Fonts.body2,
        color: Colors.white,
    },
similarHeaderText: {
    ...Fonts.body2,
    marginTop: 20,
    color: Colors.deepDarkGray,
    
}

})
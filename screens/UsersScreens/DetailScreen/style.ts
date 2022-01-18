import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";


export const styles = StyleSheet.create({
    main: {
        paddingTop:Sizes.paddingTop ,
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
    priceMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 8,
        alignItems: 'center'
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
    
},
sellerInfoHeader: {
    ...Fonts.body2,
    color: Colors.deepDarkGray,
    paddingBottom: 10,
    marginTop: 23
},
sellerInfoCont: {
   paddingBottom:10,
  borderTopWidth:.2,
  borderColor: Colors.deepDarkGray,
  paddingTop: 5
 
},
sellerDetailBtn: {
 flexDirection: 'row',
 justifyContent: "space-between",
 alignItems: "center",
 borderBottomWidth: 0.2,
 borderColor: Colors.deepDarkGray,
 paddingBottom: 10
},
sellerFollowerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth:0.2,
    borderColor: Colors.deepDarkGray
},
followerBtn: {
    backgroundColor: Colors.primary,
    padding: 5,
    width: 80,
    alignItems: "center",
    borderRadius: 4
},
followerText: {
    color: Colors.white
}

})
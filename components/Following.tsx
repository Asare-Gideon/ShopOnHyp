import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Rating } from "react-native-elements";
import { useAppDispatch } from "../app/reduxHooks/hooks";
import images from "../constants/Images";
import { Colors, Fonts } from "../constants/Layout";
import { setBottomNav } from "../features/utilitySlice/bottomSlice";
import { followingProp } from "../Types";

const Following = ({storeName,rating,navigation}: followingProp) => {
    const dispatch = useAppDispatch();

    const handleNav = () => {
        navigation.navigate("SellerHome");
        dispatch(setBottomNav(true))        
    }
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.subCont}>
          <Text
            style={{
              backgroundColor: Colors.primary,
              width: 80,
              paddingLeft: 4,
              ...Fonts.body3,
              color: Colors.white,
            }}
          >
            Top seller
          </Text>
          <View style={styles.followheader}>
            <View style={styles.followHeaderDescription}>
              <FontAwesome5 name="store-alt" color={Colors.deepDarkGray} size={15} />
              <Text style={{
                  paddingLeft: 5,
                  ...Fonts.body3,
                  color: Colors.darkgray
              }}>{storeName}</Text>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.btnText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.startCont}>
        <Rating
            type="star"
            readonly
            imageSize={20}
            style={{ paddingVertical: 5}}
          />
          </View>
        </View>
      </View>

      <TouchableOpacity 
      onPress={handleNav} 
       style={{
          flexDirection: "row",
          justifyContent: "space-evenly"
      }}>
          <View style={styles.imageCont}>
              <Image source={images.items[4]} style={styles.img} />
          </View>
          <View style={styles.imageCont}>
              <Image style={styles.img} source={images.items[3]} />
          </View>
          <View style={styles.imageCont}>
              <Image style={styles.img} source={images.items[2]} />
              <View style={{
                  backgroundColor: Colors.warmWhite,
                  position: "absolute",
                  width: 110,
                  height: 85,
                  opacity: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end"
              }}>
                  <AntDesign name="right" size={29} color={Colors.black} />
              </View>
          </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 6,
    marginBottom:20
  },
  subCont: {
    borderBottomWidth: 0.2,
    marginBottom: 8,
  },
  followheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followHeaderDescription: {
    flexDirection: "row",
  },
  followBtn: {
    width: 85,
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    height: 36,
    justifyContent: "center",
  },
  btnText: {
    color: Colors.white,
    ...Fonts.body4,
  },
  startCont: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  imageCont: {
      width: 110,
      height: 85,
  },
  img: {
      width: "100%",
      height: "100%"
  }
});
export default Following;

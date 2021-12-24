import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import images from "../../../constants/Images";
import { initialPageProp } from "../../../Types";
import { styles } from "./style";

const Initial = ({route, navigation}: initialPageProp) => {
  return (
    <View style={styles.main}>
      <ImageBackground source={images.introScreen} style={styles.background}>
        <View style={styles.top}>
          <View style={styles.topContent}>
            <Text style={styles.topHeaderText}>Shop On Hype</Text>
            <Text style={styles.topText}>Every product delvered to you</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btnCont} onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCont} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Initial;

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import images from "../constants/Images";
import { Colors, Sizes } from "../constants/Layout";

const Input = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
        
        }}
      >
        <TextInput
          multiline
          placeholder="Add content...."
          style={{ paddingTop: 15, marginLeft: 10, width: "100%", marginRight: 5 }}
        />
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
        >
          <MaterialCommunityIcons name="send" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import images from "../constants/Images";
import { Colors, Fonts } from "../constants/Layout";
import { itemProp } from "../Types";

const Items = ({ image, text, title, price }: itemProp) => {
    const [textUpdate, setTextUpdate] = useState()
    const [titleUpdate, setTitleUpdate] = useState()
    
  useEffect(() => {
      if(title.length > 15){
          
      }
  },[title,text])

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.white,
        width: 150,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        elevation: 1
      }}
    >
      <View
        style={{
          width: 150,
          height: 150,
        }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 5,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            ...Fonts.body3,
            paddingLeft: 5,
            paddingTop: 2
          }}
        >
          {title}
        </Text>
        <Text style={{
            ...Fonts.body4,
            paddingLeft: 5,
        
        }}>{text}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <Text
          style={{
            ...Fonts.body2,
            fontSize: 16,
            color: Colors.primary,
          }}
        >
          GH₵ {price}
        </Text>
        <TouchableOpacity style={{
            paddingTop: 4
        }}>
          <EvilIcons name="heart" size={28} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Items;

import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useAppDispatch } from "../app/reduxHooks/hooks";
import images from "../constants/Images";
import { Colors, Fonts } from "../constants/Layout";
import { setBottomNav } from "../features/utilitySlice/bottomSlice";
import { itemProp } from "../Types";

const Items = ({ image, text, title, price,like,navigation }: itemProp) => {
  const [textUpdate, setTextUpdate] = useState<string>("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [loved, setLove] = useState<boolean>(false);
  const handleLike = () => {setLove(prev => !prev)}
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (title.length > 15) {
      const newTitle = title.substr(0, 15).concat("...");
      setTitleUpdate(newTitle);
    } else {
      setTitleUpdate(title);
    }
    if (text.length > 41) {
      const newText = text.substr(0, 41).concat("...");
      setTextUpdate(newText);
    } else {
      setTextUpdate(text);
    }
  }, [title, text]);

  const handleNav = () => {
      dispatch(setBottomNav(true))
    navigation.navigate("Detail")
  }

  useEffect(() => {
    navigation.addListener("focus",()=> {
      dispatch(setBottomNav(false))
    })
  },[])
  return (
    <TouchableOpacity
     onPress={handleNav}
      style={{
        backgroundColor: Colors.white,
        width: 150,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 4,
      }}
    >
      <View
        style={{
          width: 150,
          height: 130,
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
            paddingTop: 2,
            color: Colors.darkgray,
          }}
        >
          {titleUpdate}
        </Text>
        <Text
          style={{
            ...Fonts.body4,
            paddingLeft: 5,
            color: Colors.deepDarkGray,
            lineHeight: 16,
            paddingTop: 5,
            fontSize: 14,
          }}
        >
          {textUpdate}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 4
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
        {like &&
        <View>
               {loved ? (
          <TouchableOpacity
          onPress={handleLike}
            style={{
              paddingTop: 4,
              paddingRight: 6
            }}
          >
            <AntDesign name="heart" color="red" size={24} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={handleLike}
            style={{
              paddingTop: 4,
              paddingRight: 6
            }}
          >
            <AntDesign name="hearto" color={Colors.darkgray} size={24} />
          </TouchableOpacity>
        )}
        </View>
}
      </View>
    </TouchableOpacity>
  );
};

export default Items;

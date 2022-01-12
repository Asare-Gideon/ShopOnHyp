import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import { offerComponentProp } from "../Types";

const Offers = ({image, productName,storeName,time}: offerComponentProp) => {
   const [title, setTitle] = React.useState<string | undefined>() 

   React.useEffect(() => {
    if(storeName){
       const tit = storeName.substring(0,1);
       setTitle(tit)
    }

   },[])
  return (
    <View
      style={{
        width: Sizes.width - 30,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10,
        backgroundColor: Colors.white,
        alignSelf: "center"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            containerStyle={{ backgroundColor: Colors.darkgray }}
            title={title}
            size={60}
            source={image}
          />
          <View style={{
              marginLeft: 6
          }}>
            <Text
              style={{
                ...Fonts.body4,
                color: Colors.deepDarkGray,
              }}
            >
              {storeName}
            </Text>
            <Text
              style={{
                ...Fonts.body3,
                color: Colors.darkgray,
              }}
            >
                {productName}
            </Text>
          </View>
        </View>
        <Text style={{
            ...Fonts.body3,
            color: Colors.deepDarkGray,
        }}> {time} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
        buttonStyle={{
            backgroundColor: "#ed554d",
            width: "80%"
        }}
        title={"Reject"}
         />

        <Button
          buttonStyle={{
            backgroundColor: Colors.primary,
            width: "80%",
            alignSelf: "flex-end"
        }}
         title={"Accept"} 
         />
      </View>
    </View>
  );
};

export default Offers;

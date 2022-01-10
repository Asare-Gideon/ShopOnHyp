import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Rating } from "react-native-ratings";
import Header from "../../../components/Header";
import { Colors } from "../../../constants/Layout";
import { riderHomeProp } from "../../../Types";
import { styles } from "./Styles";

const Detail = ({ navigation }: riderHomeProp) => {
  return (
    <View style={styles.main}>
      <Header title="Details" navigation={navigation} />
      <ScrollView style={styles.contentContainer}>
        <View style={styles.profileCont}>
          <Avatar
            rounded
            containerStyle={{ backgroundColor: Colors.darkgray }}
            size={140}
            title="M"
          ></Avatar>
          <Button
            title={"Change Profile"}
            containerStyle={{
              width: 150,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>

        <View style={styles.ratingCont}>
            <Text style={styles.text}>Majesty</Text>
            <View>
                <Text>Rating</Text>
          <Rating
            type="star"
            readonly
            imageSize={24}
            style={{ paddingVertical: 5 }}
            
          />
 
            </View>
       </View>
           <Button
            title={"Update Settings"}
            containerStyle={{
              width: 150,
              marginHorizontal: 50,
              marginVertical: 10,
              alignSelf: "center",
              marginTop:100
            }}
          />       
      </ScrollView>
    </View>
  );
};

export default Detail;

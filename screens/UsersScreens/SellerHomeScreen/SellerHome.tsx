import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Items from "../../../components/Items";
import SearchHeader from "../../../components/SearchHeader";
import { itemsData } from "../../../constants/Data";
import { Colors } from "../../../constants/Layout";
import { homeStackProp } from "../../../Types";
import { styles } from "./style";

const SellerHome = ({ navigation }: homeStackProp) => {
  const renderSellersItem = ({ item }: any) => (
    <Items
      navigation={navigation}
      price={item.price}
      text={item.text}
      title={item.title}
      image={item.image}
    />
  );
  return (
    <View style={styles.main}>
        {/*SEARCH BAR */}
      <SearchHeader navigation={navigation} />
     <ScrollView>
        {/* SELLER'S DETAIL*/}
      <View style={styles.sellerDetail}>
        <Text style={styles.headerText}>Rock Store</Text>
        <View style={styles.sellerFollowerCont}>
          <View>
            <Text>94% Seller Score</Text>
            <Text>400 Followers</Text>
          </View>
          <TouchableOpacity style={styles.followerBtn}>
            <Text style={styles.followerText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.starCont}>
          <EvilIcons name="star" size={23} color={Colors.secondary} />
          <EvilIcons name="star" size={23} color={Colors.secondary} />
          <EvilIcons name="star" size={23} color={Colors.secondary} />
          <EvilIcons name="star" size={23} />
          <EvilIcons name="star" size={23} />
        </View>
      </View>
 
         {/** SELLER'S ITEMS */}      
       <View style={styles.itemCont}>
         <Text style={styles.itemHeader}>Products</Text>
         <FlatList
           data={itemsData}
           renderItem={renderSellersItem}
           numColumns={2}
           showsHorizontalScrollIndicator={false}
         />
       </View>
   </ScrollView>
    </View>
  );
};

export default SellerHome;

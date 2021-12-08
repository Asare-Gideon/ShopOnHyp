import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import Item from "../../components/Items";
import { itemsData } from "../../constants/Data";

const WishList = () => {
  const renderMostViewedProducts = ({ item }: any) => (
    <Item
      image={item.image}
      price={item.price}
      text={item.text}
      title={item.title}
      like={false}
    />
  );
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Loved Products</Text>
        <TouchableOpacity style={styles.bellCont}>
          <Feather name="bell" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewedProducts}>
        
        {/*LOVE PRODUCTS */}
        <FlatList
          renderItem={renderMostViewedProducts}
          data={itemsData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingBottom: 50}} 
        />
      </View>
    </View>
  );
};

export default WishList;

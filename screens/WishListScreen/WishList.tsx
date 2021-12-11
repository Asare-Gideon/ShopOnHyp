import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import Item from "../../components/Items";
import { itemsData } from "../../constants/Data";
import { homeStackProp } from "../../Types";
import { useAppDispatch } from "../../app/reduxHooks/hooks";
import { setBottomNav } from "../../features/utilitySlice/bottomSlice";

const WishList = ({navigation}: homeStackProp) => {
  const dispatch = useAppDispatch()

  const renderMostViewedProducts = ({ item }: any) => (
    <Item
      image={item.image}
      price={item.price}
      text={item.text}
      title={item.title}
      like={false}
      navigation={navigation}
    />
  );
useEffect(() => {
    navigation.addListener("focus",()=> {
      dispatch(setBottomNav(false))
    })
  },[])


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

import React from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import CartsItem from "../../components/CartsItem";
import { itemsData } from "../../constants/Data";
import { styles } from "./styles";

const Carts = () => {

  const renderCartsItem = ({ item }: any) => (
    <CartsItem
      title={item.title}
      image={item.image}
      text={item.text}
      price={item.price}
    />
  );
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping Carts</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
          <FlatList 
          data={itemsData}
          renderItem={renderCartsItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}
          />
          <View style={styles.bottomContainer}>
           <View>
               <Text style={styles.total}>Total</Text>
               <Text style={styles.amount}>GH₵ 1030</Text>
           </View>
           <TouchableOpacity style={styles.proceedBtn}>
               <Text style={styles.proceedText}>Proceed</Text>
           </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
};

export default Carts;

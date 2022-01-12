import React from "react";
import { View, Text } from "react-native";
import Offers from "../../../components/Offers";
import images from "../../../constants/Images";
import { styles } from "./styles";

const Offer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Offers</Text>
      </View>

      <View style={styles.contentCot}>
        <Offers
          productName="Product name"
          storeName="Store name"
          time={"5: 40pm"}
          image={images.introScreen}
        />
        <Offers
          productName="KFC Foods"
          storeName="KFC"
          time={"5:30pm"}
          image={images.sliders[1]}
        />
      </View>
    </View>
  );
};

export default Offer;

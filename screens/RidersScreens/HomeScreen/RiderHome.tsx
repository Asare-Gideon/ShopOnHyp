import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import images from "../../../constants/Images";
import { Colors, Sizes } from "../../../constants/Layout";
import React, { Component, useEffect } from "react";
import { chartData } from "../../../constants/Data";
import { LineChart } from "react-native-chart-kit";
import Card from "../../../components/Card";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from "./styles";
import { riderHomeProp } from "../../../Types";
import { useAppDispatch } from "../../../app/reduxHooks/hooks";
import { setBottomNav } from "../../../features/utilitySlice/bottomSlice";


const RiderHome = ({navigation}:riderHomeProp) => {
    const handleDetailNav = () => {
        navigation.navigate("RidersDetail")
      dispatch(setBottomNav(true));
    }
    const dispatch = useAppDispatch();
    
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(setBottomNav(false));
    });
  }, []);
    return (
       <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hi Majesty,</Text>
        <TouchableOpacity onPress={handleDetailNav}>
          <Avatar
            rounded
            containerStyle={{ backgroundColor: Colors.darkgray }}
            size={55}
            title="M"
          >
            <Avatar.Accessory size={24} />
          </Avatar>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <LineChart
            data={chartData}
            width={Sizes.width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: Colors.warmWhite,
              backgroundGradientFrom: Colors.warmWhite,
              backgroundGradientTo: Colors.warmWhite,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(40, 174, 237, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(85, 85, 85, ${opacity})`,
              style: {
                backgroundColor: Colors.warmWhite,
                paddingLeft: 5,
                paddingRight: 5,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: Colors.primary,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.analyticeContainer}>
          <Text style={styles.analyticeHeader}>Analytics Overviews</Text>
          <View style={styles.cardsContainer}>
          <Card title="Earning" text="$340.00" Icon={AntDesign} iconName="pay-circle-o1" />
          <Card title="Product Delivered" text="607" Icon={MaterialCommunityIcons} iconName="credit-card-check-outline" color="#953ff3" lightColor="#e5dcef" />
          <Card title="Offers Rejected" text="60" Icon={AntDesign} iconName="gift" color="#953ff3" lightColor="#e5dcef" />
          <Card title="Failed" text="0" Icon={AntDesign} iconName="dislike2" color="#953ff3" lightColor="#e5dcef" />
          </View>

        </View>
      </ScrollView>
    </View>
    )
}

export default RiderHome

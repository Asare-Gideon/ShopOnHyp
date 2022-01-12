import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../app/reduxHooks/hooks";
import { Colors } from "../constants/Layout";
import Notification from "../screens/RidersScreens/NotificationScreen/Notification";
import Offer from "../screens/RidersScreens/OffersScreen/Offer";
import Post from "../screens/VendorsScreens/PostScreen/Post";
import { RiderTabParams, VendorHomeTabParams } from "../Types";
import AccountNav from "./AccountNav";
import RidersHomeNav from "./RidersHomeNav";
import VendorChartNav from "./VendorChartNav";

const Tab = createBottomTabNavigator<RiderTabParams>();
const RidersNavigation = () => {
  const nav = useAppSelector((state) => state.bottomNav.value);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: "white",
          padding: 0,
          height: nav ? 0 : 45,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="RiderMain"
        component={RidersHomeNav}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconCont}>
              <View>
                <Ionicons
                  name="analytics-outline"
                  size={24}
                  color={focused ? Colors.primary : Colors.black}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offer}
        options={{
          title: "Offers",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconCont]}>
                <Text style={styles.badge}>2</Text>
              <View>
                <AntDesign
                  name="carryout"
                  size={24}
                  color={focused ? Colors.primary : Colors.black}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconCont}>
              <Text style={[styles.badge, {top :nav? 100: -10 }]}>3</Text>
              <View>
                <AntDesign
                  name="bells"
                  size={24}
                  color={focused ? Colors.primary : Colors.black}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNav}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.badge, {top :nav? 100: -10 }]}>
              <View>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={30}
                  color={focused ? Colors.primary : Colors.black}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconCont: {
    display: "flex",
  },
  badge: {
    position: "absolute",
    top: -10,
    backgroundColor: "#ed554d",
    width: 19,
    height: 19,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 30,
    right: -13,
  },
});

export default RidersNavigation;

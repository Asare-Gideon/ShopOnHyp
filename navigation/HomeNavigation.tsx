import { AntDesign, Entypo, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../app/reduxHooks/hooks';
import { Colors } from '../constants/Layout';
import Carts from '../screens/CartsScreen/Carts';
import Home from '../screens/HomeScreen/Home';
import Order from '../screens/OrdersScreen/Order';
import profile from '../screens/ProfileScreen/profile';
import WishList from '../screens/WishListScreen/WishList';
import { HomeTabParams } from '../Types';
import HomeStackNavigation from './HomeStackNavigation';
import WishListStackNav from './WishListStackNav';

const Tab = createBottomTabNavigator<HomeTabParams>();
const HomeNavigation = () => {
    const nav = useAppSelector((state) => state.bottomNav.value)
    
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown : false,
            title : "",
            tabBarStyle : {
                elevation: 0,
                borderTopWidth: 0,
                backgroundColor: "white",
                padding: 0,
                height: nav ? 0 : 45
                
            },
          tabBarHideOnKeyboard :  true,
     
          
        }}
        >
            <Tab.Screen name="HomeMain" component={HomeStackNavigation}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <Feather name="home" size={20} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="WishList" component={WishListStackNav}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={[styles.iconCont]}>
                        <View>
                            <EvilIcons name="heart" size={30} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Carts" component={Carts}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        backgroundColor: Colors.primary,
                        padding: nav? 0 :  13,
                        elevation: 1,
                        borderRadius: 30,
                        position: nav ?  "relative": "absolute",
                        bottom:nav? 0 : 3,
                        borderWidth: 5,
                        borderColor: "#ddd",
                        
                    }} >
                        <View>
                            <Ionicons name="md-cart-outline" size={25} color={focused ? Colors.warmWhite : Colors.white} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Orders" component={Order}
               options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <Feather name="credit-card" size={23} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Profile" component={profile}
             options={{
         
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <AntDesign name="info" size={30} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            
        </Tab.Navigator> 
     )
}

const styles = StyleSheet.create({
    iconCont: {
        display: 'flex'
    },
    
})
export default HomeNavigation

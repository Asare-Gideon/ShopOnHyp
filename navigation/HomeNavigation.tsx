import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../app/reduxHooks/hooks';
import { Colors } from '../constants/Layout';
import Account from '../screens/AccountScreen/Account';
import Carts from '../screens/CartsScreen/Carts';
import Feeds from '../screens/FeedScreen/Feeds';
import Home from '../screens/HomeScreen/Home';
import Order from '../screens/OrdersScreen/Order';
import profile from '../screens/ProfileScreen/profile';
import WishList from '../screens/WishListScreen/WishList';
import { HomeTabParams } from '../Types';
import CartStackNav from './CartStackNav';
import FeedStackNav from './FeedStackNav';
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
                title: "Home",
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
                title : "Wishlist",
                tabBarIcon: ({focused}) => (
                    <View style={[styles.iconCont]}>
                        <View>
                            <EvilIcons name="heart" size={30} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Carts" component={CartStackNav}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        backgroundColor: Colors.primary,
                        elevation: 1,
                        borderRadius: 30,
                        position: nav ?  "relative": "absolute",
                        bottom:nav? 0 : 3,
                        borderWidth: 5,
                        borderColor: "#ddd",
                        
                    }} >
                        <View>
                            <Ionicons style={{padding: 10}} name="md-cart-outline" size={28} color={focused ? Colors.warmWhite : Colors.white} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Feeds" component={FeedStackNav}
               options={{
                   title : "Feeds",
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <SimpleLineIcons name="feed" size={20} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Account" component={Account}
             options={{
               title: "Account", 
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <MaterialCommunityIcons name="account-outline" size={30} color={focused ? Colors.primary : Colors.black} />
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

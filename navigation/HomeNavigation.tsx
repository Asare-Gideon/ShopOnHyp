import { AntDesign, Entypo, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../constants/Layout';
import Carts from '../screens/CartsScreen/Carts';
import Home from '../screens/HomeScreen/Home';
import Order from '../screens/OrdersScreen/Order';
import profile from '../screens/ProfileScreen/profile';
import WishList from '../screens/WishListScreen/WishList';
import { HomeTabParams } from '../Types';

const Tab = createBottomTabNavigator<HomeTabParams>();
const HomeNavigation = () => {
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
            },
          tabBarHideOnKeyboard :  true  
          
        }}
        >
            <Tab.Screen name="Home" component={Home}
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
            <Tab.Screen name="WishList" component={WishList}
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
                        padding: 13,
                        elevation: 1,
                        borderRadius: 30,
                        position: "absolute",
                        bottom: 3,
                        borderWidth: 5,
                        borderColor: "#ddd",
                        zIndex: 66
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

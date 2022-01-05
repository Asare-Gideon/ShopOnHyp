import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../app/reduxHooks/hooks';
import { Colors } from '../constants/Layout';
import Chat from '../screens/VendorsScreens/ChatScreen/Chat';
import Home from '../screens/VendorsScreens/HomeScreen/Home';
import Post from '../screens/VendorsScreens/PostScreen/Post';
import { VendorHomeTabParams } from '../Types';
import AccountNav from './AccountNav';
import FeedStackNav from './FeedStackNav';
import VendorChartNav from './VendorChartNav';
import WishListStackNav from './WishListStackNav';

const Tab = createBottomTabNavigator<VendorHomeTabParams>();
const VendorNavigation = () => {
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
            <Tab.Screen name="VendorsHome" component={Home}
            options={{
                title: "Home",
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <Ionicons name="analytics-outline" size={24} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Post" component={Post}
            options={{
                title : "Post",
                tabBarIcon: ({focused}) => (
                    <View style={[styles.iconCont]}>
                        <View>
                            <MaterialIcons name="post-add" size={30} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
           <Tab.Screen name="Chat" component={VendorChartNav}
               options={{
                   title : "Chat",
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconCont}>
                        <View>
                            <Ionicons name="chatbox-ellipses-outline" size={24} color={focused ? Colors.primary : Colors.black} />
                        </View>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Account" component={AccountNav}
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

export default VendorNavigation

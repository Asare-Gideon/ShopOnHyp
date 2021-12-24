import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Chat from '../screens/UsersScreens/ChatScreen/Chat';
import Detail from '../screens/UsersScreens/DetailScreen/Detail';
import Home from '../screens/UsersScreens/HomeScreen/Home';
import Notification from '../screens/UsersScreens/NotificationScreen/Notification';
import SellerHome from '../screens/UsersScreens/SellerHomeScreen/SellerHome';
import { homeStackParams } from '../Types'



const Stack = createNativeStackNavigator<homeStackParams>();
const HomeStackNavigation = () => {
    return (
       <Stack.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false
       }} >
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Detail" component={Detail} />
           <Stack.Screen name="Notification" component={Notification} />
           <Stack.Screen name="Chat" component={Chat} />
           <Stack.Screen name="SellerHome" component={SellerHome} />
       </Stack.Navigator> 
    )
}

export default HomeStackNavigation

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Carts from '../screens/CartsScreen/Carts';
import Chat from '../screens/ChatScreen/Chat';
import Detail from '../screens/DetailScreen/Detail';
import Feeds from '../screens/FeedScreen/Feeds';
import Notification from '../screens/NotificationScreen/Notification';
import SellerHome from '../screens/SellerHomeScreen/SellerHome';
import { homeStackParams } from '../Types'

const Stack = createNativeStackNavigator<homeStackParams>();
const FeedStackNav = () => {
    return (
       <Stack.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false
       }} >
           <Stack.Screen name="Home" component={Feeds} />
           <Stack.Screen name="Detail" component={Detail} />
           <Stack.Screen name="Notification" component={Notification} />
           <Stack.Screen name="Chat" component={Chat} />
           <Stack.Screen name="SellerHome" component={SellerHome} />
       </Stack.Navigator> 
    )
}

export default FeedStackNav

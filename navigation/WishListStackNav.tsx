import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Detail from '../screens/DetailScreen/Detail';
import Notification from '../screens/NotificationScreen/Notification';
import WishList from '../screens/WishListScreen/WishList';
import { homeStackParams } from '../Types'


const Stack = createNativeStackNavigator<homeStackParams>();
const WishListStackNav = () => {
    return (
       <Stack.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false
       }} >
           <Stack.Screen name="Home" component={WishList} />
           <Stack.Screen name="Detail" component={Detail} />
           <Stack.Screen name="Notification" component={Notification} />
       </Stack.Navigator> 
    )
}

export default WishListStackNav; 
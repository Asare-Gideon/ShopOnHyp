import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Detail from '../screens/DetailScreen/Detail';
import Home from '../screens/HomeScreen/Home';
import { homeStackParams } from '../Types'


const Stack = createNativeStackNavigator<homeStackParams>();
const HomeStackNavigation = () => {
    return (
       <Stack.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false
       }} >
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Detail" component={Detail} />
       </Stack.Navigator> 
    )
}

export default HomeStackNavigation

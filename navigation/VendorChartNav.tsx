import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Chat from '../screens/VendorsScreens/ChatScreen/Chat'
import { vendorChatNavParams } from '../Types'

const VendorChartNav = () => {

const Stack = createNativeStackNavigator<vendorChatNavParams>();
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
      }} 
      initialRouteName='ChatHome' 
      >
          <Stack.Screen name="ChatHome" component={Chat} />
      </Stack.Navigator>
    )
}

export default VendorChartNav

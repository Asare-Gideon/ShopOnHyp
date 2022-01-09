import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Chat from '../screens/UsersScreens/ChatScreen/Chat'
import Active from '../screens/VendorsScreens/ActiveChatScreen/Active'
import ChatMessage from '../screens/VendorsScreens/MessageScreen/ChatMessage'
import { vendorChatNavParams } from '../Types'

const VendorChartNav = () => {

const Stack = createNativeStackNavigator<vendorChatNavParams>();
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
      }} 
      initialRouteName='ChatHome' 
      >
          <Stack.Screen name="ChatHome" component={ChatMessage} />
          <Stack.Screen  name="ActiveChat" component={Active} />
          <Stack.Screen  name="ChatScreen" component={Chat} />
          
      </Stack.Navigator>
    )
}

export default VendorChartNav

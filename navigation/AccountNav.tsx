import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../screens/UsersScreens/AccountScreen/Account';
import Help from '../screens/UsersScreens/HelpScreen/Help';
import Order from '../screens/UsersScreens/OrdersScreen/Orders';
import Password from '../screens/UsersScreens/PasswordScreen/Password';
import Review from '../screens/UsersScreens/ReviewsScreen/Review';
import { AccountParams } from '../Types'

const Stack = createNativeStackNavigator<AccountParams>();

const AccountNav = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Account'>
       <Stack.Screen name='Account' component={Account} /> 
       <Stack.Screen name='Orders' component={Order} />
       <Stack.Screen name='Help' component={Help} />
       <Stack.Screen name='ChangePassword' component={Password} />
       <Stack.Screen name='PendingReview' component={Review} />
      </Stack.Navigator>
    )
}

export default AccountNav

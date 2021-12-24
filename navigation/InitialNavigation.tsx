import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Initial from '../screens/UsersScreens/InitialScreen/Initial';
import Login from '../screens/UsersScreens/LoginScreen/Login';
import Signup from '../screens/UsersScreens/SignupScreen/Signup';
import { MainStackParams } from '../Types';

const Stack = createNativeStackNavigator<MainStackParams>();

const InitialNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Initial" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Initial" component={Initial} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default InitialNavigation

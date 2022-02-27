import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { postStackNavParams } from '../Types';
import InitialPost from '../screens/VendorsScreens/InitialPostScreen/InitialPost';
import Post from '../screens/VendorsScreens/PostScreen/Post';
import Notification from '../screens/VendorsScreens/NotificationScreen/Notification';

const Stack = createNativeStackNavigator<postStackNavParams>();

const PostStackNav = () => {
	return (
		<Stack.Navigator
			initialRouteName="InitialPostScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="InitialPostScreen" component={InitialPost} />
			<Stack.Screen name="Detail" component={Post} />
			<Stack.Screen name="Notification" component={Notification} />
		</Stack.Navigator>
	);
};

export default PostStackNav;

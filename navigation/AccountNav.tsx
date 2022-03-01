import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountDetails from '../screens/UsersScreens/AccountDetailScreen/AccountDetails';
import Account from '../screens/UsersScreens/AccountScreen/Account';
import Help from '../screens/UsersScreens/HelpScreen/Help';
import Inbox from '../screens/UsersScreens/InboxScreen/Inbox';
import MakeReview from '../screens/UsersScreens/MakeReviewScreen/MakeReview';
import Order from '../screens/UsersScreens/OrdersScreen/Orders';
import Password from '../screens/UsersScreens/PasswordScreen/Password';
import ReviewDetail from '../screens/UsersScreens/ReviewDetailScreen/ReviewDetail';
import Review from '../screens/UsersScreens/ReviewsScreen/Review';
import { AccountParams } from '../Types';

const Stack = createNativeStackNavigator<AccountParams>();

const AccountNav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Account">
			<Stack.Screen name="Account" component={Account} />
			<Stack.Screen name="Orders" component={Order} />
			<Stack.Screen name="Help" component={Help} />
			<Stack.Screen name="ChangePassword" component={Password} />
			<Stack.Screen name="PendingReview" component={Review} />
			<Stack.Screen name="Inbox" component={Inbox} />
			<Stack.Screen name="Details" component={AccountDetails} />
			<Stack.Screen name="ReviewDetails" component={ReviewDetail} />
			<Stack.Screen name="Review" component={MakeReview} />
		</Stack.Navigator>
	);
};

export default AccountNav;

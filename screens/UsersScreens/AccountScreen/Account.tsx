import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAppDispatch } from '../../../app/reduxHooks/hooks';
import AccountComponent from '../../../components/AccountComponent';
import { Colors } from '../../../constants/Layout';
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice';
import { accouontProp } from '../../../Types';
import { styles } from './style';

const Account = ({ navigation }: accouontProp) => {
	const dispatch = useAppDispatch();
	// MY ACCOUNT DATA
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(false));
		});
	}, []);

	const myAccount = [
		{
			Icon: AntDesign,
			title: 'Orders',
			IconName: 'layout',
			route: 'Orders'
		},
		{
			Icon: FontAwesome,
			title: 'Inbox',
			IconName: 'envelope-o',
			route: 'Inbox'
		},
		{
			Icon: MaterialIcons,
			title: 'Reviews',
			IconName: 'pending-actions',
			route: 'PendingReview'
		}
	];
	//SETTINGS DATA
	const settings = [
		{
			title: 'Details',
			route: 'Details'
		},
		{
			title: 'Help',
			route: 'Help'
		},
		{
			title: 'Change password',
			route: 'ChangePassword'
		}
	];
	return (
		<View style={styles.main}>
			<View style={styles.headerCont}>
				<View style={styles.headerContent}>
					<Text style={styles.headerText}>Account</Text>
					<TouchableOpacity style={styles.logBtn}>
						<MaterialIcons name="logout" color={Colors.white} size={23} />
						<Text style={{ color: 'white' }}>logout</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.welcomeCont}>
					<Text style={styles.welcomeText}>Welcome Asare!</Text>
					<Text style={styles.welcomeEmail}>asaregideon@gamil.com</Text>
				</View>
			</View>
			<ScrollView style={styles.mainContent}>
				{/*MY ACCOUNT */}
				<Text style={styles.contentHeaderText}>My Account</Text>
				<View style={styles.content}>
					{myAccount.map((item, index) => (
						<AccountComponent
							key={index}
							Icon={item.Icon}
							IconName={item.IconName}
							title={item.title}
							navigation={navigation}
							navigateTo={item.route}
						/>
					))}
				</View>
				{/*ACCOUNT SETTINGS */}
				<Text style={styles.contentHeaderText}>Settings</Text>
				<View style={styles.content}>
					{settings.map((item, index) => (
						<AccountComponent
							key={index}
							title={item.title}
							navigation={navigation}
							navigateTo={item.route}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default Account;

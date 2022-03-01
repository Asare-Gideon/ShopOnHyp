import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeLoader from './components/HomeLoader';
import Shimmering from './components/Shimmering';
import useCachedResources from './hooks/useCachedResources';
import AdminNavigation from './navigation/AdminNavigation';
import HomeNavigation from './navigation/HomeNavigation';
import InitialNavigation from './navigation/InitialNavigation';
import RidersNavigation from './navigation/RidersNavigation';
import VendorNavigation from './navigation/VendorNavigation';

export default function Main() {
	const isLoadingComplete = useCachedResources();
	const [ isLogIn, setIsLogIn ] = React.useState<boolean>(true);
	const [ isUser, setIsUser ] = React.useState('user');

	if (!isLoadingComplete) {
		return null;
	} else {
		if (isLogIn) {
			if (isUser === 'vendor') {
				return (
					<NavigationContainer>
						<VendorNavigation />
					</NavigationContainer>
				);
			} else if (isUser === 'rider') {
				return (
					<NavigationContainer>
						<RidersNavigation />
					</NavigationContainer>
				);
			} else if (isUser === 'user') {
				return (
					<NavigationContainer>
						<HomeNavigation />
					</NavigationContainer>
				);
			} else if (isUser === 'admin') {
				return (
					<NavigationContainer>
						<AdminNavigation />
					</NavigationContainer>
				);
			}
		} else {
			return (
				<NavigationContainer>
					<InitialNavigation />
				</NavigationContainer>
			);
		}
	}
}

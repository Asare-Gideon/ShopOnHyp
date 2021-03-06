import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import Item from '../../../components/Items';
import { itemsData } from '../../../constants/Data';
import { homeStackProp } from '../../../Types';
import { useAppDispatch } from '../../../app/reduxHooks/hooks';
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice';
import SearchHeader from '../../../components/SearchHeader';
import WishListLoader from '../../../components/WishListLoader';

const WishList = ({ navigation }: homeStackProp) => {
	const dispatch = useAppDispatch();
	const [ isLoaded, setIsLoaded ] = useState<boolean>(false);

	const renderMostViewedProducts = ({ item }: any) => (
		<Item
			image={item.image}
			price={item.price}
			text={item.text}
			title={item.title}
			like={false}
			navigation={navigation}
		/>
	);
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(false));
		});
	}, []);

	return (
		<View style={[ styles.main, { padding: isLoaded ? 10 : 0 } ]}>
			{/*SEACRH BAR */}
			<View style={styles.header}>
				<SearchHeader navigation={navigation} />
			</View>
			{isLoaded ? (
				<ScrollView style={styles.viewedProducts}>
					<Text style={styles.headerText}>Loved Products</Text>
					{/*LOVE PRODUCTS */}
					<FlatList
						renderItem={renderMostViewedProducts}
						data={itemsData}
						keyExtractor={(item) => item.id}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 50 }}
					/>
				</ScrollView>
			) : (
				<View style={styles.loader}>
					<WishListLoader />
				</View>
			)}
		</View>
	);
};

export default WishList;

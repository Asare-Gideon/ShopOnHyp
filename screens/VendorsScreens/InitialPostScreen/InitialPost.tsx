import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import Item from '../../../components/Items';
import { itemsData } from '../../../constants/Data';
import { homeStackProp, PostStackProps } from '../../../Types';
import { useAppDispatch } from '../../../app/reduxHooks/hooks';
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice';
import SearchHeader from '../../../components/SearchHeader';
import WishListLoader from '../../../components/WishListLoader';
import VendorProduct from '../../../components/VendorProducts';
import VendorSearchHeader from '../../../components/VendorSearchHeader';
import { Button, FAB } from 'react-native-elements';
import { Colors, Fonts, Sizes } from '../../../constants/Layout';
import images from '../../../constants/Images';

const InitialPost = ({ navigation }: PostStackProps) => {
	const dispatch = useAppDispatch();
	const [ isLoaded, setIsLoaded ] = useState<boolean>(true);
	const [ isProduct, setIsProduct ] = useState<boolean>(false);
	const renderMostViewedProducts = ({ item }: any) => (
		<VendorProduct
			image={item.image}
			price={item.price}
			text={item.text}
			title={item.title}
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
				<VendorSearchHeader navigation={navigation} />
			</View>
			{isLoaded ? (
				<ScrollView style={styles.viewedProducts}>
					{isProduct ? (
						<View>
							<Text style={styles.headerText}>All Products</Text>
							{/*LOVE PRODUCTS */}
							<FlatList
								renderItem={renderMostViewedProducts}
								data={itemsData}
								keyExtractor={(item) => item.id}
								numColumns={2}
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{ paddingBottom: 50 }}
							/>
						</View>
					) : (
						<View
							style={{
								width: '90%',
								height: '100%',
								flex: 1,
								paddingLeft: 0,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<View style={{}}>
								<Image
									source={images.addImage}
									style={{
										height: 200,
										width: 150
									}}
								/>
								<Text
									style={{
										...Fonts.body2,
										color: Colors.deepDarkGray,
										paddingLeft: 10
									}}
								>
									No Product added
								</Text>
							</View>
						</View>
					)}
				</ScrollView>
			) : (
				<View style={styles.loader}>
					<WishListLoader />
				</View>
			)}
			<View
				style={{
					position: 'absolute',
					bottom: 10,
					right: 4,
					height: 70,
					width: 70,
					padding: 10,
					alignItems: 'center'
				}}
			>
				<FAB
					visible={true}
					icon={{ name: 'add', color: 'white' }}
					color={Colors.primary}
					placement="right"
					containerStyle={{
						elevation: 10,
						borderRadius: 40,
						alignSelf: 'center'
					}}
					buttonStyle={{ borderRadius: 30 }}
					onPress={() => navigation.navigate('Detail')}
				/>
			</View>
		</View>
	);
};

export default InitialPost;
